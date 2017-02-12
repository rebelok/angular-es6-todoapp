module.exports = {
  "extends": "eslint:recommended",
  "plugins": [
    "angular"
  ],
  "env"    : {
    "browser": true,
    "jasmine": true
  },
  "globals": {
    "angular": true,
    "module" : true,
    "inject" : true
  },
  "rules"  : {
    "semi"                       : 2,
    "array-bracket-spacing"      : [
      "warn",
      "always"
    ],
    "block-spacing"              : 2,
    "comma-spacing"              : 2,
    "array-callback-return"      : 2,
    "block-scoped-var"           : 2,
    "curly"                      : 2,
    "default-case"               : 2,
    "eqeqeq"                     : 2,
    "no-alert"                   : 2,
    "no-else-return"             : 2,
    "no-redeclare"               : 2,
    "no-sequences"               : 2,
    "strict"                     : 2,
    "babel/object-curly-spacing" : 0,
    "babel/array-bracket-spacing": 0,
    "no-console"                 : 1
  }
};
