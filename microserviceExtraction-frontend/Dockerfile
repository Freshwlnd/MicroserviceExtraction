# FROM node:6.10.3
FROM node:4.2.3
WORKDIR /home
COPY . .
# COPY package*.json ./
# RUN npm install --registry https://registry.npm.taobao.org
EXPOSE 5555
# CMD ["npm", "start"]
CMD ["npm", "install", "&&", "npm", "start"]
