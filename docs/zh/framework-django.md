# Django

Python Runtime 中默认已经安装并启用了一个 [Django](https://github.com/django/django) 项目，其安装路径参考[此处](/zh/stack-components.md#django)。

下面我们采用先易后难的方式，讲解用户可能需要的 Django 几种应用场景。

## 上传 Django 应用

基于环境中默认的 Django 框架，用户可以通过**上传自己的代码**的方式来部署应用。

1. 使用 SFTP 远程连接到 Django 所在的服务器

2. 进入 */data/wwwroot/django* 目录，创建文件夹 **myproject**

3. 上传代码到 **myproject** 中

4. 根据用户应用的手册完成后续配置

## 创建 Django 应用

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

## 安装 Django 框架

### On Linux

> 注意: python2和python3 命令不同 python/python36
> Centos系统自带python2, 由于YUM和部分系统组件需要使用python2,python3版本的镜像会保留python2,python3版本的镜像运行解析器命令为: python3.6

1. 在 `/data/wwwroot/`创建一个文件夹用来存放Django程序, 这里假设文件夹名为`django_project`

2. 上传Django程序到`/data/wwwroot/django_project`目录下,这里假设文件夹名称`project`

3. \(可选,推荐\) 在`/data/wwwroot/django_project` 目录下运行命令 `virtualenv env` (py3 使用 `python3.6 -m venv env` ) 生产Python虚拟环境,以便隔离系统Python环境\(env为虚拟环境生成的文件夹名称可以自定义\)

4. 启用Python虚拟环境,运行命令 `source /data/wwwroot/django_project/env/bin/active`,启用后服务器主机名会带上`(env)` 字样,表示激活成功

5. 安装Django程序所需依赖 进入上传的Django程序目录 一般开发者都会将依赖信息保存到程序目录下的`requirements.txt`文件里 运行命令 `pip install -r requirements.txt`安装所需要的依赖

6. 根据自己网站程序等实际情况修改 程序目录里的配置文件,一般文件名为settings.py 在此文件中设置好数据库等相关信息,附Mysql设置,请根据实际情况修改

   ```
   DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.mysql',
       'NAME': 'dj_project',
   'PORT': '3306',
   'HOST': '127.0.0.1',
   'USER': 'root',
   'PASSWORD': '123456'
    }
   }
   ```

   ​

7. 创建数据库,然后初始化数据库 `python manage.py migrate`

8. 启动程序 `python manage.py runserver 0.0.0.0:8080`

9. 测试程序是否正常运行 浏览器上访问 ip:8080 \(阿里云安全组记得先打开8080端口,测试可以用后在关闭\)

10. 配置uwsgi, 在`/etc/uwsgi.d/`目录下创建一个配置文件名称自定义后缀ini即可,配置内容参考一下↓ 示例中创建 名称为dj\_project.ini的文件 ,新建配置文件后 运行命令

    ```
    chown uwsgi:uwsgi -R /etc/uwsgi.d/
    ```

    ​

    dj\_project.ini文件内容\(根据实际情况进行配置 主要修改含有中文注释的部分\):

    ```
    [uwsgi]
    plugins       = python
    master        = true
    protocol      = uwsgi
    socket        = 127.0.0.1:8000   #监听端口
    wsgi-file     = /data/wwwroot/django_project/project/project/wsgi.py  # wsgi.py目录
    home          = /data/wwwroot/django_project/env             # python虚拟环境目录
    chdir         = /data/wwwroot/django_project/project   #项目目录,即你上传的Django程序目录
    buffer-size   = 8192
    enable-threads= true
    close-on-exec = true
    ```

    1. 重启uwsgi 命令 `systemctl restart uwsgi` 然后查看uwsgi是否正常运行`netstat -anopt`查看uwsgi端口是否启用 运行命令`systemctl status uwsgi` 输出结果没有明显的错误信息

    2. 配置Nginx,修改`/etc/nginx/conf.d/default.conf`

       配置内容如下:

       ```
       server {
       listen 80;
       server_name _;    # 你注册的域名
       root /data/wwwroot/django_project;  # 程序目录 根据实际情况修改
       location / {
          include uwsgi_params;
          uwsgi_read_timeout 3600;
          uwsgi_pass 127.0.0.1:8000;      # 这一项根据你uwsgi的端口设置进行修改
       }
       location  ~/static/ {               # 动静分离 需要配置否则部分页面无法加载样式和js,根据程序实际情况以及Django路由等进行设置
          root /data/wwwroot/django_project/project/project/;  # 你django静态资源(css/js/img等)目录
          }
       }
       ```

13.  重启Nginx `systemctl restart nginx`,然后访问你的IP 或域名 \(阿里云安全组需要打开80和443端口\)

### On Windows

1. 上传Django项目程序

2. (可选)创建虚拟环境

    在**项目根目录**下通过CMD运行命令: 

      python2如下:

      `virtualenv env`  创建一个py2的虚拟环境

     python3如下:

    ` python3 -m venv env`  创建一个py3的虚拟环境

3. 安装项目模块

   在**项目根目录**下通过CMD运行命令:

   - 如果有虚拟环境,先激活虚拟环境(如果没有创建虚拟环境跳过此步骤)

   ​             `.\env\Script\activate.bat`

   - 运行命令 `pip install requirements.txt `  安装项目所需要的模块

     ​

   > 如果项目目录下没有requirements.txt  文件  开发者请先在开发环境使用命令  pip freeze >requirements.txt  创建好文件, 非开发者请要求程序提供方提供 requirements.txt 文件



4.  根据Django不同版本创建或修改wsgi.py文件(存放目录一般在与项目目录下同名的文件夹下(同setting.py存放目录一致)), 内容如下,根据情况修改

   ```
   import os
   import sys

   sys.path.append('C:\django_prject')   #Django项目存放目录
   from django.core.wsgi import get_wsgi_application

   os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_prject.settings")  # django_prject 为项目名称和项目文件夹名一致

   application = get_wsgi_application()
   ```

   ​

5. 编辑  `C:\websoft9\djangostack-1.11.10-0\apache2\conf\bitnami\bitnami-apps-vhosts.conf` 将一下内容复制进去,按照实际情况进行修改

   ```
   <VirtualHost *:80>
   ServerName www.mydomin.com    # 域名
   ErrorLog "logs/www.mydomin.com-error.log"  # 错误日志 
   CustomLog "logs/www.mydomin.com-access.log" common  # 访问日志

   Alias /static "C:\django_prject\static"   # Django静态资源访问路径和存放目录
   <Directory "C:\django_prject\static">     # 同上保持一致
       Require all granted
   </Directory>

   WSGIScriptAlias / "C:\django_prject\django_prject\wsgi.py"  # 项目wsgi.py的路径, '/' 指访问根目录
   # WSGIPythonHome /path/to/venv   # Virtualenv创建的虚拟环境路径

   <Directory "C:\django_prject\django_prject"> # Django wsgi.py 存放目录
   	<Files wsgi.py>
   		Require all granted
   	</Files>
   </Directory>

   </VirtualHost>
   ```

6. 在桌面上提供的  `manager-windows`   中的 Manage Servers 重启apache

7. 浏览器中打开测试是否正常