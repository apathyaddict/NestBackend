import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from 'src/Schemas/Recipe.schema';
import { CreateRecipeDto } from './dto/CreateRecipe.dto';

//this is where you can create ROUTES

@Injectable()
export class RecipesService {
  //injects the user model to interact with data layer
  constructor(@InjectModel(Recipe.name) private recipeModel: Model<Recipe>) {}

  createRecipe(createRecipeDto: CreateRecipeDto) {
    const newRecipe = new this.recipeModel(createRecipeDto);
    return newRecipe.save();
  }

  getRecipes() {
    return this.recipeModel.find();
  }
  async searchRecipesByName(search: string): Promise<Recipe[]> {
    const regex = new RegExp(search, 'i');

    return this.recipeModel.find({ name: regex }).exec();
  }

  getRecipeById(id: string) {
    return this.recipeModel.findById(id);
  }
}
