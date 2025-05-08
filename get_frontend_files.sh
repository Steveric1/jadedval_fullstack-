#!/bin/bash

if [ -d "jade_dval" ]; then
    echo "pulling latest frontend files..."
    cd jade_dval && npm install && npm run build
else
    echo "Already building frontend files..."
fi

# step 2: copy the build into backend public folder
if  [ -d "../public" ]; then
    echo "removing old frontend files..."
    sudo rm -rf ../public/*
    cp -r dist/* ../public/
    echo "frontend files copied to backend public folder"
else
    echo "creating public folder..."
    mkdir ../public
    cp -r dist/* ../public/
    echo "frontend files copied to backend public folder"
fi