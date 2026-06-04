/**
 * 茶文化知识学习平台 - 数据层
 * Tea Culture Knowledge Learning Platform - Data Layer
 */

// ==================== 轮播图数据 ====================
const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800',
    title: '中国茶文化千年传承',
    subtitle: '从神农尝百草到陆羽《茶经》',
    color: '#2d5a27'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=800',
    title: '六大茶类品鉴指南',
    subtitle: '绿茶·红茶·乌龙茶·白茶·黄茶·黑茶',
    color: '#8b4513'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800',
    title: '茶道与茶艺之美',
    subtitle: '一壶一盏皆禅意，品茶即品人生',
    color: '#1a4a2e'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=800',
    title: '茶与健康养生',
    subtitle: '科学饮茶，四季养生之道',
    color: '#6b3a2a'
  }
];

// ==================== 分类数据 ====================
const categories = [
  { id: 'c1', name: '茶史文化', icon: '📜', type: 'knowledge', color: '#8b4513' },
  { id: 'c2', name: '茶类品鉴', icon: '🍵', type: 'knowledge', color: '#2d5a27' },
  { id: 'c3', name: '茶道茶艺', icon: '🎋', type: 'course', color: '#1a4a2e' },
  { id: 'c4', name: '茶与健康', icon: '💚', type: 'knowledge', color: '#6b3a2a' },
  { id: 'c5', name: '茶器鉴赏', icon: '🫖', type: 'knowledge', color: '#a0522d' },
  { id: 'c6', name: '冲泡技艺', icon: '🫗', type: 'course', color: '#3e6b3e' },
  { id: 'c7', name: '名茶产区', icon: '🏔️', type: 'knowledge', color: '#4a7c3f' },
  { id: 'c8', name: '茶诗茶画', icon: '🖌️', type: 'knowledge', color: '#5c3d2e' }
];

