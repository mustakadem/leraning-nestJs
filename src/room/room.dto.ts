import { Field, ObjectType} from 'type-graphql'

@ObjectType()
export class CreateRoomDto {
    @Field() readonly id?: string;
    @Field() readonly name: string;
    @Field() readonly type: string;
    @Field() readonly order: number;
}
