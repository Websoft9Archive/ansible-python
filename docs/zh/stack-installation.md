# 初始化安装

在云服务器上部署 Python 预装包之后，请参考下面的步骤快速入门。  

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:80** 端口是否开启
3. 若想用域名访问 Python 应用，请先到 **域名控制台** 完成一个域名解析

## Python 安装验证

1. 使用 SSH 工具登录服务器，输入命令`python3`，便进入交互式解释器界面，即具备 Python3 环境
   ```
   Python 3.6.8 (default, Apr  2 2020, 13:34:55)
   [GCC 4.8.5 20150623 (Red Hat 4.8.5-39)] on linux
   Type "help", "copyright", "credits" or "license" for more information.
   >>>
   ```

2. 使用本地浏览器访问网址：*http://域名* 或 *http://服务器公网IP*，可以看到 Django 界面
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/python/django-installss-websoft9.png)

2. 使用本地浏览器访问网址：*http:/服务器公网IP/9panel*, 就进入引导页面 9Panel
   ![9panel](https://libs.websoft9.com/Websoft9/DocsPicture/zh/python/python-9panel-websoft9.png)

3. 通过 9Panel 可以快速了解环境的基本情况，并管理数据库，找到帮助文档，寻求人工支持

> 需要了解更多 Python 的使用，请参考官方文档：[Python Documentation](https://docs.python.org/zh-cn/3/)


## 登录数据库

Python Runtime 内置 MySQL 及可视化数据库管理工具 `phpMyadmin` ，[登录MySQL](/zh/admin-mysql.md) 管理用户和数据库

![9panel](https://libs.websoft9.com/Websoft9/DocsPicture/zh/9panel/9panel-mysql-websoft9.png)

## 安装网站

Python Runtime 可以用来部署多个 Python 网站，[马上开始吧](/zh/solution-addapps.md)

## 常见问题

#### 浏览器打开IP地址，无法访问 Django（白屏没有结果）？

您的服务器对应的安全组 80 端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### 本部署方案中的 Django 是如何安装的？

采用隔离环境安装

#### 9Panel 是什么？

[9Panel](https://github.com/Websoft9/9panel)是 Websoft9 公司镜像的开源组件之一，支持中英文显示，部分镜像内置了9Panel. 它是集合数据库管理、文档和支持服务的引导页面，是镜像快速入门的向导工具。基于Bootstrap+vue.js开发，几乎不会占用系统资源，也不会对系统文件进行任何修改。