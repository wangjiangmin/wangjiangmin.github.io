## basics.md

查看未挂载的文件系统类型，以及哪些分区尚未格式化。
```
parted -l 
```
查看已经挂载的分区和文件系统类型。
 ```
 df -T
 ```
也可以查看未挂载的文件系统类型。
```
 lsblk -f 
```
查看系统负载状态
```
uptime
```

修改系统时区
```
rm -f /etc/localtime
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```
查看系统时间
```
date
```
查看硬件时间
```
hwclock --show
```
修改硬件时间
```
$ hwclock --set --date "2020-1-1 12:30:30"
        
```
同步硬件时间到系统时间
```
hwclock 
        --hctosys   开机自动同步
        --systohc   关机自动同步
```

防火墙设置
```
# 查看firewall服务状态
systemctl status firewalld
# 开启
service firewalld start
# 重启
service firewalld restart
# 关闭
service firewalld stop
4、查看防火墙规则
firewall-cmd --list-all 

5、查询、开放、关闭端口
# 查询端口是否开放
firewall-cmd --query-port=8080/tcp
# 开放80端口
firewall-cmd --permanent --add-port=80/tcp
# 移除端口
firewall-cmd --permanent --remove-port=8080/tcp
#重启防火墙(修改配置后要重启防火墙)
firewall-cmd --reload


```

删除linux 中不允许删除的文件( 删除时报错: sysctl.conf:Operation not permitted)
```
去除i属性：chattr -i /etc/sysctl.conf

添加i属性：chattr +i /etc/sysctl.conf

```

linux 软件安装
```
配置(configure)
    -–prefix=/www/***  #指定安装目录
    /*
    执行成功后再编译、安装(make，make install);安装完成将自动生成目录supersparrow,而且该软件任何的文档都被复制到这个目录。为什么要指定这个安装目录?是为了以后的维护方便，假如没有用这个选项，安装过程结束后，该软件所需的软件被复制到不同的系统目录下，很难弄清楚到底复制了那些文档、都复制到哪里去了-基本上是一塌糊涂。
    */
编译(make)

安装(make install)

```

端口占用
```
# 查看指定端口
netstat  -anp  |grep 80
# 查看全部端口
netstat   -nultp
```

文件夹内容总大小
```
du -sh ***
df 
```

访问 url
```
curl www.baidu.com
```


解压文件
```
tar -zxvf ***.tar.gz
```

打包为压缩文件
```
tar -czvf ****.gz  ***/***/ 
```

查询 程序位置
```
whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。
whereis [-bmsu] [BMS 目录名 -f ] 文件名

3.命令参数：

 -b   定位可执行文件。

 -m   定位帮助文件。

 -s   定位源代码文件。

 -u   搜索默认路径下除可执行文件、源代码文件、帮助文件以外的其它文件。

 -B   指定搜索可执行文件的路径。

 -M   指定搜索帮助文件的路径。

 -S   指定搜索源代码文件的路径。
```

检查程序是否安装
```
检查是否安装了php

1）yum安装检查：yum list| grep php

2）rpm安装检查：rpm -qa | grep php
```

远程传输文件
```
scp [本地绝对路径] [用户名]@[ip]:[远程路径]
# 传输文件
scp  /root/xxx/xx.txt root@192.168.1.1:/root/xxx/
# 传输文件夹
-r 传输文件夹
scp -r /root/xxx/ root@192.168.1.1:/root/xxx/

```

查看后台任务
```
jobs
```
指定任务在后台运行
```
bg [任务编号]
bg %1
```
将后台任务切换为前台运行
```
fg [任务编号]
fg %1
```
### 使任务不受终端断开影响 继续运行
#### 方式1  已经运行的任务 必须 exit 正常退出
```
disown -h [任务编号]
disown -h %1
ps -ef|grep [命令] 可以查看
```
#### 方式2 nohup 不能交互
```
nohup [要执行的命令] > [执行日志] 2>&1 &
nohup tail -f catalina.out >./tail_log.log 2>&1 &
```
### 定时任务
```
crontab 
-e 设置计时器
-l 列出当前计时器的设置
-r 删除计时器的设置
-i 交互式模式，删除计时器设置时要先询问
```

### 开启启动脚本
```
//      添加启动脚本 设置脚本优先级
update-rc.d startBlog defaults 99
//      删除启动脚本
update-rc.d -f startBlog remove

 update-rc.d auto_set_hosts.sh defaults 99
```


### 禁止ping
```
//      修改文件 /etc/sysctl.conf，在文件末尾增加一行:

net.ipv4.icmp_echo_ignore_all = 1

//      执行 /sbin/sysctl -p 使新配置生效（重要）
```

### 查看java 进程
```
#   查看java程序
jps
#   查看java程序是谁启动执行的
jps -mlvV
```
### 查看java安装路径
```
java -verpose
```

### 定义快捷命令
```
在 ~/.bashrc 文件中定义

//查看已经定义的快捷命令
alias 
```
### 生效配置文件
```
source
```

### ssh
```
ssh [用户名]@[ip] -p [端口]
#   win10 ssh 配置
#   C:\Users\用户名\.ssh\config 没有就添加 config
host *
    ServerAliveInterval 60  #   
    ServerAliveCountMax 3
#上面一条表示每一分钟就通讯一次，被访问的主机会发送回复消息。下面一条表示如果有3次通讯#都没有收到回复，则断开连接。
```
### sftp
```
sftp [用户名]@[ip] -p [端口]
# sftp 命令
>>> put [本地地址] [远程地址] #上传文件
>>> get [远程地址] [本地地址] #下载文件
# ls rm rmdir mkdir 这些命令都可以使用。同理调用本机都是加 l , 即 lls lrm.
```

### 创建多级复合目录
```
mkdir -pv ansible_playbooks/roles/{websrvs,dbsrvs}/{tasks,files,templates,meta,handlers,vars}

```

### 查看端口占用
```
 lsof -i:80
```

### 抓包工具
```
tcpdump -nn -i eth0 port 80 ro arp
```

### 系统安全日志
```
/var/log/secure
```

### 跟踪路由
```
traceroute [参数] [ip/域名]
-I 使用ICMP回应取代UDP资料信息
```

### 替换文件中的换行符
```
sed 's/\r//' [原文件] > [转换后文件]
```