import React, { useState } from "react";

function Effect() {
  let [d, setD] = useState(null);

  fetch("https://api.tvmaze.com/search/shows?q=girls").then(async function (
    res
  ) {
    let data = await res.json();
    setD(data);
  });

  return <div>Effect - {JSON.stringify(d)}</div>;
}

export default Effect;
