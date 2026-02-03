if [ $# -eq 0 ]; then
 echo "No arguments supplied"
elif [ $# -eq 1 ]; then
 echo "$1"
elif [ $# -eq 2 ]; then
 echo "$1"
 echo "$2"
else [ $# -eq 3 ];
 echo "$1"
 echo "$2"
 echo "$3"
 fi
