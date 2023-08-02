import { Entity,Column,PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    userId:number

    // @Column({ length: 50, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    @Column()
    userName: string;
  
    @Column()
    encryptedPassword: string;

    @Column()
    phone: string;

    @Column()
    email: string;

}