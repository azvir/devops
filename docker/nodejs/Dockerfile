#Specify a Base image 
FROM node:alpine

#Set custom start folder 
WORKDIR /usr/app

#Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]