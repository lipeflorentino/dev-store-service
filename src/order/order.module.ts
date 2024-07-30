import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { DatasourceModule } from '../datasource/datasource.module';
import { orderProviders } from './order.providers';

@Module({
    imports: [DatasourceModule],
    controllers: [OrderController],
    providers: [OrderService, ...orderProviders],
    exports: [OrderService],
})
export class OrderModule {}
