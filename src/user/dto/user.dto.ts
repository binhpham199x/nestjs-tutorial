import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email('This is not a valid email!'),
  hash: z.string(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),

  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export class UserDto extends createZodDto(userSchema) {}
