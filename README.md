# Gattonero UI

Gattonero UI is a React-based design system that provides a set of reusable components and utilities for building modern web applications. This repository showcases how to create a lightweight design system using Vite, React, and Tailwind CSS, while ensuring code quality with Jest, maintaining thorough documentation and library previews with Storybook, and managing package versioning with Semantic Versioning (semver) through conventional commits and Commitizen.


## Table of Contents

- [Installation](#installation)
- [Storybook](#storybook)
- [Testing](#testing)
- [Commit Flow](#commit-flow)
- [Publishing](#publishing)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/devmeireles/gattonero-ui
   cd gattonero-ui
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Start the Storybook stories preview server:

   ```bash
   yarn storybook
   ```

4. Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.

## Storybook

Storybook is used for interactive documentation. To start Storybook, run:

```bash
yarn storybook
```

Open http://localhost:6006 to view Storybook.

### Testing

Jest is used for testing the components. To run the tests, use:

```bash
yarn test
```

The test files are located alongside the component files and ensure that the components render correctly and handle different states.


### Commit Flow

This project follows a structured commit flow using [Commitizen](https://github.com/commitizen/cz-cli) and [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). This ensures that all commits are standardized and can be used to generate changelogs automatically.

#### Commitizen
To make commits easier and more standardized, we use Commitizen. Instead of using `git commit`, use:

```bash
yarn commit
```

This will prompt you to fill out the required fields for your commit message, ensuring it follows the Conventional Commits specification.



### Publishing

To publish this package to npm, follow these steps:

1. Make sure you are logged in to npm:

   ```bash
   npm login
   ```

2. Update the version number in package.json according to [Semantic Versioning](https://semver.org/). Note that this project uses GitHub Actions workflows to handle releases automatically. See the [release workflow](https://github.com/devmeireles/gattonero-ui/blob/main/.github/workflows/release.yml) for more details.

3. Build the package:

   ```bash
   yarn build
   ```

4. Publish the package to npm:

    ```bash
    npm publish
    ```