/* istanbul ignore file */
import {
    Column,
    Entity,
    Index,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm"
import { GroupData } from "../../groups/entities/group.entity"

@Entity("invites")
export class Invite {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Index({ unique: true })
    code: string

    @Column({ default: false })
    redeemed: boolean

    @OneToOne(() => GroupData)
    @JoinColumn()
    group: GroupData
}
