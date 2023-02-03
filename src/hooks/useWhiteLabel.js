import React from "react";

const useWhiteLabel = () => {
  const whiteLabel = localStorage.getItem("whiteLabel");
  return whiteLabel ? JSON.parse(whiteLabel) : null;
};

export default useWhiteLabel;
