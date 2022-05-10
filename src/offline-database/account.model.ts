import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

@Entity("accounts")
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column("text")
  name: string;

  @Column("text")
  username: string;

  @Column("text")
  password: string;

  @Column({ name: "created_at", type: "datetime" })
  createdAt: Date;

  @BeforeInsert()
  recordCreatedDate() {
    this.createdAt = new Date();
  }

  @Column({ name: "updated_at", type: "datetime" })
  updatedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  recordUpdatedDate() {
    this.updatedAt = new Date();
  }
}
