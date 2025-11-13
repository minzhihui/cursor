import type {
  Article,
  Banner,
  Category,
  LiveStream,
  Playlist,
  Video,
} from '../types'

export const banners: Banner[] = [
  {
    id: 'banner-1',
    title: '冬季番剧强势来袭',
    description:
      '人气续作与原创佳作齐聚，陪你一起度过温暖冬日。立即踏上全新的冒险之旅！',
    image:
      'https://images.unsplash.com/photo-1578926180344-41c19f0c9c1b?auto=format&fit=crop&w=1600&q=80',
    gradient: 'linear-gradient(135deg, rgba(0,174,236,0.85), rgba(196,53,255,0.85))',
    category: '番剧',
    link: '/category/anime',
  },
  {
    id: 'banner-2',
    title: '2025 新春唱响音乐季',
    description:
      'LIVE 舞台激情不断，原创音乐人带来震撼演出。用旋律点燃新春夜晚。',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
    gradient: 'linear-gradient(135deg, rgba(0,106,255,0.85), rgba(12,198,186,0.85))',
    category: '音乐',
    link: '/category/music',
  },
  {
    id: 'banner-3',
    title: '科普星球特别策划',
    description:
      '一起探索前沿科技与趣味科普，工程师与创作者联手，带你看见知识的趣味一面。',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
    gradient: 'linear-gradient(135deg, rgba(0,174,236,0.85), rgba(60,90,255,0.85))',
    category: '知识',
    link: '/category/knowledge',
  },
]

export const categories: Category[] = [
  { id: 'home', label: '首页', path: '/' },
  { id: 'anime', label: '番剧', path: '/category/anime' },
  { id: 'china', label: '国创', path: '/category/china' },
  { id: 'music', label: '音乐', path: '/category/music' },
  { id: 'dance', label: '舞蹈', path: '/category/dance' },
  { id: 'game', label: '游戏', path: '/category/game' },
  { id: 'knowledge', label: '知识', path: '/category/knowledge' },
  { id: 'tech', label: '科技', path: '/category/tech' },
  { id: 'life', label: '生活', path: '/category/life' },
  { id: 'fashion', label: '时尚', path: '/category/fashion' },
  { id: 'ent', label: '影视', path: '/category/ent' },
]

