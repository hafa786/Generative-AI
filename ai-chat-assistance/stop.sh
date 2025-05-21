#!/bin/bash

# Exit on any error
set -e

echo "🛑 Stopping Docker Compose services..."
docker compose down --remove-orphans --volumes

echo "🧹 Clean up complete."
