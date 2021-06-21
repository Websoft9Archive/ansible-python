# Django

Python Runtime 中默认已经安装并启用了一个 [Django](https://github.com/django/django) 项目，其安装路径参考[此处](/zh/stack-components.md#django)。

> 以下内容仅适用于 Linux 系统，如果你使用的是 Windows 系统，请参考[历史文档](django-windows-old.md)

下面我们采用先易后难的方式，讲解用户可能需要的 Django 几种应用场景。

## Upload Django source code

基于环境中默认的 Django 框架，用户可以通过**上传自己的代码**的方式来部署应用。

1. 使用 SFTP 远程连接到 Django 所在的服务器

2. 进入 */data/wwwroot/django* 目录，创建文件夹 **myproject**

3. 上传代码到 **myproject** 中

4. 根据用户应用的手册完成后续配置，可能的用的到的操作如下：
   ```
   cd /data/wwwroot/django && source bin/activate
   cd myproject
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver 0.0.0.0:9099
   ```

## Create Django APP by CLI

基于环境中默认的 Django 框架，用户通过**命令行**创建应用。下面详细说明：

1. 远程连接到 Django 所在的服务器

2. 进入到已安装的 Django 中创建新的应用，命令为 **myproject**
   ```
   cd /data/wwwroot/django
   source bin/activate
   django-admin startproject myproject
   ```

3. 修改 myproject 的配置文件 *myproject/myproject/settings.py* 中 **ALLOWED_HOSTS** 值为如下
   ```
   ALLOWED_HOSTS = ['*']
   ```
   > 也可以修改 DATABASES 参数，指定数据库

4. 指定端口下启动网站（下面设置为绑定任意IP地址）
   ```
   cd myproject
   python manage.py migrate
   python manage.py runserver 0.0.0.0:9099
   ```

5. 本地浏览器访问：*http://服务器公网IP:9099* 便可以看到 Django 界面

> 以上步骤可见，一个 Django 框架（隔离环境）下可以创建多个应用项目。

## Install new Django Framework

如果用户向自行安装一个新的 Django 框架，请参考上一个章节 [《安装网站》](/zh/solution-addapps.md)