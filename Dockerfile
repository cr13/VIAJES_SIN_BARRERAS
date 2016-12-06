# Tells the Docker which base image to start.
FROM node:latest

# Adds files from the host file system into the Docker container.
ADD . /models
ADD . /routes

# Sets the current working directory for subsequent instructions
WORKDIR /app

RUN npm install

#expose a port to allow external access
EXPOSE 8080

# Start application
CMD ["npm", "start"]
