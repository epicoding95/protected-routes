import React from "react";
import auth from "./auth";

const LandingPage = props => {
  return (
    <div>
      landing page
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        login
      </button>
    </div>
  );
};

export default LandingPage;
