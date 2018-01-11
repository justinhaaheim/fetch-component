// Requires eslint-config-airbnb and peer dependencies
// https://www.npmjs.com/package/eslint-config-airbnb
// ( export PKG=eslint-config-airbnb; npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest" )

module.exports = {
  "extends": "airbnb",
  "rules": {
    "max-len": [1, 100],
    "semi": [1, "never"],
    "prefer-arrow-callback": 1,
    "quotes": 1,
    "prefer-destructuring": 1,
    "func-names": 0,
    "comma-dangle": ["error", {
      "functions": "never",
      "objects": "always-multiline",
      "arrays": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline"
    }]
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "root": true
}
