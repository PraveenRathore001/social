import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/users/entities/user.entity";




@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService ) {}



generateToken(payload: User):string{
    return this.jwtService.sign(payload)
}

}
