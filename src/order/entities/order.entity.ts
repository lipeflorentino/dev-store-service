import { Card } from '../../card/entities/card.entity';
import { User } from '../../user/entities/user.entity';
import { IsEmail } from 'class-validator';
import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

export enum OrderStatus {
    PROCESSING = 'processing',
    PAID = 'paid',
    CANCELLED = 'cancelled',
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    price: number;

    @Column({ default: 'market@gmail.com' })
    @Index()
    @IsEmail()
    vendorEmail: string;

    @Column({ default: 'market@gmail.com' })
    @Index()
    @IsEmail()
    costumerEmail: string;

    @Column()
    @Index()
    cardTitle: string;

    @Column({
        type: 'enum',
        enum: OrderStatus,
        default: OrderStatus.PROCESSING,
    })
    status: OrderStatus;

    @CreateDateColumn()
    orderedAt: Date;

    @Column({
        default: null,
    })
    finishedAt: string;

    @ManyToOne(() => User, (user) => user.vendorOrders)
    @JoinColumn({ name: 'vendorEmail', referencedColumnName: 'email' })
    vendor: User;

    @ManyToOne(() => User, (user) => user.costumerOrders)
    @JoinColumn({ name: 'costumerEmail', referencedColumnName: 'email' })
    costumer: User;

    @ManyToOne(() => Card, (card) => card.cardOrders)
    @JoinColumn({ name: 'cardTitle', referencedColumnName: 'title' })
    card: Card;
}
