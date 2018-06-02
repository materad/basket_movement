FROM python:3.6.5-alpine3.6

WORKDIR /movement-service

ADD requirements.txt .
ADD src .

RUN pip install -r requirements.txt


EXPOSE 5000