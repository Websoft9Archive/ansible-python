---
sidebarDepth: 3
---

# 参数

Python 预装包包含 Python 运行所需一序列支撑软件（简称为“组件”），下面列出主要组件名称、安装路径、配置文件地址、端口、版本等重要的信息。

## 路径

### Python

除了 Python3 之外，预装包中还安装了 Virtualenv, pip 等常用的 Python 工具。

Python 应用目录： */data/wwwroot*  
Python 框架目录： */data/apps*  
Python 源码目录： */usr/lib/python*  
Python 日志目录： */data/logs/python*  

> 操作系统一般默认自带 Python2，部分操作系统默认也安装了 Python3

### uWSGI

uWSGI 配置文件： */etc/uwsgi.ini*  
uWSGI 目录： */etc/uwsgi.d*  

### Django

#### Linux

Django 安装目录： */data/wwwroot/django*  

#### Windows

采用 [Bitnami Django](https://bitnami.com/stack/django) 安装包制作而成。  

Django 安装目录： *C:\websoft9\django*  
Django 安装目录： *C:\websoft9\django\apache2\htdocs*  

### Nginx

Nginx 虚拟主机配置文件：*/etc/nginx/conf.d/default.conf*  
Nginx 主配置文件： */etc/nginx/nginx.conf*  
Nginx 日志文件： */var/log/nginx*  
Nginx 伪静态规则目录： */etc/nginx/conf.d/rewrite*

#### MySQL

MySQL 安装路径: */usr/local/mysql*  
MySQL 数据文件 */data/mysql*  
MySQL 配置文件: */etc/my.cnf*  

MySQL 可视化管理参考 [MySQL 管理](/zh/admin-mysql.md) 章节。

### phpMyAdmin

phpMyAdmin 是一款可视化 MySQL 管理工具，在本项目中它基于 Docker 安装。  

phpMyAdmin directory：*/data/apps/phpmyadmin*  
phpMyAdmin docker compose file：*/data/apps/phpmyadmin/docker-compose.yml* 

### Docker

Docker 根目录: */var/lib/docker*  
Docker 镜像目录: */var/lib/docker/image*   
Docker daemon.json 文件：默认没有创建，请到 */etc/docker* 目录下根据需要自行创建   

## 端口号

在云服务器中，通过 **[安全组设置](https://support.websoft9.com/docs/faq/zh/tech-instance.html)** 来控制（开启或关闭）端口是否可以被外部访问。 

通过命令`netstat -tunlp` 看查看相关端口，下面列出可能要用到的端口：

| 名称 | 端口号 | 用途 |  必要性 |
| --- | --- | --- | --- |
| TCP | 8000 | 通过 HTTP 直接访问 Django 演示页面 | 可选 |
| TCP | 80 | 通过 HTTP 直接访问 Python 应用 | 必选 |
| TCP | 443 | 通过 HTTPS 直接访问 Python 应用 | 可选 |

## 版本号

组件版本号可以通过云市场商品页面查看。但部署到您的服务器之后，组件会自动进行更新导致版本号有一定的变化，故精准的版本号请通过在服务器上运行命令查看：

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
```