FROM node:8.2.1

ENV WORKDIR=/app
WORKDIR ${WORKDIR}


#
RUN apt-get update -y

# Install utilities
RUN apt-get install -y sudo vim less software-properties-common python-software-properties

# Install supervisor
RUN apt-get install -y supervisor

# ugly hack to allow npm -g to work
RUN chmod 777 -R /usr/local
USER node
RUN npm install -g @angular/cli

USER root
EXPOSE 4200
CMD ["/usr/bin/supervisord", "-n"]
