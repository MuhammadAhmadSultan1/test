import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CompanyDetails from "./routes/companyDetails/index";

import {
  COMPANYDETAILS,
  COMPETITOR,
  EMAIL,
  GOALS,
  HOME,
  SERVICES,
  TARGETAUDIENCE,
  UPLOADLOGO,
  WEBSITE,
} from "./config/paths";
import UploadLogo from "./routes/uploadLogo/index";
import Services from "./routes/services";
import TargetAudience from "./routes/targetAudience";
import Competitors from "./routes/competitors";
import Goals from "./routes/goals";
import UserEmail from "./routes/email";
import Website from "./routes/website";
import { FrontOne } from "./components/cards/One/front";

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

        <Route path={EMAIL} element={<UserEmail />} />
        <Route path={WEBSITE} element={<Website />} />

        <Route path={HOME} element={<FrontOne />} />
      </Routes>
    </Router>
  );
};
