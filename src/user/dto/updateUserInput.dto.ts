import { User } from '../entities/user.entity';
import { IsEmail } from 'class-validator';

export class UpdateUserInputDTO {
    @IsEmail()
    email: string;

    params: Partial<User>;
}
