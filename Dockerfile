FROM node:9-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# COPY server.js ./

# If you are building your code for production

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
