import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ScheduledLoot {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loots: string;

  @Column()
  datetimeFrom: Date;

  @Column()
  datetimeTo: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  unserializeLoot(): Array<{name: string, num: number}> {
    const splittedLoots = this.loots.split(',');
    return splittedLoots.map((l: string) => {
      const spl = l.split(':');
      return {
        name: spl[0],
        num: parseInt(spl[1], 10),
      }
    });
  }

}
