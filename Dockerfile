FROM node:19-alpine

WORKDIR /app
COPY . ./
RUN yarn && npx tsc
EXPOSE  3000

CMD ["node","/app/dist/index.js"]