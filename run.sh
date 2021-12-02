#!/bin/bash
cd /home/ExpenseTrackerAPI
docker-compose build --no-cache
docker-compose up -d
