# 故障处理

此处收集使用 Python 过程中最常见的故障，供您参考

> 大部分故障与云平台密切相关，如果你可以确认故障的原因是云平台造成的，请参考[云平台文档](https://support.websoft9.com/docs/faq/zh/tech-instance.html)

#### 如何查看错误日志？

日志文件路径为：`/data/logs`。检索关键词 **Failed** 或者 **error** 查看错误

#### Python服务无法启动？

服务无法启动最常见的问题包括：磁盘空间不足，内存不足，配置文件错误。  
建议先通过命令进行排查  

```shell
# 查看磁盘空间
df -lh

# 查看内存使用
free -lh

# 查看服务状态和日志
systemctl status python
journalctl -u python
```

#### 执行 django 启动命令报错？

错误信息：You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.

解决方案：运行下面的命令后再启动项目  

```
python manage.py migrate
```

#### `pip install uwgsi` 报错？

错误信息如下：  
```
ERROR: Command errored out with exit status 1:
     command: /usr/bin/python3 -u -c 'import io, os, sys, setuptools, tokenize; sys.argv[0] = '"'"'/tmp/pip-install-v02o0o80/uwsgi_6afc0c5595704f599e64e6aa41047052/setup.py'"'"'; __file__='"'"'/tmp/pip-install-v02o0o80/uwsgi_6afc0c5595704f599e64e6aa41047052/setup.py'"'"';f = getattr(tokenize, '"'"'open'"'"', open)(__file__) if os.path.exists(__file__) else io.StringIO('"'"'from setuptools import setup; setup()'"'"');code = f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' install --record /tmp/pip-record-oovzq0ap/install-record.txt --single-version-externally-managed --compile --install-headers /usr/local/include/python3.6m/uwsgi
```

错误原因：  
解决方案：  
