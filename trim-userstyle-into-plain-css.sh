#!/bin/bash

line_reverser() {
    if hash gtac 2>/dev/null; then
        gtac "$@"
    else
        tac "$@"
    fi
}

rm -f          ./dist/WaniKani-Vocab-Grid-Plain.css

# Delete first 10 lines and last 2 lines
sed -e '1,10d' ./dist/WaniKani-Vocab-Grid.css | line_reverser | sed -e '1,2d' | line_reverser >> ./dist/WaniKani-Vocab-Grid-Plain.css
