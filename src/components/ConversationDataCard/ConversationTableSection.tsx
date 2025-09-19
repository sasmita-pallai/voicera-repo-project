import Table from "./Table";
import Topbar from "./Topbar";
import Pagination from "../Pagination";
import { useState, useEffect } from "react";
import Filterbar from "./Filterbar";
import { useLocation } from "react-router-dom";
import Spinner from "../utils/MainButton/Spinner";
import { getConversationsByCampaignId } from "../../api/conversation";
import { SENTIMENT } from "./Table";
import Conversation from "../conversation/Conversations";

function ConversationTableSection() {
  const [currentPage, setCurrentPage] = useState(2);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [showConversation, setShowConversation] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState<{summary: any, conversation: any} | null>(null);
  const location = useLocation();
  const campaignId = location.state?.campaignId;

  useEffect(() => {
    const fetchConversations = async () => {
      if (!campaignId) return;
      setLoading(true);
      setNoData(false);
      try {
        const conversations = await getConversationsByCampaignId(campaignId);
        if (!conversations || conversations.length === 0) {
          setNoData(true);
          setData([]);
          return;
        }
        // Map API sentiment to SENTIMENT enum
        const mapSentiment = (sentiment: string) => {
          switch (sentiment?.toLowerCase()) {
            case "positive":
              return SENTIMENT.HIGHLYINTERESTED;
            case "interested":
              return SENTIMENT.INTERESTED;
            case "not interested":
              return SENTIMENT.NOTINTERESTED;
            case "rejected":
            case "negative":
              return SENTIMENT.REJECTED;
            case "neutral":
            default:
              return SENTIMENT.NEUTRAL;
          }
        };
        // Map API response to Table's expected data format (excluding conversation)
        const mapped = conversations.map((conv: any, idx: number) => ({
          trackingid: conv.id || idx + 1,
          mobileno: conv.mobile_no || "-",
          customer: conv.customer_name || "-",
          date: conv.createdAt ? new Date(conv.createdAt).toLocaleDateString() : "-",
          callduration: conv.duration ? `${Math.floor(conv.duration / 60)}:${(conv.duration % 60).toString().padStart(2, '0')}` : "-",
          lead: conv.lead_score || 0,
          sentiment: mapSentiment(conv.sentiments),
          image: undefined, // No image in API response
          summary: conv.summary || null,
          conversation: conv.conversation || null,
        }));
        setData(mapped);
      } catch (e: any) {
        // If error is 404 or message contains 'No call details found', show no data message
        if (e?.response?.status === 404 || e?.response?.data?.message?.includes('No call details found')) {
          setNoData(true);
        } else {
          setNoData(false);
        }
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchConversations();
  }, [campaignId]);

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="sticky top-0 z-20 bg-white dark:bg-[#0f172a]">
        {!showConversation && (
          <Topbar />
        )}
        {!showConversation && (
          <Filterbar status={2} />
        )}
      </div>

      <div className="flex-1 overflow-y-auto bg-primaryA">
        {loading ? (
          <Spinner />
        ) : noData ? (
          <div className="flex items-center justify-center h-full text-white text-lg font-semibold">
            No call details found
          </div>
        ) : showConversation && selectedConversation ? (
          <div className="h-full ">
            <Conversation 
              summary={selectedConversation.summary}
              conversation={selectedConversation.conversation}
              onClose={() => {
                setShowConversation(false);
                setSelectedConversation(null);
              }} 
            />
          </div>
        ) : (
          <Table
            data={data}
            onThreeDotsClick={(row) => {
              setSelectedConversation({
                summary: row.summary,
                conversation: row.conversation,
              });
              setShowConversation(true);
            }}
          />
        )}
      </div>

      {!showConversation && (
        <div className="sticky z-20 bg-white dark:bg-[#0f172a]">
          <Pagination
            totalPages={10}
            currentPage={currentPage}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
}

export default ConversationTableSection;
