import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room} from "./room.entity";
import { RoomResolver } from "./room.resolver";
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

@Module({
    imports: [TypeOrmModule.forFeature([ Room ])],
    controllers: [RoomController],
    providers: [RoomResolver, RoomService],
})
export class RoomModule {}
