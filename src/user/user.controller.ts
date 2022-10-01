import { BadRequestException, Body, Controller, Get, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

	constructor(private readonly userService: UserService){}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async getUserById(@Param('id') id: string) {
		return await this.userService.getUserById(id)
	}


}
