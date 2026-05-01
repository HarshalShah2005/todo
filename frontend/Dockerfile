# Step 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build React for production
RUN npm run build


# Step 2: Serve with simple server
FROM node:18-alpine

WORKDIR /app

# Install serve package
RUN npm install -g serve

# Copy build files from previous stage
COPY --from=build /app/build ./build

# Expose frontend port
EXPOSE 3000

# Start frontend
CMD ["serve", "-s", "build", "-l", "3000"]