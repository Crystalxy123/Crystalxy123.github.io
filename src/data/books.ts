import type { Localized } from './site';

export type Book = {
  id: string;
  title: Localized;
  author: Localized;
  category: Localized;
  description: Localized;
  sourceUrl: string;
};

export const books: Book[] = [
  {
    id: 'wukong-zhuan',
    title: { zh: '悟空传', en: 'Wukong Zhuan' },
    author: { zh: '今何在', en: 'Jin Hezai' },
    category: { zh: '小说', en: 'Fiction' },
    description: {
      zh: '以《西游记》人物为起点，重新讲述孙悟空等人的故事，在神话中探问命运、自我与选择。',
      en: 'A reimagining of characters from Journey to the West, exploring fate, identity, and choice through the stories of Sun Wukong and his companions.',
    },
    sourceUrl: 'https://book.douban.com/subject/27027116/',
  },
];
