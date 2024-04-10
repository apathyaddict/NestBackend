import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeSchema, Recipe } from 'src/Schemas/Recipe.schema';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';

@Module({
  //put the elements from the schema here
  imports: [
    MongooseModule.forFeature([
      {
        name: Recipe.name,
        schema: RecipeSchema,
      },
    ]),
  ],

  providers: [RecipesService],
  controllers: [RecipesController],
})
export class RecipesModule {}
