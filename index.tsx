import * as React from "react";
import { render } from "react-dom";
import { ComponentA } from "./ComponentA";

document.addEventListener("DOMContentLoaded", () => {
    render(<ComponentA />, document.getElementById("app"));
});
