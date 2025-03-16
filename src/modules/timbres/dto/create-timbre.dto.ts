
import { IsNotEmpty, IsNotEmptyObject, IsOptional, IsString } from 'class-validator';


export class CreateTimbreDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsOptional()
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    readonly userId: object;

    @IsNotEmptyObject()
    @IsNotEmpty()
    fields: Record<string, string | number>;
}