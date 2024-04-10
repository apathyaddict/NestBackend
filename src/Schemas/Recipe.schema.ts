import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Recipe {
  @Prop({ unique: true, required: true })
  name: string;

  // @Prop({ required: true })
  // fistName: string;

  @Prop({ required: false })
  servings?: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
