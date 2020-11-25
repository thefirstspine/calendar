import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ScheduledLootUser {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: number;

  @Column()
  scheduledLootId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
