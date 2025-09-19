import useApi from "../hooks/useApi";

// Conversation type (adjust fields as needed based on actual API response)
export interface Conversation {
  // Example fields, update according to actual API response
  id: string;
  campaign_id: string;
  // Add other fields as needed
}

// Fetch all conversations for a given campaign ID
export const getConversationsByCampaignId = async (
  campaignId: string
): Promise<Conversation[]> => {
  const response = await useApi.get<{ success: boolean; data: Conversation[] }>(
    `/campaign-call-details/campaign/${campaignId}`
  );
  return response.data;
}; 