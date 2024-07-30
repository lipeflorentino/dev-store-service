import { User } from '../entities/user.entity';

export class UpdateUserInputDTO {
    email: string;
    params: Partial<User>;
}
