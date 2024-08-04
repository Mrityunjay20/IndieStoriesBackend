import { IsArray, IsDecimal, IsNumber, IsString, IsUrl } from "class-validator";


export class createProductDto{
    @IsString()
    name:string;

    @IsString()
    description:string;

    @IsDecimal()
    price:number;

    @IsArray()
    @IsString({ each: true })
    @IsUrl({}, { each: true })  // Optional: To validate each string as a valid URL
    imageUrl: string[];

    @IsNumber()
    categoryId:number;

    @IsString()
    bannerUrl:string;
}