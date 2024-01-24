import React from "react";
import "./signup.css"

const HeadingComp = ({ first, second }) => {
  return (
    <div>
      <h1 className="faunt text-center sign-up-heading">
        {first} {second}
      </h1>
    </div>
  );
};

export default HeadingComp;
