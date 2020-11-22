import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'text',
  })
  text: string;

  @Column({
    enum: [
      'target:933',
      'target:934',
      'target:935',
      'target:1141',
      'corsairs',
      'tournament',
      'tricks-celebration',
      'scheduled-loot',
      'triple-shards',
    ]
  })
  type: string;

  @Column()
  datetimeFrom: Date;

  @Column()
  datetimeTo: Date;

  @Column()
  language: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
