import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { RecipeSchema, Recipe } from '../Schemas/Recipe.schema';

describe('Recipe', () => {
  let recipeModel: Model<Recipe>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(Recipe.name),
          useValue: Model,
        },
      ],
    }).compile();

    recipeModel = module.get<Model<Recipe>>(getModelToken(Recipe.name));
  });

  it('should be defined', () => {
    expect(recipeModel).toBeDefined();
  });

  it('should create a new recipe', async () => {
    const createdRecipe: Recipe = {
      name: 'Test Recipe',
      servings: '4',
    };

    const saveSpy = jest
      .spyOn(recipeModel.prototype, 'save')
      .mockResolvedValueOnce(createdRecipe);

    const result = await recipeModel.create(createdRecipe);

    expect(saveSpy).toHaveBeenCalled();
    expect(result).toEqual(createdRecipe);
  });

  it('should fail to create recipe without name', async () => {
    const invalidRecipe: Recipe = {
      name: '',
      servings: '4',
    };

    await expect(recipeModel.create(invalidRecipe)).rejects.toThrow();
  });

  // Add more test cases as needed
});
