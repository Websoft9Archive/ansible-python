# Parameters

The Python deployment package contains a sequence of software (referred to as "components") required for Python to run. Below list the important information, the component name, installation directory path, configuration file path, port, version, etc.

## Path

### Python

Python site directory: */data/wwwroot*  
Python framework directory: */data/wwwroot*  
Python source code directory： */usr/lib/python*  
Python logs directory: */data/logs/python*  

### Django

Django installation directory: */data/wwwroot/django*  
Django systemd name: django  

### Nginx

Nginx vhost configuration file: */etc/nginx/conf.d/default.conf*    
Nginx main configuration file: */etc/nginx/nginx.conf*   
Nginx logs file: */var/log/nginx*  
Nginx rewrite rules directory: */etc/nginx/conf.d/rewrite* 

### MySQL

MySQL installation directory: */usr/local/mysql*  
MySQL data directory: */data/mysql*  
MySQL configuration file: */etc/my.cnf*    

MySQL Web Management refer to [MySQL Management](/admin-mysql.md)

###  phpMyAdmin

phpMyAdmin is a visual MySQL management tool, is installed based on docker.  

phpMyAdmin directory：*/data/apps/phpmyadmin*  
phpMyAdmin docker compose file：*/data/apps/phpmyadmin/docker-compose.yml* 

### MongoDB

MongoDB data directory: */var/lib/mongodb*  
MongoDB Configuration File:  */etc/mongod.conf*  
MongoDB logs File:  */var/log/mongodb*  

### adminMongo

adminMongo is a visual MongoDB management tool, is installed based on docker.  

Docker root directory: */var/lib/docker*  
Docker image directory: */var/lib/docker/image*  

### Docker

Docker root directory: */var/lib/docker*  
Docker image directory: */var/lib/docker/image*   
Docker daemon.json: please create it when you need and save to to the directory */etc/docker*   

### Redis

Redis configuration file: */etc/redis.conf*  
Redis data directory: */var/lib/redis*  
Redis logs file: */var/log/redis/redis.log*

## Ports

Open or close ports by **[Security Group Setting](https://support.websoft9.com/docs/faq/tech-instance.html)** of your Cloud Server to decide whether the port can be accessed from Internet.  

You can run the cmd `netstat -tunlp` to check all related ports.  

The following are the ports you may use:

| Name | Number | Use |  Necessity |
| --- | --- | --- | --- |
| TCP | 80 | HTTP to access Django by Nginx | Required |
| TCP | 443 | HTTPS to access Django Nginx | Optional |
| TCP | 80 | HTTP to access Django directly | Required |
| TCP | 3306 | Remote to access MySQL | Optional |
| TCP | 9090 | HTTP to access phpMyAdmin | Optional |
| TCP | 27017 |Remote to access MongoDB | Optional |
| TCP | 9091 | HTTP to access adminMongo | Optional |

## Version

You can see the version on product pages at Marketplace. However, after being deployed to your server, the components will be updated automatically, resulting in a certain change in the version number. Therefore, run the command on the server to view the exact version number. 

```shell
# Check all components version
sudo cat /data/logs/install_version.txt

# Linux Version
lsb_release -a

# Nginx  Version
nginx -V

# Python version
python3 -V
python -V

# Docker Version
docker -v

# MySQL version
mysql -V

# MongoDB version
mongodb -V

# Django version
/data/wwwroot/django/bin/pip show django
```