import { Button } from "../utils/MainButton/Button";
import { IoIosArrowDown } from "react-icons/io";

interface IStatus {
  status: number;
}

function Filterbar({ status }: IStatus) {
  return (
    <div className="w-full justify-end h-[10vh] flex gap-2 p-2 items-center bg-[#1C1C1C]">
      <Button variant="secondary" className="font-medium gap-1 h-[5.5vh] text-sm px-2" size="xs">
        Project
        <IoIosArrowDown />
      </Button>

      <Button variant="secondary" className="font-medium h-[5.5vh] text-sm px-2 gap-1" size="xs">
        Status
        <span className="h-5 w-5 bg-backgroundPrimary text-black flex justify-center text-center items-center rounded-[50%]">
          {status}
        </span>
        <IoIosArrowDown />
      </Button>

      <Button variant="secondary" className="font-medium h-[5.5vh] text-sm gap21 px-3" size="xs">
        Past 7 days
        <IoIosArrowDown />
      </Button>
    </div>
  );
}

export default Filterbar;
