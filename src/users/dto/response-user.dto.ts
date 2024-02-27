import { User } from "../entities/user.entity";

export class ResponseUserDto {
    id: number; // Existe mas não será retornado na resposta
    firstName: string;
    lastName: string;
    isActive: boolean;

    constructor(user: Partial<User>) {
        // Id não será retornado na resposta
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.isActive = user.isActive;
    }
}
