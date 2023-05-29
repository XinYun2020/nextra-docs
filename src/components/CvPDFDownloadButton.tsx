import React from "react";

const CvPDFDownloadButton: React.FC = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/Xinyun_Zhang_CV.pdf";
    downloadLink.download = "Xinyun_Zhang_CV.pdf";
    downloadLink.click();
  };

  return (
    <button onClick={handleDownload} className="btn">
      Download CV
    </button>
  );
};

export default CvPDFDownloadButton;
