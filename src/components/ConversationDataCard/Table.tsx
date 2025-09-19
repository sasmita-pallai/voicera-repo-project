import { twMerge } from "tailwind-merge";
import { BsThreeDots } from "react-icons/bs";
import { FaSort } from "react-icons/fa";

export const SENTIMENT = {
  HIGHLYINTERESTED: "HIGHLYINTERESTED",
  INTERESTED: "INTERESTED",
  NOTINTERESTED: "NOTINTERESTED",
  REJECTED: "REJECTED",
  NEUTRAL: "NEUTRAL",
} as const;

export type SENTIMENT = typeof SENTIMENT[keyof typeof SENTIMENT];

export const STATUS = {
  COMPLETED: "COMPLETED",
  REJECTED: "REJECTED",
  FAILED: "FAILED",
} as const;

export type STATUS = typeof STATUS[keyof typeof STATUS];

interface Idata {
  trackingid: string;
  mobileno: number;
  customer: string;
  date: string;
  callduration: string;
  lead: number;
  sentiment: SENTIMENT;
  status: STATUS;
  image?: string;
}

interface TableProps {
  data: Idata[];
  onThreeDotsClick?: (row: any) => void;
}

const sentimentStyle = (sentiment: SENTIMENT) => {
  switch (sentiment) {
    case SENTIMENT.HIGHLYINTERESTED:
      return twMerge("bg-[#B5FFC1] text-black px-3 py-1 rounded-full text-sm");
    case SENTIMENT.INTERESTED:
      return twMerge("bg-[#B5DAFF] text-black px-3 py-1 rounded-full text-sm");
    case SENTIMENT.NOTINTERESTED:
      return twMerge("bg-[#FFDC81] text-black px-3 py-1 rounded-full text-sm");
    case SENTIMENT.REJECTED:
      return twMerge("bg-[#C83F3F] text-black px-3 py-1 rounded-full text-sm");
    case SENTIMENT.NEUTRAL:
      return twMerge("bg-[#D1D5DB] text-black px-3 py-1 rounded-full text-sm");
    default:
      return "";
  }
};

const sentimentLabel = (sentiment: SENTIMENT) => {
  switch (sentiment) {
    case SENTIMENT.HIGHLYINTERESTED:
      return "Highly Interested";
    case SENTIMENT.INTERESTED:
      return "Interested";
    case SENTIMENT.NOTINTERESTED:
      return "Not Interested";
    case SENTIMENT.REJECTED:
      return "Rejected";
    case SENTIMENT.NEUTRAL:
      return "Neutral";
    default:
      return "";
  }
};

const statusStyle = (status: STATUS) => {
  switch (status) {
    case STATUS.COMPLETED:
      return twMerge("bg-[#EBF9F1] text-[#1F9254] px-3 py-1 rounded-full text-sm");
    case STATUS.REJECTED:
      return twMerge("bg-[#EBF9F1] text-[#C83F3F] px-3 py-1 rounded-full text-sm");
    case STATUS.FAILED:
      return twMerge("bg-[#EBF9F1] text-[#C83F3F] px-3 py-1 rounded-full text-sm");
    default:
      return "";
  }
};

const statusLabel = (status: STATUS) => {
  switch (status) {
    case STATUS.COMPLETED:
      return "Completed";
    case STATUS.REJECTED:
      return "Rejected";
    case STATUS.FAILED:
      return "Failed";
    default:
      return "";
  }
};

const HeaderCell = ({ label }: { label: string }) => (
  <div className="flex justify-center items-center gap-1 whitespace-nowrap">
    <span>{label}</span>
    <FaSort size={12} className="text-gray-400" />
  </div>
);

function Table({ data, onThreeDotsClick }: TableProps) {
  return (
    <div className="w-full h-full max-h-[calc(100vh-140px)] overflow-y-auto bg-BG-tertiary">
      <table className="min-w-full bg-[#2C2C2C] text-white text-sm">
        <thead className="sticky top-0 bg-[#2C2C2C] z-50">
          <tr className="bg-[#2C2C2C] w-full mb-10 uppercase text-xs font-bold">
            <th className="px-2 py-3">Tracking ID</th>
            <th className="px-2 py-3">
              <HeaderCell label="Mobile No." />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Customer" />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Date" />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Call Duration" />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Lead Score" />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Status" />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Sentiments" />
            </th>
            <th className="px-2 py-3">Conversation</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              className="border-b border-[#333333] odd:bg-[#333333] hover:bg-[#6c6c7f] transition-all"
            >
              <td className="px-2 py-3 text-center whitespace-nowrap">
                <span title={item.trackingid}>
                  {`#${String(item.trackingid).slice(0, 8)}`}
                </span>
              </td>

              <td className="px-2 py-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {item.image && (
                    <img
                      src={item.image}
                      alt="Profile"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  )}
                  <span>{item.mobileno}</span>
                </div>
              </td>

              <td className="px-2 py-3 text-center whitespace-nowrap">
                {item.customer}
              </td>
              <td className="px-2 py-3 text-center whitespace-nowrap">
                {item.date}
              </td>
              <td className="px-2 py-3 text-center whitespace-nowrap">
                {item.callduration}
              </td>
              <td className="px-2 py-3 text-center whitespace-nowrap">
                {item.lead} %
              </td>

              <td className="px-2 py-3 whitespace-nowrap">
                <div className="flex justify-center">
                  <span
                    className={twMerge(
                      statusStyle(item.status),
                      "min-w-[100px] text-center"
                    )}
                  >
                    {statusLabel(item.status)}
                  </span>
                </div>
              </td>

              <td className="px-2 py-3 whitespace-nowrap">
                <div className="flex justify-center">
                  <span
                    className={twMerge(
                      sentimentStyle(item.sentiment),
                      "min-w-[140px] text-center"
                    )}
                  >
                    {sentimentLabel(item.sentiment)}
                  </span>
                </div>
              </td>

              <td className="px-2 py-3 whitespace-nowrap">
                <div className="flex justify-center">
                  <BsThreeDots
                    className="text-xl cursor-pointer"
                    onClick={() =>
                      onThreeDotsClick && onThreeDotsClick(item)
                    }
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
