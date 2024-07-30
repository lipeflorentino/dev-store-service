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
    HttpException,
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
            throw new HttpException(error.response, error.status);
        }
    }

    @Get()
    findAll() {
        return this.orderService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.orderService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
        return this.orderService.update(+id, updateOrderDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.orderService.remove(+id);
    }
}
