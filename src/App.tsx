import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CompanyDetails from "./routes/companyDetails/index";

import { COMPANYDETAILS, COMPETITOR, GOALS, SERVICES, TARGETAUDIENCE, UPLOADLOGO } from "./config/paths";
import UploadLogo from "./routes/uploadLogo/index";
import Services from "./routes/services";
import TargetAudience from "./routes/targetAudience";
import Competitors from "./routes/competitors";
import Goals from "./routes/goals";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={UPLOADLOGO} element={<UploadLogo />} />
        <Route path={COMPANYDETAILS} element={<CompanyDetails />} />
        <Route path={SERVICES} element={<Services />} />
        <Route path={TARGETAUDIENCE} element={<TargetAudience />} />
        <Route path={COMPETITOR} element={<Competitors />} />
        <Route path={GOALS} element={<Goals />} />



      </Routes>
    </Router>
  );
};
