# 安装网站

在 Python Runtime 环境上安装不同的网站有一定的差异，但总体上是遵循如下几个步骤的：

1. 创建一个独立的隔离环境
2. 准备好网站的源码（通过命令行拉取或上传代码）
3. 修改配置信息（端口、数据库、IP地址等）
4. 启动网站

> 务必牢记以上几个步骤，不要一开始就落入技术陷阱中

## 示例

下面通过安装一个开源 Python 应用 [django CMS](https://github.com/django-cms/django-cms) 作为范例，帮助用户理解安装的方法。   

1. 首先，为应用一个全新的 Python 隔离环境，
   ```
   #1 创建隔离环境
   mkdir /data/wwwroot/djangocms
   python3 -m venv --system-site-packages "/data/wwwroot/djangocms"

   #2 进入到隔离环境状态下
   cd /data/wwwroot/djangocms && source bin/activate

   #3 升级隔离环境下的 pip 版本
   pip install --upgrade pip
   ```

   > 进入到隔离环境下后，所有的 Python 相关命令只在隔离环境中有效

2. 安装 **django CMS** 命令工具，并创建项目拉取源码
   ```
   #1 安装 django CMS 命令行工具（用于创建和管理 django CMS 项目）
   pip install djangocms-installer

   #2 基于命令行创建一个项目（创建时会拉取所有依赖的源码）
   djangocms mysite1
   ```

   > 如果再次运行 djangocms mysite2，即创建了两个项目，以此类推...

3. 修改网站的配置文件 *mysite1/mysite1/settings.py* 中 **ALLOWED_HOSTS** 值为如下
   ```
   ALLOWED_HOSTS = ['*']
   ```
   > 也可以修改 DATABASES 参数，指定数据库

4. 指定端口下启动网站（下面设置为绑定任意IP地址）
   ```
   cd mysite1
   python manage.py runserver 0.0.0.0:9099
   ```

5. 本地浏览器访问：*http://服务器公网IP:9099* 便可以进入登录界面，然后登录后使用
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/python/python-djangocmslogin-websoft9.png)

   > 默认账号密码为：admin/admin


## 代理服务

虽然可以通过端口访问 django CMS，但建议通过 Nginx 代理服务访问 django CMS，性能好、更安全。

1. 为网站配置 HTTP 服务：在 [Nginx 虚拟主机配置文件](/zh/stack-components.md#nginx) 中增加如下的配置段
   ```
    server {
        listen 80;
        server_name yoursite1.yourdomain.com;
        location / {
            proxy_pass  http://127.0.0.1:8080;
            proxy_redirect     off;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   X-Forwarded-Proto $scheme;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection upgrade;
            proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
            proxy_max_temp_file_size 0;
            proxy_connect_timeout      90;
            proxy_send_timeout         90;
            proxy_read_timeout         90;
            proxy_buffer_size          4k;
            proxy_buffers              4 32k;
            proxy_busy_buffers_size    64k;
            proxy_temp_file_write_size 64k;
    }
    error_log /var/log/nginx/yourdomain.com-error.log error;
    access_log  /var/log/nginx/yourdomain.com-access.log;

    include extra/*.conf;
    
    #------------- SSL Start --------------

    #------------- SSL End  ---------------
    }
   ```  

   重点需要注意修改如下几个参数：

   * server_name
   * proxy_pass

2. 重启 Nginx 服务后，查看新安装的网站

## 常见问题

#### 是否可以在不同版本的 Python 安装网站？

可以，创建隔离环境的时候指定具体版本，例如：
```
python3.8 -m venv --system-site-packages "/data/wwwroot/yoursite1"
```

#### 为什么需要创建隔离环境？

避免不同的应用对同一个 Python 软件包有不同的版本冲突，隔离环境完美解决此问题

#### 一个 django CMS 隔离环境可以创建多个 django CMS 项目吗？

可以