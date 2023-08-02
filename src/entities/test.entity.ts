import { Entity,Column,PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class test{

    @PrimaryGeneratedColumn()
    id:number

    @Column({ length: 50, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    time:string

    @Column({ length: 255, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    shop:string

    @Column({ length: 50, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    todo:string

    @Column({ length: 255, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    tip:string

    @Column({ length: 255, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    meal:string

    @Column({ length: 50, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    mealtime:string

    @Column({ length: 999, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
    vegetable:string
}