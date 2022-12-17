import React, { useEffect } from "react";
import './Loading.css';
const Loading = () => {
  const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 1000000);
  }, []);

  return (
    <div>
      <div className="load">
        {showElement ? (
          <div className="loading">
            <img src='assests/spinner.gif'></img>
          </div>
        ) : (
          <div></div>
        )}{" "}
      </div>
    </div>
  );
};
export default Loading;