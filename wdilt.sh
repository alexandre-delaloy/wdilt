#!/bin/bash

function wdilt() {
	cp ./docs/README.md ./README.md
	NEW_DATE=$(date +"%m-%d-%y")
	git add .
	git commit -m ":speech_balloon: $NEW_DATE"
	git push
}

wdilt