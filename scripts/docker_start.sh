#!/bin/bash
echo "Building coinbase_boilerplate..."
docker build -t coinbase_boilerplate .

echo "Running coinbase_server..."
docker run -d --name coinbase_server -p 3000:3000 coinbase_boilerplate