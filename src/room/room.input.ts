import { Field, InputType } from 'type-graphql'

@InputType()
export class inputRoom{
    @Field() readonly name: string;
    @Field() readonly type: string;
    @Field() readonly order: number
}
