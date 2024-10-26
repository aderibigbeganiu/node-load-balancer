#!/bin/ksh
for n in `seq 1 10000`
do 
    curl http://localhost:1234/api/users
    echo
done