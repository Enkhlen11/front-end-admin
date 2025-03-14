import { Divide } from "lucide-react";
import { AddNewDish } from "./AddNewDish";

const CategoryFoods = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2>{name}</h2>
      <div>
        <AddNewDish name={name}/>
      </div>
    </div>
  );
};
export default CategoryFoods;
