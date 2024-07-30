import { CardColor, CardType } from '../entities/card.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateCardDto {
    @IsNotEmpty()
    cost: number;

    @IsNotEmpty()
    tittle: string;

    @IsNotEmpty()
    type: CardType;

    @IsNotEmpty()
    color: CardColor;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    habilities: string[];

    stats: {
        hp: number;
        defense: number;
        atack: number;
    };
}
