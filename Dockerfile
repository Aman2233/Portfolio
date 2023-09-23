# Use the official Node.js LTS image as the base image
FROM node:18.18.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build the Vite + React application for production
RUN npm run build

# Expose the port your application will run on (default Vite port is 3000)
EXPOSE 3000

# Start your application in production mode
CMD ["npm", "run", "dev"]
