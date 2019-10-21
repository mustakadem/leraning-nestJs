import { Controller, Get } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from "./room.entity";

@Controller()
export class RoomController {
    constructor(private readonly roomService: RoomService) {}

    @Get()
    getRoom(): Promise<Room[]> {
        return this.roomService.getRooms();
    }
}
