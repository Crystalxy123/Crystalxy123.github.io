# 网站内容更新指南

这份指南面向不熟悉代码的维护者。所有公开内容都集中在少数文件中；旧目录 `academic-website/` 不参与发布，请不要移动或取消忽略。

## 每次更新的固定流程

1. 在 Finder 中备份准备替换的图片或 CV。
2. 只修改下文列出的文件。
3. 在项目目录运行 `npm run check`。
4. 本地预览时运行 `npm run dev`，按终端显示的地址打开浏览器。
5. 确认中文、英文、手机宽度和相关链接。
6. 提交并推送到 `master` 后，GitHub Actions 会自动发布。

如果检查失败，不要发布；终端会指出文件和位置。

## 修改首页姓名、身份和简介

打开 `src/data/site.ts`，找到 `profile`：

- `name`：中英文姓名；
- `role`：当前身份；
- `headline`：首页主标题；
- `shortBio`：首页两三句研究简介；
- `institution`：单位名称；
- `email`：公开学术邮箱；
- `links`：公开学术主页。

`zh` 是中文，`en` 是英文。不要只改一种语言。不要添加私人手机号、家庭住址或内部项目名称。

## 修改统计数字

在同一文件的 `profile.stats` 中更新。数字如果不是精确清单，应保留“约”或 `≈`。同时修改首页统计上方的日期说明，确保“截至年月”准确。

更新前应核对最新版正式 CV、论文清单、专利清单和软件著作权材料。不要把投稿中论文计入已发表论文。

## 新增新闻

在 `src/data/news.ts` 的 `news` 数组中按事件日期由近到远加入记录；补录较早的活动时放到对应位置。首页显示前三条，新闻页面显示全部记录。

- `id`：唯一的英文短名称，用作新闻链接中的定位标记。
- `date`：事件日期；只确定月份时使用 `YYYY-MM`，确定具体日期时使用 `YYYY-MM-DD`。如果只知道“迎新期间”等时段，可省略 `date`，在 `dateLabel` 中如实描述，不补猜具体日期。
- `dateLabel`、`category`、`title`、`summary`：分别填写中英文日期、分类、标题和摘要。活动时间完全不明确时，可同时省略 `date` 和 `dateLabel`，页面仅显示分类；待时间确认后再补入相应位置。
- `paragraphs`：正文段落，每段都填写 `zh` 和 `en`。
- 段落需要出处时，可添加 `references`，每条填写中英文 `label` 和官方页面 `url`；链接应支持对应段落的介绍。
- `image`：将配图放到 `public/images/news/`，填写对应的 `/images/news/文件名`、图片实际宽高、中英文替代文字和图注。
- `additionalImages`（可选）：有多张配图时，按 `image` 的格式补充图片列表。新闻正文会同时展示主图和这些配图，首页摘要只使用主图。
- 入选通知等消息也可使用 `announcement` 文字信息卡，代替 `image` 和 `additionalImages`：填写 `acronym`、`program`，以及中英文 `title`、`detail`、`name`。卡片标注为个人动态，不作为官方证书展示；无需上传含邮箱链接或他人名单的原始邮件截图。

首页摘要、中文 `/news/` 和英文 `/en/news/` 会同步读取这份内容。新闻页保留完整图片，并支持查看大图。更新后同步修改 `public/sitemap.xml` 中首页与新闻页的日期，以及 `src/i18n/zh.ts`、`src/i18n/en.ts` 的更新时间。

## 新增书单

在 `src/data/books.ts` 的 `books` 数组中新增书目。中文 `/books/`、英文 `/en/books/` 和主导航“书单”入口会读取这些内容。

- `id`：唯一的英文短名称，用于定位书目。
- `title`、`author`、`category`、`description`：分别填写中英文书名、作者、分类和简短介绍。
- `sourceUrl`：可核对图书资料的公开链接。
- 只写有依据的图书介绍；没有本人提供的阅读记录时，不添加“已读”、评分、读后感或个人引语。

新增书目后，更新两种语言书单页面的简介及站点地图日期，并运行 `npm run check`。

## 新增论文

在 `src/data/site.ts` 的 `publications` 数组顶部加入一条记录，并填写：

