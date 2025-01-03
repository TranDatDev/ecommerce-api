import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateSellerDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly shopName?: string;

  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @IsString()
  @IsOptional()
  readonly password?: string;
}
