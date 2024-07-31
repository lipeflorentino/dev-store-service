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

    async findAll() {
        return this.orderRepository.find();
    }

    async findOne(id: number) {
        return this.orderRepository.findOne({ where: { id } });
    }

    async update(id: number, updateOrderDto: UpdateOrderDto) {
        return this.orderRepository.update(id, updateOrderDto);
    }

    async delete(id: number) {
        return this.orderRepository.softDelete(id);
    }
}
