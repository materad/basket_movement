FROM alpine:latest

RUN apk update
RUN apk upgrade
RUN apk add wget
RUN apk --no-cache add mongodb-tools
RUN apk --update --no-cache add p7zip
RUN apk --no-cache add ca-certificates
WORKDIR "/games"
RUN wget "https://github.com/sealneaward/nba-movement-data/raw/master/data/01.01.2016.CHA.at.TOR.7z" -P raw/
RUN wget "https://github.com/sealneaward/nba-movement-data/raw/master/data/01.01.2016.DAL.at.MIA.7z" -P raw/
RUN wget "https://github.com/sealneaward/nba-movement-data/raw/master/data/01.01.2016.NYK.at.CHI.7z" -P raw/
RUN wget "https://github.com/sealneaward/nba-movement-data/raw/master/data/01.01.2016.ORL.at.WAS.7z" -P raw/
RUN wget "https://github.com/sealneaward/nba-movement-data/raw/master/data/01.01.2016.PHI.at.LAL.7z" -P raw/
RUN 7za x "raw/*.7z"
RUN rm -rf raw

CMD if [ "$(ls -A ./)" ]; then \
        ls -1 *.json | sed 's/.json$//' | while read col; do \
        mongofiles --host mongodb --port 27017 -d BasketDb put $col.json; \
        done; \
    fi