import { ConfigService } from '@nestjs/config';
import { DATA_SOURCE } from '../constants';
import { DataSource } from 'typeorm';

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
                entities: ['src/**/*.entity.js'],
                synchronize: false, // Desativar em produção
            });
            return dataSource.initialize();
        },
        inject: [ConfigService],
    },
];
