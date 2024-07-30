import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
} from 'typeorm';

export enum OrderStatus {
    PROCESSING = 'processing',
    PAID = 'paid',
    CANCELLED = 'cancelled',
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    @Index()
    vendorId: string;

    @Column()
    @Index()
    costumerId: string;

    @Column()
    @Index()
    cardId: string;

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
}
