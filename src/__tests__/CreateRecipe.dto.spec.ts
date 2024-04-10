import { validate } from 'class-validator';
import { CreateRecipeDto } from '../Recipes/dto/CreateRecipe.dto';

describe('CreateRecipeDto', () => {
  it('should pass validation with valid data', async () => {
    const validData = {
      name: 'Test Recipe',
      servings: '4',
    };

    const dto = new CreateRecipeDto();
    Object.assign(dto, validData);

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should fail validation if name is empty', async () => {
    const invalidData = {
      name: '',
      servings: '4',
    };

    const dto = new CreateRecipeDto();
    Object.assign(dto, invalidData);

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isNotEmpty');
  });
});
