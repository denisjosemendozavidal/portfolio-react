FROM node
RUN npm i -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 8080
CMD ["http-server", "dist"]