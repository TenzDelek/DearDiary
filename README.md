# 📔 DearDiary: Your Personal Digital Diary

<table align="center">
    <thead align="center">
        <tr border: 2px;>
            <td><b>🌟 Stars</b></td>
            <td><b>🍴 Forks</b></td>
            <td><b>🐛 Issues</b></td>
            <td><b>🔔 Open PRs</b></td>
            <td><b>🔕 Closed PRs</b></td>
        </tr>
     </thead>
    <tbody>
         <tr>
            <td><img alt="Stars" src="https://img.shields.io/github/stars/TenzDelek/DearDiary?style=flat&logo=github"/></td>
             <td><img alt="Forks" src="https://img.shields.io/github/forks/TenzDelek/DearDiary?style=flat&logo=github"/></td>
            <td><img alt="Issues" src="https://img.shields.io/github/issues/TenzDelek/DearDiary?style=flat&logo=github"/></td>
            <td><img alt="Open Pull Requests" src="https://img.shields.io/github/issues-pr/TenzDelek/DearDiary?style=flat&logo=github"/></td>
           <td><img alt="Closed Pull Requests" src="https://img.shields.io/github/issues-pr-closed/TenzDelek/DearDiary?style=flat&color=green&logo=github"/></td>
        </tr>
    </tbody>
</table>

<div align="center">
  <img src="Assets/GSSoC-Ext.png" alt="gssoc">
</div>


# [DearDiary](https://github.com/TenzDelek/DearDiary)

<img width="1000" alt="image" src="https://github.com/user-attachments/assets/ada4751d-dd69-427e-bc43-e31afe3e65c4">

Welcome to the **[DearDiary](https://github.com/TenzDelek/DearDiary)** repository! This project is built with **Next.js** and uses **Clerk** for authentication. This guide will walk you through setting up the project and contributing effectively.

## Featured In

<table>
<tr>
      <th>Event Logo</th>
      <th>Event Name</th>
      <th>Event Description</th>
    </tr>
    <tr>
        <td><img src="https://user-images.githubusercontent.com/63473496/213306279-338f7ce9-9a9f-4427-8c2a-3e344874498f.png#gh-dark-mode-only" width="200" height="auto" loading="lazy" alt="GSSoC Ext 24"/></td>
        <td>GirlScript Summer of Code Ext 2024</td>
        <td>GSSOC Ext is a one-month-long open-source program by the GirlScript Foundation that runs from October 1 to November 10, 2024</td> 
    </tr>
   <tr>
        <td><img src="https://cdn.prod.website-files.com/63bc83b29094ec80844b6dd5/66fc35d92c74c4e4103f3673_Flyte-at-Hacktoberfest-2024.png" width="200" height="auto" loading="lazy" alt="Hacktoberfest 24"/></td>
        <td>Hacktoberfest 2024</td>
        <td>Hacktober Fest is an annual celebration of open-source software development. It's a month-long event encouraging developers to contribute to open-source projects.</td> 
    </tr>
</table>

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

- Sign Up for Clerk: If you haven’t already, sign up at [Clerk.dev](https://clerk.dev/) and create an application.

- Get API Keys: Once your application is set up, get your Frontend API Key and Secret Key.

- Add Environment Variables: Create a .env.local file in the root directory:

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

Thank you for pointing that out! Here’s the updated **Docker setup instructions** section for your `README.md`, including the relevant information about the `DATABASE_URL`.

---

## Docker Setup Instructions

To set up the application using Docker, follow these steps:

### 1. **Configure the Database URL**

Ensure that your `.env` file contains the below `DATABASE_URL`. It should be the this:

```plaintext
DATABASE_URL=postgres://user:password@db:5432/mydatabase
```

### 2. **Build and Start Docker Containers**

To build the Docker images and start the containers, run the following command:

```bash
npm run docker:setup
```

This command will:

- Build the Docker containers using `docker-compose build`.
- Start the containers using `docker-compose up -d`.
- Run the Prisma migrations to ensure your database is up to date.
- Open **Web App** in your browser at `http://localhost:3000`.
- Open **Prisma Studio** for database management in your browser at `http://localhost:5555`.

### 3. **Managing Docker Containers**

You can manage the Docker containers with the following commands:

- **Start the containers** (if they are stopped):

  ```bash
  npm run docker:start
  ```

- **Stop the containers** (without removing them):

  ```bash
  npm run docker:stop
  ```

- **Restart the containers**:

  ```bash
  npm run docker:restart
  ```

- **Take down the containers** (stop and remove):

  ```bash
  npm run docker:down
  ```

- **Rebuild the containers without using cache**:
  ```bash
  npm run docker:build --no-cache
  ```

---

## Prisma Commands

Prisma is used for interacting with your PostgreSQL database. Here are the available Prisma commands:

### 1. **Run Migrations**

To apply your Prisma schema and migrate your database, use:

```bash
npm run prisma:migrate
```

This command will run the migrations within the Docker container and update the database schema.

### 2. **Open Prisma Studio**

Prisma Studio provides a GUI to explore and edit your database. To open Prisma Studio, run:

```bash
npm run prisma:studio
```

After running the command, open your browser and go to `http://localhost:5555` to access Prisma Studio.

### 3. **Push Prisma Schema to Database**

If you've updated your Prisma schema and want to push changes to your database without creating migration files, run:

```bash
npm run prisma:push
```

### 4. **Pull Database Schema into Prisma**

If your database schema has changed and you want to update your Prisma schema, you can pull the changes with:

```bash
npm run prisma:pull
```

### 5. **Generate Prisma Client**

To regenerate the Prisma client after making schema changes, use:

```bash
npm run prisma:generate
```

This command is automatically run on production during the `postinstall` phase if the environment is not set to `development`.

---

# Basic Contribution Guidelines

We follow some simple guidelines to ensure a smooth collaboration process.

## Creating Issues

If you find a bug or have an idea for an enhancement:

- Check Existing Issues: Look at [open issues](<https://github.com/your-username/[DearDiary](https://github.com/TenzDelek/DearDiary)/issues>) to see if your issue already exists.

- Create a New Issue: If not, open a new issue, providing as much detail as possible.

## Working on Issues

- Get Assigned: Comment on an issue you'd like to work on and wait to be assigned.

- Create a New Branch: For each feature or bug fix, create a new branch:

```bash
git checkout -b feature/issue-name
```

## Submitting a Pull Request

- Push Your Branch: Once you’ve made your changes and tested them:

```bash
git push origin feature/issue-name
```

- Create a Pull Request (PR): Go to the GitHub repository and click on "New Pull Request." Make sure to provide a clear description of what you did and why.

- Review and Update: Your PR may get reviewed by the maintainers. Be ready to make suggested changes.

### License

This project is open-source. Feel free to use it!

```vbnet

Feel free to modify any part of the text to better suit your project!
```

### Respond to Feedback

- Review Comments: Project maintainers may review your code and suggest improvements.
- Make Updates: Update your changes accordingly, and push them to the same branch. The PR will update automatically.

# Celebrate Your Contribution!

Once your PR is merged, you’ve officially made your first contribution!

## Our Valuable Contributors ❤️✨

[![Contributors](https://contrib.rocks/image?repo=TenzDelek/DearDiary)](https://github.com/TenzDelek/DearDiary/graphs/contributors)
