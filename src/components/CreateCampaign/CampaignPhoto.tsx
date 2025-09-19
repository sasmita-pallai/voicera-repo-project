import { FiUpload } from "react-icons/fi";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Iprops {
  title: string;
  campaignImage: File | null;
  setCampaignImage: (file: File | null) => void;
}

function CampaignPhoto({ title = "Title", setCampaignImage }: Iprops) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validImageTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/webp",
      "image/gif",
    ];

    if (!validImageTypes.includes(file.type)) {
      toast.error("Only image files are allowed!");
      return;
    }

    setCampaignImage(file); // ✅ Pass the file to the parent
    toast.success(`File selected: ${file.name}`);
  };

  return (
    <div className="w-full h-[146px] bg-gradient-to-br from-accent to-primaryC rounded-2xl p-2 relative overflow-hidden">
      <Toaster />

      {/* Title */}
      <div className="px-2">
        <h1 className="text-white text-lg font-semibold">{title}</h1>
        <div className="w-[160px] h-[1px] bg-gradient-to-r from-gray-700 to-transparent mt-1 mb-4" />
      </div>

      {/* Upload button */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div
          className="relative cursor-pointer w-20 h-20 rounded-full"
          onClick={handleClick}
        >
          <img
            src="/assets/circle.svg"
            alt="circle"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <FiUpload className="text-xl" />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CampaignPhoto;
