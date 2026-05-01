# Use a small Node image
FROM node:18-alpine

# App directory inside container
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install deps
RUN npm install

# Copy rest of the code
COPY . .

# Expose backend port
EXPOSE 5000

# Start server
CMD ["npm", "start"]