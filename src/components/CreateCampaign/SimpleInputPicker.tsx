import { useRef } from "react";

interface SimpleInputPickerProps {
  type?: "date" | "time"; // 👈 support both
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const SimpleInputPicker = ({
  type = "date",
  placeholder = "Select",
  value,
  onChange,
  className = "",
}: SimpleInputPickerProps) => {
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const openNativePicker = () => {
    hiddenInputRef.current?.showPicker(); // 👈 opens native date or time picker
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div
      className={`relative w-full ${className}`}
      onClick={openNativePicker} // 👈 entire container clickable
    >
      {/* Fake visible input */}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        readOnly
        className="w-full px-4 py-3 pr-10 text-sm text-white rounded-md cursor-pointer bg-borderbg "
      />

      {/* Real hidden native input */}
      <input
        type={type}
        ref={hiddenInputRef}
        onChange={handleChange}
        className="absolute inset-0 w-[237px]  h-full opacity-0 cursor-pointer"
      />

      {/* Custom arrow icon */}
      <img
        src="/images/arrow.svg"
        alt="arrow"
        className="absolute w-5 h-5 -translate-y-1/2 pointer-events-none right-3 top-1/2"
      />
    </div>
  );
};

export default SimpleInputPicker;
