import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import PublicLayout from "./components/PublicLayout";
import Landing from "./pages/Landing";
import Login from "./components/LoginForm/Login";
import Register from "./components/Register";
import MainPage from "./pages/MainPage";
import CreateCampaign from "./components/CreateCampaign/CreateCampaign";
import CampaignPage from "./components/CampaignCard/CampaignPage";
import ConversationTableSection from "./components/ConversationDataCard/ConversationTableSection";
import Conversation from "./components/conversation/Conversations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          {/* Public Routes */}
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />


          {/* Protected/Main Routes */}
          <Route path="main" element={<MainPage />}>
            {/*to show CreateCampaign by default */}
            <Route index element={<CampaignPage />} />
            <Route path="create-campaign" element={<CreateCampaign />} />
            <Route path="Campaigns" element={<CampaignPage />} />
            <Route path="conversation" element={<ConversationTableSection />} />
            <Route path="conversationSummary" element={<Conversation />} />
          </Route>
        </Route>

        {/* Catch-all redirect to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
