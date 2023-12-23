import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err, "Error Console");
  console.dir(err);

  return (
    <div>
      <h1>Error : {err.message}</h1>
    </div>
  );
}

export default Error;
