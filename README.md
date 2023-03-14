1.  **Prepare Project**

    Clone this repository.

    ```
    git clone https://github.com/MartinnBonchev/expression-calculator.git
    ```

    Install dependencies.

    ```
    # replace `yarn` with `npm` if it works better for you
    cd expression-calculator && yarn
    ```

2.  **Start the Project**

    Open the terminal and run.

    ```
    yarn start
    ```

    A development server with start on `http://localhost:3030`

3.  **Type a mathematical expression into the input**

    _Example:_

    ```
    "2 + 3"

    "9 / 3"

    "(2 + 3) * 4"

    "12 / (4 - 2)"

    "5 * ((6 - 3) / 2)"

    "((2 + 3) * 4) / (5 - 1)"
    ```

4.  **Click "Calculate Expression"**

    As a result you will see the calculated expression for your.

5.  **Invalid Input**

    If the provided input is invalid you will receive an error message with provided information.

### Available Scripts

```bash
# local development
yarn start

# production build
yarn build

# test
yarn test

# husky prepare
yarn prepare
```

### Folder Structure

```bash
├───.husky/
│   ├───_/
│   │   ├───.gitignore
│   │   └───husky.sh
│   └───commit-msg
├───.vscode/
│   └───settings.json
├───src/
│   ├───assets/
│   │   └───favicon.ico
│   ├───css/
│   │   └───styles.css
│   ├───main/
│   │   └───evaluate-expression/
│   │       ├───evaluate-expression.ts
│   │       └───index.ts
│   ├───tests/
│   │   └───index.test.ts
│   ├───utils/
│   │   ├───concat-number.ts
│   │   ├───error-boundary.ts
│   │   ├───find-closing-parentheses.ts
│   │   └───get-valid-expression.ts
│   ├───index.html
│   └───index.ts
├───.commitlintrc.js
├───.gitignore
├───README.md
├───jest.config.js
├───package.json
├───tsconfig.json
├───webpack.config.js
└───yarn.lock
```
