---
title: "低噪声电源轨设计笔记：从 Buck 到 LDO"
date: "2026-01-08"
tags: ["Power", "PCB", "EMI"]
description: "记录一次模拟前端电源轨优化过程，重点在纹波控制与布局策略。"
---

在高精度传感器系统里，电源噪声往往是第一类问题。

## 设计目标

- 输入：12V
- 输出：5V / 1A + 3.3V / 300mA
- 模拟通道噪声：< 1.5mVpp

## 方案

先用 Buck 将 12V 转 5V，再由 LDO 给模拟前端供电：

```text
12V -> Buck(5V) -> LDO(3.3VA)
```

这样可兼顾效率与噪声。

## 实测建议

```bash
# 使用示波器 AC coupling + 20MHz limit
scope --channel CH1 --coupling ac --bw-limit 20M
```

重点关注：地回路、开关节点面积、去耦电容回流路径。
