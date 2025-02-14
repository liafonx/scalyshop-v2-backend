#!/bin/bash
set -e  # Stop on errors

echo "Building Docker image: ${CI_REGISTRY_IMAGE}:${CI_APPLICATION_TAG}"

docker build --provenance=false -t ${CI_REGISTRY_IMAGE}:${CI_APPLICATION_TAG} .

echo "Logging into Docker registry..."
docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY

echo "Pushing Docker image to registry..."
docker push ${CI_REGISTRY_IMAGE}:${CI_APPLICATION_TAG}

echo "Docker image pushed successfully: ${CI_REGISTRY_IMAGE}:${CI_APPLICATION_TAG}"
