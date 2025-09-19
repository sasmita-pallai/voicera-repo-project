interface WeekDaysProps {
  selected: string;
  onChange: (value: string) => void;
}

const WeekDays = ({ selected, onChange }: WeekDaysProps) => {
  const selectedDays = selected.split(",").filter(Boolean);

  const toggleDay = (day: string) => {
    const updated = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    onChange(updated.join(","));
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="flex flex-wrap justify-center w-full">
      {days.map((day, index) => {
        const isActive = selectedDays.includes(day);
        return (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`flex-1 py-4 px-5 text-[15px] text-white/50 text-center border-1 border-[#3A3A3A]
              ${isActive ? "bg-[#3A3A3A]" : "bg-[#1F1F1F] hover:bg-[#333]"}
              ${index === 0 ? "rounded-l-md" : ""}
              ${index === days.length - 1 ? "rounded-r-md" : ""}`}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
};

export default WeekDays;
