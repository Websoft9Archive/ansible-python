# FAQ

#### Python 运行环境中是否支持多个 Python 版本？

除了操作系统自带的 Python2 之外，默认安装了 Python3.x 中的版本之一。  
用户可以自由安装更多的 Python3.x 版本，然后使用虚拟隔离环境，可以方便的安装应用而互不影响。

#### 终端中输入 `python` 命令为何显示的版本是 2.7？

部分云平台默认已经安装 Python2，且设置为默认版本。

#### Python 默认字符编码是什么？

For python2.x, default encoding is ASCII   
For python3.x, default encoding is UTF-8  

#### Python 包是否可以被编译成二进制文件？

可以。建议使用 pyinstaller 或 cpython 这两种工具之一

#### Python 有哪些解释器？

| **Implementation** | **Virtual Machine**        | **Compatible Language** |
| ------------------ | -------------------------- | --------------------------- |
| [CPython](http://www.python.org/) (default)  | CPython VM                 | C                           |
| [Jython](https://www.jython.org/)             | JVM                        | Java                        |
| [IronPython](http://ironpython.net/)         | CLR                        | C#                          |
| Brython            | Javascript engine(e.g. V8) | JavaScript                  |
| RubyPython         | Ruby VM                    | Ruby                        |
| [PyPy](http://pypy.org)               | PyPy Executable            | JIT                         |
| [PythonNet](http://pythonnet.github.io/)          | PythonNet Executable            | .NET                         |

> 其中 CPython 是官方默认的解释器。

#### Python 解释器是如何工作的？

In a CPython interpreter, bytecode is fed to PVM (Python Virtual Machine) which is responsible for running your code.

![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/python/python-interpreter-websoft9.png)

#### 本项目中 Python 采用何种安装方式？

采用 RPM/Deb 包的安装方式

#### 如果没有域名是否可以部署 Python 应用？

可以，访问`http://服务器公网IP` 即可

#### 数据库 root 用户对应的密码是多少？

密码存放在服务器相关文件中：`/credentials/password.txt`

#### 是否有可视化的数据库管理工具？

有，内置phpMyAdmin，访问地址：*http://服务器公网IP:9090*

#### 是否可以修改Python的源码路径？

可以

#### 如何修改上传的文件权限?

```shell
# 拥有者
chown -R apache.apache /data/wwwroot/
# 读写执行权限
find /data/wwwroot/ -type d -exec chmod 750 {} \;
find /data/wwwroot/ -type f -exec chmod 640 {} \;
```

#### 部署和安装有什么区别？

部署是将一序列软件按照不同顺序，先后安装并配置到服务器的过程，是一个复杂的系统工程。  
安装是将单一的软件拷贝到服务器之后，启动安装向导完成初始化配置的过程。  
安装相对于部署来说更简单一些。 

#### 云平台是什么意思？

云平台指提供云计算服务的平台厂家，例如：Azure,AWS,阿里云,华为云,腾讯云等

#### 实例，云服务器，虚拟机，ECS，EC2，CVM，VM有什么区别？

没有区别，只是不同厂家所采用的专业术语，实际上都是云服务器