import { Divide } from "lucide-react";
import { AddNewDish } from "./AddNewDish";

const CategoryFoods = ({ name }: { name: string }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <AddNewDish />
      </div>
    </div>
  );
};
