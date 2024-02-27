import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class RequestUserDto {

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsBoolean()
    isActive: boolean;
}
