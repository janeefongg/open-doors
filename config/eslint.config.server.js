module.exports = {
  "extends": "airbnb",
  "rules": {
    "key-spacing": ["error", {
      "align": "colon"
    }],
    "no-multi-spaces": ["error", {
      "exceptions": { 
        "VariableDeclarator": true
      }
    }],
    "import/prefer-default-export": "off",
    "no-console": "off",
    "new-cap": "off",
    "quote-props": "off",
    "no-param-reassign": "off",
    "consistent-return": "off"
  }
}
