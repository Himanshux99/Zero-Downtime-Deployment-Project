# -------------------------
# Build Stage
# -------------------------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# -------------------------
# Production Stage
# -------------------------
FROM nginx:stable-alpine

COPY --from=builder /app/dist/client /usr/share/nginx/html

# Optional custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]