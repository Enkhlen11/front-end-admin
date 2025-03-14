export type FoodCategoryType = {
  _id: string;
  categoryName: string;
  createdAt?: string;
  updatedAt?: string;
};
export type FoodType = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredietnts: string;
  category: FoodCategoryType;
  createdAt?: string;
  updatedAt?: string;
};
