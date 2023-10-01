import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSpeciesDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsString()
  @IsNotEmpty()
  scientific_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(15)
  description: string;
}
