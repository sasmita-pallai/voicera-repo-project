import React, { useState } from "react";
import { Button } from "../utils/MainButton/Button";

interface ReusableCardProps {
  title: string;
  description: string;
  placeholder?: string;
  onClose: () => void;
  onSubmit: (value: string) => void;
}

const ReusableCard: React.FC<ReusableCardProps> = ({
  title,
  description,
  placeholder = "Enter value...",
  onClose,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    onSubmit(inputValue.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="bg-gradient-to-tl from-accent to-primaryC p-[2px] rounded-2xl w-full max-w-lg">
        <div className="relative p-6 sm:p-10 bg-borderbg rounded-2xl">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center 
                       rounded-full bg-[#2C2C2C] text-white hover:bg-white 
                       hover:text-black transition"
            onClick={onClose}
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="mb-2 text-lg font-semibold text-center text-white sm:text-2xl">
            {title}
          </h2>

          {/* Description */}
          <p className="mb-4 text-sm text-center text-contentTertiary sm:text-base">
            {description}
          </p>

          {/* Input */}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            className="w-full h-[50px] mb-6 rounded-xl px-3 outline-none 
                       border border-white/20 bg-white text-black 
                       placeholder:text-gray-400"
          />

          {/* Submit Button */}
          <Button
            className="mt-2 w-[200px] sm:w-[242px] block mx-auto"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReusableCard;
