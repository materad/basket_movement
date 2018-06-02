FROM python:3.6.5-alpine3.6

WORKDIR /movement-service

# add the current directory to the container as /app
ADD requirements.txt .
ADD src .

# execute everyone's favorite pip command, pip install -r
RUN pip install -r requirements.txt

# unblock port 80 for the Flask app to run on
EXPOSE 5000