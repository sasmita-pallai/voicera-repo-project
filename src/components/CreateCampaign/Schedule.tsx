import type { TimeSensitivity } from "../../api/campaign";
import SimpleInputPicker from "./SimpleInputPicker";
import WeekDays from "./WeekDays";
import { useCallback } from "react";

interface ScheduleProps {
  timeSensitivity: TimeSensitivity;
  setTimeSensitivity: (value: TimeSensitivity) => void;
}

export const Schedule = ({ timeSensitivity, setTimeSensitivity }: ScheduleProps) => {
  const handleChange = useCallback(
    (key: keyof TimeSensitivity, value: string) => {
      setTimeSensitivity({ ...timeSensitivity, [key]: value });
    },
    [timeSensitivity, setTimeSensitivity]
  );

  return (
    <div className="w-full rounded-md py-[7px]  text-white space-y-4">
      <div>
        <h3 className="mb-1 font-semibold text-white">Schedule</h3>
        <div className="flex space-x-4">
          <SimpleInputPicker
            placeholder="Start Date"
            value={timeSensitivity.call_date}
            onChange={(value) => handleChange("call_date", value)}
          />
          <SimpleInputPicker
            placeholder="End Date"
            value={timeSensitivity.end_date}
            onChange={(value) => handleChange("end_date", value)}
          />
        </div>
      </div>

      <div>
        <h3 className="mb-1 font-semibold w-full text-white">Week Days</h3>
        <WeekDays
          selected={timeSensitivity.week_days}
          onChange={(days) => handleChange("week_days", days)}
        />
      </div>

      <div>
        <div className="flex space-x-4">
          <SimpleInputPicker
            type="time"
            value={timeSensitivity.start_time}
            onChange={(value) => handleChange("start_time", value)}
            placeholder="Starting Time"
          />
          <SimpleInputPicker
            type="time"
            value={timeSensitivity.end_time}
            onChange={(value) => handleChange("end_time", value)}
            placeholder="Ending Time"
          />
        </div>
      </div>

      <div className="relative">
        <select
          className="w-full px-4 py-3 text-sm text-gray-300 rounded-md appearance-none bg-borderbg"
          value={timeSensitivity.call_mode}
          onChange={(e) => handleChange("call_mode", e.target.value)}
        >
          <option value="">Select Call Mode</option>
          <option value="AI">AI</option>
          <option value="Manual">Manual</option>
        </select>
        <img
          src="/images/arrow.svg"
          alt="arrow"
          className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-3 top-1/2"
        />
      </div>
    </div>
  );
};
