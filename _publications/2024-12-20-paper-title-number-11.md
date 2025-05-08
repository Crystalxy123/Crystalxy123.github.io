---
title: "Multimodal learning using large language models to improve transient identification of nuclear power plants"
collection: publications
category: manuscripts
# permalink: /publication/2010-10-01-paper-title-number-2
# excerpt: ''
date: 2024
venue: 'Progress in Nuclear Energy'
# slidesurl: 'http://academicpages.github.io/files/slides2.pdf'
citation: 'Qi, B., Sun, J., Sui, Z., Xiao, X., & Liang, J. (2024). Multimodal learning using large language models to improve transient identification of nuclear power plants. Progress in Nuclear Energy, 177, 105421.'
---

In the operation of nuclear power plants (NPPs), transient events can cause a shift from normal to abnormal conditions—potentially leading to severe accidents if not promptly addressed. Rapid and accurate transient identification is critical to maintaining plant safety.

However, most traditional methods rely solely on single-modal data, such as time-series sensor readings, and overlook valuable textual sources like incident reports or procedural guidelines. This limits their adaptability in real-world scenarios where unseen or complex events frequently occur.

This work introduces a novel multimodal learning framework powered by large language models (LLMs)—the first of its kind to combine time-series data with textual knowledge for transient identification. By aligning time-series signals with domain-specific textual descriptions, the system can reason across modalities and perform zero-shot classification, enabling it to recognize new or previously unseen transients.

Our experiments demonstrate superior robustness and accuracy across various noise conditions, significantly outperforming conventional models. This framework paves the way for future applications in smart diagnostics, operator assistance, and intelligent operation management in next-generation nuclear power plants.

在核电厂运行过程中，瞬态工况（transients）可能会引发系统从正常状态转入异常状态，进而演化为严重事故。准确、快速地识别这些瞬态，是保障核电厂安全运行的关键。

然而，传统的识别方法往往只依赖单一数据源（如时间序列），缺乏对文本知识（如规程、事故报告）的理解能力，难以应对现实中的复杂、未见事件。

本研究提出了一种基于大语言模型的多模态学习框架，首创性地将文本数据与时间序列数据结合，构建出一个具备“跨模态理解”能力的智能识别系统。该系统不依赖人工标签，具备“零样本学习”能力，即便面对真实场景中从未见过的事故数据，也能给出准确判断。

实验结果显示，该方法在不同类型的扰动和噪声条件下，稳定性显著优于现有方法。未来，它可广泛应用于新型核电厂的异常工况识别、操作员决策支持，乃至整个核电智能运维体系的构建。