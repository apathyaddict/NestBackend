import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';

import mongoose from 'mongoose';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/CreateRecipe.dto';

//this creates endpoints?

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Post()
  createRecipe(@Body() createRecipeDto: CreateRecipeDto) {
    console.log(createRecipeDto);
    return this.recipesService.createRecipe(createRecipeDto);
  }

  @Get()
  getrecipes() {
    return this.recipesService.getRecipes();
  }

  @Get(':id')
  async getRecipeById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Recipe not found', 404);
    const findRecipe = await this.recipesService.getRecipeById(id);
    if (!findRecipe) throw new HttpException('Recipe not found', 404);
    return findRecipe;
  }
}
