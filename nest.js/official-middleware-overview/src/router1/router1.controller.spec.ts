import { Test, TestingModule } from '@nestjs/testing';
import { Router1Controller } from './router1.controller';

describe('Router1Controller', () => {
  let controller: Router1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Router1Controller],
    }).compile();

    controller = module.get<Router1Controller>(Router1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
