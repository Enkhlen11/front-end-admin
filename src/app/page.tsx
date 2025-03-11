import Image from "next/image";
import { Appetizers } from "./_components/Appetizers";
import DishesCategory from "./_components/DishesCategory";

export default function Home() {
  return (
    <div className="w-[100%] bg-[grey] flex flex-col gap-10 items-center">
      <DishesCategory />
      <Appetizers />
    </div>
  );
}
