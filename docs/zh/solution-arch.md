---
sidebarDepth: 3
---

# 架构

## 安装

Python 广受欢迎，故大部分 Linux 发行版，默认都安装了 Python。只需在 Linux 命令上输入命令 `python`，就会进入它的交互式界面。

```
>> python
```

如果你的Linux上没有Python，可以通过如下两种方式进行安装：

### 在线安装

在线安装是通过系统的 `yum` 或 `apt` 命令下拉远程仓库中提供的已有 Python 安装包的方式进行安装。

```
# Centos & redhat
yum install python
yum install python3

# Ubuntu&Debian
apt install python
apt install python3
```

在线安装有两个注意事项：

* 在服务器配置好软件仓库
* 不同的仓库中 Python 的包的名称不同，可能是：python3, python38, python3.8, rh-python38-scl 等。


### 源码安装

源码安装将 Python 的源码下载到服务器后，在服务器再编译和配置的一种安装方法。  

源码安装参考官方文档 [Building Python](https://docs.python.org/3.9/using/unix.html#building-python)，这个是最权威最全面的参考资料。

源码安装相对在线安装会更为复杂，且编译过程中可能需处理异常情况才能成功安装。

## 卸载

Python 的卸载会有多个步骤，但总体思路是：获取已安装的模块和内核清单，然后卸载模块，再删除 Python 主文件夹。  

下面以卸载 Python 3.8 为例，介绍卸载的方法：

```
sudo python3.8 -m ensurepip
sudo python3.8 -m pip list
sudo python3.8 -m pip uninstall $(python3.8 -m pip list | cut -d" " -f1)
sudo rm -rf /usr/local/lib*/python3.8/
```

## 解释器

Python 解释器（Interpreter）即 Python 的运行内核，下面的图精准的解释 Python 程序的运行原理：

![Python 解释器 Websoft9](https://libs.websoft9.com/Websoft9/DocsPicture/zh/python/python-interpreter-websoft9.png)

从图中可见 **Interpreter** 是 Python 最重要的内核之一，它具有编译器和虚拟机两方面的功能。

* 编译器：词法分析，语法解释，将 Python 代码编译成字节码（一种类似汇编的代码）
* 虚拟机：模仿可执行文件的入栈出栈调用顺序执行 Python 程序

> 正因为有了解释器的存在，使得 Python 程序无需编译成机器码，就可以实现跨平台运行。

## 编译

虽然 Python 无需像 C/C++ 那样编译成字节码，但为了提高运行速度，Python 也支持将程序预先编译成 .pyc 结尾的文件。

## 模块与包

一个 xxx.py 程序文件，即一个 Python 模块。  

多个模块以一定的规则，组合成树形结构的文件夹就是包。  

下面是一个典型的 Python 包，其中 `sound` 是包的名字。

```
sound/                          Top-level package
      __init__.py               Initialize the sound package
      formats/                  Subpackage for file format conversions
              __init__.py
              wavread.py
              wavwrite.py
              aiffread.py
              aiffwrite.py
              auread.py
              auwrite.py
              ...
      effects/                  Subpackage for sound effects
              __init__.py
              echo.py
              surround.py
              reverse.py
              ...
      filters/                  Subpackage for filters
              __init__.py
              equalizer.py
              vocoder.py
              karaoke.py
              ...
```

通过 import sound.effects.echo 的方式加载包中的模块。


## 虚拟环境

用户在编写应用程序的时候，通常会安装第三方的 Python 包，不同的应用程序可能对包有不同的要求，而特定的包可能会依赖其他的 Python 包，这种多版本和复杂依赖的情况下，很有可能会导致包冲突。  

虚拟环境就是为每一个用户的应用程序创建一个单独的 Python 隔离环境，用户所安装的第三方包会安装到虚拟隔离环境的位置，从而避免冲突。

### 创建

Python3.6 之后，默认提供了虚拟环境模块 [venv](https://docs.python.org/zh-cn/3/tutorial/venv.html)，只需要运行如下命令，即可创建虚拟环境。
```
python3 -m venv myapp
```
下图是创建的隔离环境目录，可见 venv 帮助我们创建了完整的 Python 所需的文件系统。  
![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/python/python-venv001-websoft9.png)

### 激活

通过 source 命令，激活虚拟环境:

```
source myapp/bin/active
```

一旦进入激活状态之后，Shell 的前缀便变成 `(myapp) [root@...]#` 的样式。


## 可执行脚本

在 Linux 系统中，Python 模块经过几个步骤的修改，就可以像 Shell 脚本一样运行。

下面介绍一个完整的范例：

1. 创建一个 Python 模块，假如名称为 websoft9.py
2. 增加一段代码到文件中
   ```
   #!/usr/bin/env python3.6
   print("hello world!")

   ```
3. 修改模块为可执行文件
   ```
   chmod +x websoft9.py
   ```

4. 执行运行 `./websoft9.py` 测试效果。