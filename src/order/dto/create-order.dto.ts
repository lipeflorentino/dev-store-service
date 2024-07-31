import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    price: number;

    @IsEmail()
    @IsNotEmpty()
    vendorEmail: string;

    @IsEmail()
    @IsNotEmpty()
    costumerEmail: string;

    @IsNotEmpty()
    cardTitle: string;
}
