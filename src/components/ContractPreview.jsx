import wafaLogo from "../assets/img/wafa-logo.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { usePDF } from "react-to-pdf";

const ContractPreview = ({
  nom,
  prénom,
  email,
  telNum,
  mtContrat,
  dateSousContrat,
  mtRachat,
  dateDemandeRachat,
  irOneTranche,
}) => {
  const ref = useRef();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const downloadPDF = () => {
    const input = pdfRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdWidth = pdf.internal.pageSize.getWidth();
      const pdHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdWidth / imgWidth, pdHeight / imgHeight);
      const imgX = (pdWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };
  return (
    <div>
      <div className="font-Imprima min-h-screen" ref={targetRef}>
        {/* Header */}
        <header className="flex items-center  mt-10 mx-20 ">
          <div className="w-24 h-24 mr-[400px]">
            <img src={wafaLogo} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col font-bold ml-[250px] items-center">
            <h1 className="text-2xl"> Age d'Or Retraite</h1>
            <h3 className="text-3xl">RACHAT TOTAL </h3>
          </div>
        </header>

        <div className="max-w-7xl mx-auto mt-10">
          <div className="flex justify-center items-center">
            <h2 className="border-[3px] border-black py-5 flex justify-center items-center text-2xl px-32">
              IMPÔT RACHAT TOTAL
            </h2>
          </div>

          <p className="py-8 text-lg">
            Nous Soussignés, WAFA ASSURANCE, demeurant à CASABLANCA, 1BD,
            ABDELMOUMEN, certifions que :{" "}
          </p>

          <div className="flex flex-col gap-8 text-lg">
            {" "}
            {/* Assuré information */}
            <section className="border-[2px] border-black ">
              <div className="border-[2px] border-black font-bold p-2">
                Assuré
              </div>
              <div className="border-[2px] border-black p-2 ">
                <div>
                  Nom et prénom : {prénom} {nom}{" "}
                </div>
                <div>Email : {email} </div>
                <div>Numéro de téléphone : {telNum} </div>
              </div>
            </section>
            {/* Contrat information */}
            <section className="border-[2px] border-black">
              <div className="border-[2px] border-black font-bold  p-2">
                Contrat
              </div>
              <div className="border-[2px] border-black p-2">
                <div>Montant du contrat : {mtContrat} MAD </div>
                <div>Date de souscription du contrat : {dateSousContrat} </div>
              </div>
            </section>
            {/* Rachat information */}
            <section className="border-[2px] border-black">
              <div className="border-[2px] border-black font-bold  p-2">
                Rachat
              </div>
              <div className="border-[2px] border-black p-2 ">
                <div>Montant du rachat : {mtRachat} MAD </div>
                <div>Date de demande de rachat : {dateDemandeRachat} </div>
              </div>
            </section>
            {/* Simulation results */}{" "}
            <section className="border-[2px] border-black">
              <div className="border-[2px] border-black font-bold  p-2">
                Impôts
              </div>
              <div className="border-[2px] border-black p-2 ">
                <div>I.R relatif à 1 tranche : {irOneTranche} MAD </div>
                <div>I.R Total : {irOneTranche * 4} MAD </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-10 ">
        <button className="simuBtn btn btn-primary" onClick={() => toPDF()}>
          Télécharger PDF
        </button>
      </div>
    </div>
  );
};

export default ContractPreview;
