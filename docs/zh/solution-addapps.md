# 安装网站

在 Python Runtime 环境上安装网站，建议采用隔离环境以便兼容多个网站部署。  

安装网络的主要步骤：  

1. 运行下面的命令，创建一个全新的 Python 隔离环境
   ```
   mkdir /data/wwwroot/yoursite1
   python3 -m venv --system-site-packages "/data/wwwroot/yoursite1"
   /data/wwwroot/yoursite1/bin/python3 -m pip install --upgrade pip
   ```

2. 上传网站代码或通过命令安装网站代码（具体参考网站自身安装指南）

3. 修改网站的配置文件（具体参考网站自身安装指南）

4. 为网站配置 HTTP 服务：在 [Nginx 虚拟主机配置文件](/zh/stack-components.md#nginx) 中增加如下的配置段
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

5. 重启 Nginx 服务后，查看新安装的网站

## 常见问题

#### 是否可以在不同版本的 Python 安装网站？

可以，创建隔离环境的时候指定具体版本 `python3.8 -m venv --system-site-packages "/data/wwwroot/yoursite1"`

#### 每个应用是否都有隔离环境？

强烈建议

#### 是否可以基于现有的 Django 框架直接添加应用？

待研究