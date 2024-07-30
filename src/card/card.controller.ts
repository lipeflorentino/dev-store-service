import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { GetCardsDTO } from './dto/get-cards.dto';

@Controller('card')
export class CardController {
    constructor(private readonly cardService: CardService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCardDto: CreateCardDto) {
        return this.cardService.create(createCardDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(@Body() getCardsDTO: GetCardsDTO) {
        return this.cardService.findAll(getCardsDTO);
    }

    @Get(':title')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('title') title: string) {
        return this.cardService.findOne(title);
    }

    @Patch(':title')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('title') title: string,
        @Body() updateCardDto: UpdateCardDto,
    ) {
        return this.cardService.update(title, updateCardDto);
    }

    @Delete(':title')
    @HttpCode(HttpStatus.OK)
    delete(@Param('title') title: string) {
        return this.cardService.delete(title);
    }
}
