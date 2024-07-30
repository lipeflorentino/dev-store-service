import { UserType } from '../entities/user.entity';

export class CreateUserInputDTO {
    email: string;
    nickname: string;
    type: UserType;
}
