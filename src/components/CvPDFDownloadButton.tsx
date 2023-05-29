import React from "react";

const CvPDFDownloadButton: React.FC = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/Cv – Nextra.pdf";
    downloadLink.download = "Xinyun_Zhang_CV.pdf";
    downloadLink.click();
  };

  return (
    <div className="flex flex-col fixed bottom-0 left-0 right-0 opacity-60 hover:opacity-100 active:scale-75 duration-200">
      <button onClick={handleDownload} className="btn">
        Download CV
      </button>
    </div>
  );
};

export default CvPDFDownloadButton;
