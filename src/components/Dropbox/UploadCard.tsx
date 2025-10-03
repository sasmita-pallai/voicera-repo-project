// cSpell:ignore Reusablecard postmancard borderbg
import React, { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import ReusableCard from "./Reusablecard";

export const UploadStatus = {
  Idle: 0,
  Uploading: 1,
  Failed: 2,
  Complete: 3,
} as const;
export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus];

export const UploadCardVariant = {
  Document: "document",
  Media: "media",
  Minimal: "minimal",
  Postman: "postman",
} as const;
export type UploadCardVariant =
  (typeof UploadCardVariant)[keyof typeof UploadCardVariant];

export const UploadCardSize = {
  Sm: "sm",
  Md: "md",
  Lg: "lg",
  Xl: "xl",
} as const;
export type UploadCardSize =
  (typeof UploadCardSize)[keyof typeof UploadCardSize];

interface UploadCardProps {
  variant?: UploadCardVariant;
  className?: string;
  file?: File | null;
  link?: string;
  size?: UploadCardSize;
  buttonLabel?: string;
  onFileSelect?: (file: File) => void;
  onLinkSubmit?: (url: string) => void;
  linkTitle?: string;
  linkDescription?: string;
  linkPlaceholder?: string;
  mediaType?: "callingSheet" | "transcript" | "assistance";
  postmancardType?: "postman_collection" |"campaign_pdf"
  inputRef?: React.RefObject<HTMLInputElement | null>

}
const mediaLabels = {
  callingSheet: {
    title: "Upload Campaign Calling Sheet",
    description: "Paste or upload the campaign calling sheet file/URL.",
    placeholder: "example.com",
  },
  transcript: {
    title: "Upload Campaign Transcript",
    description: "Paste or upload the campaign transcript file/URL.",
    placeholder: "example.com",
  },
  assistance: {
    title: "Upload Campaign Assistance File",
    description: "Paste or upload campaign assistance materials here.",
    placeholder: "example.com",
  },
} as const;

const postmanLabels = {
  postman_collection: {
    title: "Add Postman collection",
    description: "Add your postman collection URL to continue",
    placeholder: "example.com",
  },
  campaign_pdf: {
    title: "Add campaign_pdf url",
    description: "Add your campaign_pdf URL to continue.",
    placeholder: "example.com",
  },
 
} as const;

const variantClass: Record<UploadCardVariant, string> = {
  [UploadCardVariant.Document]:
    " bg-borderbg border-dashed border-contentSecondary p-4 ",
  [UploadCardVariant.Media]: " px-6 py-6 border-none bg-borderbg rounded-xl ",
  [UploadCardVariant.Minimal]:
    " bg-borderbg border-dashed border-contentSecondary px-3 py-2 rounded-xl",
  [UploadCardVariant.Postman]:
    " bg-borderbg border-dashed border-none px-3 py-2 rounded-xl",
};

const sizeClass: Record<UploadCardSize, string> = {
  [UploadCardSize.Sm]: "w-[250px] h-[100px]",
  [UploadCardSize.Md]: "w-[372px] h-[136px]",
  [UploadCardSize.Lg]: "w-[510px] h-[120px]",
  [UploadCardSize.Xl]: "w-[600px] h-[220px]",
};

