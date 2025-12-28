# Build stage
FROM node:20-alpine AS builder
WORKDIR /app/main
COPY main/package*.json ./
RUN npm ci
COPY main/ ./
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built static files
COPY --from=builder /app/main/dist ./main/dist
COPY main.js ./

ENV PORT=3000
EXPOSE 3000
CMD ["node", "main.js"]
