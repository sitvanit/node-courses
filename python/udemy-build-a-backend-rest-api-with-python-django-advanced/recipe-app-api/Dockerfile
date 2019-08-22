# go to dockerhub and search for python.
# we'll choose the alpine 3.7 - the alpine means a light version of docker
FROM python:3.7-alpine
MAINTAINER Sitvanit

# ENV set environemt variable
# PYTHONUNBUFFERED tells python to run in an unbuffered mode which is recommended when run python in docker containers, it doesnt allow python to buffer the outpouts, it just print then directly and this avoid complications with docker image and python.
ENV PYTHONUNBUFFERED 1

# copy a file from our project to docker project
COPY requirements.txt /requirements.txt
# install the requirements into the docker image
RUN pip install -r /requirements.txt

# create a dir for our app in the docker
RUN mkdir /app
WORKDIR /app
COPY ./app /app

# create a user that is going to run our application using docker
RUN adduser -D user
# switch to that user - if we don't do that, the docker will run the app with the root user, and that means that someone can have root user and do malicous things.
USER user

# build our docker image:
# docker build .
# it will build whichever Dockerfile in our project
