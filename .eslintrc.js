module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "warn",
      "always"
    ],
    "no-unused-vars": [1, {
      "vars": "all",
      "args": "none"
    }],
    // "strict":[
    //   2,
    //   "never"
    // ],
    // "react/jxs-uses-react":2,
    // "react/jxs-uses-vars":2,
    // "react/react-in-jsx-scope":2
  }
};