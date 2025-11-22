---
layout: experiment
title: "数据库原理与设计实验八：视图"
course: "数据库原理与设计"
courseId: "database-Design"
date: 2024-10-26
difficulty: "简单"
tags: ["编程", "数据库"]
description: "视图"
downloads:
  - name: "实验报告(Word)"
    icon: "📄"
    description: "详细的实验报告文档(Word格式)"
    file: "database8.doc"
reportFile: "database8.pdf"
resources_path: "/assets/experiments/database8/"
resource_dir: "database8" 
---

### 实验目的

* 理解视图的概念和作用； 
* 掌握视图创建的方法； 
* 掌握视图删除的方法； 
* 掌握视图更新的方法。
 
### 实验内容

#### 1.  基础实验
* 创建一个视图view_borrow，显示读者的借书记录，包括读者姓名（rno）、
书名btitle、借书日期（borrowdate）
* 创建一个学历（reducation）为“研究生”的读者的视图view_reader1，视图
的属性名包括rno，rname，reducation
* 创建一个学历（reducation）为“研究生”的读者的视图view_reader2，视图
的属性名包括rno，rname，Reducation，增加WITH CHECK OPTION子句......


### 实验结果与分析

* 符合预期...