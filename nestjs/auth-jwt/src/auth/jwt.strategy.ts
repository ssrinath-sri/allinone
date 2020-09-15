import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.clientId,
      clientId: 'l7xx3a77a124370c417a927d89021b9cba53',
      clientSecret: 'e4meQ53cXGq53j6uffdULVjRl8It8M3FVsupKei0nSg',
      txn_id:'',
      timestamp:'',
      gstin:'',
      api_action:'',
      algorithms: ['RS256']
    });
  }

  async validate(payload: any) {
    // const auth_str = 'v2.0:'+cust_id+':'
    // const base64auth = base64(auth_str);
    return { userId: payload.sub, username: payload.username };
  }
}
