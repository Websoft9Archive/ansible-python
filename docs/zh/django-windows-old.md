# Django on Window

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