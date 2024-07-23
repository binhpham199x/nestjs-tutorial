import { Body, Controller, Get, Patch, UseGuards, UsePipes } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ZodValidationPipe } from '@anatine/zod-nestjs';

@Controller('users')
@UseGuards(JwtGuard)
@ApiBearerAuth('jwt')
@ApiTags('Users')
@UsePipes(ZodValidationPipe)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  async editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    console.log(userId);
    console.log(dto);
    // console.log(editUserSchema.safeParse(dto));
    return this.userService.editUser(userId, dto);
  }
}
