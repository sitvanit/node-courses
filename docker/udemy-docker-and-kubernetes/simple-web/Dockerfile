# Specify a base image
FROM node:alpine
# alpine is a term for an image that as small as possible

# Set root dir - everything in the commands below will be in relative to that dir inside the container
WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]


# docker build -t sitvanit/simple-web .
# docker run -p 8080:8080 sitvanit/simple-web

# in order to have bash
# docker run -it sitvanit/simple-web sh
