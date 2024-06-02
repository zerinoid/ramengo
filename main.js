import "./style.scss";

import { setupCounter } from "./counter.js";
import fetchData from "./lib/fetchData";

// const broths = await fetchData("broths");
// const proteins = await fetchData("proteins");

// document.querySelector("#app").innerHTML = `
//   <div>
//   </div>
// `;

setupCounter(document.querySelector("#counter"));
