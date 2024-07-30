import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { ORDER_REPOSITORY } from '../constants';

@Injectable()
export class OrderService {
    private logger = new Logger();

    constructor(
        @Inject(ORDER_REPOSITORY)
        private readonly orderRepository: Repository<Order>,
    ) {}

    async create(createOrderDto: CreateOrderDto) {
        const newOrder = this.orderRepository.create(createOrderDto);
        this.logger.log({ newOrder });
        return this.orderRepository.save(newOrder);
    }

    findAll() {
        return `This action returns all order`;
    }

    findOne(id: number) {
        return `This action returns a #${id} order`;
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        return `This action updates a #${id} order` + updateOrderDto;
    }

    remove(id: number) {
        return `This action removes a #${id} order`;
    }
}
