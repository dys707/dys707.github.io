---
layout: experiment
title: "信息安全导论作业三：D-H"
course: "信息安全导论"
courseId: "cipher"
date: 2025-10-31
difficulty: "中等"
tags: ["编程", "密码学"]
description: "D-H算法的实现"
downloads:
  - name: "源代码包"
    icon: "📦"
    description: "包含完整的实验源代码和项目文件"
    file: "cipher3.zip"
  - name: "实验报告(Word)"
    icon: "📄"
    description: "详细的实验报告文档(Word格式)"
    file: "cipher3.docx"
reportFile: "cipher3.pdf"
resources_path: "/assets/experiments/cipher3/"
resource_dir: "cipher3" 
---

### 实验目的

* 验证Diffie-Hellman（D-H）密钥交换协议的实际可行性
* 通过代码运行结果，直观理解D-H协议中素数、原根、私钥、公钥及共享密钥的
生成逻辑 
* 验证在100-255 范围内选择素数及原根时，D-H 协议的有效性
* 观察多次密钥交换过程，确认协议的稳定性
* 分析不同素数对密钥安全性的影响


### 实验内容

#### 1.  经典算法实现
*  Diffie-Hellman 密钥交换协议通过以下步骤实现安全密钥协商: <br>
双方协商并公开素数p和原根g<br>
通信方A生成私钥a，计算公钥A并发送给B<br>
通信方B生成私钥b，计算公钥B并发送给A<br>
A 计算共享密钥：K<br>
B 计算共享密钥：K<br>
双方得到相同的共享密钥K



### 实验结果与分析

* 符合预期...