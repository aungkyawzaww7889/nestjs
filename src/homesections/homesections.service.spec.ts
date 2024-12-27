import { Test, TestingModule } from '@nestjs/testing';
import { HomesectionsService } from './homesections.service';

describe('HomesectionsService', () => {
  let service: HomesectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomesectionsService],
    }).compile();

    service = module.get<HomesectionsService>(HomesectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
