# Use an existing docker image as a base
FROM alpine
# We use alpine as a base image because it comes with preinstalled set of useful programs
# for install and run an image.
# alpine has some linux programs and apk (package manager)

# Download and install dependency
RUN apk add --update gcc
RUN apk add --update redis
# apk is a program of apachee, it's a package manager that preinstall in alpine.

# Tell the image what to do when it starts as a container
CMD ["redis-server"]

# In order to run the docker - from the cli:

# docker build .
# build     takes a Dockerfile and generates an image out of it.
# .         the directory where it needs to search for the Dockerfile. the build context, the set of files of folders that belongs to our project and we like to wrap in the container.

# Sending build context to Docker daemon  2.048kB

# Step 1/3 : FROM alpine
# latest: Pulling from library/alpine (check if we have the alpine image in cache, we don't so it pulls it)
# Status: Downloaded newer image for alpine:latest

# Step 2/3 : RUN apk add --update redis
# ---> Running in 0ba6754e4497 (step 2 runs in a temp container of alpine image (the source of the prev step) - for every step except of the first a conatiner is created)
# (1/1) Installing redis (5.0.5-r0)
# Executing redis-5.0.5-r0.pre-install
# OK: 7 MiB in 15 packages
# Removing intermediate container 0ba6754e4497 (the container stopped)
# ---> ff2a6bc006ea (a snapshot is taken from that container of its OS with alpine and redis - a temporary image)

# Step 3/3 : CMD ["redis-server"] (we are going to look on the image from prev step, make a new container from it and set the primary command of the container)
# ---> Running in e91205192e95
# Removing intermediate container e91205192e95
# ---> fe3454c59e6a
# Successfully built fe3454c59e6a (the end result of the build is a final image - not a container)

# we can also run the build of the image with a tag (tag convention <my_docker_id>/<repo_or_project_name>:<version>
# we don't have to use the version in the run, the default is latest
# the sitvanit/redis is the repository name and the tag is the version
# docker build -t <image_name> .
# docker build -t sitvanit/redis:latest .


# docker run <container_id/container_tag> (creates a container from image)

