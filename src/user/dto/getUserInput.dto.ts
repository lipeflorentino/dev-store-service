import { IsEmail } from 'class-validator';

export class GetUserInputDTO {
    @IsEmail()
    email: string;
}
