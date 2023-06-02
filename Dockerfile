FROM node:18

WORKDIR /xinyun_zet

ADD package.json pnpm-lock.json 

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "pnpm", "run", "dev" ]