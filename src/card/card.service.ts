import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';
import { GetCardsDTO } from './dto/get-cards.dto';
import { CARD_REPOSITORY } from '../constants';

@Injectable()
export class CardService {
    private logger = new Logger('CardService');

    constructor(
        @Inject(CARD_REPOSITORY)
        private readonly cardRepository: Repository<Card>,
    ) {}

    create(createCardDto: CreateCardDto) {
        this.logger.log('Input received!', { createCardDto });
        const newCard = this.cardRepository.create(createCardDto);
        this.logger.log('created!', { newCard });
        return this.cardRepository.save(newCard);
    }

    async findAll(getCardsDTO: GetCardsDTO) {
        this.logger.log('retrieving all cards', { getCardsDTO });
        const cards = getCardsDTO.titles.map(async (title) => {
            this.logger.log(title);
            const found = await this.cardRepository.find({
                where: {
                    title,
                },
            });
            this.logger.log(found);
            return found;
        });

        this.logger.log(cards);

        return cards;
    }

    findOne(title: string) {
        this.logger.log('retrieving card', { title });
        return this.cardRepository.findOneBy({ title });
    }

    update(title: string, updateCardDto: UpdateCardDto) {
        this.logger.log('updating card', { title });
        return this.cardRepository.update(title, updateCardDto);
    }

    delete(title: string) {
        this.logger.log('deleting card', { title });
        return this.cardRepository.delete(title);
    }
}
