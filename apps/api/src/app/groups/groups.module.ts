import { forwardRef, Module } from "@nestjs/common"
import { ScheduleModule } from "@nestjs/schedule"
import { TypeOrmModule } from "@nestjs/typeorm"
import { InvitesModule } from "../invites/invites.module"
import { Group } from "./entities/group.entity"
import { Member } from "./entities/member.entity"
import { GroupsController } from "./groups.controller"
import { GroupsService } from "./groups.service"

@Module({
    imports: [
        ScheduleModule.forRoot(),
        forwardRef(() => InvitesModule),
        TypeOrmModule.forFeature([Member, Group])
    ],
    controllers: [GroupsController],
    providers: [GroupsService],
    exports: [GroupsService]
})
export class GroupsModule {}
