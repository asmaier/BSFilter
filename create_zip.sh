#!/usr/bin/env bash
cd ..
zip -r filterbubble.zip FilterBubble -x "*.DS_Store" -x "*.git*" -x "*.idea*"
cd FilterBubble
