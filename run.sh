#!/bin/sh

# install dependencies and production build
cd ./client
yarn
yarn build

# serve application
cd ..
go run main.go
