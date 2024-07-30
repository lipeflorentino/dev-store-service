import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CardModule } from './card/card.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        CardModule,
        OrderModule,
        UserModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
