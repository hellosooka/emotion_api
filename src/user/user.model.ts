import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'


class Emotions {
	data: string
	emotions: string[]
}


export interface UserModel extends Base {}
export class UserModel extends TimeStamps {
	@prop({ unique: true})
	email: string

	@prop()
	passwordHash: string

	@prop({ type: () => [Emotions] })
	emotions: Emotions[]
}

