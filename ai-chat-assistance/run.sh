#!/bin/bash

# Exit on error
set -e

echo "🔧 Building Docker images..."
docker compose build

echo "🚀 Starting containers..."
docker compose up -d

echo "✅ Setup complete. Frontend at http://localhost:3000, Backend at http://localhost:8080"
