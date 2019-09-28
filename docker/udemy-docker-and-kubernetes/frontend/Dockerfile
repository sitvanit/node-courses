# Build phase - use node: alpine
FROM node:alpine as builder
WORKDIR '/app'
## Copy package.json
COPY package.json .
## Install dependencies
RUN npm install
COPY . .
## Run 'npm run build'
RUN npm run build

# Run phase - Use nginx
FROM nginx
## expose outside the container the nginx dedault port - necessary for elastic beanstalk
EXPOSE 80
## Copy over the result of 'npm run build'
COPY --from=builder /app/build /usr/share/nginx/html


# docker build .
# docker run -p 8080:80 <image_id>>

