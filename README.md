# Redux Anecdotes App

This is a fullstack application for creating and voting on anecdotes, built with React, Redux, and JSON Server.

## Features

- View a list of anecdotes
- Create new anecdotes
- Vote on anecdotes
- Filter anecdotes
- Display notifications

## CI/CD Pipeline

This project includes a GitHub Actions CI/CD pipeline that:

1. Runs on every push to main and pull request
2. Checks out the code
3. Installs dependencies
4. Runs linting
5. Builds the application
6. Deploys to Render (only on merge to main)
7. Creates a version tag

## Setup Instructions

### Development

1. Clone the repository
   ```
   git clone https://github.com/Thanakorn-AI/11.20-11.21.git
   cd 11.20-11.21
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. In another terminal, start the JSON server
   ```
   npm run server
   ```

### Production Deployment

1. Create a Render account if you don't have one
2. Create a new Web Service in Render, pointing to your GitHub repository
3. Configure the service with:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start:prod`
   - Environment Variable: `PORT=10000` (or whatever port Render provides)
4. Add the Render Deploy Hook URL to your GitHub repository secrets as `RENDER_DEPLOY_HOOK`
5. Add your deployed application URL to GitHub repository secrets as `DEPLOYMENT_URL`

## Branch Protection

This repository has branch protection rules on the main branch that:
1. Require pull request reviews before merging
2. Prevent push directly to main, even for administrators
3. Require status checks to pass before merging

## Technologies

- React
- Redux Toolkit
- Vite
- JSON Server
- GitHub Actions
- Render for hosting