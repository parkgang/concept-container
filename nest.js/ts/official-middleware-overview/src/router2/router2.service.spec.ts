import { Test, TestingModule } from '@nestjs/testing';
import { Router2Service } from './router2.service';

describe('Router2Service', () => {
  let service: Router2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Router2Service],
    }).compile();

    service = module.get<Router2Service>(Router2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
