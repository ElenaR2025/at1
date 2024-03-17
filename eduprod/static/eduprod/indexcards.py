from http.server import BaseHTTPRequestHandler, HTTPServer

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('index.html', 'rb') as file:
                self.wfile.write(file.read())
        elif self.path == '/page1':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('page1.html', 'rb') as file:
                self.wfile.write(file.read())
        elif self.path == '/page2':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('page2.html', 'rb') as file:
                self.wfile.write(file.read())
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'404 Not Found')

def run():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print('Server running...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()