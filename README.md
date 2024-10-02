# [DearDiary](https://github.com/TenzDelek/DearDiary)

<img width="1000" alt="image" src="https://github.com/user-attachments/assets/ada4751d-dd69-427e-bc43-e31afe3e65c4">

Welcome to the **[DearDiary](https://github.com/TenzDelek/DearDiary)** repository! This project is built with **Next.js** and uses **Clerk** for authentication. This guide will walk you through setting up the project and contributing effectively.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installing Dependencies](#installing-dependencies)
  - [Setting Up Clerk](#setting-up-clerk)
  - [Running the Project](#running-the-project)
- [Basic Contribution Guidelines](#basic-contribution-guidelines)
  - [Creating Issues](#creating-issues)
  - [Working on Issues](#working-on-issues)
  - [Submitting a Pull Request](#submitting-a-pull-request)
- [License](#license)

## Getting Started

We are happy to have you contribute to our project! Follow these steps to set up your local environment and start making contributions.

## Project Setup

### Prerequisites

To get started, you will need:

- **Node.js** (v16 or later) installed.
- **Git** for cloning and version control.
- **Clerk Account** for authentication (you will need API keys).

### Cloning the Repository

First, fork this repository by clicking the "Fork" button at the top. Then, clone your forked copy to your local machine:

```bash
git clone https://github.com/your-username/DearDiary.git
```

### To navigate into the project directory:

```bash
cd DearDiary
```

### Installing Dependencies
To install all required dependencies, run:

```bash
npm install

```

This command will install Next.js, Clerk, and other necessary libraries.

Setting Up Clerk

* Sign Up for Clerk: If you haven’t already, sign up at [Clerk.dev](https://clerk.dev/) and create an application.

* Get API Keys: Once your application is set up, get your Frontend API Key and Secret Key.

* Add Environment Variables: Create a .env.local file in the root directory:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=<YOUR_FRONTEND_API_KEY>
CLERK_API_KEY=<YOUR_SECRET_KEY>
```

Verify Configuration: Double-check that the keys are correctly set up by running:

```bash
npm run dev
```

You should be able to access the application at http://localhost:3000 and see Clerk authentication enabled.


### Running the Project

To start the development server, use:

```bash
npm run dev
```
Your local server will be running at http://localhost:3000.

# Basic Contribution Guidelines

We follow some simple guidelines to ensure a smooth collaboration process.

## Creating Issues

If you find a bug or have an idea for an enhancement:

* Check Existing Issues: Look at [open issues](https://github.com/your-username/[DearDiary](https://github.com/TenzDelek/DearDiary)/issues) to see if your issue already exists.

* Create a New Issue: If not, open a new issue, providing as much detail as possible.

## Working on Issues

* Get Assigned: Comment on an issue you'd like to work on and wait to be assigned.

* Create a New Branch: For each feature or bug fix, create a new branch:

```bash
git checkout -b feature/issue-name
```

## Submitting a Pull Request
* Push Your Branch: Once you’ve made your changes and tested them:

```bash
git push origin feature/issue-name
```

* Create a Pull Request (PR): Go to the GitHub repository and click on "New Pull Request." Make sure to provide a clear description of what you did and why.

* Review and Update: Your PR may get reviewed by the maintainers. Be ready to make suggested changes.

### License

This project is open-source. Feel free to use it!
```vbnet

Feel free to modify any part of the text to better suit your project!
```


### Respond to Feedback

* Review Comments: Project maintainers may review your code and suggest improvements.
* Make Updates: Update your changes accordingly, and push them to the same branch. The PR will update automatically.

# Celebrate Your Contribution!

Once your PR is merged, you’ve officially made your first contribution!