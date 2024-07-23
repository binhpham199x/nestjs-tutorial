import { IsEmail, IsOptional, IsString } from 'class-validator';
import { userSchema } from './user.dto';
import { createZodDto } from '@anatine/zod-nestjs';

// export class EditUserDto {
//   @IsEmail()
//   @IsOptional()
//   email?: string;

//   @IsString()
//   @IsOptional()
//   firstName?: string;

//   @IsString()
//   @IsOptional()
//   lastName?: string;
// }

export const editUserSchema = userSchema
  .pick({
    email: true,
    firstName: true,
    lastName: true,
  })
  .partial();

export class EditUserDto extends createZodDto(editUserSchema) {}
