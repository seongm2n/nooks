import { useState, useEffect } from "react";

//navigator가 online 또는 offline이 되는 것을 막아줌
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

export const UseNetwork = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>UseNetwork</h1>
      <h2>{onLine ? "Online" : "Offline"}</h2>
    </div>
  );
};
