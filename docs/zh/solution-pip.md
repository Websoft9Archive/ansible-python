# 包管理

Python 是一个有良好生态的开发语言，全球数百万开发者贡献了大量优秀的软件包，Python的包管理工具就是管理和维护第三方扩展软件包的工具。

Python 环境中使用 pip 命令完成各种不同类型的包管理操作：

```
#安装pip
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
sudo python get-pip.py

#查看pip版本
pip --version

#查看包信息
pip show Django

#列出所有已安装的包
pip list

#查看可升级的包
pip list -o

#安装Python包，以Django为例
pip install Django              # 安装
pip install Django -U           # 安装并更新至最新版本
pip install Django==2.1.7       # 指定版本
pip install 'Django>=2.1.7'     # 最小版本

#升级Python模块
pip install --upgrade django==2.1.7

#pip自身的升级
python -m pip install --upgrade pip  
python3 -m pip install --upgrade pip
```

> 一般情况 pip 对应的是 Python 2.7，pip3 对应的是 Python 3.x