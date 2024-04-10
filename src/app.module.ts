import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesModule } from './Recipes/recipes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://senieve:ERVFElvFxQFSEHBj@nest.whuwbqv.mongodb.net/TNW',
    ),
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
