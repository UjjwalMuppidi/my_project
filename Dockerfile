# Use official Nginx image from the Docker Hub
FROM nginx:alpine

# Set the working directory
WORKDIR /app

# Copy the contents of your 'my_project' directory into the Nginx container's HTML folder
COPY ./my_project /usr/share/nginx/html

# Expose port 80 to serve content
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
