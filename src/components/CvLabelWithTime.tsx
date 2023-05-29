import React from "react";

const CvLabelWithTime = ({ label, time }) => {
  return (
    <div className="font-bold flex flex-row justify-between pt-4">
      <span>{label}</span>
      <span>{time}</span>
    </div>
  );
};
export default CvLabelWithTime;
