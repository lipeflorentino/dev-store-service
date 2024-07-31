import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Logger,
    HttpStatus,
    HttpCode,
    ServiceUnavailableException,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
    private logger = new Logger('OrderController');

    constructor(private readonly orderService: OrderService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createOrderDto: CreateOrderDto) {
        try {
            this.logger.log('Input received', { createOrderDto });
            const response = await this.orderService.create(createOrderDto);
            return {
                status: HttpStatus.ACCEPTED,
                message: 'created successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error(error);
            throw new ServiceUnavailableException(error.response, error.status);
        }
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll() {
        try {
            this.logger.log('Input received');
            const response = await this.orderService.findAll();
            return {
                statusCode: HttpStatus.OK,
                message: 'retrieved successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error(error);
            throw new ServiceUnavailableException(error.response, error.status);
        }
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id: string) {
        try {
            this.logger.log('Input received', { id });
            const response = await this.orderService.findOne(+id);
            return {
                statusCode: HttpStatus.OK,
                message: 'retrieved successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error(error);
            throw new ServiceUnavailableException(error.response, error.status);
        }
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async update(
        @Param('id') id: string,
        @Body() updateOrderDto: UpdateOrderDto,
    ) {
        try {
            this.logger.log('Input received', { id, updateOrderDto });
            const response = await this.orderService.update(
                +id,
                updateOrderDto,
            );
            return {
                statusCode: HttpStatus.OK,
                message: 'updated successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error(error);
            throw new ServiceUnavailableException(error.response, error.status);
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: string) {
        try {
            this.logger.log('Input received', { id });
            const response = await this.orderService.delete(+id);
            return {
                statusCode: HttpStatus.OK,
                message: 'deleted successfully!',
                data: response,
            };
        } catch (error) {
            this.logger.error(error);
            throw new ServiceUnavailableException(error.response, error.status);
        }
    }
}