// ==================== 课程数据 ====================
const courses = [
  {
    id: 'co1',
    title: '绿茶冲泡技法入门',
    cover: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600',
    category: 'c6',
    categoryName: '冲泡技艺',
    instructor: '陆羽老师',
    duration: '45分钟',
    level: '初级',
    students: 12860,
    rating: 4.8,
    price: 0,
    status: 'online',
    description: '从温杯到出汤，手把手教你泡出一杯完美的绿茶。本课程详细讲解龙井、碧螺春、黄山毛峰等名优绿茶的冲泡要点，包括水温控制、茶具选择、冲泡时间和手法技巧。',
    chapters: [
      { title: '第一章：绿茶基础知识', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '10:30' },
      { title: '第二章：茶具选择与准备', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '12:15' },
      { title: '第三章：龙井茶冲泡实操', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '15:00' },
      { title: '第四章：碧螺春冲泡技巧', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '8:45' }
    ],
    favorites: 3256
  },
  {
    id: 'co2',
    title: '乌龙茶工夫茶艺全解',
    cover: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=600',
    category: 'c3',
    categoryName: '茶道茶艺',
    instructor: '陈茶人',
    duration: '60分钟',
    level: '中级',
    students: 8920,
    rating: 4.9,
    price: 0,
    status: 'online',
    description: '深入解读闽南工夫茶的精髓，从紫砂壶的选择到关公巡城、韩信点兵的传统手法，完整呈现乌龙茶冲泡的艺术之美。',
    chapters: [
      { title: '第一章：工夫茶文化溯源', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '15:00' },
      { title: '第二章：紫砂壶鉴赏与养护', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '18:20' },
      { title: '第三章：铁观音冲泡全流程', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '20:00' },
      { title: '第四章：大红袍品鉴要点', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '10:40' }
    ],
    favorites: 4521
  },
  {
    id: 'co3',
    title: '茶席布置与茶会美学',
    cover: 'https://images.unsplash.com/photo-1597484661643-2da4b6c5f53f?w=600',
    category: 'c3',
    categoryName: '茶道茶艺',
    instructor: '林雅集',
    duration: '35分钟',
    level: '初级',
    students: 6540,
    rating: 4.7,
    price: 0,
    status: 'online',
    description: '学习如何布置一个雅致的茶席，掌握茶会礼仪，让每一次品茶都成为一场视觉与味觉的盛宴。',
    chapters: [
      { title: '第一章：茶席设计原则', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '10:00' },
      { title: '第二章：四季茶席布置', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '12:30' },
      { title: '第三章：茶会流程与礼仪', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '12:30' }
    ],
    favorites: 2180
  },
  {
    id: 'co4',
    title: '普洱茶品鉴与收藏指南',
    cover: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4251?w=600',
    category: 'c6',
    categoryName: '冲泡技艺',
    instructor: '王普洱',
    duration: '55分钟',
    level: '高级',
    students: 4320,
    rating: 4.9,
    price: 0,
    status: 'online',
    description: '从生普到熟普，从新茶到老茶，系统学习普洱茶的品鉴、冲泡和收藏知识，领略岁月沉淀的茶韵。',
    chapters: [
      { title: '第一章：普洱茶历史与产地', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '13:00' },
      { title: '第二章：生普与熟普鉴别', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '15:00' },
      { title: '第三章：老茶鉴赏与存储', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '17:00' },
      { title: '第四章：普洱收藏投资入门', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '10:00' }
    ],
    favorites: 3890
  },
  {
    id: 'co5',
    title: '宋代点茶技艺复原',
    cover: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600',
    category: 'c3',
    categoryName: '茶道茶艺',
    instructor: '宋韵老师',
    duration: '40分钟',
    level: '中级',
    students: 3780,
    rating: 4.8,
    price: 0,
    status: 'online',
    description: '穿越千年，重现宋代点茶之美。学习建盏使用、茶筅击拂技法，体验"茶百戏"的奇妙世界。',
    chapters: [
      { title: '第一章：宋代茶文化概述', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '10:00' },
      { title: '第二章：点茶器具介绍', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '12:00' },
      { title: '第三章：七汤点茶法实操', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '18:00' }
    ],
    favorites: 1560
  },
  {
    id: 'co6',
    title: '红茶调饮与奶茶艺术',
    cover: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600',
    category: 'c6',
    categoryName: '冲泡技艺',
    instructor: '茶小调',
    duration: '30分钟',
    level: '初级',
    students: 15600,
    rating: 4.6,
    price: 0,
    status: 'online',
    description: '学习世界各地的红茶调饮方法，从英式下午茶到港式奶茶，再到新式茶饮调配，开启红茶的花样世界。',
    chapters: [
      { title: '第一章：红茶种类与特性', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '8:00' },
      { title: '第二章：经典调饮配方', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '12:00' },
      { title: '第三章：创意茶饮DIY', video: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '10:00' }
    ],
    favorites: 6720
  }
];

