import Topbar from "./Topbar";
import Left from "./Left";
import Right from "./Right";
import { useState,useRef } from "react";
import type { TimeSensitivity } from "../../api/campaign";
import { createCampaign } from "../../api/campaign";
import { OutlinedButton } from "../utils/OutlinedButton";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../utils/MainButton/Button";

function CreateCampaign() {
  const [name, setName] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [description, setDescription] = useState("");
  const [aiAssistantName, setAIAssistantName] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [postmanCollection, setPostmanCollection] = useState("");
  const campaignImageRef = useRef<HTMLInputElement | null>(null);
  const transcriptRef = useRef<HTMLInputElement | null>(null);
  const assistanceRef = useRef<HTMLInputElement | null>(null);
  const callingRef = useRef<HTMLInputElement | null>(null);
  

  const [timeSensitivity, setTimeSensitivity] = useState<TimeSensitivity>({
    week_days: "",
    call_date: "",
    start_time: "",
    end_time: "",
    end_date: "",
    call_mode: "",
  });
  const handleCancel = () => {
    setName("");
    setHashtags("");
    setDescription("");
    setAIAssistantName("");
    setAssignTo("");
    setPostmanCollection("");
    setTimeSensitivity({
      week_days: "",
      call_date: "",
      start_time: "",
      end_time: "",
      end_date: "",
      call_mode: "",
    });
    setCalling(null);
    setTranscript(null);
    setAssistance(null);
    setCampaignImage(null);
    setCampaignPdf("");
    setMessage("");
  };
  
  const [calling, setCalling] = useState<File | null>(null);
  const [transcript, setTranscript] = useState<File | null>(null);
  const [assistance, setAssistance] = useState<File | null>(null);
  const [campaignImage, setCampaignImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [campaignPdf, setCampaignPdf] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (
      !name.trim() ||
      !hashtags.trim() ||
      !description.trim() ||
      !aiAssistantName.trim() ||
      !assignTo.trim() ||
      !timeSensitivity.week_days.trim() ||
      !timeSensitivity.call_date.trim() ||
      !timeSensitivity.start_time.trim() ||
      !timeSensitivity.end_time.trim() ||
      !timeSensitivity.end_date.trim() ||
      !timeSensitivity.call_mode.trim() ||
      !calling ||
      !postmanCollection.trim() ||
      !transcript ||
      !assistance ||
      !campaignImage
    ) {
      toast("❌ Please fill in all required fields before submitting.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const payload = {
        name,
        hashtags,
        description,
        ai_assistant_name: aiAssistantName,
        assign_to: assignTo,
        timeSensitivity,
        calling,
        transcript,
        assistance,
        campaignImage,
        postman_collection: postmanCollection,
        campaign_pdf: campaignPdf,
      };

      const response = await createCampaign(payload);
      toast("✅ Campaign created successfully!");
      console.log("Response:", response);
    } catch (error) {
      console.error("Failed to create campaign", error);
      toast("❌ Failed to create campaign.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen overflow-y-scroll bg-primaryA">
      <Toaster />
      <div className="sticky top-0 z-20">
        <Topbar title="Campaign Details Here" />
      </div>

      <div className="flex pt-3.5 px-2 items-start">
        {/* Left Panel */}
        <Left
          name={name}
          setName={setName}
          hashtags={hashtags}
          setHashtags={setHashtags}
          description={description}
          setDescription={setDescription}
          aiAssistantName={aiAssistantName}
          setAIAssistantName={setAIAssistantName}
          transcript={transcript}
          setTranscript={setTranscript}
          assistance={assistance}
          setAssistance={setAssistance}
          campaignImage={campaignImage}
          setCampaignImage={setCampaignImage}
          postmanCollection={postmanCollection}
          setPostmanCollection={setPostmanCollection}
          campaignPdf={campaignPdf}
          setCampaignPdf={setCampaignPdf}
          transcriptRef={transcriptRef}
          assistanceRef={assistanceRef}
          campaignImageRef={campaignImageRef}
        />

        {/* Right Panel + Button */}
        <div className="w-[50%] flex flex-col items-center gap-4">
          <Right
            setCalling={setCalling}
            assignTo={assignTo}
            setAssignTo={setAssignTo}
            timeSensitivity={timeSensitivity}
            setTimeSensitivity={setTimeSensitivity}
            postmanCollection={postmanCollection}
            setPostmanCollection={setPostmanCollection}
            calling={calling}
            callingRef={callingRef}

          />

          <div className="flex gap-4">
            <OutlinedButton
              onClick={handleCancel}
              className="w-[340px] rounded-[5px]"
              InnerClass="rounded-[4.8px]"
            >
              Cancel
            </OutlinedButton>

            <Button
              variant="primary"
              size="xs"
              className="w-[340px] py-4 "
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>

          {message && <p className="text-sm text-white">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default CreateCampaign;