- `id`：英文小写、数字和短横线组成的唯一名字；
- `title`：论文正式英文题目；
- `authors`：按论文顺序填写全部作者；
- `venue`：期刊或会议、卷期、文章号；
- `year`：年份；
- `status`：只能使用 `Published`、`Conference` 或 `Preprint`；
- `topics`：2–4 个主题；
- `role`：仅在有依据时标注作者角色；
- `doi`：只填 `10.xxxx/...`，不要把整个链接填进去；
- `url`：预印本或公开页面；
- `featured`：设为 `true` 才可能出现在首页。

新增 DOI 后点击网站上的 DOI 链接，确认能到达正确论文。不要上传出版商 PDF，除非已经确认公开许可。

## 新增项目

在 `projects` 数组加入一条记录。必须分别写清楚：

- 项目简称和全称；
- 解决的问题；
- 方法；
- 有边界的代表性结果；
- 个人贡献；
- 年份与状态；
- DOI 或公开资源。

状态只能从以下四类中选择：

- `Published research`：已有公开论文支持；
- `Research prototype`：正在研究或验证；
- `Archived demo`：旧演示或当前不可用；
- `Published dataset`：已公开的数据工作。

保存后，中英文项目详情页会自动生成。不要把团队成果写成个人独立成果，不要把仿真或实验结果写成工程部署。

## 修改研究方向、荣誉和服务

仍在 `src/data/site.ts` 中：

- `researchThemes`：四个研究方向；
- `timeline`：教育与研究时间线；
- `honors`：已核实荣誉；
- `service`：学术服务和公共参与。

如果荣誉名称在多个资料中不一致，先不公开，等正式材料确认。

## 修改导航和界面文字

- 中文：`src/i18n/zh.ts`
- 英文：`src/i18n/en.ts`

导航路径不要改名，除非同时更新页面、站点地图和旧链接迁移表。

## 替换头像

准备一张正式、有权公开的 2:3 竖版照片：

1. 替换 `public/images/xingyu-xiao.jpg`；
2. 同时生成并替换 `public/images/xingyu-xiao.webp`；
3. 保持页面中 `width="800" height="1200"` 对应的比例；
4. 检查首页与 About 页面的人脸裁切；
5. 不使用 AI 生成的虚假个人照片。

公众号二维码在 `public/images/human-mind-wechat.jpg`。

## 上传新 CV

目前没有公开 PDF 下载按钮。新增前：

1. 从正式 CV 另存一份公开版；
2. 删除私人手机号、家庭地址、证件号、未公开研究和内部申请；
3. 逐页检查 PDF；
4. 命名为 `xingyu-xiao-cv.pdf`；
5. 放到 `public/cv/`；
6. 再在首页或 About 页面添加真实下载链接；
7. 运行检查并点击下载验证。

## 发布新版本

确认 `npm run check` 全部通过后，提交改动并推送到 GitHub。`master` 分支会触发 Actions：安装依赖、检查、构建、上传静态文件并部署。

在 GitHub 仓库的 **Actions** 页面等待工作流变绿，再访问正式网址和至少一个深层页面。域名或 HTTPS 异常时，按照 `DNS_MIGRATION.md` 排查，不要重新启用旧端口依赖。



## 更新成果图解

“成果图解”位于 `public/research-showcase/`，包含一个总览和七个中文研究详情页。它独立保留图表、可切换的数据对比与视频播放，通过网站主导航、首页和项目列表进入。英文页面的入口注明内容为中文。

- 修改研究文字：编辑该目录中的 HTML 文件。
- 修改展示样式：编辑 `public/research-showcase/assets/site.css`。
- 修改图表交互：编辑 `public/research-showcase/assets/site.js`。
- 新增页面时同步更新 `public/sitemap.xml`，并保留 canonical 元数据。
- `src/data/site.ts` 的项目记录可通过 `resultsUrl` 关联图解详情。现有论文条目和正式项目名称继续独立维护，避免把版本不同的研究名称强行合并。
- 发布内容不包括 PPT 文件或翻页页面。视频只保留在线播放，不添加下载链接，并保留 `controlslist="nodownload"`。

运行 `npm run check` 通过后再发布。
