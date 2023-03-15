FROM public.ecr.aws/lambda/nodejs:18-x86_64
RUN npm install -g yarn

ENV ENV='local'

ADD ./package.json /var/task
ADD ./yarn.lock /var/task

RUN yarn install --production

ADD ./app.js /var/task

CMD ["/var/task/app.run"]