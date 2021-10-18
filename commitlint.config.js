module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "revert", "breaking"],
    ],
    "function-rules/scope-enum": [
      2,
      "always",
      (parsed) => {
        const scopeRegex = /^MEMBERSHIP-\d{3,4}$|release/;
        console.log(parsed);
        const isScopeValid = (parsed.scope && parsed.scope.match(scopeRegex)) || false;
        if (isScopeValid) {
          return [true];
        }
        return [false, `scope must match this regex: ${scopeRegex}`];
      },
    ],
  },
};
