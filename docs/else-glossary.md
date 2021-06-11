# Glossary

#### CPython
[CPython](http://www.python.org/) is the reference implementation of Python, written in C. It compiles Python code to intermediate bytecode which is then interpreted by a virtual machine. CPython provides the highest level of compatibility with Python packages and C extension modules.

#### PyPy
[PyPy](http://pypy.org/) is a Python interpreter implemented in a restricted statically-typed subset of the Python language called RPython. The interpreter features a just-in-time compiler and supports multiple back-ends (C, CLI, JVM).
PyPy aims for maximum compatibility with the reference CPython implementation while improving performance.

#### Jython
[Jython](http://www.jython.org/) is a Python implementation that compiles Python code to Java bytecode which is then executed by the JVM (Java Virtual Machine). Additionally, it is able to import and use any Java class like a Python module.
If you need to interface with an existing Java codebase or have other reasons to need to write Python code for the JVM, Jython is the best choice.

#### IronPython
[IronPython](http://ironpython.net/) is an implementation of Python for the .NET framework. It can use both Python and .NET framework libraries, and can also expose Python code to other languages in the .NET framework.
[Python Tools for Visual Studio](http://ironpython.net/tools/) integrates IronPython directly into the Visual Studio development environment, making it an ideal choice for Windows developers.

#### PythonNet
[Python for .NET](http://pythonnet.github.io/) is a package which provides near seamless integration of a natively installed Python installation with the .NET Common Language Runtime (CLR). This is the inverse approach to that taken by IronPython (see above), to which it is more complementary than competing with.

#### ".egg" file
Python Eggs are a way of bundling additional information with a Python project, that allows the project's dependencies to be checked and satisfied at runtime, as well as allowing projects to provide plugins for other projects.

### virtualenv
virtualenv is a tool to create isolated Python environments. virtualenv homepage and documentation. [http://www.virtualenv.org/en/latest/](http://www.virtualenv.org/en/latest/)

#### easy_install

#### Pip

#### WSGI

#### uWSGI

#### Gunicorn