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
    Logger,
    ServiceUnavailableException,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { GetCardsDTO } from './dto/get-cards.dto';

@Controller('card')
export class CardController {
    private logger = new Logger('CardController');
    constructor(private readonly cardService: CardService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createCardDto: CreateCardDto) {
        try {
            this.logger.log('Input Received', { createCardDto });
            const response = await this.cardService.create(createCardDto);

            return {
                statusCode: HttpStatus.CREATED,
                message: 'Card created successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error({ error });
            throw new ServiceUnavailableException(error.response, error.status);
        }
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Body() getCardsDTO: GetCardsDTO) {
        try {
            this.logger.log('Input Received', { getCardsDTO });
            const response = await this.cardService.findAll(getCardsDTO);
            return {
                statusCode: HttpStatus.ACCEPTED,
                message: 'retrieved successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error({ error });
            throw new ServiceUnavailableException(error.response, error.status);
        }
    }

    @Get(':title')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('title') title: string) {
        try {
            this.logger.log('Input Received', { title });
            const response = await this.cardService.findOne(title);
            return {
                statusCode: HttpStatus.ACCEPTED,
                message: 'retrieved successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error({ error });
            throw new ServiceUnavailableException(error.response, error.status);
        }
    }

    @Patch(':title')
    @HttpCode(HttpStatus.OK)
    async update(
        @Param('title') title: string,
        @Body() updateCardDto: UpdateCardDto,
    ) {
        try {
            this.logger.log('Input Received', { title, updateCardDto });
            const response = await this.cardService.update(
                title,
                updateCardDto,
            );
            return {
                statusCode: HttpStatus.OK,
                message: 'updated successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error({ error });
            throw new ServiceUnavailableException(error.response, error.status);
        }
    }

    @Delete(':title')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('title') title: string) {
        try {
            this.logger.log('Input Received', { title });
            const response = await this.cardService.delete(title);
            return {
                statusCode: HttpStatus.OK,
                message: 'deleted successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error({ error });
            throw new ServiceUnavailableException(error.response, error.status);
        }
    }
}
