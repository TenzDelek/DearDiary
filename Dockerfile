# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Set NODE_ENV to development for the build process
ENV NODE_ENV=development

# Install dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "dev"]
