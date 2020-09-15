import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from../src/auth/auth.serviceller';
import { AppService } from './a../src/auth/local.strategy
import { UsersModule } from '../src/auth/jwt.strategymodule';
import { AuthModule } from '.../src/users/users.module

describe('AppService', () => {
  let appService: AppService;../src/auth/constants

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, UsersModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('app service', () => {
    it('should return "Hello World!"', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
  });
});
