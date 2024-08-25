---
title: 关于OTP
outline: 
    level: [1,3]
---

# 关于OTP

OTP（One-Time Password）是一种仅能使用一次的密码。在使用 OTP 时，用户需要输入一个由令牌生成的密码，这个密码在下一次使用时将会失效。OTP是一种安全的验证方式，因为它是一次性的。即使密码被截获，攻击者也无法再次使用这个密码。这种方式比传统的密码验证更加安全。

## OTP的类型

OTP有两种类型：基于时间的TOTP（Time-based OTP）和基于计数器的HOTP（HMAC-based OTP）。
当然也存在着其他类型的OTP，如Mobile-OTP，还有 Steam、Yandex 等平台开发的自有OTP。

### TOTP

TOTP是一种基于时间戳的OTP，已成为[RFC6238标准](https://tools.ietf.org/html/rfc6238)。
它使用时间戳和密钥生成一次性代码，这个代码在一段时间内有效，然后会失效。TOTP的时间间隔通常是30秒。

### HOTP

HOTP是一种基于计数器的OTP，已成为[RFC4226标准](https://tools.ietf.org/html/rfc4226)。
它使用一个计数器和密钥生成一次性代码，这个代码在使用后会自增计数器。

### Mobile-OTP

Mobile-OTP简称MOTP，由[mOTP](https://motp.sourceforge.net/)项目开发，它需要根据密钥和PIN码生成一次性代码。

### Steam

Steam类似于TOTP，也基于时间戳生成，但它的算法不同，且其生成的一次性代码为5位数字或字母。

### Yandex

Yandex与Steam情况类似，算法也有所不同，且生成的一次性代码为8位数字或字母。