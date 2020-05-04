FROM node:dubnium-alpine

ENV NODE_ENV="production"
ENV PORT=3000

WORKDIR /app

# Copy the packages we need for the prospect
COPY package.json .
COPY packages/client packages/client
COPY packages/api packages/api

RUN yarn install --production

EXPOSE ${PORT}
CMD cd packages/client && yarn start
