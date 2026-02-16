import {
  IsEmail,
  IsStrongPassword,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { UserRole } from '../roles/user.role.js';

export class UserDTO {
  @IsNotEmpty({ message: 'Le nom est obligatoire' })
  @MinLength(2, { message: 'Nom au moins 2 caratères' })
  userName!: string;

  @IsEmail({}, { message: 'Email invalide' })
  email!: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minSymbols: 1,
    },
    { message: "Mot de passe n'est pas assez fort" },
  )
  password!: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minSymbols: 1,
    },
    { message: "Mot de passe n'est pas assez fort" },
  )
  confirmPassword!: string;

  @IsNotEmpty()
  role!: UserRole;
  createdAt: Date;
}
