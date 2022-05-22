FROM node

# Create app directory
# Create app directory
RUN 
WORKDIR /app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .
EXPOSE 9000
