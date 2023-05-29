import React from "react";

const CvLabelWithTime = ({ label, time }) => {
  return (
    <div className="font-bold flex flex-col md:flex-row justify-between pt-2">
      <span>{label}</span>
      <span className="text-right">{time}</span>
    </div>
  );
};
export default CvLabelWithTime;
