import { CardColor, CardType } from '../entities/card.entity';

export class CreateCardDto {
    cost: number;
    tittle: string;
    type: CardType;
    color: CardColor;
    description: string;
    habilities: string[];
    stats: {
        hp: number;
        defense: number;
        atack: number;
    };
}
