import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CompanyDetails from "./routes/companyDetails/index";

import {
  ADDRESS,
  CLIENTNAME,
  COMPANYDETAILS,
  COMPETITOR,
  DESIGNATION,
  EMAIL,
  GOALS,
  MAIN,
  SERVICES,
  TARGETAUDIENCE,
  TEMPLATES,
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
import ClientName from "./routes/clientName";
import Address from "./routes/address";
import Designation from "./routes/designation";
import Main from "./routes/main";
import { FrontOne } from "./components/cards/One/front";
import { Templates } from "./routes/templates";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={MAIN} element={<Main />} />

        <Route path={UPLOADLOGO} element={<UploadLogo />} />
        <Route path={COMPANYDETAILS} element={<CompanyDetails />} />
        <Route path={SERVICES} element={<Services />} />
        <Route path={TARGETAUDIENCE} element={<TargetAudience />} />
        <Route path={COMPETITOR} element={<Competitors />} />
        <Route path={GOALS} element={<Goals />} />

        <Route path={EMAIL} element={<UserEmail />} />
        <Route path={WEBSITE} element={<Website />} />
        <Route path={CLIENTNAME} element={<ClientName />} />
        <Route path={ADDRESS} element={<Address />} />
        <Route path={DESIGNATION} element={<Designation />} />

        <Route path={"/edit"} element={<FrontOne />} />
        <Route path={TEMPLATES} element={<Templates />} />
      </Routes>
    </Router>
  );
};
