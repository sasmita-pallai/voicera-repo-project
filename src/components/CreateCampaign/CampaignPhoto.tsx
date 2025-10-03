import { FiUpload } from "react-icons/fi";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Iprops {
  title: string;
  campaignImage: File | null;
  setCampaignImage: (file: File | null) => void;
}

function CampaignPhoto({ title = "Title", campaignImage, setCampaignImage }: Iprops) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const MAX_IMAGE_KB = 300; // limit to small images (~300 KB)

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

    // Enforce small file size in KB
    const sizeInKB = Math.round(file.size / 1024);
    if (sizeInKB > MAX_IMAGE_KB) {
      toast.error(`Image too large (${sizeInKB} KB). Max allowed is ${MAX_IMAGE_KB} KB.`);
      return;
    }

    setCampaignImage(file); // ✅ Pass the file to the parent
    toast.success(`File selected: ${file.name}`);
  };

  const handleClear = () => {
    setCampaignImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="w-full h-[146px] bg-gradient-to-br from-accent to-primaryC rounded-2xl p-2 relative overflow-hidden">
      <Toaster />

      {/* Title */}
      <div className="px-2">
        <h1 className="text-white text-lg font-semibold">{title}</h1>
        <div className="w-[160px] h-[1px] bg-gradient-to-r from-gray-700 to-transparent mt-1 mb-4" />
      </div>

      {/* Upload control */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div
          className="relative cursor-pointer w-20 h-20 rounded-full"
          onClick={handleClick}
        >
          <img src="/assets/circle.svg" alt="circle" className="h-full w-full object-cover" />
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

      {/* Selected filename display (Figma style) */}
      {campaignImage && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 mx-4 w-full max-w-[280px]">
            <div className="flex items-start justify-between">
              <div className="flex-1 mr-2 flex flex-col items-center">
                <img src="/images/UploadFile.svg" alt="upload" className="w-6 h-6 mb-2" />
                <div className="h-[4px] bg-pink-500 w-full mb-1" />
                <p className="text-sm text-white truncate text-center w-full">{campaignImage.name}</p>
              </div>
              <button
                onClick={handleClear}
                className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors flex-shrink-0"
                title="Remove"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CampaignPhoto;
