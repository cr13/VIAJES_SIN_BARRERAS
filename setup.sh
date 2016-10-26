#!/bin/bash

npm install -g express-generator
express viajessinbarreras
cp package.json app.js viajessinbarreras/
cp -r views/* viajessinbarreras/views/
cp -r -R public viajessinbarreras/
cp -r -R test viajessinbarreras/

cd viajessinbarreras
npm install
npm install -g mocha
