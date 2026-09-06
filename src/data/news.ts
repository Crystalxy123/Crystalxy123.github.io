import type { Localized } from './site';

export type NewsItem = {
  id: string;
  date: string;
  dateLabel: Localized;
  category: Localized;
  title: Localized;
  summary: Localized;
  paragraphs: Localized[];
  image: {
    src: string;
    width: number;
    height: number;
    alt: Localized;
    caption: Localized;
  };
};

// Keep the latest news first. Dates can use YYYY-MM when the exact day is unspecified.
export const news: NewsItem[] = [
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
];
