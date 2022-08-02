FROM node:16

WORKDIR /app

COPY . /app/

RUN npm install

ENV MONGO_ATLAS_SRV=mongodb+srv
ENV PORT=8080

EXPOSE 8000

RUN npm run dev
