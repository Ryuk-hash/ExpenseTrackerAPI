#!/bin/bash
cd /home/ec2-user/ExpenseTrackerAPI/
docker-compose build --no-cache
docker-compose up -d
