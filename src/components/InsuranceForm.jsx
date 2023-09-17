import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import insurance from "../assets/img/insurance.jpg";

const InsuranceForm = ({
  nom,
  prénom,
  email,
  telNum,
  mtContrat,
  dateSousContrat,
  mtRachat,
  dateDemandeRachat,
  setNom,
  setPrénom,
  setEmail,
  setTelNum,
  setMtContrat,
  setDateSousContrat,
  setMtRachat,
  setDateDemandeRachat,

  setIrOneTranche,
}) => {
  const navigate = useNavigate();
  const computeIR = (mt) => {
    if (mt < 30000) {
      return 0;
    } else if (mt < 50000) {
      return mt * (10 / 100) - 3000;
    } else if (mt < 60000) {
      return mt * (20 / 100) - 8000;
    } else if (mt < 80000) {
      return mt * (30 / 100) - 14000;
    } else if (mt < 180000) {
      return mt * (34 / 100) - 17200;
    } else if (mt > 180000) {
      return mt * (38 / 100) - 24400;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mtRachat = +mtRachat;

    let tranche_1 = mtRachat / 4;

    if (tranche_1 > 168000) {
      const part_168 = 168000;
      const abat70 = part_168 * (70 / 100);
      const non_abat_30 = part_168 * (30 / 100);

      const part_sup_168 = tranche_1 - 168000;
      const abat40 = part_sup_168 * (40 / 100);
      const non_abat_60 = part_sup_168 * (60 / 100);

      const totParts = non_abat_30 + non_abat_60;
      console.log(totParts);
      const ir = computeIR(totParts);
      console.log(ir);
      setIrOneTranche(ir);
    }

    if (tranche_1 <= 168000) {
      let abat70 = tranche_1 * (70 / 100);
      let non_abat_30 = tranche_1 * (30 / 100);
      console.log(non_abat_30);

      const ir = computeIR(non_abat_30);
      console.log(ir);
      setIrOneTranche(ir);
    }

    navigate("/contract-preview");
  };

  const resetForm = () => {
    setNom("");
    setPrénom("");
    setEmail("");
    setTelNum("");
    setMtContrat("");
    setDateSousContrat("");
    setMtRachat("");
    setDateDemandeRachat("");
  };
  return (
    <div className="flex min-h-screen ">
      {/* image */}
      <img src={insurance} className="hidden lg:w-1/3 lg:block" />

      {/* form */}
      <div className="flex flex-grow justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-9 max-w-2xl">
          <h1 className="text-3xl font-semibold text-center border-b-[1px] border-zinc-200 pb-2">
            Simulateur Rachat Total Age d'ôr Retraite
          </h1>

          {/* Info personelles */}

          <h2 className="flex justify-center items-center text-xl p-2 border-[1px] border-black w-[60%] place-self-center rounded font-medium">
            Informations Personnelles
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex flex-col gap-1  sm:w-1/2 sm:mx-0 mx-8 ">
              <span>Nom</span>
              <input
                required
                type="text"
                value={nom}
                onChange={(e) => {
                  setNom(e.target.value);
                }}
              />
            </label>

            <label className="flex flex-col gap-1 sm:w-1/2 sm:mx-0 mx-8">
              <span>Prénom</span>
              <input
                required
                type="text"
                value={prénom}
                onChange={(e) => {
                  setPrénom(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="flex gap-4 flex-col sm:flex-row">
            <label className="flex flex-col gap-1 sm:w-1/2 sm:mx-0 mx-8">
              <span>Email</span>
              <input
                required
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>

            <label className="flex flex-col gap-1 sm:w-1/2 sm:mx-0 mx-8">
              <span>Numéro de téléphone</span>
              <input
                required
                type="text"
                value={telNum}
                onChange={(e) => {
                  setTelNum(e.target.value);
                }}
              />
            </label>
          </div>

          {/* Info contrat */}

          <h2 className="flex justify-center items-center text-xl p-2 border-[1px] border-black w-[80%] place-self-center rounded font-medium">
            Informations relatives au contrat
          </h2>

          <div className="flex gap-4 flex-col sm:flex-row">
            <label className="flex flex-col gap-1 sm:w-1/2 sm:mx-0 mx-8">
              <span>Montant du contrat</span>
              <input
                required
                type="number"
                value={mtContrat}
                onChange={(e) => {
                  setMtContrat(e.target.value);
                }}
              />
            </label>

            <label className="flex flex-col gap-1 sm:w-1/2 sm:mx-0 mx-8 ">
              <span>Date de souscription du contrat</span>
              <input
                required
                type="date"
                value={dateSousContrat}
                onChange={(e) => {
                  setDateSousContrat(e.target.value);
                }}
              />
            </label>
          </div>

          {/* Info rachat */}

          <h2 className="flex justify-center items-center text-xl p-2 border-[1px] border-black w-[60%] place-self-center rounded font-medium text-center">
            Informations relatives au rachat{" "}
          </h2>
          <div className="flex gap-4 flex-col sm:flex-row">
            <label className="flex flex-col gap-1 sm:w-1/2 sm:mx-0 mx-8">
              <span>Montant du rachat</span>
              <input
                required
                type="number"
                value={mtRachat}
                onChange={(e) => {
                  setMtRachat(e.target.value);
                }}
              />
            </label>

            <label className="flex flex-col gap-1 sm:w-1/2 sm:mx-0 mx-8">
              <span>Date de demande de rachat</span>
              <input
                required
                type="date"
                value={dateDemandeRachat}
                onChange={(e) => {
                  setDateDemandeRachat(e.target.value);
                }}
              />
            </label>
          </div>

          {/* Buttons */}

          <div className="flex gap-4 flex-col sm:flex-row w-full items-center">
            <button className="simuBtn btn btn-primary">
              Lancer la simulation
            </button>
            <button className="rtnBtn" type="button" onClick={resetForm}>
              Réinitialiser les informations
            </button>
          </div>
          <div className="flex justify-center items-center font-bold text-zinc-700 underline">
            <a href="https://www.finances.gov.ma/Publication/db/2023/BO_7154-bis_Fr.pdf">
              {" "}
              Actualités lois de finance 2023{" "}
            </a>
          </div>
          <div className="flex p-3 text-center border-[1px] border-black">
            N.B:
            <span className="font-bold pl-1">
              Si vous avez jamais bénéficié d’une déduction fiscale, vous pouvez
              racheter votre argent 0 impôt en ramenant une attestation de non
              déductibilité{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsuranceForm;
