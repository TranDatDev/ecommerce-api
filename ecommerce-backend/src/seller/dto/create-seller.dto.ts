// src/seller/dto/create-seller.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSellerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly shopName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
