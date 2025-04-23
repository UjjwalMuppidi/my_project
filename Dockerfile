# Use an official Nginx image from the Docker Hub
FROM nginx:alpine

# Set the working directory to /app (optional)
WORKDIR /app

# Copy the contents of the local directory (where your static files are located) to the container
COPY . /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80
