# Contributing to DearDiary

Thank you for your interest in contributing to **DearDiary**! To ensure a smooth collaboration process, please follow these guidelines for setting up your development environment and making contributions.

## Table of Contents
- [Development Environment Setup](#development-environment-setup)
- [Code Style Guidelines](#code-style-guidelines)
- [Commit Message Conventions](#commit-message-conventions)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Branching Strategy](#branching-strategy)
- [Review and Approval Process](#review-and-approval-process)
- [Licensing Contributions](#licensing-contributions)

## Development Environment Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/DearDiary.git
   cd DearDiary
    ```

2. Install Dependencies
    ```bash
    npm install
    ```

3. Set Up Clerk:
- Create an account at Clerk.dev.
- Obtain your Frontend API Key and Secret Key.
- Add these to a .env.local file as follows:

    ```env
    NEXT_PUBLIC_CLERK_FRONTEND_API=<YOUR_FRONTEND_API_KEY>
    CLERK_API_KEY=<YOUR_SECRET_KEY>
    ```

4. Run the Project:
    ```bash
    npm run dev
    ```
    The application should be accessible at http://localhost:3000.

## Code Style Guidelines
Follow the existing coding patterns in the project.
Use camelCase for variable and function names.
Include comments for complex code sections.
Ensure code readability and consistency across the project.

## Commit Message Conventions
Use the following format for commit messages to ensure clarity and consistency:

- **Feature**: `feat: add user authentication`
- **Fix**: `fix: resolve login bug`
- **Docs**: `docs: update README with setup instructions`
- **Style**: `style: format code`
- **Chore**: `chore: update dependencies`

## Submitting Pull Requests
1. **Fork and Clone** the repository.
2. **Create a New Branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit Your Changes with clear messages.
4. Push to Your Fork:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a Pull Request:
    - Go to the repository and create a new PR.
    - Provide a clear description and link relevant issues.

## Branching Strategy
- Use `feature/feature-name` for new features.
- Use `fix/issue-name` for bug fixes.
- Ensure PRs are small and focused on a single feature or fix.

## Review and Approval Process
- All contributions will be reviewed by maintainers.
- Feedback may be provided; address all comments before final approval.
- Upon review completion, PRs will be merged into the main branch.

## Licensing Contributions
By contributing to DearDiary, you agree that your contributions will be licensed under the same license as the project.

Thank you for following these guidelines and for contributing to DearDiary!
