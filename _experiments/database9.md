---
layout: experiment
title: "数据库原理与设计实验九：数据库安全性控制"
course: "数据库原理与设计"
courseId: "database-Design"
date: 2024-11-5
difficulty: "简单"
tags: ["编程", "数据库"]
description: "数据库安全性控制"
downloads:
  - name: "实验报告(Word)"
    icon: "📄"
    description: "详细的实验报告文档(Word格式)"
    file: "database9.doc"
reportFile: "database9.pdf"
resources_path: "/assets/experiments/database9/"
resource_dir: "database9" 
---

### 实验目的

* 理解数据库安全的重要性； 
* 理解MySQL用户管理、角色管理和权限管理； 
* 掌握创建、更名、修改登录账户口令和删除登录帐户的方法； 
* 掌握创建、激活、将用户添加为角色成员、删除角色的方法； 
* 掌握授予和撤销数据库权限的方法。
 
### 实验内容

#### 1.  基础实验
*  用SQL语句创建一个MySQL用户账户sqlteacher，并将其设置允许对数据库
library查询，对表book进行插入、删除和修改操作，并进行验证。 
* 用图形界面工具创建一个MySQL 用户账户sqladmin，并将其设置允许对数据库
library查询，对表进行插入、修改、删除操作，并进行验证。 
* 用SQL语句更改用户账户sqlteacher的口令为“t123”......


### 实验结果与分析

* 符合预期...