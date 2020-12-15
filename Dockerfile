FROM cypress/base:10

COPY . .

RUN npm i

RUN $(npm bin)/cypress verify

CMD $(npm bin)/cypress run