module.exports = {
  __esModule: true,
  info: jest.fn(),
  debug: jest.fn(),
  notice: jest.fn(),
  getInput: jest.fn(),
  getBooleanInput: jest.fn((arg) => {
    const github = require("@actions/github");

    if (arg == "allow-only-external-issues") {
      return github.context.allowOnlyExternalIssues ?? false;
    } else if (arg == "loose-matching") {
      return github.context.looseMatching ?? false;
    } else {
      throw new Error(`Unknown arg ${arg}`);
    }
  }),
  setFailed: jest.fn(),
  setOutput: jest.fn(),
};
