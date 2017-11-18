FROM node:latest

#set working directory
RUN mkdir -p /app
WORKDIR /app

#install api dependencies
ADD package.json /app/package.json
RUN npm install

# add api
ADD . /app

# run api
CMD ["npm", "run", "ionic:serve"]