import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('room')
export class Room {
    @PrimaryGeneratedColumn('uuid') id: string;

    @Column('varchar', { length: 500 })
    name: string;

    @Column('varchar', { length: 500 })
    type: string;

    @Column('numeric')
    order: number
}
