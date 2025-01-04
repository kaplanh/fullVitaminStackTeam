# fullVitaminStack

[:point_right: Click here to see on browser](https://full-vitamin-stack-team.vercel.app/)

## ![fullVitaminStack](https://github.com/user-attachments/assets/fa1273f0-8dd8-443a-a691-f86be49660d3)

| **What's used in this app ?**                                                           | **How use third party libraries** | **Author**                                                                       |
| --------------------------------------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| [props-drilling](https://react.dev/learn#sharing-data-between-components)               |                                   | [Take a look at my portfolio](https://kaplanh.github.io/Portfolio_with_CssFlex/) |
| [Bootstrap](https://getbootstrap.com/)                                                  | npm i bootstrap                   | [Visit me on Linkedin](https://www.linkedin.com/in/kaplan-h/)                    |
| [Semantic-Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) |                                   |                                                                                  |
| Deploy with [Vercel](https://vercel.com/kaplanhs-projects)                              |                                   |                                                                                  |

---

## How To Run This Project 🚀

<br/>

### 💻 Install React 👇

```bash
yarn create react-app .  or npx create-react-app .
```

### 💻 Install Sass 👇

```bash
yarn add sass  or npm i sass
```

## 🔴 Delete these files and delete the imports👇

    - App.test.js
    - reportWebVitals.js
    - setupTests.js
    - favicon.ico
    - logo192.png
    - logo512.png
    - manifest.json
    - robots.txt

### 💻 Start the project 👇

```bash
yarn start or npm start
```

OR

-   <strong>Clone the Repo</strong>

    ```sh
    git clone
    ```

-   <strong>Install NPM packages</strong>

    ```sh
    npm install or yarn
    ```

-   <strong>Run the project</strong>

    ```sh
    npm start or yarn start
    ```

-   <strong>Open the project on your browser</strong>

    ```sh
    http://localhost:3000/
    ```

-   ### <strong>Enjoy! 🎉</strong>

---

## Project Skeleton

```
 Task Traker (folder)
|
|----public (folder)
│     └── index.html
|----src (folder)
|    |--- components (folder)
│    │       ├── Header.jsx
│    │       ├── Card.jsx
│    │
│    ├--- App.js
|    |--- data.js
│    |--- index.js
│    │--- styles.css
│
│
|-- .gitignore
|── package-lock.json
├── package.json
|── README.md
|── yarn.lock


```

---

### At the end of the project, the following topics are to be covered;

-   props & destructuring & map((item.index)=> ...) & bootstrap & css import

```jsx
import Card from "./components/Card";
import Header from "./components/Header";
import { contacts } from "./data";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
// console.log(contacts);

const App = () => {
    return (
        <div className="row justify-content-center gap-1 m-3">
            <Header />
            {contacts.map((item) => {
                const { id, name, imgURL, phone, email } = item;
                return (
                    <>
                        <Card
                            id={id}
                            name={name}
                            imgURL={imgURL}
                            phone={phone}
                            email={email}
                        />
                    </>
                );
            })}
        </div>
    );
};

export default App;
```

-   Semantic Commit Messages
    See how a minor change to your commit message style can make you a better programmer.

    Format: <type>(<scope>): <subject>

    <scope> is optional

    -   Example

    ```
                feat: add hat wobble
        ^--^  ^------------^
        |     |
        |     +-> Summary in present tense.
        |
        +-------> Type: chore, docs, feat, fix, refactor, style, or test.
    ```

-   More Examples:
    -   `feat`: (new feature for the user, not a new feature for build script)
    -   `fix`: (bug fix for the user, not a fix to a build script)
    -   `docs`: (changes to the documentation)
    -   `style`: (formatting, missing semi colons, etc; no production code change)
    -   `refactor`: (refactoring production code, eg. renaming a variable)
    -   `test`: (adding missing tests, refactoring tests; no production code change)
    -   `chore`: (updating grunt tasks etc; no production code change)

---

## Feedback and Collaboration

I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!

<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>
