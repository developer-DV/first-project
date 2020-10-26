import React from "react";
import { create } from "react-test-renderer";
import StatusWithHooks from "./StatusWithHooks";

  test("Status from props should be in the state", () => {
    const component = create(<StatusWithHooks status="Testing"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Testing");
  });