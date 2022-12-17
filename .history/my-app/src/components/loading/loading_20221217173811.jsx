import React, { useEffect } from "react";
import './Loading.css';
const Loading = () => {
  const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 2000);
  }, []);

  return (
    <div>
      <div>
        {showElement ? (
          <div className="loading">
            <img src='assests/spinner.gif'>Redirecting</img>
          </div>
        ) : (
          <div></div>
        )}{" "}
      </div>
    </div>
  );
};
export default Loading;