export type UiDictionary = {
  lang: 'zh' | 'en';
  languageName: string;
  languageSwitch: string;
  skip: string;
  siteName: string;
  nav: Record<'home' | 'news' | 'about' | 'research' | 'publications' | 'projects' | 'honors' | 'service' | 'contact', string>;
  theme: string;
  menu: string;
  closeMenu: string;
  updated: string;
  privacy: string;
  source: string;
  readMore: string;
  viewAll: string;
  doi: string;
  copyDoi: string;
  copied: string;
  filterAll: string;
};

export const zh: UiDictionary = {
  lang: 'zh',
  languageName: '中文',
  languageSwitch: 'English',
  skip: '跳到正文',
  siteName: '萧星宇',
  nav: {
    home: '首页',
    news: '新闻',
    about: '介绍',
    research: '研究',
    publications: '论文',
    projects: '项目',
    honors: '荣誉',
    service: '服务',
    contact: '联系',
  },
  theme: '切换深色或浅色模式',
  menu: '打开导航菜单',
  closeMenu: '关闭导航菜单',
  updated: '更新于 2026 年 9 月',
  privacy: '本站不使用 Cookie 或访客追踪。',
  source: '网站源码',
  readMore: '查看详情',
  viewAll: '查看全部',
  doi: 'DOI',
  copyDoi: '复制 DOI',
  copied: '已复制',
  filterAll: '全部',
};
