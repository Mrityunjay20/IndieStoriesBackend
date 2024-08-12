# Base image
FROM node:22-alpine

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "dist/main.js"]