import { IsEmail } from 'class-validator';

export class DeleteUserInputDTO {
    @IsEmail()
    email: string;
}
