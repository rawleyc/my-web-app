# --- STAGE 1: The Builder ---
# We use a full version of Node to compile and install things.
FROM node:22-alpine AS builder

# Create a folder for our app
WORKDIR /app

# Copy only the "grocery list" of dependencies first. 
# This makes builds faster because Docker caches this step.
COPY package*.json ./

# Install dependencies (clean install)
RUN npm ci

# Copy the rest of your code
COPY . .

# Build the app (if you're using TypeScript or a framework)
RUN npm run build


# --- STAGE 2: The Runner (Production) ---
# We use a tiny version of Node. No compilers, no junk. Secure.
FROM node:22-alpine

# Set the environment to production
ENV NODE_ENV=production

WORKDIR /app

# --- HERO MOVE: Security ---
# By default, Docker runs as 'root' (the boss). This is dangerous.
# We create a limited user named 'appuser' who can only run the app.
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Only copy the built files from the Builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Tell Docker to use our limited user
USER appuser

# The port your app listens on
EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"]
