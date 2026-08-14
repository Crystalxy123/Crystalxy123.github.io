export type Lang = 'zh' | 'en';
export type Localized = { zh: string; en: string };

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: 'Published' | 'Conference' | 'Preprint';
  topics: string[];
  role?: 'First author' | 'Co-first author' | 'Co-author' | 'Corresponding author';
  doi?: string;
  url?: string;
  featured?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  fullName: Localized;
  summary: Localized;
  problem: Localized;
  method: Localized;
  result: Localized;
  contribution: Localized;
  year: string;
  status: 'Published research' | 'Research prototype' | 'Archived demo' | 'Published dataset';
  topics: string[];
  doi?: string;
  externalUrl?: string;
  featured?: boolean;
};

export const profile = {
  name: { zh: '萧星宇', en: 'Xingyu Xiao' },
  role: {
    zh: '清华大学核能与新能源技术研究院 2023 级直博生',
    en: 'Direct-entry PhD student (class of 2023), Institute of Nuclear and New Energy Technology, Tsinghua University',
  },
  headline: {
    zh: '核电人因可靠性、智能决策与高自治运行研究',
    en: 'Human Reliability, Intelligent Decision Support, and High-Autonomy Nuclear Operations',
  },
  shortBio: {
    zh: '研究复杂核电系统中人的认知、失误与决策，并探索如何以可验证、人在回路的人工智能提升核安全。工作贯穿动态人因可靠性分析、数字化主控室和智能决策支持。',
    en: 'I study cognition, human error, and decision-making in complex nuclear systems, and investigate how verifiable, human-in-the-loop AI can strengthen nuclear safety. My work spans dynamic human reliability analysis, digital control rooms, and intelligent decision support.',
  },
  email: 'xxy23@mails.tsinghua.edu.cn',
  institution: {
    zh: '清华大学核能与新能源技术研究院',
    en: 'Institute of Nuclear and New Energy Technology, Tsinghua University',
  },
  links: {
    github: 'https://github.com/Crystalxy123',
    scholar: 'https://scholar.google.com/citations?user=zmICXqAAAAAJ&hl=en',
    researchGate: 'https://www.researchgate.net/profile/Xingyu-Xiao-4',
    linkedIn: 'https://www.linkedin.com/in/xingyu-xiao-82ba75367/',
  },
  stats: [
    { value: '约 25', enValue: '≈25', label: { zh: '学术论文', en: 'Publications' } },
    { value: '约 12', enValue: '≈12', label: { zh: '第一或共同第一作者论文', en: 'First / co-first author papers' } },
    { value: '10', enValue: '10', label: { zh: '发明专利（2 项授权、1 项 PCT）', en: 'Invention patents (2 granted, 1 PCT)' } },
    { value: '3', enValue: '3', label: { zh: '软件著作权', en: 'Software copyrights' } },
    { value: '约 7', enValue: '≈7', label: { zh: '参与或承担科研项目', en: 'Research projects' } },
  ],
} as const;

export const researchThemes = [
  {
    code: '01',
    title: { zh: '人因可靠性与动态建模', en: 'Human reliability & dynamic modeling' },
    description: {
      zh: '把认知过程、情景演化与运行数据纳入人因失误概率建模，支持从静态评价走向动态风险认知。',
      en: 'Integrating cognition, scenario evolution, and operational data into human-error probability models to move from static assessment toward dynamic risk awareness.',
    },
    tags: ['HRA', 'Dynamic HEP', 'Cognitive modeling'],
  },
  {
    code: '02',
    title: { zh: '数字化主控室与人机交互', en: 'Digital control rooms & HMI' },
    description: {
      zh: '研究界面特征、操作轨迹与团队协同如何影响认知负荷、情景意识和操作可靠性。',
      en: 'Studying how interface features, interaction trajectories, and team coordination shape workload, situation awareness, and operational reliability.',
    },
    tags: ['Human factors', 'HMI', 'Operator behavior'],
  },
  {
    code: '03',
    title: { zh: '核电人工智能与智能决策', en: 'AI & intelligent decision support' },
    description: {
      zh: '结合大语言模型、知识图谱和概率模型，为事故诊断、规程执行与风险决策提供可追溯支持。',
      en: 'Combining language models, knowledge graphs, and probabilistic models for traceable support in diagnosis, procedure execution, and risk-informed decisions.',
    },
    tags: ['LLM', 'Knowledge graph', 'Decision support'],
  },
  {
    code: '04',
    title: { zh: '高自治运行与安全治理', en: 'High autonomy & safety governance' },
    description: {
      zh: '探索核电高自治运行中的功能分配、人在回路监督、验证评估与可解释安全边界。',
      en: 'Exploring function allocation, human oversight, verification, and explainable safety boundaries for highly autonomous nuclear operations.',
    },
    tags: ['High autonomy', 'Human-in-the-loop', 'AI safety'],
  },
] satisfies Array<{ code: string; title: Localized; description: Localized; tags: string[] }>;

