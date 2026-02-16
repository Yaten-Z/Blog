import type { Metadata } from "@types";

export type Link = {
  NAME: string;
  HREF: string;
  DESCRIPTION: string;
  AVATAR?: string;
};

export type LinkCategory = {
  CATEGORY: string;
  LINKS: Link[];
};

export const LINKS: Metadata = {
  TITLE: "Friends",
  DESCRIPTION: "有趣的人和他们的网站",
};

export const FRIEND_LINKS_GROUPED: LinkCategory[] = [
  {
    CATEGORY: "朋友们",
    LINKS: [
      {
        NAME: "TATEN",
        HREF: "https://taten.org",
        AVATAR: "https://s1.imagehub.cc/images/2025/11/08/939d0319d47029a228029721d34ed816.png",
        DESCRIPTION: "一群热爱编程的学生探索技术的无限可能",
      },
      {
        NAME: "LINMOHAN",
        HREF: "https://home.linmohan.fun",
        AVATAR: "https://s1.imagehub.cc/images/2025/10/18/99d5d57c7013acb6c92305314cc66374.png",
        DESCRIPTION: "代码重构世界，逻辑解构真理",
      },
      {
        NAME: "HHYYYY",
        HREF: "https://hhyyyy.cn/",
        AVATAR: "https://s1.imagehub.cc/images/2025/07/31/1fe122170bc941cc696119b9aaca6ead.jpg",
        DESCRIPTION: "科技之眼探索世界，光影之笔记录瞬间",
      },
      {
        NAME: "LGCM",
        HREF: "http://www.LGCM.xyz",
        AVATAR: "https://s1.imagehub.cc/images/2025/07/30/75fb3a7a7532703f2e7f0c095dc417f1.jpg",
        DESCRIPTION: "半个软件工程师",
      },
      {
        NAME: "Errorsia",
        HREF: "http://errorsia.com",
        AVATAR: "https://s1.imagehub.cc/images/2025/07/30/86668972c5b3fb5e440c6e1bba1f69db.png",
        DESCRIPTION: "N/A",
      },
      {
        NAME: "HungryHenry",
        HREF: "https://hungryhenry.cn",
        AVATAR: "https://s1.imagehub.cc/images/2025/07/31/4b1f583c02e682ac790c6bfa7a52ec0b.jpg",
        DESCRIPTION: "不是在写bug，就是在debug🐛",
      },
      {
        NAME: "Ruibin_Ningh",
        HREF: "https://www.ruibin-ningh.top/",
        AVATAR: "https://s1.imagehub.cc/images/2025/07/31/b2e402249619e45fd0a227d7f5161d5a.jpg",
        DESCRIPTION: "不争于表象，只专于底层",
      },
      {
        NAME: "Zyx_2012",
        HREF: "https://blog.zyx-2012.cn",
        AVATAR: "https://s1.imagehub.cc/images/2025/10/04/f050ec2c07c14fd976af48b78609acc7.png",
        DESCRIPTION: "专注于笔记、分享的博客",
      },
      {
        NAME: "GuYang17",
        HREF: "https://guyang17.github.io/",
        AVATAR: "https://avatars.githubusercontent.com/u/196782409?v=4",
        DESCRIPTION: "编程爱好者 | Minecraft玩家",
      },
      {
        NAME: "自由的博客",
        HREF: "https://blog.free2011.top/",
        AVATAR: "https://img.fastmirror.net/s/2025/10/02/68de75caaf3fc.jpeg",
        DESCRIPTION: "初中生技术爱好者的公益分享平台",
      },
    ],
  },
  {
    CATEGORY: "推荐网站",
    LINKS: [
      {
        NAME: "June's Blog",
        HREF: "https://blog.june-pj.cn/",
        AVATAR: "https://gitlab.com/June_PJ/PicGo-PJ/raw/main/img/avatar.webp",
        DESCRIPTION: "遇事不决，可问春风",
      },
      {
        NAME: "枫叶",
        HREF: "https://blog.aqcoder.cn",
        AVATAR: "https://blog.aqcoder.cn/img/avatar.png",
        DESCRIPTION: "分享知识，认识世界",
      },
      {
        NAME: "s1rius' blog",
        HREF: "https://s1rius.space/",
        AVATAR: "https://s1rius.space/img/custom/avatar.webp",
        DESCRIPTION: "这里有网络安全和其他技术文章",
      },
      {
        NAME: "彬红茶日记",
        HREF: "https://note.redcha.cn/",
        AVATAR: "https://note.redcha.cn/upload/favicon-256x256.png",
        DESCRIPTION: "我的个人笔记",
      },
      {
        NAME: "星河避难所",
        HREF: "https://hejunjie.life",
        AVATAR: "https://cdn.hejunjie.life/avatar.jpg",
        DESCRIPTION: "写代码，也写自己",
      },
      {
        NAME: "辰渊尘の个人博客",
        HREF: "https://blog.mcxiaochen.top/",
        AVATAR: "https://blog.mcxiaochen.top/favicon.ico",
        DESCRIPTION: "05后高中生，内容偏技术向",
      },
      {
        NAME: "Jerry Zhou",
        HREF: "https://blog.jerryz.com.cn/",
        AVATAR: "https://img.examcoo.com/ask/7386438/202111/163626915705190.jpg",
        DESCRIPTION: "永远相信美好的事情即将发生",
      },
      {
        NAME: "小改学习志",
        HREF: "https://www.haoyu233.com",
        AVATAR: "https://cn.cravatar.com/avatar/14e584196d31262ea144ab4d75d4c083?s=550&r=g",
        DESCRIPTION: "尘埃尚未落定，一切皆有可能",
      },
      {
        NAME: "我的技术成长笔记",
        HREF: "https://blog.longdahuasheng.top",
        AVATAR: "https://blog.longdahuasheng.top/logo.png",
        DESCRIPTION: "记录每一步成长的思考",
      },
      {
        NAME: "默小班",
        HREF: "https://www.memxb.top/",
        AVATAR: "https://wmimg.com/i/780/2025/07/68677fe53c2d1.png",
        DESCRIPTION: "一个初中生的小站点",
      },
    ],
  },
  {
    CATEGORY: "加入的 Blog 组织",
    LINKS: [
      {
        NAME: "Blogsclub",
        HREF: "https://www.blogsclub.org/",
        AVATAR: "https://s1.imagehub.cc/images/2025/12/15/1b58ee608f57401387d2ef4e40b91559.jpg",
        DESCRIPTION: "Blogsclub 博客俱乐部",
      },
      {
        NAME: "BlogFinder",
        HREF: "https://bf.zzxworld.com/",
        AVATAR: "https://bf.zzxworld.com/images/favicon.png",
        DESCRIPTION: "每个博客都是一座宝藏",
      },
    ],
  },
];

// 平铺版本（兼容旧代码）
export const FRIEND_LINKS: Link[] = FRIEND_LINKS_GROUPED.flatMap(
  (category) => category.LINKS
);