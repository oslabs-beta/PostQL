module.exports = { 
  "root": true,
  "extends": ["airbnb", "plugin:json/recommended", "plugin:@typescript-eslint/recommended"],
  "plugins": ["json"],
  "rules": {
    "no-console": 1,
    "func-names": "off",
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  }
}