// ==================== 知识数据 ====================
const knowledgeArticles = [
  {
    id: 'k1',
    title: '中国茶文化的起源与发展',
    cover: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600',
    category: 'c1',
    categoryName: '茶史文化',
    author: '茶文化研究院',
    readCount: 25680,
    publishDate: '2025-12-01',
    status: 'online',
    summary: '中国是茶的故乡，茶文化源远流长。从神农尝百草发现茶，到陆羽著《茶经》，再到茶马古道和丝绸之路的传播...',
    content: `<p>中国是茶的故乡，也是茶文化的发源地。茶文化的历史可以追溯到五千年前的神农时代。</p>
<h3>神农尝百草</h3>
<p>传说中，神农氏在尝百草的过程中，一日遇七十二毒，得茶而解之。这虽为传说，却反映了古人对茶叶药用价值的早期认知。</p>
<h3>陆羽与《茶经》</h3>
<p>唐代陆羽（733-804年）被尊为"茶圣"，他所著的《茶经》是世界上第一部茶叶专著，系统总结了唐代及以前茶叶生产、饮用的经验，提出了"精行俭德"的茶道精神。</p>
<h3>茶马古道</h3>
<p>起源于唐宋时期的茶马古道，是中国西南地区以茶易马的贸易通道，也是茶文化向外传播的重要途径。这条古道穿越横断山脉，连接了内地与西藏、云南，甚至延伸到印度、尼泊尔等地。</p>
<h3>茶文化的现代传承</h3>
<p>2022年，"中国传统制茶技艺及其相关习俗"被列入联合国教科文组织人类非物质文化遗产代表作名录，标志着中国茶文化在世界范围内获得了高度认可。</p>`,
    tags: ['茶历史', '传统文化', '非遗'],
    favorites: 4520
  },
  {
    id: 'k2',
    title: '绿茶大全：龙井、碧螺春、黄山毛峰',
    cover: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600',
    category: 'c2',
    categoryName: '茶类品鉴',
    author: '品茶达人',
    readCount: 18350,
    publishDate: '2025-11-15',
    status: 'online',
    summary: '绿茶是中国产量最大的茶类，占茶叶总产量的60%以上。本文将详细介绍中国十大名茶中的龙井、碧螺春和黄山毛峰...',
    content: `<p>绿茶是不发酵茶，保留了鲜叶的天然物质，含有丰富的茶多酚、儿茶素、叶绿素、咖啡碱、氨基酸、维生素等营养成分。</p>
<h3>西湖龙井</h3>
<p>产于浙江杭州西湖区，以色翠、香郁、味甘、形美四绝著称。特级龙井茶扁平光滑挺直，色泽嫩绿光润，香气鲜嫩清高，滋味鲜爽甘醇。</p>
<h3>碧螺春</h3>
<p>产于江苏苏州太湖洞庭山，条索纤细、卷曲成螺、满身披毫、银白隐翠。冲泡后清香幽雅，滋味鲜醇回甘，汤色碧绿清澈。</p>
<h3>黄山毛峰</h3>
<p>产于安徽黄山，外形微卷，状似雀舌，绿中泛黄，银毫显露。冲泡后雾气结顶，汤色清碧微黄，滋味醇甘，香气如兰，韵味深长。</p>`,
    tags: ['绿茶', '龙井', '碧螺春', '品鉴'],
    favorites: 3250
  },
  {
    id: 'k3',
    title: '紫砂壶的前世今生',
    cover: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=600',
    category: 'c5',
    categoryName: '茶器鉴赏',
    author: '器物志',
    readCount: 12100,
    publishDate: '2025-10-20',
    status: 'online',
    summary: '紫砂壶是中国特有的陶土工艺品，产自江苏宜兴。它以其独特的双气孔结构、良好的透气性和艺术价值闻名于世...',
    content: `<p>宜兴紫砂壶，始于北宋，盛于明清，是中国茶文化中不可或缺的重要组成部分。</p>
<h3>紫砂泥料的特性</h3>
<p>紫砂泥主要分为紫泥、红泥（朱泥）、绿泥（本山绿泥）三大类。紫砂泥料具有独特的双气孔结构，透气而不透水，能很好地保持茶香。</p>
<h3>名家与流派</h3>
<p>明代供春是最早的紫砂名家之一。清代陈鸣远、邵大亨等人的作品更是稀世珍品。近现代则有顾景舟等大师，将紫砂艺术推向新的高度。</p>
<h3>如何挑选紫砂壶</h3>
<p>挑选紫砂壶时，要注意泥料、做工、造型、实用性和艺术价值。一把好的紫砂壶，应该出水流畅、断水利落、壶盖严丝合缝。</p>`,
    tags: ['紫砂', '茶器', '宜兴', '收藏'],
    favorites: 2890
  },
  {
    id: 'k4',
    title: '四季饮茶养生指南',
    cover: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=600',
    category: 'c4',
    categoryName: '茶与健康',
    author: '中医茶疗',
    readCount: 28900,
    publishDate: '2025-09-10',
    status: 'online',
    summary: '中医认为，饮茶应顺应四时变化。春饮花茶、夏饮绿茶、秋饮乌龙、冬饮红茶，不同季节选择不同的茶品...',
    content: `<p>《黄帝内经》云："春夏养阳，秋冬养阴"。饮茶也应遵循这一原则。</p>
<h3>春饮花茶</h3>
<p>春天万物复苏，人体阳气升发。花茶甘凉而兼芳香辛散之气，有利于散发积聚在人体内的冬季寒邪，促进体内阳气生发。推荐茉莉花茶、玫瑰花茶。</p>
<h3>夏饮绿茶</h3>
<p>夏季炎热，人体出汗多，津液消耗大。绿茶性寒，具有清热、消暑、解毒、止渴、强心提神的功效。推荐龙井、碧螺春、安吉白茶。</p>
<h3>秋饮乌龙</h3>
<p>秋季干燥，人体津液未完全恢复。乌龙茶性平，不寒不热，既能消除余热，又能恢复津液。推荐铁观音、大红袍。</p>
<h3>冬饮红茶</h3>
<p>冬季寒冷，人体阳气渐弱。红茶性温，含有丰富的蛋白质和糖，能增强人体的抗寒能力。推荐正山小种、祁门红茶、滇红。</p>`,
    tags: ['养生', '四季', '健康'],
    favorites: 5210
  },
  {
    id: 'k5',
    title: '日本茶道与中国茶文化的渊源',
    cover: 'https://images.unsplash.com/photo-1597484661643-2da4b6c5f53f?w=600',
    category: 'c1',
    categoryName: '茶史文化',
    author: '东亚茶话',
    readCount: 9850,
    publishDate: '2025-08-25',
    status: 'online',
    summary: '日本茶道源于中国，经过千利休等人的发展，形成了独特的"和敬清寂"精神。追溯日本茶道的历史，就是追溯中日文化交流的历史...',
    content: `<p>公元9世纪，日本最澄禅师从中国带回茶种，这是日本种茶的开端。</p>
<h3>荣西与《吃茶养生记》</h3>
<p>12世纪末，日本僧人荣西两次入宋，带回茶种和制茶技术，并撰写了《吃茶养生记》，被誉为日本的"茶圣"。</p>
<h3>千利休与侘寂美学</h3>
<p>16世纪，千利休将茶道精神提升到哲学高度，提出"和敬清寂"的茶道理念，形成了以"侘寂"为核心的日本茶道美学。</p>
<h3>中日茶道的异同</h3>
<p>中国茶道追求自然、随性，"茶禅一味"；日本茶道强调仪式、规范，注重每一个动作的标准化。两者各有千秋，共同丰富了世界茶文化的内涵。</p>`,
    tags: ['日本茶道', '文化交流', '历史'],
    favorites: 1560
  },
  {
    id: 'k6',
    title: '武夷岩茶：岩骨花香的奥秘',
    cover: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4251?w=600',
    category: 'c2',
    categoryName: '茶类品鉴',
    author: '岩茶专家',
    readCount: 7650,
    publishDate: '2025-08-10',
    status: 'online',
    summary: '武夷岩茶是中国乌龙茶中的极品，产于福建武夷山。其独特的"岩骨花香"来自特殊的丹霞地貌和精湛的制作工艺...',
    content: `<p>武夷岩茶属乌龙茶类，主产于福建武夷山一带。"岩岩有茶，非岩不茶"，故名岩茶。</p>
<h3>独特的生长环境</h3>
<p>武夷山属于典型的丹霞地貌，红色砂岩风化形成的土壤富含矿物质。茶树生长在岩石缝隙之间，吸收岩石中的养分，形成了独特的"岩韵"。</p>
<h3>名丛品种</h3>
<p>大红袍、铁罗汉、白鸡冠、水金龟并称"四大名丛"。其中大红袍最为著名，母树仅存数株，年产不足一斤，堪称国宝级茶叶。</p>
<h3>制作工艺</h3>
<p>武夷岩茶的制作工艺极为复杂，包括萎凋、做青、炒青、揉捻、烘焙等十余道工序。独特的"炭焙"工艺是岩茶香气形成的关键。</p>`,
    tags: ['乌龙茶', '武夷岩茶', '大红袍', '品鉴'],
    favorites: 1980
  },
  {
    id: 'k7',
    title: '茶席上的礼仪与修养',
    cover: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600',
    category: 'c3',
    categoryName: '茶道茶艺',
    author: '礼仪茶社',
    readCount: 14320,
    publishDate: '2025-07-20',
    status: 'online',
    summary: '中国是礼仪之邦，茶桌上的礼仪是中华传统文化的重要体现。从斟茶到敬茶，每一个动作都蕴含着深厚的文化内涵...',
    content: `<p>"客来敬茶"是中国人的传统美德。茶桌上的礼仪，体现了一个人的修养和对他人的尊重。</p>
<h3>斟茶七分满</h3>
<p>"酒满敬人，茶满欺人"。斟茶时只倒七分满，留下三分是人情。这是因为茶是热的，倒太满宾客不便端取，也容易被烫到。</p>
<h3>叩指谢茶</h3>
<p>当主人为你斟茶时，用食指和中指在桌上轻叩两下，表示感谢。这个习俗源于清代乾隆皇帝的传说，后流传至民间。</p>
<h3>先客后主</h3>
<p>斟茶时应先敬客人，后敬自家人。在场的人按辈分、年龄、职位排序。斟完一轮后，要随时注意为客人续茶。</p>
<h3>新客换茶</h3>
<p>宾主喝茶时，中间有新客到来，主人要立即换上新茶叶，表示对新客的欢迎。否则被视为"慢客"。</p>`,
    tags: ['茶礼仪', '传统文化', '社交'],
    favorites: 4320
  },
  {
    id: 'k8',
    title: '白茶：一年茶、三年药、七年宝',
    cover: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=600',
    category: 'c2',
    categoryName: '茶类品鉴',
    author: '白茶行者',
    readCount: 10560,
    publishDate: '2025-06-15',
    status: 'online',
    summary: '白茶是中国六大茶类之一，主产于福建福鼎和政和。白茶制作工艺最自然，不炒不揉，保留了茶叶最原始的风味...',
    content: `<p>白茶属微发酵茶，因成品茶满披白毫、如银似雪而得名。制作工艺最为简约自然，仅经萎凋和干燥两道工序。</p>
<h3>白茶的分类</h3>
<p>根据采摘标准和等级，白茶主要分为白毫银针（全芽）、白牡丹（一芽一二叶）、贡眉（群体种菜茶）和寿眉（一芽三四叶）四个等级。</p>
<h3>白茶的药用价值</h3>
<p>白茶性清凉，具有清热润肺、平肝益血、消炎解毒、降压减脂、消除疲劳等功效。研究表明，白茶的抗氧化能力在六大茶类中最强。</p>
<h3>白茶的收藏价值</h3>
<p>"一年茶、三年药、七年宝"是白茶收藏价值的真实写照。随着陈放时间的增加，白茶的药用价值和口感都会不断提升，越陈越香。</p>`,
    tags: ['白茶', '福鼎', '收藏', '养生'],
    favorites: 2670
  },
  {
    id: 'k9',
    title: '茶圣陆羽与《茶经》深度解读',
    cover: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600',
    category: 'c1',
    categoryName: '茶史文化',
    author: '古典茶研',
    readCount: 8920,
    publishDate: '2025-05-20',
    status: 'online',
    summary: '陆羽（733-804年），唐代著名茶学家，被后人尊称为"茶圣"。其著作《茶经》是世界上第一部茶学专著...',
    content: `<p>陆羽，字鸿渐，号竟陵子，唐代复州竟陵（今湖北天门）人。他一生嗜茶，精于茶道，被誉为"茶仙"。</p>
<h3>《茶经》的结构</h3>
<p>《茶经》全书共三卷十章：一之源（茶的起源）、二之具（制茶工具）、三之造（制茶方法）、四之器（煮茶器具）、五之煮（煮茶方法）、六之饮（饮茶风俗）、七之事（茶事记载）、八之出（茶叶产地）、九之略（茶具的省略）、十之图（将《茶经》写在绢帛上张挂）。</p>
<h3>陆羽的茶道精神</h3>
<p>陆羽提出"精行俭德"的茶道精神。"精"是精心，"行"是实践，"俭"是俭朴，"德"是品德。这四字概括了茶道的核心精神。</p>
<h3>历史影响</h3>
<p>《茶经》的诞生标志着中国茶文化的成熟，对后世中国乃至世界茶文化的发展产生了深远影响。日本茶道的形成就深受《茶经》的影响。</p>`,
    tags: ['陆羽', '茶经', '历史人物'],
    favorites: 3120
  },
  {
    id: 'k10',
    title: '从采摘到杯中的茶叶旅程',
    cover: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600',
    category: 'c7',
    categoryName: '名茶产区',
    author: '茶园手记',
    readCount: 6780,
    publishDate: '2025-04-20',
    status: 'online',
    summary: '一片茶叶从茶园到茶杯，经历了怎样的旅程？让我们一起走进茶园，了解茶叶的采摘、制作和流通全过程...',
    content: `<p>每一杯茶的背后，都凝聚着无数茶人的辛勤劳作。从采摘到制作，每一个环节都至关重要。</p>
<h3>采摘时节</h3>
<p>春茶一般在清明前后采摘，此时茶树经过一冬的休养，芽叶肥壮，内含物质丰富。"明前茶，贵如金"，清明前采摘的茶叶品质最佳。</p>
<h3>制作工艺</h3>
<p>不同茶类的制作工艺各有特色：绿茶杀青→揉捻→干燥；红茶萎凋→揉捻→发酵→干燥；乌龙茶萎凋→做青→炒青→揉捻→烘焙。每一道工序都需要经验丰富的制茶师傅严格把控。</p>
<h3>品质检验</h3>
<p>成品茶需要经过专业审评，从外形、汤色、香气、滋味和叶底五个方面进行综合评判，确保达到品质标准后方可进入市场。</p>`,
    tags: ['制茶工艺', '产区', '采摘'],
    favorites: 1230
  },
  {
    id: 'k11',
    title: '普洱茶：可以喝的古董',
    cover: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4251?w=600',
    category: 'c2',
    categoryName: '茶类品鉴',
    author: '普洱藏家',
    readCount: 15670,
    publishDate: '2025-04-05',
    status: 'offline',
    summary: '普洱茶是云南特有的地理标志产品，分生茶和熟茶两大类。年份越久，价值越高，被誉为"可以喝的古董"...',
    content: `<p>普洱茶以云南大叶种晒青毛茶为原料，经特定的加工工艺制成，具有"越陈越香"的独特品质。</p>`,
    tags: ['普洱茶', '云南', '收藏'],
    favorites: 3450
  },
  {
    id: 'k12',
    title: '茶与禅：禅茶一味的人生智慧',
    cover: 'https://images.unsplash.com/photo-1597484661643-2da4b6c5f53f?w=600',
    category: 'c1',
    categoryName: '茶史文化',
    author: '禅茶一味',
    readCount: 13450,
    publishDate: '2025-03-15',
    status: 'online',
    summary: '"茶禅一味"是中国茶文化的最高境界。在品茶中参禅，在禅修中品茶，茶与禅相互交融，成为修身养性的途径...',
    content: `<p>"茶禅一味"源自宋代禅宗，意指茶与禅在精神境界上的相通。</p>`,
    tags: ['禅茶', '哲学', '修行'],
    favorites: 2890
  }
];

// ==================== 用户数据 ====================
const defaultUser = {
  id: 'u001',
  nickname: '茶文化爱好者',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tea',
  phone: '138****8888',
  joinDate: '2025-01-15',
  studyDays: 142,
  totalFavorites: 28
};

// 收藏列表 (存储收藏的课程ID和知识ID)
let favoriteCourses = ['co1', 'co3', 'co5'];
let favoriteKnowledge = ['k1', 'k4', 'k7', 'k10'];
