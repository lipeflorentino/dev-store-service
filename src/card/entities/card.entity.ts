import { Order } from '../../order/entities/order.entity';
import { User } from '../../user/entities/user.entity';
import {
    Entity,
    Column,
    Index,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';

export enum CardType {
    CREATURE = 'creature',
    ACTION = 'action',
    SPELL = 'spell',
    ITEM = 'item',
    LAND = 'land',
}

export enum CardColor {
    BLACK = 'black',
    BLUE = 'blue',
    GREEN = 'green',
    RED = 'red',
    WHITE = 'white',
}

@Entity()
export class Card {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    @Index({ unique: true })
    title: string;

    @Column()
    cost: number;

    @Column({
        type: 'enum',
        enum: CardType,
        default: CardType.LAND,
    })
    type: CardType;

    @Column({
        type: 'enum',
        enum: CardColor,
        default: CardColor.WHITE,
    })
    color: CardColor;

    @Column()
    description: string;

    @Column('text', { array: true })
    habilities: string[];

    @Column('jsonb')
    stats: {
        hp: number;
        defense: number;
        atack: number;
    };

    @ManyToOne(() => User, (user) => user.cards)
    owner: User;

    @OneToMany(() => Order, (order) => order.card)
    cardOrders: Order[];
}
