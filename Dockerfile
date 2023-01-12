FROM --platform=linux/amd64 node:12.19.0-alpine3.9

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install npm packages
RUN npm install

# Bundle app source
COPY . .

# Build our app for production
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
