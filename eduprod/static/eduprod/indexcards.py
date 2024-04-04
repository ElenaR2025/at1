from http.server import BaseHTTPRequestHandler, HTTPServer

# Define a class that inherits from BaseHTTPRequestHandler
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    # Define the method to handle GET requests
    def do_GET(self):
        # Check the path of the request
        if self.path == '/':
            # If the path is the root, send the index.html file
            self.send_response(200)  # Send a 200 OK response
            self.send_header('Content-type', 'text/html')  # Set the content type to HTML
            self.end_headers()  # End the headers section
            with open('index.html', 'rb') as file:  # Open the index.html file
                self.wfile.write(file.read())  # Write the content of the file to the response
        elif self.path == '/page1':
            # If the path is /page1, send the page1.html file
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('page1.html', 'rb') as file:
                self.wfile.write(file.read())
        elif self.path == '/page2':
            # If the path is /page2, send the page2.html file
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('page2.html', 'rb') as file:
                self.wfile.write(file.read())
        else:
            # If the path is not recognized, send a 404 Not Found response
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'404 Not Found')

# Define a function to run the server
def run():
    server_address = ('', 8000)  # Set the server address and port
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)  # Create an HTTPServer instance
    print('Server running...')  # Print a message indicating the server is running
    httpd.serve_forever()  # Start the server and serve requests indefinitely

# Check if the script is being run directly (not imported as a module)
if __name__ == '__main__':
    run()  # Run the server
