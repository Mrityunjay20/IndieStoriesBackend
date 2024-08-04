import { IsArray, IsDecimal, IsNumber, IsOptional, isString, IsString } from 'class-validator';

export class updateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsNumber()
  id:number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDecimal()
  price?: number;

  @IsOptional()
  @IsArray()
  imageUrl?: string[];

  @IsOptional()
  @IsNumber()
  categoryId?: number;

  @IsOptional()
  @IsString()
  bannerUrl?: string;
}
