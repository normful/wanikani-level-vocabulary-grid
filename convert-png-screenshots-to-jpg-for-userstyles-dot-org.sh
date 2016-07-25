#!/bin/bash

cd ./screenshots
mogrify -resize 50% -format jpeg *.png
cd -
