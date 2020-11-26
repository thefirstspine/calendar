import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Cycle {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title_en: string;

  @Column()
  title_fr: string;

  @Column({
    type: 'text',
  })
  text_en: string;

  @Column({
    type: 'text',
  })
  text_fr: string;

  @Column()
  datetimeFrom: Date;

  @Column()
  datetimeTo: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
