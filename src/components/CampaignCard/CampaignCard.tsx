import React, { useState } from "react";

export interface CardProps {
  title: string;
  description: string;
  tags: string;
  progress: number;
  campaignImage?: string; // 🆕 Optional image field
  onClick?: () => void; // Add onClick prop
}

const CampaignCard: React.FC<CardProps> = ({
  title,
  description,
  tags,
  progress,
  campaignImage,
  onClick, // Destructure onClick
}) => {
  const [showFull, setShowFull] = useState(false);
  const wordLimit = 20;
  const words = description.split(" ");
  const isLong = words.length > wordLimit;
  const displayedText = showFull
    ? description
    : words.slice(0, wordLimit).join(" ") + (isLong ? "..." : "");

  return (
    <div
      className="bg-gradient-to-r hover:scale-105 cursor-pointer duration-500 transition-all from-primaryC to-accent p-0.5 rounded-3xl min-h-[32vh] w-full "
      onClick={onClick} // Attach onClick handler
    >
      <div className="bg-primaryA backdrop-blur-md rounded-[22px] p-4 text-white relative pb-20 w-full h-full">
        {/* Header Section */}
        <div className="flex justify-between">
          <div className="flex items-start w-full gap-2">
            {/* 🖼️ Campaign Image or Default */}
            {campaignImage ? (
              <img
                src={campaignImage}
                alt="campaign"
                className="w-17 h-17 object-cover rounded-[10px]"
              />
            ) : (
              <img
                src="/images/Rectangle.svg"
                alt="default"
                className="w-17 h-17 object-cover rounded-[10px]"
              />
            )}

            <div className="flex flex-col w-full">
              <div className="flex justify-between w-full">
                <h2 className="text-lg font-semibold font-primary">{title}</h2>
                <img src="/images/settings.svg" alt="settings" />
              </div>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-1 overflow-hidden mt-1">
                {tags
                  .split(" ")
                  .filter(Boolean)
                  .map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-white pr-2 font-primary font-light py-0.5 rounded-full"
                    >
                      #{tag} 
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 mb-2 text-xs leading-snug font-primary ">
          {displayedText}
          {isLong && (
            <span
              onClick={() => setShowFull(!showFull)}
              className="ml-1 font-medium cursor-pointer text-accent hover:underline"
            >
              {showFull ? "Show Less" : "Read More"}
            </span>
          )}
        </p>

        {/* Progress Bar */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="relative w-full h-4 bg-gray-300 rounded-md">
            <div
              className="absolute top-[-0.625rem] h-7 rounded-md bg-gradient-to-r from-[#8E1BA4] to-[#B6084B]"
              style={{ width: `${progress}%` }}
            ></div>

            <div
              className="absolute flex flex-col items-center"
              style={{ left: `calc(${progress}% - 2rem)`, top: "-3.5rem" }}
            >
              <span className="mt-1 text-xs font-semibold text-white">
                {progress}%
              </span>
              <img src="/images/Call.svg" alt="call" className="w-6 h-6" />
              <img src="/images/Group.svg" alt="group" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
