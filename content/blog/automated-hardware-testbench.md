---
title: "用 Python 搭建硬件自动化测试台"
date: "2025-11-02"
tags: ["Python", "Test", "Automation"]
description: "介绍串口+继电器+电源模块的自动化测试流程与数据上报。"
---

手动测试常见问题：效率低、数据不可追溯。

## 架构

- 控制层：Python + pytest
- 执行层：可编程电源、继电器矩阵
- 数据层：CSV + Dashboard

```python
import time

def power_cycle(psu):
    psu.output(False)
    time.sleep(0.5)
    psu.output(True)
```

建议将 **测试步骤模板化**，并将失败波形自动归档。
