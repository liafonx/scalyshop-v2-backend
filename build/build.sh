#!/bin/bash
# Exit immediately on errors, treat unset variables as errors, and catch errors in pipelines.
set -euo pipefail

# Optional: trap errors to print the line number where the error occurred.
trap 'echo "Error occurred at line $LINENO. Exiting..."; exit 1' ERR

docker pull $CI_APPLICATION_REPOSITORY || true
docker build --cache-from $CI_APPLICATION_REPOSITORY -t $CI_APPLICATION_REPOSITORY .
docker tag $CI_APPLICATION_REPOSITORY $CI_APPLICATION_TAG

docker push $CI_APPLICATION_REPOSITORY
docker push $CI_APPLICATION_REPOSITORY:$CI_APPLICATION_TAG

echo "Build completed successfully."