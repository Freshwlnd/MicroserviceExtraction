FROM node:6.10.3
WORKDIR /home
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5555
CMD ["npm", "start"]