const UploadCard: React.FC<UploadCardProps> = ({
  variant = UploadCardVariant.Document,
  className,
  size = UploadCardSize.Md,
  buttonLabel = "Upload Media",
  onFileSelect,
  file,
  onLinkSubmit,
  linkTitle = "Add File Link",
  linkDescription = "Paste your file URL here.",
  linkPlaceholder = "https://example.com",
  mediaType = "callingSheet",
  postmancardType = "postman_collection",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<UploadStatus>(UploadStatus.Idle);
  const [progress, setProgress] = useState<number>(0);
  const [showPostmanCard, setShowPostmanCard] = useState(false);
  const [link, setLink] = useState<string>(""); // 🔥 this fixes the error

  const handleBrowse = () => inputRef.current?.click();

  const handleCancel = () => {
    setStatus(UploadStatus.Idle);  // reset status
    setProgress(0);                // reset progress
    setLink("");                    // reset link
    if (inputRef.current) {
      inputRef.current.value = ""; // reset file input
    }
    setShowPostmanCard(false);      // close any open cards
  };
  

  const handleRetry = () => inputRef.current?.click();

  const handleDone = () => {
    setStatus(UploadStatus.Idle);
    setProgress(0);
    // Keep the file so it shows in idle state with file name and X button
  };

  const handleDeleteFile = () => {
    setStatus(UploadStatus.Idle);
    setProgress(0);
    setLink("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onFileSelect?.(null as unknown as File); // Clear the file
    onLinkSubmit?.(""); // Clear the link
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      simulateUpload();
      onFileSelect?.(file);
    }
  };

  // ✅ UPDATED: Only fail upload if the user is actually offline
  const simulateUpload = () => {
    setStatus(UploadStatus.Uploading);
    setProgress(0);
    let percent = 0;

    const interval = setInterval(() => {
      percent += 10;
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);

        if (!navigator.onLine) {
          setStatus(UploadStatus.Failed);
        } else {
          setStatus(UploadStatus.Complete);
          // Auto-transition to idle state to show clean Figma UI
          setTimeout(() => {
            setStatus(UploadStatus.Idle);
          }, 1000);
        }
      }
    }, 300);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && status === UploadStatus.Complete) {
        handleDone();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [status]);

  const baseClass =
    "border-2 flex flex-col justify-center items-center text-sm text-primaryB transition-all duration-300 overflow-hidden";

  const renderIdleContent = () => {
    switch (variant) {
      case UploadCardVariant.Media:
        return (
            <>
              {file ? (
                <div className="w-full">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex-1 mr-2 flex flex-col items-center">
                      <img
                        src="/images/UploadFile.svg"
                        alt="upload"
                        className="w-6 h-6 mb-2"
                      />
                      <div className="h-[4px] bg-accent w-full mb-1" />
                      <p className="text-sm text-white truncate text-center w-full">{file.name}</p>
                    </div>
                    <button
                      onClick={handleDeleteFile}
                      className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors flex-shrink-0"
                      title="Remove file"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M18 6L6 18M6 6l12 12"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
              <>
                <img
                  src="/images/UploadFile.svg"
                  alt="upload"
                  className="w-6 h-6 mb-2"
                  onClick={handleBrowse}
                />
                <p className="mb-2 text-[14px] text-contentTertiary font-poppins cursor-pointer">
                  <span
                    className="underline cursor-pointer"
                    onClick={() => setShowPostmanCard(true)}
                  >
                    Link
                  </span>{" "}
                  or drag and drop
                </p>
                <button
                  onClick={handleBrowse}
                  className="px-4 py-2 text-[12px] leading-[16px] rounded-full text-primaryB border-primaryB/30 border-2 bg-primaryA/10"
                >
                  {buttonLabel}
                </button>
              </>
            )}
            {showPostmanCard && (
              <ReusableCard
              title={mediaLabels[mediaType ?? "callingSheet"].title}
              description={mediaLabels[mediaType ?? "callingSheet"].description}
              placeholder={mediaLabels[mediaType ?? "callingSheet"].placeholder}
            
                onClose={() => setShowPostmanCard(false)}
                onSubmit={(url) => {
                  setLink(url);
                  setShowPostmanCard(false);
                  onLinkSubmit?.(url);
                }}
              />
            )}
          </>
        );

      case UploadCardVariant.Postman:
        return (
            <>
              {link && link.length > 0 ? (
                <div className="flex flex-col w-full gap-2">
                  <img
                    src="/images/UploadFile.svg"
                    alt="upload"
                    className="block w-6 h-6 mx-auto"
                    onClick={handleBrowse}
                  />

                  <div className="flex items-start w-full px-4 py-3 border-dashed rounded-lg border-1 overflow-auto max-h-20">
                    <span className="text-contentTertiary text-[16px] font-poppins break-all whitespace-pre-wrap leading-5 flex-1">
                      {link}
                    </span>
                    <button
                      onClick={handleDeleteFile}
                      className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors ml-2 flex-shrink-0"
                      title="Remove link"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M18 6L6 18M6 6l12 12"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
            ) : (
              <>
                <img
                  src="/images/UploadFile.svg"
                  alt="upload"
                  className="w-6 h-6 mb-2"
                  onClick={handleBrowse}
                />
                <p className="mb-2 text-[14px] text-contentTertiary font-poppins cursor-pointer">
                  <span
                    className="underline cursor-pointer"
                    onClick={() => setShowPostmanCard(true)}
                  >
                    Link
                  </span>{" "}
                  or drag and drop
                </p>
                <button
                  onClick={handleBrowse}
                  className="px-4 py-2 text-[12px] leading-[16px] rounded-full text-primaryB border-primaryB/30 border-2 bg-primaryA/10"
                >
                  {buttonLabel}
                </button>
              </>
            )}

            {showPostmanCard && (
              <ReusableCard
              title={postmanLabels[postmancardType ?? "postman_collection"].title}
              description={postmanLabels[postmancardType ?? "postman_collection"].description}
              placeholder={postmanLabels[postmancardType ?? "postman_collection"].placeholder}
                onClose={() => setShowPostmanCard(false)}
                onSubmit={(url) => {
                  setLink(url);
                  setShowPostmanCard(false);
                  onLinkSubmit?.(url);
                }}
              />
            )}
          </>
        );

      case UploadCardVariant.Minimal:
        return (
          <>
            <p className="mb-4 text-[14px] text-contentTertiary font-poppins">
              Drop files here to upload…
            </p>
            <button
              onClick={handleBrowse}
              className="px-4 py-2 text-[12px] leading-[16px] rounded-full text-primaryB border-primaryB/30 border-2 bg-primaryA/10"
            >
              {buttonLabel}
            </button>
            {/* 🔥 Add this */}
            <p className="mt-2 text-[14px] text-contentTertiary font-poppins">
              <span
                className="underline cursor-pointer"
                onClick={() => setShowPostmanCard(true)}
              >
                Link
              </span>
            </p>

            {showPostmanCard && (
              <ReusableCard
                title={linkTitle}
                description={linkDescription}
                placeholder={linkPlaceholder}
                onClose={() => setShowPostmanCard(false)}
                onSubmit={(url) => {
                  setLink(url);
                  setShowPostmanCard(false);
                  onLinkSubmit?.(url);
                }}
              />
            )}
          </>
        );
      default:
        return (
          <>
            <p className="mb-2 text-[14px] text-contentTertiary font-poppins">
              Drop files here to upload…
            </p>
            <button
              onClick={handleBrowse}
              className="bg-backgroundTertiary rounded-3xl h-[36px] w-[120px] flex items-center justify-center"
            >
              <span className="text-[14px] font-medium text-contentPrimary">
                {buttonLabel}
              </span>
            </button>
          </>
        );
    }
  };

  return (
    <div
      className={twMerge(
        baseClass,
        variantClass[variant],
        sizeClass[size],
        className
      )}
    >
      <input
        ref={inputRef}
        onChange={handleFileChange}
        type="file"
        accept={
          variant === UploadCardVariant.Media
            ? (
                mediaType === "callingSheet"
                  ? "text/csv"      // Calling sheet = CSV
                  : mediaType === "transcript"
                  ? "audio/*"      // Campaign transcript = CSV (file)
                  : mediaType === "assistance"
                  ? "text/csv"       // Voice assistant = audio
                  : undefined
              )
            : variant === UploadCardVariant.Postman
            ? (postmancardType === "campaign_pdf" ? "application/pdf" : undefined)
            : undefined
        }
        className="hidden"
      />

      {status === UploadStatus.Idle && renderIdleContent()}

      {status === UploadStatus.Uploading && (
        <>
          <div className="w-[292px] flex flex-col gap-[14px] justify-center items-center">
            <div
              className="h-[4px] bg-borderAccent"
              style={{ width: `${progress}%` }}
            />
            <span className="text-primaryB font-medium text-[16px]">
              {progress}% complete
            </span>
          </div>
          <button
            onClick={handleCancel}
            className="mt-4 bg-backgroundTertiary rounded-3xl h-[36px] w-[100px] flex items-center justify-center"
          >
            <span className="text-[14px] font-medium p-3 text-contentPrimary">
              Cancel
            </span>
          </button>
        </>
      )}

      {status === UploadStatus.Failed && (
        <>
          <div className="w-[292px] flex flex-col gap-[14px] justify-center items-center">
            <div className="h-[4px] bg-contentTertiary w-1/2" />
            <span className="text-primaryB font-medium text-[16px]">
              Upload failed
            </span>
          </div>
          <button
            onClick={handleRetry}
            className="mt-4 bg-backgroundTertiary rounded-3xl h-[36px] w-[100px] flex items-center justify-center"
          >
            <span className="text-[14px] p-3 font-medium text-contentPrimary">
              Try again
            </span>
          </button>
        </>
      )}

      {status === UploadStatus.Complete && (
        <div className="w-full">
          <div className="flex items-start justify-between w-full">
            <div className="flex-1 mr-2 flex flex-col items-center">
              <img src="/images/UploadFile.svg" alt="upload" className="w-6 h-6 mb-2" />
              <div className="h-[4px] bg-accent w-full mb-1" />
              <p className="text-sm text-white truncate text-center w-full">{file ? file.name : link}</p>
            </div>
            <button
              onClick={handleDeleteFile}
              className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors flex-shrink-0"
              title="Remove"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadCard;
