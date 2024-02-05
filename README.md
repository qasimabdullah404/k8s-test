# Hello from NodeJS

### Build docker image

1. `docker build -t USERNAME/hello-nodejs:v1`
2. `docker push USERNAME/hello-nodejs:v1`

### Local Kubernetes cluster

Spin a local Kubernetes cluster using Minikube with following addons enabled:

1. Ingress (`minikube addons enable ingress`)
2. Metrics Server (`minikube addons enable metrics-server`)

### Deploy to teh cluster

1. `kubectl apply -f ./k8s/manifest.yaml`

### Tunnel traffic

1. `minikube tunnel` AND open new terminal window/tab
2. Run `curl http://127.0.0.1/health` && `curl http://127.0.0.1/` on the trminal's new window/tab
