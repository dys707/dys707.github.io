---
layout: experiment
title: "汇编语言程序设计实验六：中断程序"
course: "汇编语言程序设计"
courseId: "compiler-Design"
date: 2024-11-17
difficulty: "中等"
tags: ["硬件", "汇编"]
description: "输入输出、中断调用程序设计"
downloads:
  - name: "实验报告(Word)"
    icon: "📄"
    description: "详细的实验报告文档(Word格式)"
    file: "compile6.doc"
reportFile: "compile6.pdf"
resources_path: "/assets/experiments/compile6/"
resource_dir: "compile6" 
---

### 实验目的

* 熟悉输入输出程序设计。 
* 中断调用程序设计
 
### 实验内容

#### 1.  调试程序
* 课本P322例9.5
* 课本P331例9.13

#### 2.  中断排序
* 如设备D1，D2，D3，D4，D5是按优先级次序排列的，设备D1的优先级最高。而中断请求
的次序如下所示，试给出各设备的中断处理程序的运行次序。假设所有的中断处理程序开始后就有
STI指令<br>
(1) 设备D3和D4同时发出中断请求<br>
(2) 在设备D3的中断处理程序完成之前，设备D2发出中断请求<br>
(3) 在设备D4的中断处理程序未发出中断结束命令(EOI)之前，设备D5发出中断请求<br>
(4) 以上所有中断处理程序完成并返回主程序，设备D1，D3，D5同时发出中断请求<br>



### 实验结果与分析

* 符合预期...