import React from "react";

type CvLabelWithTimeProps = {
  label: string | React.ReactNode;
  time: string;
  highlight?: boolean;
};

const CvLabelWithTime = ({ label, time, highlight = true }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-5 font-bold justify-between pt-2 ${
        highlight && " text-teal-600 dark:text-teal-400"
      }`}>
      <span className="text-lg md:col-span-4">{label}</span>
      <span className="text-right md:col-span-1">{time}</span>
    </div>
  );
};
export default CvLabelWithTime;
