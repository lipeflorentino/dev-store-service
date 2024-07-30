import { IsNotEmpty } from 'class-validator';

export class GetCardsDTO {
    @IsNotEmpty()
    titles: string[];
}
