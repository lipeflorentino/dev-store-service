import { Entity, ObjectId, Column, Index, ObjectIdColumn } from 'typeorm';

export enum UserType {
    CUSTOMER = 'customer',
    VENDOR = 'vendor',
}

@Entity()
export class User {
    @ObjectIdColumn()
    id: string;

    @Column()
    @Index({ unique: true })
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
        default: [],
    })
    cards: ObjectId[];

    @Column({
        default: 0,
    })
    exp: number;
}
