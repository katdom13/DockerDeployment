FROM node

WORKDIR /usr/src/app/frontend

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

RUN pwd

CMD yarn build ; yarn start