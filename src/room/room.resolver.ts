import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Room } from './room.entity'
import { CreateRoomDto } from './room.dto'
import { RoomService } from './room.service'
import { inputRoom } from './room.input'

@Resolver((of) => Room)
export class RoomResolver {
    constructor (private readonly roomService: RoomService) {}

    @Query(() => [ CreateRoomDto ])
    async room () {
        return this.roomService.getRooms()
    }

    @Mutation(() => CreateRoomDto)
    async createRoom (@Args('data') data: inputRoom) {
        return this.roomService.createRoom(data)
    }
}