export const publications: Publication[] = [
  {
    id: 'wella-2026',
    title: 'An intelligent framework for automated human reliability data generation in complex industrial systems',
    authors: ['Xingyu Xiao', 'Peng Chen', 'Qianqian Jia', 'Jiejuan Tong', 'Jun Zhao', 'Hongru Zhao', 'Jingang Liang', 'Haitao Wang'],
    venue: 'Computers & Industrial Engineering 213, 111807',
    year: 2026,
    status: 'Published',
    topics: ['Human reliability', 'Large language models', 'Workload'],
    role: 'First author',
    doi: '10.1016/j.cie.2026.111807',
    featured: true,
  },
  {
    id: 'autograph-2026',
    title: 'AutoGraph: An intelligent knowledge-graph agent for procedure automation and dynamic human reliability support in high-risk industries',
    authors: ['Xingyu Xiao', 'Ben Qi', 'Zijian Yin', 'Jiejuan Tong', 'Jun Sun', 'Zhe Sui', 'Jingang Liang', 'Jun Zhao', 'Haitao Wang'],
    venue: 'Reliability Engineering & System Safety 270, 112123',
    year: 2026,
    status: 'Published',
    topics: ['Knowledge graph', 'Procedure automation', 'Digital control room'],
    role: 'First author',
    doi: '10.1016/j.ress.2025.112123',
    featured: true,
  },
  {
    id: 'krail-2026',
    title: 'KRAIL: A knowledge-driven framework for human reliability analysis integrating IDHEAS-DATA and large language models',
    authors: ['Xingyu Xiao', 'Peng Chen', 'Ben Qi', 'Hongru Zhao', 'Jingang Liang', 'Jiejuan Tong', 'Haitao Wang'],
    venue: 'Reliability Engineering & System Safety 265, 111585',
    year: 2026,
    status: 'Published',
    topics: ['Human reliability', 'Large language models', 'Knowledge graph'],
    role: 'First author',
    doi: '10.1016/j.ress.2025.111585',
    featured: true,
  },
  {
    id: 'evoscentree-2025',
    title: 'A novel scenario-driven method for enhanced dynamic emergency decision support in nuclear power plants',
    authors: ['Xingyu Xiao', 'Peng Chen', 'Ben Qi', 'Jingang Liang', 'Jiejuan Tong', 'Haitao Wang'],
    venue: 'Progress in Nuclear Energy 189, 105908',
    year: 2025,
    status: 'Published',
    topics: ['Decision support', 'Event tree', 'Large language models'],
    role: 'First author',
    doi: '10.1016/j.pnucene.2025.105908',
    featured: true,
  },
  {
    id: 'drif-2025',
    title: 'A dynamic risk-informed framework for emergency human error prevention in high-risk industries: A Nuclear Power Plant case study',
    authors: ['Xingyu Xiao', 'Ben Qi', 'Shunshun Liu', 'Peng Chen', 'Jingang Liang', 'Jiejuan Tong', 'Haitao Wang'],
    venue: 'Reliability Engineering & System Safety 261, 111080',
    year: 2025,
    status: 'Published',
    topics: ['Human reliability', 'Dynamic risk', 'Decision support'],
    role: 'First author',
    doi: '10.1016/j.ress.2025.111080',
    featured: true,
  },
  {
    id: 'cognitive-mechanistic-2025',
    title: 'A Cognitive-Mechanistic Human Reliability Analysis Framework: A Nuclear Power Plant Case Study',
    authors: ['Xingyu Xiao', 'Peng Chen', 'Jiejuan Tong'],
    venue: 'arXiv preprint',
    year: 2025,
    status: 'Preprint',
    topics: ['Human reliability', 'Cognitive modeling'],
    role: 'First author',
    url: 'https://arxiv.org/abs/2504.18604',
  },
  {
    id: 'icone32-2025',
    title: 'Accelerated Determination of Entry Conditions for Fault Procedures via Large Language Models and Knowledge Graphs',
    authors: ['Ben Qi', 'Xingyu Xiao', 'Jingang Liang'],
    venue: 'Proceedings of ICONE32, Springer Proceedings in Physics 343',
    year: 2025,
    status: 'Conference',
    topics: ['Large language models', 'Knowledge graph', 'Decision support'],
    role: 'Co-author',
  },
  {
    id: 'situation-awareness-2025',
    title: 'Predicting Operator Situation Awareness in Nuclear Power Plant Operations Using Multimodal Physiological Time-Series',
    authors: ['S. Chen', 'H. Jia', 'T. Qing', 'L. Zhang', 'W. Xu', 'X. Li', 'J. Duan', 'Xingyu Xiao'],
    venue: 'SSRN preprint',
    year: 2025,
    status: 'Preprint',
    topics: ['Situation awareness', 'Multimodal data', 'Human factors'],
    role: 'Corresponding author',
  },
  {
    id: 'emergency-review-2024',
    title: 'Emergency Decision Support Techniques for Nuclear Power Plants: Current State, Challenges, and Future Trends',
    authors: ['Xingyu Xiao', 'Jingang Liang', 'Jiejuan Tong', 'Haitao Wang'],
    venue: 'Energies 17(10), 2439',
    year: 2024,
    status: 'Published',
    topics: ['Decision support', 'Nuclear safety'],
    role: 'First author',
    doi: '10.3390/en17102439',
  },
  {
    id: 'deep-loca-2024',
    title: 'Enhancing LOCA Breach Size Diagnosis with Fundamental Deep Learning Models and Optimized Dataset Construction',
    authors: ['Xingyu Xiao', 'Ben Qi', 'Jingang Liang', 'Jiejuan Tong', 'Qing Deng', 'Peng Chen'],
    venue: 'Energies 17(1), 159',
    year: 2024,
    status: 'Published',
    topics: ['Fault diagnosis', 'Deep learning', 'Nuclear safety'],
    role: 'Co-first author',
    doi: '10.3390/en17010159',
  },
  {
    id: 'icone31-2024',
    title: 'A Text Intelligence-Based Approach for Automatic Generation of Fault Trees in Nuclear Power Plants',
    authors: ['Xingyu Xiao', 'Songlin Liu', 'Zhiyong Zuo', 'Peng Chen', 'Ben Qi', 'Jingang Liang', 'Jiejuan Tong'],
    venue: '31st International Conference on Nuclear Engineering (ICONE31)',
    year: 2024,
    status: 'Conference',
    topics: ['Fault tree', 'Text intelligence', 'Nuclear safety'],
    role: 'First author',
    doi: '10.1115/ICONE31-134226',
  },
  {
    id: 'fv-importance-2024',
    title: 'A Hybrid Real-Time Framework for Efficient Fussell-Vesely Importance Evaluation Using Virtual Fault Trees and Graph Neural Networks',
    authors: ['Xingyu Xiao', 'Peng Chen'],
    venue: 'arXiv preprint',
    year: 2024,
    status: 'Preprint',
    topics: ['Fault tree', 'Graph neural network', 'Risk assessment'],
    role: 'First author',
    url: 'https://arxiv.org/abs/2412.10484',
  },
  {
    id: 'urban-covid-2023',
    title: 'The Impact of COVID-19 on the Development of Cities in the Beijing-Tianjin-Hebei Urban Agglomeration: A Case Study of Beijing, Tianjin, and Shijiazhuang',
    authors: ['Xingyu Xiao', 'Shiyu Mei', 'Ruiqi Liu', 'Kuo Wang', 'Qing Deng'],
    venue: 'Journal of Tsinghua University (Science and Technology)',
    year: 2023,
    status: 'Published',
    topics: ['Risk assessment', 'Urban resilience'],
    role: 'First author',
  },
  {
    id: 'nram-2023',
    title: 'A national risk analysis model (NRAM) for the assessment of COVID-19 epidemic',
    authors: ['Qing Deng', 'Xingyu Xiao', 'L. Zhu'],
    venue: 'Risk Analysis',
    year: 2023,
    status: 'Published',
    topics: ['Risk assessment', 'Public health'],
    role: 'Co-first author',
  },
  {
    id: 'npp-dataset-2022',
    title: 'An open time-series simulated dataset covering various accidents for nuclear power plants',
    authors: ['Ben Qi', 'Xingyu Xiao', 'Jingang Liang'],
    venue: 'Scientific Data',
    year: 2022,
    status: 'Published',
    topics: ['Dataset', 'Nuclear accidents', 'Time series'],
    role: 'Co-author',
    featured: true,
  },
];

