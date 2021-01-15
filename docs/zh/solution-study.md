---
sidebarDepth: 3
---

# 语法

## 安装

Python由于过于手欢迎，大部分Linux发行版，默认都安装了Python。只需在Linux命令上输入命令 python，就会进入它的交互式界面。

```
>> python
```

如果你的Linux上没有Python，可以通过如下两种方式进行安装：

### 在线安装

在线安装就是通过Linux系统的 yum 或 atp 命令进行安装。

```
# Centos & redhat
yum install python
yum install python3

# Ubuntu&Debian
apt install python
apt install python3
```

在线安装完成就可以立即使用。

### 源码安装

源码安装顾名思义就是将Python的源码下载到服务器，然后完成编译、环境变量设置等一序列后续安装步骤。

源码安装参考Python官方文档，这个是最权威最全面的参考资料

源码安装相对在线安装会更为复杂，建议初学者通过采用在线安装方式。

## 原理

### Python 解释器

Python 程序的是如何运行的可以用下面的图精准的解释：

![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/python/python-interpreter-websoft9.png)

从图中可见 Interpreter 是 Python 最重要的内核之一，它具有编译器和虚拟机两方面的功能。

* 编译器：词法分析，语法解释，将 Python 代码编译成字节码（一种类似汇编的代码）
* 虚拟机：模仿可执行文件的入栈出栈调用顺序执行 Python 程序



## 配置文件

## Web 服务

本节我们介绍Python如何处理 http 访问

## Python与系统运维

## 热门软件包