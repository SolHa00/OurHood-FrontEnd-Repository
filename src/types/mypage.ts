import { InvitationInfo } from './member';
import { RoomCardInfo } from './room';

export interface MypageInfo {
  myInfo: {
    nickname: string;
    email: string;
  };
  rooms: RoomCardInfo[];
  invitations: InvitationInfo[];
}
