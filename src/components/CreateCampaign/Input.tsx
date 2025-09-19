import { twMerge } from "tailwind-merge";

interface InputProps {
  className?: string;
  inputClass?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  className,
  inputClass,
  placeholder,
  value,
  onChange,
}: InputProps) {
  const classes = {
    basic:
      "bg-borderbg h-[46px] flex justify-between items-center p-2 pl-3 rounded-[4px]",
    input:
      "text-[12px] font-secondary w-[90%] h-full bg-transparent outline-none px-2 text-white",
  };

  const handleClear = () => {
    // Simulate clearing by dispatching an empty string
    const event = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <div className={twMerge(classes.basic, className)}>
      <input
        type="text"
        placeholder={placeholder}
        className={twMerge(classes.input, inputClass)}
        value={value}
        onChange={onChange}
        required
      />
     {value && (
       <button className="cursor-pointer" onClick={handleClear}>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
       >
         <path
           d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
           fill="#9E9E9E"
         />
       </svg>
     </button>
     )}
    </div>
  );
}

export default Input;
