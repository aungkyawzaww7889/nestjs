import { Test, TestingModule } from '@nestjs/testing';
import { HomesectionsController } from './homesections.controller';
import { HomesectionsService } from './homesections.service';

describe('HomesectionsController', () => {
  let controller: HomesectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomesectionsController],
      providers: [HomesectionsService],
    }).compile();

    controller = module.get<HomesectionsController>(HomesectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
