module.exports = {
  root: true,
  extends: ['@react-native', "plugin:@tanstack/query/recommended"],
  plugins: ['import', '@tanstack/query'],
   "rules": {
    "@tanstack/query/exhaustive-deps": "error"
  }
};
