"use client";

import CenterDropdown from "./CenterDropdown";

const CenterButtons = () => {
  const optionsInfo = [
    { info: "Why choose us?", onClick: "why-us" },
    { info: "What could we do for you?", onClick: "what-do-we-provide" },
    { info: "Pricing", onClick: "pricing" },
    { info: "Donations", onClick: "donate" },
  ];
  const optionsRest = ["placeholder", "x", "y", "z"];
  return (
    <div className="flex items-center">
      <CenterDropdown label="Who are we?" options={optionsInfo} />
      <CenterDropdown label="Option 2" options={optionsInfo} />
    </div>
  );
};
export default CenterButtons;
