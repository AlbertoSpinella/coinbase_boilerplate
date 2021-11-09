#!/bin/bash
echo "Stopping coinbase_server..."
docker stop coinbase_server

echo "Removing coinbase_server..."
docker rm coinbase_server

echo "Removing coinbase_boilerplate..."
docker image rm coinbase_boilerplate