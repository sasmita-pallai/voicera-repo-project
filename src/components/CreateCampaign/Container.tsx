import { twMerge } from "tailwind-merge";

interface Iprops {
  title: string;
  className?: string;
  children?: React.ReactNode;
  titledesc?: string;
}

function Container({ title, className, children, titledesc = "" }: Iprops) {
  const classes = {
    basic:
      "bg-[#18181A] text-white w-full rounded-[20px] h-auto px-4 py-2 pb-4 flex flex-col gap-2",
  };

  const showDownloadIcon =
    title === "Upload Your File" && titledesc === "(Calling sheet)";
    const handleDownload = (filePath: string) => {
      const link = document.createElement("a");
      link.href = filePath;
      link.download = filePath.split("/").pop() || "file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    

  return (
    <div className={twMerge(classes.basic, className)}>
      <div>
        <div className="flex items-center justify-between">
          <p className="flex gap-1.5 items-baseline">
            {title}
            <span className="text-[11px] text-[#a8a8a8]">{titledesc}</span>
          </p>

          {showDownloadIcon && (
            <img
              className="items-center cursor-pointer"
              src="/assets/Icons/download.svg"
              alt="download"
              onClick={()=>handleDownload("/images/pdf/calling_sheet.csv")}
            />
          )}
        </div>

        <div className="w-[184px] h-0.5 bg-gradient-to-r from-primaryB to-[#18181A]"></div>
      </div>

      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

export default Container;
