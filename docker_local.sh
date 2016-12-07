#!/bin/bash

docker build -t viajes_sin_barreras .
docker run -d --name mongoDB mongo
docker run --link=mongoDB:mongodb -it viajes_sin_barreras
