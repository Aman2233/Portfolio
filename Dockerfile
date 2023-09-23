# Use the official Node.js LTS image as the base image
FROM node:18.18.0-alpine as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

