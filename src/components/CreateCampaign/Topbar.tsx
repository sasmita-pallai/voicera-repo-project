import { useNavigate } from "react-router-dom";
import { OutlinedButton } from "../utils/OutlinedButton";
import { FaPlus } from "react-icons/fa6";

interface Iprops {
  title: string;
}
function Topbar({ title }: Iprops) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#2C2C2C] sticky top-0 z-20 w-full h-[10vh] px-2 items-center justify-between flex">
      <h1 className="text-white  text-xl ">{title}</h1>
      <div className="flex gap-2">
        <OutlinedButton
          className="p-[2px] h-[5.5vh] text-sm"
          InnerClass="bg-[#2C2C2C]"
          onClick={() => navigate("/main/create-campaign")}
        >
          <FaPlus />
          Add Campaign
        </OutlinedButton>
        <OutlinedButton
          className="p-[2px] h-[5.5vh] text-sm"
          InnerClass="bg-[#2C2C2C]"
        >
          <img src="\assets\Icons\star.svg" alt="" />
          Upgrade Now
        </OutlinedButton>
      </div>
    </div>
  );
}

export default Topbar;
