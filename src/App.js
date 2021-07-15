import React from "react";
import { from } from "rxjs";
import xstream from "state-x-stream";

const Controller = () => {
  from(fetch("https://reqres.in/api/users")).subscribe(console.log);
};

const View = () => {
  return <div>Test</div>;
};

export default xstream(Controller, View);
