import { Card } from '../../card/entities/card.entity';
import { Order } from '../../order/entities/order.entity';
import {
    Entity,
    Column,
    Index,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';
import { IsEmail } from 'class-validator';

export enum UserType {
    CUSTOMER = 'customer',
    VENDOR = 'vendor',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    @Index({ unique: true })
    @IsEmail()
    email: string;

    @Column()
    @Index({ unique: true })
    nickname: string;

    @Column({
        type: 'enum',
        enum: UserType,
        default: UserType.CUSTOMER,
    })
    type: UserType;

    @Column({
        default: 0,
    })
    exp: number;

    @OneToMany(() => Order, (order) => order.vendorEmail)
    vendorOrders: Order[];

    @OneToMany(() => Order, (order) => order.costumerEmail)
    costumerOrders: Order[];

    @OneToMany(() => Card, (card) => card.owner)
    cards: Card[];
}
