#!/bin/bash

mkdir -p dist

cp src/*.html dist/

tsc

# Clean up
rm src/*.js
