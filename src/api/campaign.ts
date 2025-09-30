import useApi from "../hooks/useApi";

// Time sensitivity structure
export interface TimeSensitivity {
  week_days: string;
  call_date: string;
  start_time: string;
  end_time: string;
  end_date: string;
  call_mode: string;
}

// Campaign document object (like campaignImage, calling, etc.)
export interface CampaignDocument {
  id: string;
  url: string;
  type: string; // e.g., "campaignImage", "calling", "transcript", etc.
  campaign_id: string;
  user_id: string | null;
  createdAt: string;
  updatedAt: string;
}

// Time sensitivity object returned by backend
export interface CampaignTimeSensitivity {
  id: string;
  campaign_id: string;
  week_days: string;
  call_date: string;
  start_time: string;
  end_time: string;
  end_date: string;
  call_mode: string;
  createdAt: string;
  updatedAt: string;
}

// Backend campaign type
export interface Campaign {
  id: string;
  name: string;
  hashtags: string;
  description: string;
  ai_assistant_name: string;
  assign_to: string;
  user_id: string;
  createdAt: string;
  updatedAt: string;
  documents: CampaignDocument[];
  campaignTimeSensitivity: CampaignTimeSensitivity[];
}

// Payload to create a campaign
export interface CreateCampaignPayload {
  name: string;
  hashtags: string;
  description: string;
  ai_assistant_name: string;
  assign_to: string;
  timeSensitivity: TimeSensitivity;
  postman_collection: string;
  campaign_pdf: string;   
  calling?: File ;
  transcript?: File | null;
  assistance?: File | null;
  campaignImage?: File | null;
  
}

// API response after creating a campaign
export interface CreateCampaignResponse {
  message: string;
  id: string;
  success: boolean;
}

/// Function to create a new campaign (multipart/form-data)
export const createCampaign = async (
  data: CreateCampaignPayload
): Promise<CreateCampaignResponse> => {
  const formData = new FormData();

  // normal string fields
  formData.append("name", data.name);
  formData.append("hashtags", data.hashtags);
  formData.append("description", data.description);
  formData.append("ai_assistant_name", data.ai_assistant_name);
  formData.append("assign_to", data.assign_to);
  formData.append("timeSensitivity", JSON.stringify(data.timeSensitivity));
  formData.append("postman_collection", data.postman_collection);
  formData.append("campaign_pdf", data.campaign_pdf);

  

  
  




  // binary file fields
  if (data.calling) formData.append("calling", data.calling);
  if (data.transcript) formData.append("transcript", data.transcript);
  if (data.assistance) formData.append("assistance", data.assistance);
  if (data.campaignImage) formData.append("campaignImage", data.campaignImage);

  // Let the browser set the correct multipart Content-Type with boundary
  return useApi.post<CreateCampaignResponse>("/campaigns", formData, {
    headers: {},
  });
};


// Function to fetch all campaigns with their documents (e.g. campaignImage)
export const getAllCampaigns = async (): Promise<Campaign[]> => {
  const response = await useApi.get<{ success: boolean; data: Campaign[] }>(
    "/campaigns"
  );
  return response.data;
};
