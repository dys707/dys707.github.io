---
layout: experiment
title: "操作系统实验一：系统调用"
course: "操作系统"
courseId: "operating-system"
date: 2025-03-1
difficulty: "简单"
tags: ["编程", "算法", "操作系统"]
description: "安装实验环境，尝试自定义系统调用，验证两种路径的输出是否一致"
downloads:
  - name: "源代码包"
    icon: "📦"
    description: "包含完整的实验源代码和项目文件"
    file: "github-release:OS1"
  - name: "实验报告(Word)"
    icon: "📄"
    description: "详细的实验报告文档(Word格式)"
    file: "report.docx"
reportFile: "report.pdf"
resources_path: "/assets/experiments/os-experiment-1/"
resource_dir: "os-experiment-1" 
---

### 实验目的

* 安装实验环境
* 尝试自定义系统调用，验证两种路径的输出是否一致


### 实验内容

#### 1. 配置实验环境并尝试简单命令
* 检出（checkout）EPOS的源代码（svn  checkout  https://svn.riouxsvn.com/epos ）...<br>
* 编译及运行（cd epos ，make  run ）...<br>
* 清除所有的临时文件(make clean )...<br>

#### 2. 编写系统调用“time_t  time(time_t  *loc)” 
* 返回从格林尼治时间1970年1月1日午夜起所经过的秒数。如果指针loc非NULL，则返回值也被
填到loc所指向的内存位置...


### 实验结果与分析

* 符合预期...