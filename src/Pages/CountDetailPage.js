import React from "react";
import Count from "../components/Counter";
import { useHistory } from "react-router";

export default function CountDetailPage() {
  const history = useHistory();

  const handleNavigate = () => history.push("/detail");
  
  return <Count handleNavigate={handleNavigate} />;
}
