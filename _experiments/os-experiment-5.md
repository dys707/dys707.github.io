---
layout: experiment
title: "操作系统实验五：内存管理"
course: "操作系统"
courseId: "operating-system"
date: 2025-06-12
difficulty: "困难"
tags: ["编程", "算法", "操作系统"]
description: "不同分配算法下的内存管理"
downloads:
  - name: "源代码包"
    icon: "📦"
    description: "包含完整的实验源代码和项目文件"
    file: "github-release:OS5"
  - name: "实验报告(Word)"
    icon: "📄"
    description: "详细的实验报告文档(Word格式)"
    file: "OS4_report.docx"
reportFile: "OS4_report.pdf"
resources_path: "/assets/experiments/os-experiment-4/"
resource_dir: "os-experiment-4" 
---

### 实验内容

#### 1. 实现信号量
* 实现四个函数sem_create(),destroy(),wait(),signal(),封装为系统调用


#### 2. 生产者/消费者模型
* 在图形模式下将屏幕分为N份为N个缓冲区...<br>
* 创建两个线程，一个生产者（产生随机数），一个消费者（为随机数排序）...<br>
* 创建控制线程...

### 实验结果与分析

* 符合预期...