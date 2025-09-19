import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function AddCampaignCard() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-primaryC to-accent p-0.5 rounded-3xl w-full h-[34vh] max-w-[24rem] hover:scale-105 tansition-all duration-500">
      <div className="bg-primaryA backdrop-blur-md rounded-[22px] p-4 h-full flex items-center justify-center text-center">
        <div className="flex flex-col items-center gap-2 ">
          <button
            onClick={() => navigate("/main/create-campaign")}
            className="cursor-pointer"
          >
            <div className="flex items-center justify-center w-10 h-10 text-2xl text-black bg-white rounded-full">
              <IoAddSharp />
            </div>
          </button>
          <span className="text-sm font-primary">Add Campaign</span>
        </div>
      </div>
    </div>
  );
}

export default AddCampaignCard;
