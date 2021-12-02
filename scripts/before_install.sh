#!/bin/bash

sudo yum update

# Install node.js
sudo yum install python-software-properties -y
sudo yum install ppa:chris-lea/node.js -y
sudo yum update
sudo yum install nodejs -y

# Install nodemon
# sudo npm install nodemon -g

# Install forever module 
# https://www.npmjs.com/package/forever
sudo npm install forever -g

# Clean working folder
# sudo find /home/ubuntu/test -type f -delete