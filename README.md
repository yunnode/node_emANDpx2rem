## introduction

# This script is used to convert PX and EM into REM , Based on 1rem=100px and 1rem/1em =100px/16px .
# 将px和em单位转换为rem，并按照1rem=100px 和 1em=16/100px的换算关系，进行对应位置数值转换 ；

## 1 安装运行环境

### 1.1 安装Node.js version>=8.x版本

[Node.js 官网地址](http://nodejs.org/)


## 2 运行命令

>注意在Mac环境下执行以下命令时，有时因权限问题，命令前需要加sudo**

> 说明：第一个参数(目前固定为convert_pxem2rem.js脚本文件)为转换脚本 ，第2个参数(jquery-ui.js仅是实例)为你传入要转换的文件
```
$ node convert_pxem2rem.js jquery-ui.js
```

>windows环境下，直接使用cmd 或 类linux命令行软件运行：

> 说明：第一个参数(目前固定为convert_pxem2rem.js脚本文件)为转换脚本 ，第2个参数(jquery-ui.js仅是实例)为你传入要转换的文件
```
node convert_pxem2rem.js jquery-ui.js
```

## 3 运行命令后，生成目标文件

>脚本运行完成后，会生成对应的"XXX_rem_version.css/js"等文件。


## 4 License

[MIT](LICENSE)