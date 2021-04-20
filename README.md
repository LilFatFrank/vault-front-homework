# vault-front-homework

## Launch the backend

```
# build the server image
$ docker build -t vault-front-homework:latest server

# run the server image
$ docker run -p 5000:5000 vault-front-homework:latest
```

## Launch the frontend

```
# install dependencies
yarn

# run the dev server
yarn dev
```
