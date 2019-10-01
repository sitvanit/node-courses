# Build all our images, tag each one, push each to docker hub
docker build -t sitvanit/multi-client:latest -t sitvanit/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t sitvanit/multi-server:latest -t sitvanit/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t sitvanit/multi-worker:latest -t sitvanit/multi-worker:$SHA -f ./worker/Dockerfile ./worker
docker push sitvanit/multi-client:latest
docker push sitvanit/multi-server:latest
docker push sitvanit/multi-worker:latest
docker push sitvanit/multi-client:$SHA
docker push sitvanit/multi-server:$SHA
docker push sitvanit/multi-worker:$SHA

# Apply all configs in the 'k8s' folder
kubectl apply -f k8s

# Imperatively set latest images on each deployment
kubectl set image deployment/client-deployment client=sitvanit/multi-client:$SHA
kubectl set image deployment/server-deployment server=sitvanit/multi-server:$SHA
kubectl set image deployment/worker-deployment worker=sitvanit/multi-worker:$SHA
