import { CgSearch } from "react-icons/cg";
import { OutlinedButton } from "../utils/OutlinedButton";
import { HiOutlineDownload } from "react-icons/hi";
import { MdAdd } from "react-icons/md";

function Topbar() {
  return (
    <div className="flex w-full p-1.5 justify-between bg-[#2C2C2C]">
      <div className="border-white h-8 px-2 py-[9px] rounded-[8px] w-[30vw] justify-start gap-2 border  items-center  text-white flex bg-[#2C2C2C]">
        <CgSearch className="" />
        <input
          type="text"
          className="  outline-none text-sm w-full flex justify-center "
          placeholder="Search..."
          name=""
          id=""
        />
      </div>
      <span className="flex gap-2">
        <OutlinedButton className="p-[2px] h-[5.5vh] text-sm" InnerClass="bg-[#2C2C2C]">
          <HiOutlineDownload />
          Download
        </OutlinedButton>

        <OutlinedButton className="p-[2px] h-[5.5vh] w-[12vw] text-sm" InnerClass="bg-[#2C2C2C]">
          <MdAdd className="text-2xl" />
          Add Customer
        </OutlinedButton>
      </span>
    </div>
  );
}

export default Topbar;
