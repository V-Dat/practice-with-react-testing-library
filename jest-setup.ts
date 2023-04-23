import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

/**
 * We need to run cleanup after every testcase :
 * - Cause testcase create DOM by function render, fireEvent
 * it can be catch and maybe conflict with another test case
 *
 * - By cleanup every time you run new testcase to make sure
 * your testcase run dependent
 *
 */