export const projects: Project[] = [
  {
    slug: 'drif',
    name: 'DRIF',
    fullName: { zh: '动态风险指引型人因失误防控框架', en: 'Dynamic Risk-Informed Framework for Human Error Prevention' },
    summary: { zh: '面向核电应急情景的实时人因风险识别与决策支持框架。', en: 'A real-time human-risk assessment and decision-support framework for nuclear emergency scenarios.' },
    problem: { zh: '传统人因可靠性分析难以跟随事故过程动态更新风险。', en: 'Conventional HRA struggles to update risk as an accident scenario evolves.' },
    method: { zh: '融合贝叶斯网络、LSTM 与应急运行规程，建立风险传播与反向溯源机制。', en: 'Combines Bayesian networks, LSTM models, and emergency operating procedures for risk propagation and backward tracing.' },
    result: { zh: '在高温气冷堆异常任务案例中展示动态 HEP 评估、风险路径识别与规程一致的防控建议。', en: 'Demonstrated dynamic HEP estimation, latent-risk-path identification, and procedure-aligned guidance in HTGR anomaly scenarios.' },
    contribution: { zh: '第一作者；负责框架设计、验证、可视化与论文撰写。', en: 'First author; framework design, validation, visualization, and manuscript development.' },
    year: '2025',
    status: 'Published research',
    topics: ['HRA', 'Dynamic risk', 'Decision support'],
    doi: '10.1016/j.ress.2025.111080',
    featured: true,
  },
  {
    slug: 'krail',
    name: 'KRAIL',
    fullName: { zh: '融合 IDHEAS-DATA 与大语言模型的知识驱动人因可靠性分析框架', en: 'Knowledge-driven Reliability Analysis integrating IDHEAS-DATA and Large language models' },
    summary: { zh: '以知识图谱作为可追溯检索层，辅助快速、透明的人因失误概率评估。', en: 'A knowledge-graph retrieval layer for faster and more transparent human-error probability assessment.' },
    problem: { zh: 'HRA 估计高度依赖专家判断，并受数据稀疏和信息不完整限制。', en: 'HRA estimates depend heavily on expert judgment and are constrained by sparse or partial evidence.' },
    method: { zh: '将 IDHEAS-DATA、知识图谱、检索增强生成与专家在环校核组合为两阶段流程。', en: 'A two-stage workflow combining IDHEAS-DATA, a knowledge graph, retrieval-augmented generation, and expert-in-the-loop validation.' },
    result: { zh: '本地正式论文显示，该框架在权威基准上提高 HEP 估计准确性，并将端到端评估控制在 150 秒以内。', en: 'The locally verified paper reports improved HEP accuracy on established benchmarks and end-to-end assessment in under 150 seconds.' },
    contribution: { zh: '第一作者；负责研究设计、实现评估与论文撰写。', en: 'First author; research design, implementation evaluation, and manuscript development.' },
    year: '2026',
    status: 'Published research',
    topics: ['HRA', 'LLM', 'Knowledge graph'],
    doi: '10.1016/j.ress.2025.111585',
    featured: true,
  },
  {
    slug: 'autograph',
    name: 'AutoGraph',
    fullName: { zh: '面向规程自动化与动态人因支持的知识图谱智能体', en: 'Knowledge-Graph Agent for Procedure Automation and Dynamic Human Reliability Support' },
    summary: { zh: '把自然语言规程语义落到数字化主控室的可执行界面动作。', en: 'Grounds natural-language procedure intent into executable interface actions in digital control rooms.' },
    problem: { zh: '数字规程通常仍需人工解释，难以将模糊指令安全映射到具体界面控件。', en: 'Digital procedures still require interpretation and cannot safely map ambiguous instructions to exact controls.' },
    method: { zh: '结合大语言模型语义解析、界面元素知识图谱与图约束空间推理。', en: 'Combines LLM semantic parsing, an interface-element knowledge graph, and graph-constrained spatial reasoning.' },
    result: { zh: '论文案例报告了确定性动作执行和相对人工操作 0.900 的性能改进指数。', en: 'The paper reports deterministic action execution and a 0.900 performance-improvement index over manual operation in the evaluated scenarios.' },
    contribution: { zh: '第一作者；负责方法设计、验证与论文撰写。', en: 'First author; method design, validation, and manuscript development.' },
    year: '2026',
    status: 'Published research',
    topics: ['Knowledge graph', 'Automation', 'Digital control room'],
    doi: '10.1016/j.ress.2025.112123',
    featured: true,
  },
  {
    slug: 'wella',
    name: 'WELLA',
    fullName: { zh: '基于大语言模型与智能体的工作负荷估计框架', en: 'Workload Estimation with Large Language Models and Agents' },
    summary: { zh: '从真实运行日志驱动多角色认知负荷的动态生成与估计。', en: 'Scenario-driven generation and estimation of dynamic workload across multiple operator roles.' },
    problem: { zh: '传统 HRA 数据粒度有限、收集成本高，难以覆盖动态协同任务。', en: 'Traditional HRA data are expensive, low-granularity, and poorly suited to dynamic collaborative tasks.' },
    method: { zh: '以微调大语言模型和多智能体仿真模拟操纵员、值长等角色的负荷变化。', en: 'Uses fine-tuned language models and agent simulation to model workload across operators and supervisors.' },
    result: { zh: '论文报告其在核电运行场景中对认知负荷预测表现出更好的准确性与适应性。', en: 'The paper reports improved workload-prediction accuracy and adaptability in evaluated nuclear-operation scenarios.' },
    contribution: { zh: '第一作者；负责研究设计、验证与论文撰写。', en: 'First author; research design, validation, and manuscript development.' },
    year: '2026',
    status: 'Published research',
    topics: ['Workload', 'LLM', 'Multi-agent'],
    doi: '10.1016/j.cie.2026.111807',
    externalUrl: 'https://github.com/Crystalxy123/WELLA',
    featured: true,
  },
  {
    slug: 'evoscentree',
    name: 'EvoScenTree',
    fullName: { zh: '场景驱动的动态应急决策支持方法', en: 'Scenario-Driven Dynamic Emergency Decision-Support Method' },
    summary: { zh: '让执行智能体与校核智能体围绕演化事件树迭代形成应急处置建议。', en: 'Uses executor and validator agents with evolvable event trees to iteratively form emergency-response guidance.' },
    problem: { zh: '既有决策支持系统多依赖预定义事故序列，难以应对未预见情景。', en: 'Existing decision-support systems are often bound to predefined accident sequences.' },
    method: { zh: '结合事件树专家知识与大语言模型驱动的执行—校核智能体循环。', en: 'Combines event-tree expert knowledge with an LLM-driven executor-validator agent loop.' },
    result: { zh: '论文案例显示该方法能够处理此前未遇到的事故情景并持续更新应急措施。', en: 'The paper demonstrates continuous response updates for previously unseen incident scenarios.' },
    contribution: { zh: '第一作者；负责研究构思、方法设计与论文撰写。', en: 'First author; research conception, method design, and manuscript development.' },
    year: '2025',
    status: 'Published research',
    topics: ['Decision support', 'Event tree', 'Multi-agent'],
    doi: '10.1016/j.pnucene.2025.105908',
    featured: true,
  },
  {
    slug: 'insight',
    name: 'InSight-R',
    fullName: { zh: '数字化主控室界面—行为—风险分析原型', en: 'Interface-Behavior-Risk Analysis Prototype for Digital Control Rooms' },
    summary: { zh: '从界面复杂度、操作轨迹到多状态失误概率的研究原型。', en: 'A research prototype linking interface complexity and interaction trajectories to multi-state error probabilities.' },
    problem: { zh: '旧版依赖 Python 分析服务，无法在 GitHub Pages 上安全运行。', en: 'The legacy version depends on a Python analysis service and cannot run safely on GitHub Pages.' },
    method: { zh: '界面特征量化、S0–S4 操作状态标注与贝叶斯层次模型。', en: 'Interface feature quantification, S0-S4 state labeling, and Bayesian hierarchical modeling.' },
    result: { zh: '保留方法、数据格式和项目说明；上传分析功能已下线。', en: 'Method, data format, and project documentation are preserved; upload-based analysis is offline.' },
    contribution: { zh: '研究工具设计与原型实现。', en: 'Research-tool design and prototype implementation.' },
    year: '2025',
    status: 'Research prototype',
    topics: ['HMI', 'Operator behavior', 'Bayesian model'],
    featured: true,
  },
  {
    slug: 'kureas',
    name: 'KUREAS',
    fullName: { zh: '核电可靠性工程分析工具集', en: 'Nuclear Reliability Engineering Analysis Toolkit' },
    summary: { zh: '旧站保留的浏览器端可靠性分析工具集合与工作流资料。', en: 'A legacy collection of browser-based reliability-analysis tools and workflow references.' },
    problem: { zh: '部分模块包含本地文件交互、旧运行环境或未完成的质量保证流程。', en: 'Some modules depend on local files, legacy runtimes, or unfinished quality-assurance workflows.' },
    method: { zh: '涵盖系统工作流、危险分析、故障树与 SPAR-H 等模块。', en: 'Covers system workflow, hazard analysis, fault-tree, and SPAR-H modules.' },
    result: { zh: '以归档项目介绍形式保留，避免将未经完整验证的工具描述为生产系统。', en: 'Preserved as an archived project overview without presenting unverified tools as production systems.' },
    contribution: { zh: '原型工具整合与网页化。', en: 'Prototype integration and web presentation.' },
    year: '2025–2026',
    status: 'Archived demo',
    topics: ['Reliability', 'SPAR-H', 'Fault tree'],
  },
  {
    slug: 'idheas-eca',
    name: 'IDHEAS-ECA Assistant',
    fullName: { zh: 'IDHEAS-ECA 知识检索与评估辅助原型', en: 'IDHEAS-ECA Knowledge Retrieval and Assessment Assistant' },
    summary: { zh: '围绕 IDHEAS-ECA 资料检索、情景信息整理和人因评估支持的旧版演示。', en: 'A legacy demonstration for IDHEAS-ECA retrieval, scenario structuring, and HRA support.' },
    problem: { zh: '旧页面请求本地接口并可能要求模型密钥，无法静态托管。', en: 'The old page calls a local API and may require model credentials, so it cannot be statically hosted.' },
    method: { zh: '检索增强生成与结构化人因信息组织。', en: 'Retrieval-augmented generation and structured human-reliability evidence organization.' },
    result: { zh: '仅保留研究背景与归档说明；交互式演示当前不可用。', en: 'Research context and archive notes are retained; the interactive demo is unavailable.' },
    contribution: { zh: '原型设计与验证探索。', en: 'Prototype design and exploratory validation.' },
    year: '2025',
    status: 'Archived demo',
    topics: ['IDHEAS', 'RAG', 'HRA'],
  },
  {
    slug: 'nppad',
    name: 'NPPAD',
    fullName: { zh: '核电厂多事故开放时序仿真数据集工作', en: 'Open Time-Series Nuclear Power Plant Accident Dataset Work' },
    summary: { zh: '覆盖多类核电事故情景的开放时序仿真数据研究。', en: 'Open time-series simulation data covering multiple nuclear-plant accident scenarios.' },
    problem: { zh: '核事故诊断研究缺少结构一致、可复现实验的数据资源。', en: 'Nuclear fault-diagnosis studies lack consistently structured, reproducible datasets.' },
    method: { zh: '构建多事故情景的仿真时序数据并以数据论文形式公开说明。', en: 'Constructed simulation time series across accident scenarios and documented them through a data paper.' },
    result: { zh: '相关数据论文发表于 Scientific Data（2022）。', en: 'The associated data paper was published in Scientific Data (2022).' },
    contribution: { zh: '共同作者；参与数据研究与论文工作。', en: 'Co-author; contributed to the dataset study and publication.' },
    year: '2022',
    status: 'Published dataset',
    topics: ['Dataset', 'Nuclear accidents', 'Time series'],
  },
];

