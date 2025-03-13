import Image from "next/image";
import { AddNewDish } from "./_components/AddNewDish";
import DishesCategory from "./_components/DishesCategory";

export default function Home() {
  return (
    <div className="w-[100%] bg-[grey] flex flex-col gap-10 items-center">
      <DishesCategory />
      <AddNewDish />
    </div>
  );
}
