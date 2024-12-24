# Use a Node.js base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY dist .
COPY data ./data

# Expose the port your Koa app listens on (e.g., 3000)
EXPOSE 3000

# Start the Koa app
CMD ["node", "src/index.js"] 
