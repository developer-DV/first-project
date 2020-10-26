import React from "react";
import { create } from "react-test-renderer";
import StatusWithHooks from "./StatusWithHooks";

describe("Button component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<StatusWithHooks status="Testing" />);
  });
});