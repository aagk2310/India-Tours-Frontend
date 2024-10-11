# Use the official Node.js Alpine image as the base image
FROM node:22-alpine3.19

# Create and change to the app directory
WORKDIR /src/react/Tour-Website

# Copy only package.json and package-lock.json first to leverage Docker layer caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application for production
RUN npm run build

# Install a simple HTTP server to serve the build files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application
# Install a simple HTTP server to serve the build files


# Start the application and listen on all interfaces

CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:3000"]