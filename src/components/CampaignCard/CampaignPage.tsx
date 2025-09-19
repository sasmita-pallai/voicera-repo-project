import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
import { CgSearch } from "react-icons/cg";
import Topbar from "../CreateCampaign/Topbar";
import { getAllCampaigns, type Campaign } from "../../api/campaign";
import AddCampaignCard from "./AddCampaignCard";
import Spinner from "../utils/MainButton/Spinner";
import { useNavigate } from "react-router-dom";

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const progressValues = [70, 90, 100, 90, 90]; // Static dummy values
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getAllCampaigns();

        const sortedData = [...data].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setCampaigns(sortedData);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);


  // Optional search filter
  const filteredCampaigns = campaigns.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full h-screen min-h-full overflow-y-auto text-white bg-primaryA">
      {/* Topbar and Search */}
      <div className="flex flex-col bg-[#2c2c2c] sticky top-0 z-20">
        <Topbar title="Setup Your Campaign" />
        <div className="px-3 mb-3">
          <div className="flex items-center gap-2 border border-white bg-[#2C2C2C] rounded-md p-2 w-full max-w-md">
            <CgSearch />
            <input
              type="text"
              className="w-full text-sm bg-transparent outline-none"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Campaign Cards */}
      <div className="pb-3 grid grid-cols-1 gap-4 px-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="flex items-center justify-center col-span-full">
            <Spinner />
          </div>
        ) : filteredCampaigns.length > 0 ? (
          <>
            {filteredCampaigns.map((card, index) => {
              const campaignImageDoc = card.documents?.find(
                (doc) => doc.type === "campaignImage"
              );
              const imageUrl = campaignImageDoc?.url;

              return (
                <CampaignCard
                  key={card.id}
                  title={card.name}
                  description={card.description}
                  tags={card.hashtags}
                  progress={progressValues[index % progressValues.length]}
                  campaignImage={imageUrl}
                  onClick={() => navigate("/main/conversation", { state: { campaignId: card.id } })}
                />
              );
            })}
            <AddCampaignCard />
          </>
        ) : (
          <>
            <p className="text-white col-span-full">No campaigns available.</p>
            <AddCampaignCard />
          </>
        )}
      </div>
    </div>
  );
};

export default CampaignPage;
