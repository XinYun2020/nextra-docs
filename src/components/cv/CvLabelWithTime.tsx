import React from "react";

type CvLabelWithTimeProps = {
  label: string | React.ReactNode;
  time: string | React.ReactNode;
  highlight?: boolean;
};

const CvLabelWithTime = ({ label, time, highlight = true }) => {
  return (
    <div
      className={`flex flex-col md:flex-row font-bold justify-between pt-2 ${
        highlight && " text-[#0AAFCE] dark:text-[#0AAFCE]"
      }`}>
      <span className="text-lg ">{label}</span>
      <span className="text-right">{time}</span>
    </div>
  );
};
export default CvLabelWithTime;
