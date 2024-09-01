---
title: SQLCipher library is missing
---
# SQLCipher library is missing

When your CloudOTP application prompts "SQLCipher library is missing", it means that your CloudOTP application cannot decrypt the database normally because CloudOTP relies on the SQLCipher library to encrypt and decrypt the SQLite database.

## Solution

Please follow these steps to resolve this issue:

- Click [here](https://pkgs.cloudchewie.com/CloudOTP/sqlite_sqlcipher.dll) to download the `sqlite_sqlcipher.dll` file.

- Move the `sqlite_sqlcipher.dll` file to the installation directory of the CloudOTP application
  
> Normally, the installation directory defaults to `C:\Program Files\CloudOTP`.

- Restart the CloudOTP application.