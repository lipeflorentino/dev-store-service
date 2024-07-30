import { UserType } from '../entities/user.entity';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserInputDTO {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(3, 10)
    nickname: string;

    @IsNotEmpty()
    type: UserType;
}
