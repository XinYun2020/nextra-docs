import React, { useState } from "react";
import Confetti from "react-confetti";

const CvPDFDownloadButton: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [pieces, setPieces] = useState<number>(0);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  const handleDownload = () => {
    setIsClicked(true);
    setPieces(200);

    const downloadLink = document.createElement("a");
    // downloadLink.href = "/Cv – Xinyun Zhang.pdf";
    downloadLink.href = "/Cv – Xinyun Zhang.pdf";
    downloadLink.download = `Xinyun_Zhang_CV_${
      /* @__PURE__ */ new Date().getFullYear()
    }.pdf`;
    downloadLink.click();
    stopConfetti();
  };

  return (
    <>
      {isClicked && <Confetti gravity={0.2} numberOfPieces={pieces} />}
      <div className="flex flex-col fixed bottom-0 left-0 right-0 opacity-60 hover:opacity-100 active:scale-75 duration-200">
        <button onClick={handleDownload} className="btn">
          Download CV
        </button>
      </div>
    </>
  );
};

export default CvPDFDownloadButton;
