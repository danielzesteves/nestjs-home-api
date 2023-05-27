#!/bin/sh
ls
cd src
npm install 
export PATH=$PATH:/app/node_modules/.bin
npm run start:dev
