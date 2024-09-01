---
title: SQLCipher库丢失
---
# SQLCipher库丢失

当您的CloudOTP应用程序提示“SQLCipher库丢失”时，这意味着您的CloudOTP应用程序无法正常解密数据库，因为CloudOTP依赖于SQLCipher库来加密和解密SQLite数据库。

## 解决方法

请按照以下步骤解决此问题：

- 点击[此处](https://pkgs.cloudchewie.com/CloudOTP/sqlite_sqlcipher.dll)下载`sqlite_sqlcipher.dll`文件。

- 将`sqlite_sqlcipher.dll`文件移动至CloudOTP应用程序的安装目录中
  
> 通常情况下，安装目录默认为`C:\Program Files\CloudOTP`。

- 重新启动CloudOTP应用程序。