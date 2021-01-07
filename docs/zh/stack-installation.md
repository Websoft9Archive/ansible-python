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

2. 如果部署的是 Django 环境，访问网址：*http://域名* 或 *http://服务器公网IP*，就可以看到界面

   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/python/django-installss-websoft9.png)

> 需要了解更多 Python 的使用，请参考官方文档：[Python Documentation](https://docs.python.org/zh-cn/3/)

## 常见问题

#### 浏览器打开IP地址，无法访问 Django（白屏没有结果）？

您的服务器对应的安全组 80 端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容