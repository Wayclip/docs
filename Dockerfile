FROM oven/bun:1-slim AS builder
WORKDIR /app

COPY package.json bun.lockb ./
COPY source.config.ts tsconfig.json next.config.mjs ./

RUN bun install --immutable

COPY . .

RUN bun run build

FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3003
ENV HOST=0.0.0.0

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3003

CMD ["node", "server.js"]
