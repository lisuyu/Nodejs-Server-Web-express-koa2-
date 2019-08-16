#!/bin/sh
cd /c/Users/Administrator/Desktop/Node.js-Web-Server-master/blog/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "">access.log