<div class="timeline">
  <article class="timeline-item">
    <h3>超声乳腺影像 BI-RADS 分类及特征识别</h3>
    <div class="timeline-meta">
      <span>2024.05 - 2024.08</span>
      <span>医学影像分析</span>
      <span>目标检测 + 分类识别两阶段方案</span>
    </div>
    <p>面向超声乳腺影像中的肿瘤定位、BI-RADS 分类与多特征识别需求，参与搭建“目标检测 + 分类识别”的两阶段流程，解决单一模型同时兼顾定位精度与分类稳定性较难的问题。</p>
    <ul>
      <li>使用 <code>YOLOv11</code> 完成病灶区域检测与定位，输出肿瘤位置。</li>
      <li>基于 <code>ResNet-18</code> 分别承担 BI-RADS 分类和特征识别任务，并对第一层与全连接层做适配改造。</li>
      <li>结合预训练参数开展迁移学习，配合尺寸调整、像素归一化、数据增强等预处理方式提升模型表现。</li>
      <li>完成肿瘤位置检测、BI-RADS 分类及相关特征识别的一体化流程，积累了医学影像分析与深度学习实验迭代经验。</li>
    </ul>

<div class="project-figure-grid">
  <figure class="project-figure architecture wide">
    <div class="figure-label">Method Overview</div>
    <img src="static/assets/img/yolo11_architecture_diagram_v1.0.png" alt="YOLOv11 原理示意图">
    <figcaption><strong>YOLOv11 原理示意图：</strong>展示 Backbone、Neck 与 Head 的整体检测架构。</figcaption>
  </figure>
  <figure class="project-figure architecture">
    <div class="figure-label">Classification Backbone</div>
    <img src="static/assets/img/resnet18_architecture_rotated.svg" alt="ResNet-18 原理示意图">
    <figcaption><strong>ResNet-18 原理示意图：</strong>说明残差连接如何支持深层特征学习与稳定训练。</figcaption>
  </figure>
  <figure class="project-figure example">
    <div class="figure-label">Detection Example</div>
    <img src="static/assets/img/yolov11_breast_lesion_detection_example.png" alt="YOLOv11 病灶区域检测与定位示例图">
    <figcaption><strong>YOLOv11 病灶区域检测与定位示例图：</strong>展示病灶区域定位效果。</figcaption>
  </figure>
</div>
<div class="project-link-row">
  <a class="project-link" href="https://github.com/skyr97853-ctrl/Breast-Tumor-Detection-and-Classification" target="_blank" rel="noopener noreferrer">GitHub：Breast Tumor Detection and Classification</a>
</div>
  </article>

  <article class="timeline-item">
    <h3>消融 LLM Benchmark 数据泄露导致模型测评失真的研究</h3>
    <div class="timeline-meta">
      <span>2025.10 - 至今</span>
      <span>大语言模型评测</span>
      <span>SFT + vLLM</span>
    </div>
    <p>围绕“大语言模型 benchmark 数据泄露会否导致测评结论失真”这一问题，开展方法验证、对照实验与泛化能力分析，关注评测可信性与实验可解释性。</p>
    <ul>
      <li>基于 <code>LLaMA Factory</code> 搭建 SFT 实验流程，调整 <code>epoches</code> 与 <code>learning_rate</code> 完成训练实验。</li>
      <li>使用 <code>vLLM</code> 加速模型测评，深入理解 <code>PagedAttention</code> 对 KV cache 的高效管理机制。</li>
      <li>通过控制变量设计多组对照实验，对比 <code>eval_loss</code> 与 <code>train_loss</code>，筛选更合适的训练参数。</li>
      <li>跟踪处理前后模型在目标 benchmark 上的性能变化，并额外评估方法对模型原有学习能力与泛化表现的影响。</li>
      <li>实验结果表明，相关方法能够有效缓解 benchmark 数据泄露带来的评测偏差。</li>
    </ul>

<div class="project-figure-grid">
  <figure class="project-figure architecture">
    <div class="figure-label">Training Workflow</div>
    <img src="static/assets/img/llamafactory_ui_snapshot.png" alt="LLaMA Factory 界面示意图">
    <figcaption><strong>LLaMA Factory 界面示意图：</strong>展示基于 Web UI 配置模型、训练阶段、量化方式与训练参数的流程。</figcaption>
  </figure>
  <figure class="project-figure architecture">
    <div class="figure-label">Inference Engine</div>
    <img src="static/assets/img/vllm_llm_engine_diagram.png" alt="vLLM 引擎示意图">
    <figcaption><strong>vLLM 引擎示意图：</strong>展示 LLMEngine、AsyncLLMEngine 以及输入处理、调度、模型执行和输出处理之间的关系。</figcaption>
  </figure>
  <figure class="project-figure architecture wide">
    <div class="figure-label">Project Results</div>
    <img src="image.png" alt="LLM Benchmark 数据泄露研究成果展示图">
    <figcaption><strong>项目相关成果展示：</strong>展示不同模型在遗忘准确率、跨数据集保持性和综合表现上的对比结果。</figcaption>
  </figure>
</div>
<div class="project-link-row">
  <a class="project-link" href="https://github.com/skyr97853-ctrl/Fairer-Benchmark-Evaluation" target="_blank" rel="noopener noreferrer">GitHub：Fairer Benchmark Evaluation</a>
</div>
  </article>
</div>
