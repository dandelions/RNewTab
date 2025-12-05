// Popular websites database for quick add
export const popularWebsites = [
    // 搜索引擎
    { name: 'Google', url: 'https://google.com', category: '搜索' },
    { name: 'Bing', url: 'https://bing.com', category: '搜索' },
    { name: '百度', url: 'https://baidu.com', category: '搜索' },
    { name: 'DuckDuckGo', url: 'https://duckduckgo.com', category: '搜索' },

    // 社交媒体
    { name: 'Twitter/X', url: 'https://x.com', category: '社交' },
    { name: 'Facebook', url: 'https://facebook.com', category: '社交' },
    { name: 'Instagram', url: 'https://instagram.com', category: '社交' },
    { name: 'LinkedIn', url: 'https://linkedin.com', category: '社交' },
    { name: 'Reddit', url: 'https://reddit.com', category: '社交' },
    { name: '微博', url: 'https://weibo.com', category: '社交' },
    { name: '知乎', url: 'https://zhihu.com', category: '社交' },
    { name: '豆瓣', url: 'https://douban.com', category: '社交' },

    // 视频平台
    { name: 'YouTube', url: 'https://youtube.com', category: '视频' },
    { name: 'Bilibili', url: 'https://bilibili.com', category: '视频' },
    { name: 'Netflix', url: 'https://netflix.com', category: '视频' },
    { name: 'Twitch', url: 'https://twitch.tv', category: '视频' },
    { name: '爱奇艺', url: 'https://iqiyi.com', category: '视频' },
    { name: '优酷', url: 'https://youku.com', category: '视频' },

    // 开发工具
    { name: 'GitHub', url: 'https://github.com', category: '开发' },
    { name: 'GitLab', url: 'https://gitlab.com', category: '开发' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', category: '开发' },
    { name: 'NPM', url: 'https://npmjs.com', category: '开发' },
    { name: 'CodePen', url: 'https://codepen.io', category: '开发' },
    { name: 'Gitee', url: 'https://gitee.com', category: '开发' },

    // 电商
    { name: '亚马逊', url: 'https://amazon.com', category: '购物' },
    { name: '淘宝', url: 'https://taobao.com', category: '购物' },
    { name: '京东', url: 'https://jd.com', category: '购物' },
    { name: '天猫', url: 'https://tmall.com', category: '购物' },
    { name: 'eBay', url: 'https://ebay.com', category: '购物' },

    // 新闻资讯
    { name: 'BBC', url: 'https://bbc.com', category: '新闻' },
    { name: 'CNN', url: 'https://cnn.com', category: '新闻' },
    { name: '纽约时报', url: 'https://nytimes.com', category: '新闻' },
    { name: '今日头条', url: 'https://toutiao.com', category: '新闻' },
    { name: '36氪', url: 'https://36kr.com', category: '新闻' },

    // 工具
    { name: 'Gmail', url: 'https://gmail.com', category: '工具' },
    { name: 'Outlook', url: 'https://outlook.com', category: '工具' },
    { name: 'Google Drive', url: 'https://drive.google.com', category: '工具' },
    { name: 'Dropbox', url: 'https://dropbox.com', category: '工具' },
    { name: 'Notion', url: 'https://notion.so', category: '工具' },
    { name: '飞书', url: 'https://feishu.cn', category: '工具' },
    { name: '钉钉', url: 'https://dingtalk.com', category: '工具' },
    { name: '微信', url: 'https://wx.qq.com', category: '工具' },

    // 学习
    { name: 'Coursera', url: 'https://coursera.org', category: '学习' },
    { name: 'Udemy', url: 'https://udemy.com', category: '学习' },
    { name: 'Khan Academy', url: 'https://khanacademy.org', category: '学习' },
    { name: 'Duolingo', url: 'https://duolingo.com', category: '学习' },

    // 设计
    { name: 'Figma', url: 'https://figma.com', category: '设计' },
    { name: 'Dribbble', url: 'https://dribbble.com', category: '设计' },
    { name: 'Behance', url: 'https://behance.net', category: '设计' },
    { name: 'Pinterest', url: 'https://pinterest.com', category: '设计' },

    // AI工具
    { name: 'ChatGPT', url: 'https://chat.openai.com', category: 'AI' },
    { name: 'Claude', url: 'https://claude.ai', category: 'AI' },
    { name: 'Gemini', url: 'https://gemini.google.com', category: 'AI' },
    { name: 'Midjourney', url: 'https://midjourney.com', category: 'AI' },
];

// Search websites by name or URL
export const searchWebsites = (query) => {
    if (!query) return popularWebsites;

    const lowerQuery = query.toLowerCase();
    return popularWebsites.filter(site =>
        site.name.toLowerCase().includes(lowerQuery) ||
        site.url.toLowerCase().includes(lowerQuery) ||
        site.category.includes(query)
    );
};

// Get websites by category
export const getWebsitesByCategory = (category) => {
    return popularWebsites.filter(site => site.category === category);
};

// Get all categories
export const getCategories = () => {
    return [...new Set(popularWebsites.map(site => site.category))];
};
