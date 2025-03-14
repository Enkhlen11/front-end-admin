import Image from "next/image";
import { AddNewDish } from "./_components/AddNewDish";
import DishesCategory from "./_components/DishesCategory";
import CategoryFoods from "./_components/CategoryFoods";

export default function Home() {
  const categories = [
    { name: "Appetizers" },
    { name: "Salads" },
    { name: "Lunch favorites" },
  ];
  return (
    <div className="w-[100%] bg-[#dfdfdf] flex flex-col gap-10 px-[60px]">
      <DishesCategory />
      <div className="flex flex-col gap-4 items-start">
        {categories.map((category) => {
          return (
            <div>
              <CategoryFoods name={category.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