export const videos: Video[] = [
  {
    id: 'vid-001',
    title: '【冬番导视】2025 一月新番完整情报',
    description:
      '全面盘点 2025 年一月新番亮点，制作阵容、配音阵容、看点统统告诉你，一起制定追番计划！',
    thumbnail:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    duration: '18:43',
    views: 2685000,
    danmaku: 18600,
    likes: 125000,
    category: 'anime',
    subCategory: '新番导视',
    tags: ['番剧导视', '新番情报', '追番日历'],
    publishedAt: '2025-01-05T10:00:00+08:00',
    author: {
      id: 'up-001',
      name: '阿宅情报站',
      avatar:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=128&q=80',
      level: 6,
      followers: 1320000,
      badge: '番剧推荐官',
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
  },
  {
    id: 'vid-002',
    title: '自制高燃国创动画「风起洛阳」幕后解析',
    description:
      '跟随主创团队踏入国风动画的幕后制作，揭秘设定、动作捕捉与配乐创作全过程。',
    thumbnail:
      'https://images.unsplash.com/photo-1604079628040-94301bb21b11?auto=format&fit=crop&w=800&q=80',
    duration: '23:19',
    views: 1984600,
    danmaku: 15600,
    likes: 88000,
    category: 'china',
    subCategory: '原创动画',
    tags: ['国创', '幕后特辑', '动画制作'],
    publishedAt: '2025-01-03T21:00:00+08:00',
    author: {
      id: 'up-002',
      name: '洛阳工作室',
      avatar:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=128&q=80',
      level: 5,
      followers: 685000,
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
  },
  {
    id: 'vid-003',
    title: '【翻唱】当古筝遇见流行｜经典改编合集',
    description:
      '将流行金曲与古筝融合，听见传统乐器的全新表达。现场一 take 录制，带来沉浸式体验。',
    thumbnail:
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=800&q=80',
    duration: '12:06',
    views: 3249800,
    danmaku: 22300,
    likes: 156000,
    category: 'music',
    subCategory: '翻唱',
    tags: ['国风音乐', '古筝', '翻唱'],
    publishedAt: '2025-01-07T19:30:00+08:00',
    author: {
      id: 'up-003',
      name: '清羽乐社',
      avatar:
        'https://images.unsplash.com/photo-1521572163475-b1e0acef66cd?auto=format&fit=crop&w=128&q=80',
      level: 7,
      followers: 2150000,
      badge: '音乐驻站',
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Empty%20City.mp4',
  },
  {
    id: 'vid-004',
    title: '宅舞串烧｜2024 BML 现场回顾精华版',
    description:
      '精选 2024 BML 舞台宅舞串烧，热度曲目与现场氛围一次看个够，重回燃炸现场。',
    thumbnail:
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
    duration: '15:02',
    views: 4123000,
    danmaku: 34800,
    likes: 210000,
    category: 'dance',
    tags: ['宅舞', '现场实录', 'BML'],
    publishedAt: '2025-01-02T14:20:00+08:00',
    author: {
      id: 'up-004',
      name: 'BML 官方',
      avatar:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=128&q=80',
      level: 8,
      followers: 3320000,
      badge: '官方号',
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Coverr-beach.mp4',
  },
  {
    id: 'vid-005',
    title: '【剧情向】开放世界新作全剧情影像合集',
    description:
      '完整收录开放世界动作新作主线剧情，高光过场动画尽收眼底，提前体验宏大世界观。',
    thumbnail:
      'https://images.unsplash.com/photo-1598550874175-42f0b7be5e03?auto=format&fit=crop&w=800&q=80',
    duration: '38:44',
    views: 2756000,
    danmaku: 19800,
    likes: 132000,
    category: 'game',
    subCategory: '主机游戏',
    tags: ['剧情向', '游戏实况', '开放世界'],
    publishedAt: '2025-01-06T22:15:00+08:00',
    author: {
      id: 'up-005',
      name: '异界探索者',
      avatar:
        'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=128&q=80',
      level: 6,
      followers: 987000,
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/The_Big_Surf.mp4',
  },
  {
    id: 'vid-006',
    title: '航天专家给你讲｜神舟飞行的幕后工程',
    description:
      '航天工程师带你直击飞船发射背后的技术细节，揭秘舱外航天服、火箭分离等关键技术。',
    thumbnail:
      'https://images.unsplash.com/photo-1581090464777-1c593edbffd3?auto=format&fit=crop&w=800&q=80',
    duration: '21:58',
    views: 1894000,
    danmaku: 8400,
    likes: 99000,
    category: 'tech',
    tags: ['航天', '工程技术', '科普'],
    publishedAt: '2025-01-04T16:30:00+08:00',
    author: {
      id: 'up-006',
      name: '行星研究所',
      avatar:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=128&q=80',
      level: 5,
      followers: 456000,
      badge: '硬核科普',
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Aerial_Nature.mp4',
  },
  {
    id: 'vid-007',
    title: '如何在 30 平米打造治愈系家居',
    description:
      '小户型也能拥有超治愈生活，收纳、配色、软装搭配全攻略，附清单下载。',
    thumbnail:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80',
    duration: '10:17',
    views: 1688000,
    danmaku: 6200,
    likes: 72000,
    category: 'life',
    tags: ['家居改造', '生活方式', '治愈'],
    publishedAt: '2025-01-08T12:10:00+08:00',
    author: {
      id: 'up-007',
      name: '棉花糖日常',
      avatar:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=128&q=80',
      level: 4,
      followers: 342000,
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Tourist%20Trolly.mp4',
  },
  {
    id: 'vid-008',
    title: '新手也能学会的街舞 Groove 入门课',
    description:
      '系统拆解街舞 Groove 核心动作，从节奏到身体控制，一节课掌握基础律动。',
    thumbnail:
      'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?auto=format&fit=crop&w=800&q=80',
    duration: '14:32',
    views: 1224000,
    danmaku: 4100,
    likes: 54000,
    category: 'dance',
    tags: ['街舞教学', '基础教程', '律动'],
    publishedAt: '2025-01-01T09:00:00+08:00',
    author: {
      id: 'up-008',
      name: '溜冰鞋舞团',
      avatar:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=128&q=80',
      level: 5,
      followers: 598000,
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Tangier_City.mp4',
  },
  {
    id: 'vid-009',
    title: '【硬核科普】核聚变发电为何备受期待',
    description:
      '从物理原理到国际项目进展，带你全面了解核聚变发电的挑战与未来。',
    thumbnail:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    duration: '16:21',
    views: 2330000,
    danmaku: 9900,
    likes: 141000,
    category: 'knowledge',
    tags: ['核聚变', '能源', '科普'],
    publishedAt: '2025-01-09T11:40:00+08:00',
    author: {
      id: 'up-009',
      name: '量子少年',
      avatar:
        'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=128&q=80',
      level: 6,
      followers: 1200000,
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Blonde_Girl.mp4',
  },
  {
    id: 'vid-010',
    title: '2025 春夏时装周妆容趋势解析',
    description:
      '彩妆师带你拆解四大时装周 T 台妆容重点，分享日常可用的妆容调整技巧。',
    thumbnail:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    duration: '11:54',
    views: 980000,
    danmaku: 3200,
    likes: 43000,
    category: 'fashion',
    tags: ['妆容', '彩妆', '时装周'],
    publishedAt: '2025-01-05T18:40:00+08:00',
    author: {
      id: 'up-010',
      name: 'MUA 实验室',
      avatar:
        'https://images.unsplash.com/photo-1502764613149-7f1d229e2305?auto=format&fit=crop&w=128&q=80',
      level: 4,
      followers: 275000,
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Wanderer.mp4',
  },
  {
    id: 'vid-011',
    title: '年度影视盘点｜十部必看的治愈系电影',
    description:
      '精选 2024 年度十部高口碑治愈系电影，从剧情看点到观后感受，帮你排片。',
    thumbnail:
      'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80',
    duration: '20:43',
    views: 2056000,
    danmaku: 8700,
    likes: 118000,
    category: 'ent',
    tags: ['影视解说', '年度盘点', '治愈'],
    publishedAt: '2025-01-04T20:20:00+08:00',
    author: {
      id: 'up-011',
      name: '光影拾遗',
      avatar:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=128&q=80',
      level: 5,
      followers: 815000,
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Barrel%20Jellyfish.mp4',
  },
  {
    id: 'vid-012',
    title: '程序员的一天：远程办公效率秘籍',
    description:
      '前端工程师分享远程办公高效工作流，从工具选择到时间管理，帮你提升效率。',
    thumbnail:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    duration: '09:36',
    views: 850000,
    danmaku: 2800,
    likes: 36000,
    category: 'tech',
    tags: ['远程办公', '高效工作', '程序员'],
    publishedAt: '2025-01-10T08:30:00+08:00',
    author: {
      id: 'up-012',
      name: '代码松鼠会',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=128&q=80',
      level: 3,
      followers: 198000,
    },
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Walk-Through.mp4',
  },
]

export const liveStreams: LiveStream[] = [
  {
    id: 'live-001',
    title: '热血高校新春杯总决赛',
    cover:
      'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=640&q=80',
    viewers: 325000,
    streamer: '高校电竞联盟',
    game: '青春篮球',
    category: '赛事',
    startedAt: '2025-01-10T19:30:00+08:00',
  },
  {
    id: 'live-002',
    title: '国风音乐会 - 现场互动点歌',
    cover:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=640&q=80',
    viewers: 128000,
    streamer: '三分醒乐团',
    category: '音乐',
    startedAt: '2025-01-10T20:00:00+08:00',
  },
  {
    id: 'live-003',
    title: '手账 DIY 夜聊｜一起做年度规划',
    cover:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=640&q=80',
    viewers: 56000,
    streamer: '拾光日记',
    category: '生活',
    startedAt: '2025-01-10T18:45:00+08:00',
  },
]

export const articles: Article[] = [
  {
    id: 'article-001',
    title: '从角色设计看 2025 年新番的潮流趋势',
    cover:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=640&q=80',
    excerpt:
      '角色造型背后的故事与文化元素解析，设计师带你读懂新番中的世界观表达。',
    author: '番剧设定档案室',
    publishedAt: '2025-01-07T09:00:00+08:00',
    category: '番剧观察',
  },
  {
    id: 'article-002',
    title: '虚拟主播的舞台与现实：2024 年度盘点',
    cover:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=640&q=80',
    excerpt:
      '回顾 2024 年虚拟主播圈重要事件，分析技术迭代与内容创新，为你勾勒产业全景。',
    author: '直播产业评论',
    publishedAt: '2025-01-08T14:30:00+08:00',
    category: '直播生态',
  },
  {
    id: 'article-003',
    title: '当科技融入生活：智能家居的温度',
    cover:
      'https://images.unsplash.com/photo-1558002038-bb4e79dcfb4b?auto=format&fit=crop&w=640&q=80',
    excerpt:
      '分享三位用户的真实案例，从效率到情感，智能家居如何改变日常生活体验。',
    author: '生活实验室',
    publishedAt: '2025-01-06T11:15:00+08:00',
    category: '生活方式',
  },
]

export const playlists: Playlist[] = [
  {
    id: 'playlist-001',
    title: '刷完不亏的神级番剧开胃菜',
    cover:
      'https://images.unsplash.com/photo-1526481280695-3c46917d6c8f?auto=format&fit=crop&w=640&q=80',
    videoCount: 24,
    followers: 214000,
    description: '精选热度与口碑兼具的番剧导视，让你快速锁定追番目标。',
  },
  {
    id: 'playlist-002',
    title: '硬核知识星球：从宇宙到微观',
    cover:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=640&q=80',
    videoCount: 18,
    followers: 156000,
    description: '合集带你进入硬核知识世界，深入浅出讲解复杂概念。',
  },
  {
    id: 'playlist-003',
    title: '效率手帐｜和我一起打理生活',
    cover:
      'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=640&q=80',
    videoCount: 32,
    followers: 98000,
    description: '记录与规划生活的温柔方式，让每一天都被认真对待。',
  },
]

export const trending: Video[] = [...videos]
  .sort((a, b) => b.views - a.views)
  .slice(0, 8)

export const fresh: Video[] = [...videos].sort(
  (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
)

export const getVideosByCategory = (categoryId: string) =>
  videos.filter((video) => video.category === categoryId)

