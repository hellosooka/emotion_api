import { BadRequestException, Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
	constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>){}


	

	async getUserById(id: string) {
		const user = await this.userModel.findById(id)
		if(user) {
			return {
				id: user._id,
				login: user.email,
				createdAt: user.createdAt
			}
		} else {
			throw new BadRequestException("NOT FOUND")
		}
	}

	

	

}
