docker run -it -d --name ng2course -p 4200:4200 --mount type=bind,source="$(pwd)/client/dist",target=/app ng2course