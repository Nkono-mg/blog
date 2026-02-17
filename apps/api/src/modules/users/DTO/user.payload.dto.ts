import { LoginDTO } from './login.dto.js';

export class UserPayloadDTO extends LoginDTO {
  id: string;
  userName: string;
  role: string;
}
