import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from '../src/order/order.service';
import {
    orderRepositoryMock,
    dataSourceMock,
    configServiceMock,
} from './mocks';

describe('OrderService', () => {
    let service: OrderService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                OrderService,
                orderRepositoryMock,
                dataSourceMock,
                configServiceMock,
            ],
        }).compile();

        service = module.get<OrderService>(OrderService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
