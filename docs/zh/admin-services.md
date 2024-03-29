# 服务启停

使用由 Websoft9 提供的 Python 部署方案，可能需要用到的服务如下：

### Django

#### On Linux

```shell
systemctl start django
systemctl stop django
systemctl restart django
systemctl status django
```

#### On Windows

服务随操作系统自动启动，如果手工修改配置参数后，需要重新启停服务，有两种方法。

* 方法一：在“开始”-> “管理工具”->“服务”中重启django***服务。

* 方法二：在C:\websoft9\django*中找到“manager-windows”。

双击打开“manager-windows”，可以进行服务启停、参数配置。


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

### Docker-compose 服务

```
#创建容器编排
sudo docker-compose up

#创建容器编排并重建有变化的容器
sudo docker-compose up -d

#启动/重启
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