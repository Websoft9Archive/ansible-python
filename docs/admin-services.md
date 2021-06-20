# Start or Stop the Services

These commands are required when you use the Python of Websoft9.

### Django

```shell
systemctl start django
systemctl stop django
systemctl restart django
systemctl status django
```

### Nginx

```shell
systemctl start nginx
systemctl stop nginx
systemctl restart nginx
systemctl status nginx
```

### MySQL

```shell
sudo systemctl start mysql
sudo systemctl stop mysql
sudo systemctl restart mysql
sudo systemctl status mysql
```

### phpMyAdmin

```shell
sudo docker start phpmyadmin
sudo docker stop phpmyadmin
sudo docker restart phpmyadmin
sudo docker stats pgadmin
```

### MongoDB

```shell
sudo systemctl start mongo
sudo systemctl stop mongo
sudo systemctl restart mongo
sudo systemctl status mongo
```

### adminMongo

```shell
sudo docker start adminmongo
sudo docker stop adminmongo
sudo docker restart adminmongo
sudo docker stats adminmongo
```

### Docker

```shell
sudo systemctl start docker
sudo systemctl restart docker
sudo systemctl stop docker
sudo systemctl status docker
```

### Docker-compose

```
sudo docker-compose up
sudo docker-compose up -d

sudo docker-compose start
sudo docker-compose stop
sudo docker-compose restart
```

### Redis

```shell
systemctl start redis
systemctl stop redis
systemctl restart redis
systemctl status redis
```