export const timeline = [
  {
    period: '2023 — 至今',
    periodEn: '2023 — Present',
    title: { zh: '清华大学 · 核科学与技术直博', en: 'Tsinghua University · Direct-entry PhD in Nuclear Science and Technology' },
    detail: { zh: '核能与新能源技术研究院；研究数字化核电厂人因失误动态建模与智能防控。', en: 'Institute of Nuclear and New Energy Technology; dynamic modeling and intelligent prevention of human error in digital nuclear power plants.' },
  },
  {
    period: '2023',
    periodEn: '2023',
    title: { zh: '北京科技大学 · 本科毕业', en: 'University of Science and Technology Beijing · Bachelor’s degree' },
    detail: { zh: '旧站正式 CV 记录获校长奖章与北京市优秀毕业论文。', en: 'The legacy formal CV records the President’s Medal and an Outstanding Undergraduate Thesis award in Beijing.' },
  },
] satisfies Array<{ period: string; periodEn: string; title: Localized; detail: Localized }>;

export const honors = [
  { year: '2025', title: { zh: '清华大学首届探臻学者', en: 'Inaugural Tanzhen Scholar, Tsinghua University' }, note: { zh: '旧站正式 CV 记载：全校 15 人。', en: 'Legacy formal CV records a university-wide cohort of 15.' } },
  { year: '2024', title: { zh: '清华大学研究生国家奖学金', en: 'National Scholarship, Tsinghua University' }, note: { zh: '旧站正式 CV 记载。', en: 'Recorded in the legacy formal CV.' } },
  { year: '2024', title: { zh: '博士生论坛最佳论文奖', en: 'Best Paper, Doctoral Student Forum' }, note: { zh: '旧站正式 CV 记载。', en: 'Recorded in the legacy formal CV.' } },
  { year: '2024', title: { zh: '人因安全全国研讨会最佳论文奖', en: 'Best Paper, National Symposium on Human Factors Safety' }, note: { zh: '旧站正式 CV 记载。', en: 'Recorded in the legacy formal CV.' } },
  { year: '2023', title: { zh: '北京科技大学校长奖章', en: 'President’s Medal, University of Science and Technology Beijing' }, note: { zh: '旧站正式 CV 记载为学校最高荣誉。', en: 'Recorded in the legacy formal CV as the university’s highest honor.' } },
] satisfies Array<{ year: string; title: Localized; note: Localized }>;

