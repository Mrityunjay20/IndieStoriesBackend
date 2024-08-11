# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nest.js app
RUN npm run build

# Expose the application port
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "start:prod"]
