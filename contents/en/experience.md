<div class="timeline">
  <article class="timeline-item">
    <h3>BI-RADS Classification and Feature Recognition for Breast Ultrasound Images</h3>
    <div class="timeline-meta">
      <span>2024.05 - 2024.08</span>
      <span>Medical Image Analysis</span>
      <span>Two-stage Detection + Classification Pipeline</span>
    </div>
    <p>I participated in building a two-stage pipeline for tumor localization, BI-RADS classification, and multi-feature recognition in breast ultrasound images, addressing the difficulty of balancing localization accuracy and classification stability within a single model.</p>
    <ul>
      <li>Used <code>YOLOv11</code> for lesion detection and localization.</li>
      <li>Applied <code>ResNet-18</code> to BI-RADS classification and feature recognition tasks, with customized first-layer and fully connected layer adaptations.</li>
      <li>Conducted transfer learning with pretrained parameters and optimized the input pipeline using resizing, normalization, and data augmentation.</li>
      <li>Built an integrated workflow covering tumor localization, BI-RADS classification, and related feature recognition.</li>
    </ul>

<div class="project-figure-grid">
  <figure class="project-figure architecture wide">
    <div class="figure-label">Method Overview</div>
    <img src="static/assets/img/yolo11_architecture_diagram_v1.0.png" alt="YOLOv11 principle diagram">
    <figcaption><strong>YOLOv11 principle diagram:</strong> showing the overall Backbone, Neck, and Head design of the detector.</figcaption>
  </figure>
  <figure class="project-figure architecture">
    <div class="figure-label">Classification Backbone</div>
    <img src="static/assets/img/resnet18_architecture_rotated.svg" alt="ResNet-18 principle diagram">
    <figcaption><strong>ResNet-18 principle diagram:</strong> illustrating how residual connections support deeper and more stable feature learning.</figcaption>
  </figure>
  <figure class="project-figure example">
    <div class="figure-label">Detection Example</div>
    <img src="static/assets/img/yolov11_breast_lesion_detection_example.png" alt="YOLOv11 lesion localization example">
    <figcaption><strong>YOLOv11 lesion localization example:</strong> showing the localization effect on a candidate lesion region.</figcaption>
  </figure>
</div>
<div class="project-link-row">
  <a class="project-link" href="https://github.com/skyr97853-ctrl/Breast-Tumor-Detection-and-Classification" target="_blank" rel="noopener noreferrer">GitHub: Breast Tumor Detection and Classification</a>
</div>
  </article>

  <article class="timeline-item">
    <h3>Research on Mitigating Distorted Evaluation Caused by Benchmark Data Leakage in LLMs</h3>
    <div class="timeline-meta">
      <span>2025.10 - Present</span>
      <span>LLM Evaluation</span>
      <span>SFT + vLLM</span>
    </div>
    <p>This project investigates how benchmark data leakage may distort large language model evaluation results, with a focus on improving evaluation reliability and analyzing the impact on model learning and generalization.</p>
    <ul>
      <li>Built an SFT workflow based on <code>LLaMA Factory</code>, tuning <code>epoches</code> and <code>learning_rate</code> for controlled experiments.</li>
      <li>Used <code>vLLM</code> to accelerate evaluation and studied how <code>PagedAttention</code> manages KV cache efficiently.</li>
      <li>Designed multiple controlled experiments and compared <code>eval_loss</code> and <code>train_loss</code> to select more suitable parameters.</li>
      <li>Tracked benchmark performance changes before and after intervention, while also analyzing effects on original learning ability and generalization.</li>
      <li>Experimental results showed that the proposed method can effectively mitigate evaluation bias caused by benchmark data leakage.</li>
    </ul>

<div class="project-figure-grid">
  <figure class="project-figure architecture">
    <div class="figure-label">Training Workflow</div>
    <img src="static/assets/img/llamafactory_ui_snapshot.png" alt="LLaMA Factory UI snapshot">
    <figcaption><strong>LLaMA Factory UI snapshot:</strong> showing the workflow of configuring model choice, training stage, quantization settings, and optimization parameters through the Web UI.</figcaption>
  </figure>
  <figure class="project-figure architecture">
    <div class="figure-label">Inference Engine</div>
    <img src="static/assets/img/vllm_llm_engine_diagram.png" alt="vLLM engine diagram">
    <figcaption><strong>vLLM engine diagram:</strong> showing the relationship among LLMEngine, AsyncLLMEngine, input processing, scheduling, model execution, and output processing.</figcaption>
  </figure>
  <figure class="project-figure architecture wide">
    <div class="figure-label">Project Results</div>
    <img src="image.png" alt="Result figure for the LLM benchmark leakage study">
    <figcaption><strong>Project results:</strong> comparing forget accuracy, cross-dataset preservation, and overall model behavior across multiple baselines.</figcaption>
  </figure>
</div>
<div class="project-link-row">
  <a class="project-link" href="https://github.com/skyr97853-ctrl/Fairer-Benchmark-Evaluation" target="_blank" rel="noopener noreferrer">GitHub: Fairer Benchmark Evaluation</a>
</div>
  </article>
</div>
