#!/bin/bash
# deploy.sh
# This script deploys the application using Helm.
set -euo pipefail
trap 'echo "Error occurred at line $LINENO"; exit 1' ERR

echo "Starting deployment with Helm..."

# Optional: update Helm repositories.
helm repo update

# Deploy using Helm. Adjust the chart path and release name as needed.
helm upgrade --install scalyshop-backend ./scalyshop-backend \
  --namespace scalyshop --create-namespace

echo "Deployment completed successfully."