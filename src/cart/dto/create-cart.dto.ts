// import { ApiProperty } from '@nestjs/swagger';
// import { IsString, IsBoolean } from 'class-validator';

export class CreateCartDto {
  // @ApiProperty()
  // @IsBoolean()
  qty: number;

  // @ApiProperty()
  // @IsString()
  product: string;

  user: string;
}
