import { Button } from "@/components/ui/button";
import { LayoutDashboard, Settings, TruckIcon } from "lucide-react";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className="min-h-[100vh] w-[15%] bg-[#f4f3f3] pl-[20px] pt-[40px] flex flex-col gap-6">
      <div className="flex ">
        <Image
          width={1000}
          height={1000}
          alt=""
          src="/NomLogo.svg"
          className="w-[46px] h-[38px]"
        />
        <div>
          <div className="flex ">
            <p>Nom</p>
            <p>Nom</p>
          </div>
          <p className="text-[12px]">Swift delivery</p>
        </div>
      </div>

      <Button>
        <LayoutDashboard />
        Food menu
      </Button>
      <Button>
        <TruckIcon />
        Orders
      </Button>
      <Button>
        <Settings />
        Settings
      </Button>
    </div>
  );
}
