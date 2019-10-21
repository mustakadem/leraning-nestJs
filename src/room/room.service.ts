import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Room } from './room.entity'
import { Repository } from 'typeorm'
import { CreateRoomDto } from './room.dto'

@Injectable()
export class RoomService {
    constructor (@InjectRepository(Room) private readonly ROOM_REPOSITORY: Repository<Room>) {}

    async createRoom (data: CreateRoomDto): Promise<Room> {
        const room = new Room();
        room.name = data.name;
        room.order = data.order;
        room.type = data.type;

        await this.ROOM_REPOSITORY.save(room);

        return room;
    }

    async getRooms (): Promise<Room[]> {
        return await this.ROOM_REPOSITORY.find()
    }
}
