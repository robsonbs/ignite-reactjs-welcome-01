# Babel is a JavaScript compiler

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

  - Transform syntax
  - Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
  - Source code transformations (codemods)
  - And more! (check out these videos for inspiration)

```js
// Babel Input: ES2015 arrow function
[1, 2, 3].map(n => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

  For an awesome tutorial on compilers, check out the-super-tiny-compiler, which also explains how Babel itself works on a high level.
## First example
in terminal:
```bash
yarn add @babel/core @babel/cli @babel/preset-env -D
```
 in `src/index.js` write:

  ```js
  const user = {
  name: 'Robson Souza'
}

console.log(user.address?.street)
  ```
  on terminal:

  ```bash
  $ yarn babel src/index.js --out-file dist/bundle.js
  ```

  ## second example
  in terminal:
```bash
yarn add @babel/preset-{react,typescript} -D
```
 in `src/index.jsx` write:

  ```js
  import React from 'react';

  function App(){
    return <h1>Hello World</h1>
  }
  ```
  on terminal:

  ```bash
  $ yarn babel src/index.jsx --out-file dist/bundle.js
  ```
