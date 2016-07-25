#!/bin/bash

cp ./dist/WaniKani-Vocab-Grid-Plain.css ../normful.github.io/
cd ../normful.github.io
git add WaniKani-Vocab-Grid-Plain.css
git commit -m "[dist] updated WaniKani-Vocab-Grid-Plain.css"
git push origin
cd -
