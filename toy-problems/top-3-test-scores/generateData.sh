#!/bin/bash
result=''
NUMITER=50
for i in `seq 1 $NUMITER`; do
  name=$(names)
  numGrades=$(jot -r 1 0 20)
  result+=$name', '
  for j in `seq 1 $numGrades`; do
    result+=$(jot -r 1 0 100)
    if [ $j -ne $numGrades ]; then
      result+=', '
    fi
  done
  if [ $i -ne $NUMITER ]; then
    result+="\n"
  fi
done
echo -e $result
echo -e $result > test_scores.txt