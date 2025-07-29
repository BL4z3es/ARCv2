# This program runs the server for the ARC-6014 Official Website.
# It sets the environment to development and starts the server on port 8000.
#!/bin/bash
cd py3-shell
Scripts\activate
cd ..
cd src/Server
python manage.py runserver
# The server will be accessible at http://localhost:8000/