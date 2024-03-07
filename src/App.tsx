import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CampaignDesign from "./pages/CampaignDesign";
import ManagerDashboard from "./pages/ManagerDashboard";
import CampaignSetup from "./pages/CampaignSetup";
import CallerDashboard from "./pages/CallerDashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import CallerFeedback from "./pages/CallerFeedback";
import CampaignResearch from "./pages/CampaignResearch";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/campaigndesign":
        title = "";
        metaDescription = "";
        break;
      case "/manager-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/campaignsetup":
        title = "";
        metaDescription = "";
        break;
      case "/callerdashboard":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/resetpassword":
        title = "";
        metaDescription = "";
        break;
      case "/caller-feedback":
        title = "";
        metaDescription = "";
        break;
      case "/campaignresearch":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/campaigndesign" element={<CampaignDesign />} />
      <Route path="/manager-dashboard" element={<ManagerDashboard />} />
      <Route path="/campaignsetup" element={<CampaignSetup />} />
      <Route path="/callerdashboard" element={<CallerDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/caller-feedback" element={<CallerFeedback />} />
      <Route path="/campaignresearch" element={<CampaignResearch />} />
    </Routes>
  );
}
export default App;
