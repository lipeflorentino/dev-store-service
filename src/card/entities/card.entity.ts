import { Entity, ObjectId, Column, Index, ObjectIdColumn } from 'typeorm';

export enum CardType {
    CREATURE = 'creature',
    ACTION = 'action',
    SPELL = 'spell',
    ITEM = 'item',
}

export enum CardColor {
    BLACK = 'black',
    BLUE = 'blue',
    GREEN = 'green',
    RED = 'red',
}

@Entity()
export class Card {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    @Index({ unique: true })
    title: string;

    @Column()
    cost: number;

    @Column()
    type: CardType;

    @Column()
    color: CardColor;

    @Column()
    description: string;

    @Column()
    habilities: string[];

    @Column()
    stats: {
        hp: number;
        defense: number;
        atack: number;
    };
}
