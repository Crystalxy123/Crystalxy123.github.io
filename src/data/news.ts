import type { Localized } from './site';

export type NewsImage = {
  src: string;
  width: number;
  height: number;
  alt: Localized;
  caption: Localized;
};

export type NewsParagraph = Localized & {
  references?: { label: Localized; url: string }[];
};

export type NewsAnnouncement = {
  acronym: string;
  program: string;
  title: Localized;
  detail: Localized;
  name: Localized;
};

export type NewsItem = {
  id: string;
  date?: string;
  dateLabel?: Localized;
  category: Localized;
  title: Localized;
  summary: Localized;
  paragraphs: NewsParagraph[];
} & (
  | { image: NewsImage; additionalImages?: NewsImage[]; announcement?: never }
  | { image?: never; additionalImages?: never; announcement: NewsAnnouncement }
);

// Keep the latest news first. Use YYYY-MM for a known month; omit date when only a season is known.
export const news: NewsItem[] = [
  {
    id: 'genu-ypat-fourth-cohort',
    date: '2026-09',
    dateLabel: { zh: '2026 年 9 月', en: 'September 2026' },
    category: { zh: '入选消息', en: 'Selection announcement' },
    title: {
      zh: '入选 UNICEF GenU 全球青年行动团队（YPAT）第四届成员',
      en: 'Selected for the fourth cohort of UNICEF GenU’s Global Young People’s Action Team',
    },
    summary: {
      zh: '我已入选 Generation Unlimited（GenU）全球青年行动团队（Young People’s Action Team，YPAT）第四届成员，期待与来自不同国家和背景的青年伙伴共同学习、参与行动。',
      en: 'I have been selected for the fourth cohort of Generation Unlimited’s Global Young People’s Action Team (YPAT). I look forward to learning and taking action alongside young people from different countries and backgrounds.',
    },
    paragraphs: [
      {
        zh: 'GenU 是依托联合国儿童基金会（UNICEF）、连接公共部门、私营部门与青年的全球伙伴关系平台。YPAT 推动青年参与相关规划、项目及合作，让青年观点进入决策过程，关注教育、技能、创业与公民参与等领域。',
        en: 'GenU is a global public-private-youth partnership anchored in UNICEF. YPAT brings young people’s perspectives into planning, programmes, partnerships, and decision-making, with experience spanning education, skills, entrepreneurship, and civic engagement.',
        references: [
          {
            label: { zh: 'GenU 官方资料', en: 'About GenU' },
            url: 'https://www.generationunlimited.org/documents/generation-unlimited-strategy-2026-2029',
          },
          {
            label: { zh: 'YPAT 官方介绍', en: 'About YPAT' },
            url: 'https://www.generationunlimited.org/young-peoples-action-team',
          },
        ],
      },
      {
        zh: '感谢提名与支持，也感谢团队的认可。这份入选对我而言是一份鼓励，更是一份责任。未来希望结合自己的科研与科技传播经历，认真倾听不同青年的需求，在交流与协作中贡献力所能及的行动。',
        en: 'I am grateful for the nomination, the support I received, and the team’s confidence in me. This selection is both encouragement and a responsibility. I hope to draw on my research and science communication experience, listen carefully to the needs of other young people, and contribute through collaboration and practical action.',
      },
    ],
    announcement: {
      acronym: 'YPAT',
      program: 'GenU · Generation Unlimited',
      title: { zh: '全球青年行动团队', en: 'Global Young People’s Action Team' },
      detail: { zh: '第四届 · 入选成员', en: '4th cohort · Selected member' },
      name: { zh: '萧星宇 · Xingyu Xiao', en: 'Xingyu Xiao' },
    },
  },
  {
    id: '2026-inner-mongolia-talent-training',
    date: '2026-09-06',
    dateLabel: { zh: '2026 年 9 月 6—11 日', en: 'September 6–11, 2026' },
    category: { zh: '研修随记', en: 'Training notes' },
    title: {
      zh: '赴内蒙古参加科协人才研修，关注新能源与生态发展',
      en: 'Training in Inner Mongolia: perspectives on clean energy and ecology',
    },
    summary: {
      zh: '2026 年 9 月 6—11 日，我在内蒙古参加中国科协党校（科技人才学院）“领航计划”青年科技人才国情研修活动（总第 153 期）。',
      en: 'I am taking part in the China Association for Science and Technology’s Linghang training program for young scientists in Inner Mongolia, scheduled for September 6–11, 2026 (153rd session).',
    },
    paragraphs: [
      {
        zh: '这几天的学习中，我感受到当地对新能源发展与生态保护的重视，也开始更多地思考能源科技研究与绿色发展之间的联系。期待在接下来的研修中继续学习，把这些观察带回自己的研究与实践。',
        en: 'In these first days of the program, I have been struck by the local emphasis on clean energy development and ecological protection. This has prompted me to think more about the connections between energy research and sustainable development. I look forward to learning more during the rest of the program and bringing these observations into my own research and practice.',
      },
    ],
    image: {
      src: '/images/news/2026-inner-mongolia-talent-training.jpg',
      width: 1707,
      height: 1280,
      alt: {
        zh: '内蒙古研修现场，印有萧星宇姓名及“领航计划”青年科技人才国情研修活动名称的桌牌。',
        en: 'A name card for Xingyu Xiao at the Linghang training program in Inner Mongolia.',
      },
      caption: {
        zh: '内蒙古研修现场 · “领航计划”青年科技人才国情研修活动',
        en: 'At the Linghang training program in Inner Mongolia',
      },
    },
  },
  {
    id: '2026-september-science-arts-exchange',
    date: '2026-09-03',
    dateLabel: { zh: '2026 年 9 月 3—4 日', en: 'September 3–4, 2026' },
    category: { zh: '交流活动', en: 'Exchange' },
    title: {
      zh: '参加中美科协活动，在跨学科交流中收获启发',
      en: 'Learning through conversations across science and the arts',
    },
    summary: {
      zh: '2026 年 9 月 3—4 日，参加中美科协活动，与艺术专业的同学交流学习，收获了许多新的思考与启发。',
      en: 'On September 3–4, 2026, I participated in a 中美科协 event and had rewarding conversations with students in the arts.',
    },
    paragraphs: [
      {
        zh: '这次交流让我有机会跳出熟悉的研究视角，从不同的角度思考问题。感谢大家的真诚分享，期待未来有更多跨学科交流与学习的机会。',
        en: 'These conversations gave me an opportunity to step outside my usual research perspective and consider questions from different angles. I am grateful to everyone who shared their ideas and look forward to more opportunities to learn across disciplines.',
      },
    ],
    image: {
      src: '/images/news/2026-september-science-arts-exchange.jpg',
      width: 1280,
      height: 1707,
      alt: {
        zh: '活动期间拍摄的中国国际青年交流中心建筑外观。',
        en: 'Exterior of the China International Youth Exchange Center, photographed during the event.',
      },
      caption: {
        zh: '活动随记 · 中国国际青年交流中心',
        en: 'From the visit · China International Youth Exchange Center',
      },
    },
  },
  {
    id: '2026-tsinghua-tanzhen-scholar',
    date: '2026-09',
    dateLabel: { zh: '2026 年 9 月', en: 'September 2026' },
    category: { zh: '学术认可', en: 'Recognition' },
    title: {
      zh: '入选清华大学“优秀探臻学者案例”',
      en: 'Featured as an outstanding Tanzhen Scholar at Tsinghua',
    },
    summary: {
      zh: '在清华大学 2026 年全校新生开学典礼上，我的研究工作作为“优秀探臻学者案例”进行展示。',
      en: 'My research was featured as an example of outstanding work in the Tanzhen Scholars program at Tsinghua University’s 2026 opening ceremony for new students.',
    },
    paragraphs: [
      {
        zh: '感谢学校的认可与鼓励。未来将继续踏实做研究，深入探索核电人因可靠性与智能风险评估，以扎实的工作和新的成果回应这份肯定。',
        en: 'I am grateful to the university for this recognition and encouragement. I will continue to pursue research in human reliability and intelligent risk assessment for nuclear power, building on this encouragement through careful work and new contributions.',
      },
    ],
    image: {
      src: '/images/news/2026-tsinghua-tanzhen.jpg',
      width: 1706,
      height: 1279,
      alt: {
        zh: '清华大学开学典礼展示画面，萧星宇的研究工作被列为“优秀探臻学者案例”。',
        en: 'A presentation at Tsinghua’s opening ceremony featuring Xingyu Xiao’s research as an outstanding Tanzhen Scholar example.',
      },
      caption: {
        zh: '开学典礼展示画面 · 优秀探臻学者案例',
        en: 'Opening ceremony presentation · Tanzhen Scholars program',
      },
    },
  },
  {
    id: '2026-tanzhen-welcome-exhibition',
    dateLabel: { zh: '2026 年迎新期间', en: '2026 welcome season' },
    category: { zh: '成果展示', en: 'Research showcase' },
    title: {
      zh: '研究成果亮相探臻科技评论社迎新展区',
      en: 'Research featured in the Tanzhen Science and Technology Review Society’s welcome exhibition',
    },
    summary: {
      zh: '2026 年迎新期间，我参与的 KRAIL 人因可靠性智能分析框架及数字化核电主控室人因智能相关研究，在探臻科技评论社迎新展区以成果卡片的形式展示，与新同学见面。',
      en: 'During the 2026 welcome season, research I contributed to—including the KRAIL framework for intelligent human reliability analysis and work on human factors in digital nuclear control rooms—was featured on research cards at the Tanzhen Science and Technology Review Society’s exhibition for new students.',
    },
    paragraphs: [
      {
        zh: 'KRAIL 成果卡介绍了融合 IDHEAS-DATA 与大语言模型的人因可靠性智能分析框架；另一张成果卡聚焦数字化核电主控室中的操作风险识别与安全决策，呈现核科学与技术、人因可靠性分析和人工智能交叉研究的思路。',
        en: 'The KRAIL card introduces a framework combining IDHEAS-DATA with large language models for human reliability analysis. The second card focuses on identifying operational risks and supporting safety decisions in digital nuclear control rooms, presenting research at the intersection of nuclear science, human reliability, and artificial intelligence.',
      },
      {
        zh: '从研究工作到迎新展板，这次展示也是一次面向不同专业同学的科技交流。感谢探臻科技评论社提供展示机会，期待借此结识更多关注核安全、人因智能与科技传播的同学，在交流中获得新的思考。',
        en: 'Bringing this work to a welcome exhibition offers an opportunity to share research with students from different disciplines. I am grateful to the society for making the display possible and look forward to meeting more students interested in nuclear safety, human factors, and science communication.',
      },
    ],
    image: {
      src: '/images/news/2026-tanzhen-welcome-exhibition.jpg',
      width: 1707,
      height: 1280,
      alt: {
        zh: '探臻科技评论社迎新展区全景，展板陈列科技创新成果卡片及社群活动介绍。',
        en: 'The Tanzhen Science and Technology Review Society’s welcome display, with research cards and an introduction to its activities.',
      },
      caption: {
        zh: '探臻科技评论社迎新展区',
        en: 'The society’s welcome exhibition',
      },
    },
    additionalImages: [
      {
        src: '/images/news/2026-tanzhen-welcome-krail.jpg',
        width: 1280,
        height: 1707,
        alt: {
          zh: '迎新展区中的 KRAIL 成果卡，介绍融合 IDHEAS-DATA 与大语言模型的人因可靠性智能分析框架。',
          en: 'A KRAIL research card presenting a human reliability analysis framework that combines IDHEAS-DATA with large language models.',
        },
        caption: {
          zh: 'KRAIL · 人因可靠性智能分析框架',
          en: 'KRAIL · Intelligent human reliability analysis',
        },
      },
      {
        src: '/images/news/2026-tanzhen-welcome-control-room.jpg',
        width: 1280,
        height: 1707,
        alt: {
          zh: '数字化核电主控室人因智能成果卡，展示人工智能驱动的操作风险识别与安全决策研究。',
          en: 'A research card on AI-supported operational risk identification and safety decisions in digital nuclear control rooms.',
        },
        caption: {
          zh: '数字化核电主控室 · 人因智能研究',
          en: 'Digital nuclear control rooms · Human factors research',
        },
      },
    ],
  },
  {
    id: '2026-inet-opening-ceremony',
    date: '2026-08-27',
    dateLabel: { zh: '2026 年 8 月 27 日', en: 'August 27, 2026' },
    category: { zh: '校园活动', en: 'Campus life' },
    title: {
      zh: '作为老生代表出席核研院 2026 年开学典礼',
      en: 'Representing returning students at INET’s 2026 opening ceremony',
    },
    summary: {
      zh: '2026 年 8 月 27 日，我作为老生代表出席清华大学核能与新能源技术研究院 2026 年新生开学典礼。',
      en: 'On August 27, 2026, I attended the opening ceremony for new students at Tsinghua University’s Institute of Nuclear and New Energy Technology (INET) as a representative of returning students.',
    },
    paragraphs: [
      {
        zh: '感谢学院的信任，让我有机会以老生代表的身份迎接新同学。对我而言，这既是一份荣誉，也是一份责任。愿与新同学一起，在踏实求学、认真科研的日常中积累经验、共同成长。',
        en: 'I am grateful to the institute for trusting me with the opportunity to welcome the new students. It was both an honor and a responsibility. I look forward to learning and growing alongside them through the everyday work of study and research.',
      },
    ],
    image: {
      src: '/images/news/2026-inet-opening-ceremony.jpg',
      width: 1702,
      height: 1276,
      alt: {
        zh: '核能与新能源技术研究院 2026 年开学典礼现场，讲台前的发言场景。',
        en: 'A scene at the podium during INET’s 2026 opening ceremony.',
      },
      caption: {
        zh: '核研院 2026 年开学典礼现场',
        en: 'INET’s 2026 opening ceremony',
      },
    },
    additionalImages: [
      {
        src: '/images/news/2026-inet-opening-speech.jpg',
        width: 1280,
        height: 1707,
        alt: {
          zh: '为开学典礼准备的老生代表发言稿，包含对新同学的问候及科研经历分享。',
          en: 'A prepared speech for the returning student representative, welcoming new students and sharing research experience.',
        },
        caption: {
          zh: '老生代表发言稿 · 片段',
          en: 'Prepared remarks · excerpt',
        },
      },
    ],
  },
  {
    id: '2026-icre-nuhf-claw-presentation',
    date: '2026-07-19',
    dateLabel: { zh: '2026 年 7 月 19—21 日', en: 'July 19–21, 2026' },
    category: { zh: '会议报告', en: 'Conference presentation' },
    title: {
      zh: '出席 ICRE 2026，介绍 NuHF-Claw 研究工作',
      en: 'Presenting NuHF-Claw at ICRE 2026',
    },
    summary: {
      zh: '2026 年 7 月 19—21 日，我出席在杭州举行的第十届可靠性工程国际会议（ICRE 2026），并作报告介绍自己的 NuHF-Claw 研究工作。',
      en: 'I attended the 10th International Conference on Reliability Engineering (ICRE 2026), held in Hangzhou, China, on July 19–21, 2026, and gave a presentation on my NuHF-Claw research.',
    },
    paragraphs: [
      {
        zh: '报告介绍了 NuHF-Claw：一种面向数字化核电主控室的风险约束认知智能体框架，关注以人为中心的规程支持（报告编号：RE2048-A）。',
        en: 'My presentation, “NuHF-Claw: A Risk-Constrained Cognitive Agent Framework for Human-Centered Procedure Support in Digital Nuclear Control Rooms” (RE2048-A), explored the use of risk constraints and cognitive agents to support human-centered procedures in digital nuclear control rooms.',
      },
      {
        zh: '向同行介绍工作，也是一次重新梳理研究问题与表达思路的机会。感谢会议提供的交流平台，期待在今后的学习与交流中继续完善研究。',
        en: 'Presenting this work was an opportunity to revisit my research questions and clarify how I communicate them. I am grateful for the opportunity to share my work and look forward to refining it through further learning and exchange.',
      },
    ],
    image: {
      src: '/images/news/2026-icre-nuhf-claw-presentation.png',
      width: 1150,
      height: 820,
      alt: {
        zh: 'ICRE 2026 参会证书，记载萧星宇在杭州会议上报告 NuHF-Claw 研究工作，会议日期为 2026 年 7 月 19—21 日。',
        en: 'ICRE 2026 certificate of participation confirming Xingyu Xiao’s presentation on NuHF-Claw at the conference held in Hangzhou on July 19–21, 2026.',
      },
      caption: {
        zh: 'ICRE 2026 · NuHF-Claw 报告参会证书',
        en: 'ICRE 2026 · Certificate of participation for the NuHF-Claw presentation',
      },
    },
  },
  {
    id: '2026-doctoral-poster-first-prize',
    dateLabel: { zh: '2026 年', en: '2026' },
    category: { zh: '获奖消息', en: 'Award' },
    title: {
      zh: '获 2026 年博士生海报展示“优秀海报展示一等奖”',
      en: 'First prize for an outstanding poster presentation at the 2026 doctoral student poster exhibition',
    },
    summary: {
      zh: '在 2026 年博士生海报展示中，我获得“优秀海报展示一等奖”。感谢这份认可，也为这段科研经历留下一份值得珍藏的记录。',
      en: 'I received first prize for an outstanding poster presentation at the 2026 doctoral student poster exhibition. I am grateful for this recognition and pleased to mark this milestone in my research journey.',
    },
    paragraphs: [
      {
        zh: '海报展示既是对阶段性研究的梳理，也是练习清晰表达科研思路的机会。接下来，我会继续踏实做好研究，认真打磨成果与表达，在学习和交流中不断进步。',
        en: 'Preparing a poster is an opportunity to take stock of research progress and communicate ideas clearly. I will continue to work carefully on my research, improve how I present it, and learn through study and exchange.',
      },
    ],
    image: {
      src: '/images/news/2026-doctoral-poster-first-prize.png',
      width: 1334,
      height: 398,
      alt: {
        zh: '优秀海报展示一等奖获奖名单，萧星宇名列其中。',
        en: 'The announcement of first-prize winners for outstanding poster presentations, including Xingyu Xiao.',
      },
      caption: {
        zh: '2026 年博士生海报展示 · 优秀海报展示一等奖获奖名单',
        en: '2026 doctoral student poster exhibition · First-prize announcement',
      },
    },
  },
  {
    id: 'harvard-undergraduates-ai-exchange',
    category: { zh: '学术交流', en: 'Academic exchange' },
    title: {
      zh: '与哈佛本科生交流 AI，在互学中收获启发',
      en: 'Exchanging ideas on AI with Harvard undergraduates',
    },
    summary: {
      zh: '与哈佛大学本科生同学围绕人工智能交流想法、分享学习体会，是一次收获颇多的互学经历。',
      en: 'I exchanged ideas about artificial intelligence and shared learning experiences with Harvard undergraduate students. It was a valuable opportunity to learn from one another.',
    },
    paragraphs: [
      {
        zh: '不同的学习背景带来了新的观察角度，也让我对一些熟悉的问题有了新的思考。感谢这次坦诚的交流，期待今后继续相互学习、共同进步。',
        en: 'Our different learning backgrounds brought new perspectives and encouraged me to reconsider familiar questions. I am grateful for this open exchange and look forward to continuing to learn together.',
      },
    ],
    image: {
      src: '/images/news/harvard-undergraduates-ai-exchange.jpg',
      width: 1280,
      height: 1707,
      alt: {
        zh: '交流现场的姓名桌牌，印有 Xingyu Xiao 和清华大学标识。',
        en: 'A name card at the exchange, displaying Xingyu Xiao’s name and the Tsinghua University logo.',
      },
      caption: {
        zh: 'AI 交流随记',
        en: 'From the AI exchange',
      },
    },
  },
];
