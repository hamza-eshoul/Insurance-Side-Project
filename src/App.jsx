import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import InsuranceForm from "./components/InsuranceForm";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import ContractPreview from "./components/ContractPreview";
import { useState } from "react";

const App = () => {
  const [nom, setNom] = useState("");
  const [prénom, setPrénom] = useState("");
  const [email, setEmail] = useState("");
  const [telNum, setTelNum] = useState("");
  const [mtContrat, setMtContrat] = useState("");
  const [dateSousContrat, setDateSousContrat] = useState("");
  const [mtRachat, setMtRachat] = useState("");
  const [dateDemandeRachat, setDateDemandeRachat] = useState("");
  const [irOneTranche, setIrOneTranche] = useState("");

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/insurance-form" />} />
          <Route
            path="/insurance-form"
            element={
              <InsuranceForm
                nom={nom}
                prénom={prénom}
                email={email}
                telNum={telNum}
                mtContrat={mtContrat}
                dateSousContrat={dateSousContrat}
                mtRachat={mtRachat}
                dateDemandeRachat={dateDemandeRachat}
                setNom={setNom}
                setPrénom={setPrénom}
                setEmail={setEmail}
                setTelNum={setTelNum}
                setMtContrat={setMtContrat}
                setDateSousContrat={setDateSousContrat}
                setMtRachat={setMtRachat}
                setDateDemandeRachat={setDateDemandeRachat}
                setIrOneTranche={setIrOneTranche}
              />
            }
          />
          <Route
            path="/contract-preview"
            element={
              <ContractPreview
                nom={nom}
                prénom={prénom}
                email={email}
                telNum={telNum}
                mtContrat={mtContrat}
                dateSousContrat={dateSousContrat}
                mtRachat={mtRachat}
                dateDemandeRachat={dateDemandeRachat}
                irOneTranche={irOneTranche}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
