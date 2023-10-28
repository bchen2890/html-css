#!/bin/sh
cd e:/html-css
git add --all
timestamp() {
  date +"at %H:%M:%S on %d/%m/%Y"
}
git commit -am "Auto save $(timestamp)"
git push origin master