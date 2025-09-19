import Sidebar from "../components/Mainpage/Sidebar/Sidebar";
// import Aivoice from '../components/Mainpage/Ai-voice/Aivoice'
// import ConversationTableSection from "../components/ConversationDataCard/ConversationTableSection";
// import CreateCampaign from "../components/CreateCampaign/CreateCampaign";
// import CampaignPage from "../components/CampaignCard/CampaignPage";
import { Outlet } from "react-router-dom";
function MainPage() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <Outlet/>
    </div>
  );
}

export default MainPage;
