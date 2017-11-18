FROM node:latest

#set working directory
RUN mkdir -p /api
WORKDIR /api

#install api dependencies
ADD package.json /api/package.json
RUN npm install

# add api
ADD . /api

# run api
CMD ["npm", "start"]