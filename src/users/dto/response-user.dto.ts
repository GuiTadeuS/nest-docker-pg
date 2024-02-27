import { User } from "../entities/user.entity";

export class ResponseUserDto {
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;

    constructor(user: Partial<User>) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.isActive = user.isActive;
    }
}
