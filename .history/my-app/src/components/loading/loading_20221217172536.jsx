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
            <img src='https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif'></img>
          </div>
        ) : (
          <div></div>
        )}{" "}
      </div>
    </div>
  );
};
export default Loading;