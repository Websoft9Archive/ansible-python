# 服务启停

使用由 Websoft9 提供的 Python 部署方案，可能需要用到的服务如下：

### Django

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

### Redis

```shell
systemctl start redis
systemctl stop redis
systemctl restart redis
systemctl status redis
```
