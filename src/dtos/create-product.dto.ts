// npm i class-validator class-transformer @nestjs/mapped-types
// add to main.ts app.useGlobalPipes(new ValidationPipe());
// import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

// // extends validation from CreateProductDto
// export class UpdateProductDto extends PartialType(CreateProductDto) {}
