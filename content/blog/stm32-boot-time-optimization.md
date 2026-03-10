---
title: "STM32 启动时间优化：从 420ms 到 110ms"
date: "2025-12-19"
tags: ["Embedded", "STM32", "Firmware"]
description: "通过时钟、外设初始化与日志策略调整，显著缩短冷启动时间。"
---

该项目要求设备上电后 200ms 内完成关键采样。

## 优化点

1. 将非关键外设移到后台任务延迟初始化。
2. 串口日志分级，上电阶段仅保留错误日志。
3. Flash 参数校验改为 CRC 快速路径。

```c
void SystemFastInit(void) {
  Clock_Config_Fast();
  Sensor_Init_Minimal();
  Start_Critical_Task();
}
```

最终冷启动时间降低到 **110ms**，满足产线要求。
