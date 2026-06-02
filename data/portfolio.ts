export type PortfolioProject = {
  id: string;
  index: string;
  title: string;
  period: string;
  summary: string;
  responsibilities: string;
  results: string;
  tags: string[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
  revealDelay?: 1 | 2;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "auto",
    index: "001",
    title: "自动化评测",
    period: "2026.01-2026.04",
    summary: "人工逐条评测视频生成内容效率低、标准不统一，搭建可批量处理的自动化评测流程，提升内容质检效率。",
    responsibilities:
      "参与自动化评测流程搭建与规则校准，对生成视频进行图文对齐度、风格一致性、等维度自动检测；用 1,000+ 样本协助对比校准评测标准，跟踪标注准确率并上报异常。",
    results: "自动化评测结果和人工标注一致率 ≥88%，单人处理效率提升约 2 倍。评测规则迭代后，badcase 分类准确率与标注一致性提升，减少重复性人工复核",
    tags: ["自动化评测", "规则校准", "Badcase分析", "数据规范"],
    metrics: [
      { value: "88%", label: "MATCH" },
      { value: "50%", label: "LESS LABOR" },
    ],
  },
  {
    id: "agent",
    index: "002",
    title: "Agent工作流搭建与功能评测",
    period: "2025.06-2025.12",
    summary: "使用千帆搭建AI工作流，验证Agent在复杂任务、多轮对话与工具调用场景中的稳定性。",
    responsibilities:
      "参与千帆的工作流搭建与测试，覆盖指令理解、多轮对话、工具调用等维度进行功能评测，对模型输出人工打分并整理评测报告，同时协助定位异常节点与边界 Case。",
    results: "累计完成 4,000+ 条测试记录。",
    tags: ["千帆", "Agent", "工作流编排", "模型评测", "边界Case分析"],
    metrics: [
      { value: "4000+", label: "TESTS" },
      { value: "CASE", label: "BOUNDARY" },
    ],
    revealDelay: 1,
  },
  {
    id: "t2v",
    index: "003",
    title: "美学视频caption",
    period: "2025.02-2025.06",
    summary: "针对 T2V 文生视频训练数据中文本描述和视频画面匹配度低，画面连贯性差、场景信息不完整，进行 badcase 分类整理及标注结果反馈，提升训练数据质量。",
    responsibilities:
      "按标注规范对生成视频进行主体风格一致性、色彩搭配、光影效果、构图层次、情绪氛围和镜头语言等维度进行描述与判断，记录不合格样本并按问题类型分类整理，输出 badcase 归因报告，配合质检复核与问题反馈。",
    results: "累计完成美学视频 caption 8000+条，标注质检通过率稳定 ≥95%；语义匹配类问题识别准确率由 60% 提升至 85%，参与并整理 badcase，用于后续的复盘和处理同类问题的标注偏差。",
    tags: ["T2V", "视频caption", "数据标注", "Badcase归因"],
    metrics: [
      { value: "8000+", label: "DATA" },
      { value: "50%", label: "FASTER" },
    ],
    revealDelay: 2,
  },
  {
    id: "3dasset",
    index: "004",
    title: "3D角色资产训练数据与质量评测",
    period: "2024.06-2025.01",
    summary: "为AI模型提供高质量3D角色训练数据，建立系统化的3D资产评测标准。",
    responsibilities:
      "参与制定3D角色资产评测规则，建立覆盖模型结构、拓扑、UV、PBR材质与风格一致性的审核标准；对二次元、风格化、写实等不同风格角色进行风格一致性评测；对动作绑定后的角色资产进行动画合理性检查；与算法团队同步AI生成角色的结构异常、材质错误与风格偏移问题。",
    results: "累计完成3D角色资产评测3000+条，覆盖6万+资产库；badcase分类准确率提升至92%+；团队风格审核一致率提升约25%；新增“风格一致性专项审核规则”。",
    tags: ["向己科技 · AI训练师", "3D资产评测", "拓扑审核", "UV检查", "PBR材质", "风格一致性"],
    metrics: [
      { value: "3000+", label: "ASSETS" },
      { value: "92%+", label: "BADCASE" },
    ],
  },
  {
    id: "modeling",
    index: "005",
    title: "次世代角色模型全流程制作",
    period: "2022.08-2024.02",
    summary: "负责游戏次世代角色模型全流程制作，同时承担团队模型材质质量和原画匹配度审核与客户规范把控工作。主要承担主角色任务，兼顾道具与场景 。",
    responsibilities:
      "还原原画比例、结构与表面细节，执行拓扑重建，在 3DsMax 中控制低模面数符合项目规范，保障模型动画可用性，合理规划 UV 空间分布与接缝位置，为后续贴图制作提供优质基础， 使用 SP 完成材质制作，还原原画的材质颜色和细节。",
    results: "独立完成多款上线游戏角色制作，包括趣加《Call of Antia》、祖龙娱乐《以闪亮之名》、永航科技《QQ炫舞》等；简单模型1-2天，复杂模型1个月以上。",
    tags: ["奇笔传图网络科技有限公司 · 次世代3D角色建模师", "ZBrush", "3DsMax", "SubstancePainter", "Maya", "PBR材质"],
    metrics: [
      { value: "1-2D", label: "SIMPLE" },
      { value: "1M+", label: "COMPLEX" },
    ],
    revealDelay: 1,
  },
];
