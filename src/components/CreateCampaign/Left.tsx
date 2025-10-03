import CampaignPhoto from "./CampaignPhoto";
import Container from "./Container";
import Input from "./Input";
import UploadCard, { UploadCardVariant } from "../Dropbox/UploadCard";

interface LeftProps {
  name: string;
  setName: (value: string) => void;
  hashtags: string;
  setHashtags: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  aiAssistantName: string;
  setAIAssistantName: (value: string) => void;
  transcript: File | null;
  setTranscript: (file: File | null) => void;
  assistance: File | null;
  setAssistance: (file: File | null) => void;
  campaignImage: File | null;
  setCampaignImage: (file: File | null) => void;
  postmanCollection: string;
  setPostmanCollection: (value: string) => void;
  campaignPdf: string;
  setCampaignPdf: (value: string) => void;
  campaignImageRef?: React.RefObject<HTMLInputElement | null>;
  transcriptRef?: React.RefObject<HTMLInputElement | null>;
  assistanceRef?: React.RefObject<HTMLInputElement | null>;
}

function Left({
  name,
  setName,
  hashtags,
  setHashtags,
  description,
  setDescription,
  aiAssistantName,
  setAIAssistantName,
  transcript,
  setTranscript,
  assistance,
  setAssistance,
  campaignImage,
  setCampaignImage,
  campaignPdf,
  setCampaignPdf,
  campaignImageRef,
  transcriptRef,
  assistanceRef,
}: LeftProps) {
  return (
    <div className="p-2 flex flex-col gap-2 w-[50%]">
      <CampaignPhoto
        title="Campaign Photo"
        campaignImage={campaignImage}
        setCampaignImage={setCampaignImage}
      />

      <Container title="Basic Information">
        <Input
          placeholder="Campaign Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Hashtags"
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
        />
        <div className="bg-borderbg h-20 flex justify-between items-start p-2 pl-3 rounded-[4px]">
          <textarea
            placeholder="Campaign Description"
            className="text-[12px] font-secondary w-[90%] h-full bg-transparent outline-none px-2 text-white resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {description && (
            <button
              className="cursor-pointer"
              onClick={() => setDescription("")}
            >
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
      </Container>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-5xl mx-auto bg-[#18181A]">
        <div className="w-full md:w-[190px] flex-1">
          <Container title="Upload Your File" titledesc="(Campaign Transcript)">
            <UploadCard
              variant="media"
              mediaType="transcript"
              className="h-30 w-full rounded-[4px]"
              onFileSelect={setTranscript}
              file={transcript}
              inputRef={transcriptRef}
            />
          </Container>
        </div>

        <div className="w-full md:w-[200px] flex-1">
          <Container title="Campaign_pdf" titledesc="(Campaign PDF)">
            <UploadCard
              variant={UploadCardVariant.Postman}
              postmancardType="campaign_pdf"
              buttonLabel="Upload Media"
              className="h-30 w-full rounded-[4px]"
              inputRef={campaignImageRef}
              onLinkSubmit={(url: string) => setCampaignPdf(url)}
              link={campaignPdf}
            />
          </Container>
        </div>
      </div>

      <Container title="Your AI Assistant">
        <Input
          placeholder="Name Your Voice Assistant"
          value={aiAssistantName}
          onChange={(e) => setAIAssistantName(e.target.value)}
        />
        <div>
          <span className="text-[11px] text-[#a8a8a8]">
            Upload Your Voice Assistant
          </span>
          <UploadCard
            variant="media"
            mediaType="assistance"
            className="h-30 w-full rounded-[4px]"
            onFileSelect={setAssistance}
            file={assistance}
            inputRef={assistanceRef}
          />
        </div>
      </Container>
    </div>
  );
}

export default Left;
