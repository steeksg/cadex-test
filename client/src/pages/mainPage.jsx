import React, { useState } from "react";

import ThreePanel from "../components/threePanel/ThreePanel";

export const MainPage = () => {
  const [showError, setShowError] = useState(false);
  const [errors, serErrors] = useState([]);

  return (
    <div>
      <ThreePanel />
    </div>
  );
};
