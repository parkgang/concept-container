import { Test, TestingModule } from '@nestjs/testing';
import { Router1Service } from './router1.service';

describe('Router1Service', () => {
  let service: Router1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Router1Service],
    }).compile();

    service = module.get<Router1Service>(Router1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
