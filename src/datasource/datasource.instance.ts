import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Card } from 'src/card/entities/card.entity';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/user/entities/user.entity';

config({ path: '.env' });

export default new DataSource({
    type: 'postgres',
    host: `${process.env.DATABASE_HOST}`,
    port: Number(process.env.DATABASE_PORT),
    username: `${process.env.DATABASE_USER}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`,
    entities: [User, Order, Card],
    migrations: ['**/migrations/*.ts'],
    cache: false,
    synchronize: false,
    schema: 'public',
});
