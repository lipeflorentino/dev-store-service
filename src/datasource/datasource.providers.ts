import { ConfigService } from '@nestjs/config';
import { DATA_SOURCE } from '../constants';
import { DataSource } from 'typeorm';
import { Card } from '../card/entities/card.entity';
import { Order } from '../order/entities/order.entity';
import { User } from '../user/entities/user.entity';

export const DatasourceProviders = [
    {
        provide: DATA_SOURCE,
        useFactory: async (configService: ConfigService) => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: configService.get<string>('DATABASE_HOST'),
                port: configService.get<number>('DATABASE_PORT'),
                username: configService.get<string>('DATABASE_USER'),
                password: configService.get<string>('DATABASE_PASSWORD'),
                database: configService.get<string>('DATABASE_NAME'),
                entities: [Card, User, Order],
                synchronize: false,
                logging: false,
            });
            return dataSource.initialize();
        },
        inject: [ConfigService],
    },
];
