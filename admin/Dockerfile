FROM node:latest

#set working directory
RUN mkdir -p /admin
WORKDIR /admin

#install api dependencies
ADD package.json /admin/package.json
RUN npm install

# add api
ADD . /admin

EXPOSE 4200

# run api
CMD ["npm", "start"]