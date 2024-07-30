import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    price: number;

    @IsEmail()
    @IsNotEmpty()
    vendorId: string;

    @IsEmail()
    @IsNotEmpty()
    costumerId: string;

    @IsNotEmpty()
    cardId: string;
}