export const service = [
  {
    title: { zh: '学术同行评审', en: 'Peer review' },
    detail: {
      zh: '旧站 CV 记录曾为 Reliability Engineering & System Safety、IEEE Internet of Things Journal、IEEE Sensors Journal、Energy and AI 等期刊审稿。',
      en: 'The legacy CV records review service for Reliability Engineering & System Safety, IEEE Internet of Things Journal, IEEE Sensors Journal, Energy and AI, and other journals.',
    },
  },
  {
    title: { zh: '核科普与公共传播', en: 'Nuclear science communication' },
    detail: {
      zh: '旧站资料记录获评“全国优秀核科普讲解员”，并参与核能与气候议题的青年公共交流。',
      en: 'Legacy site records recognition as a National Outstanding Nuclear Science Communicator and participation in youth-facing public dialogue on nuclear energy and climate.',
    },
  },
  {
    title: { zh: '“人类心智研究”公众号', en: 'Human Mind Research WeChat channel' },
    detail: {
      zh: '持续分享认知科学、人因工程与人工智能相关研究；任务资料记载关注者 7,000+。',
      en: 'Shares research on cognitive science, human factors, and AI; the migration brief records an audience of 7,000+.',
    },
  },
] satisfies Array<{ title: Localized; detail: Localized }>;

export function t(value: Localized, lang: Lang): string {
  return value[lang];
}

export function statusLabel(status: Project['status'], lang: Lang): string {
  const labels: Record<Project['status'], Localized> = {
    'Published research': { zh: '已发表研究', en: 'Published research' },
    'Research prototype': { zh: '研究原型', en: 'Research prototype' },
    'Archived demo': { zh: '归档演示', en: 'Archived demo' },
    'Published dataset': { zh: '已发表数据集', en: 'Published dataset' },
  };
  return labels[status][lang];
}

