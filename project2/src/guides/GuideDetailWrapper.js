import React from "react";
import { useParams } from "react-router-dom";
import GuideDetail from "./GuideDetail";

const GuideDetailWrapper = () => {
  const { guideId } = useParams();
  return <GuideDetail guideId={guideId} />;
};

export default GuideDetailWrapper;
