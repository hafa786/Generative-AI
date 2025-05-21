# Stage 1: Build React app
FROM node:18 AS builder
WORKDIR /frontend-app 
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve with static server
FROM node:18
WORKDIR /backend-typescript-api
RUN npm install -g serve
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
