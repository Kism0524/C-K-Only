/*应用常量与数据结构*/

        const APP_PREFIX = 'CHAT_APP_V3_';
        const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
        const MAX_AVATAR_SIZE = 2 * 1024 * 1024;
        const MESSAGES_PER_PAGE = 50;
        
        const CONSTANTS = {
            HEADER_MOTTOS: [],
            WELCOME_ANIMATIONS: [{
                line1: "Vis-a-Vis Gravity",
                line2: "专属于我的引力锚，抓住你了。"
            },
                {
                    line1: "Our Own Paradise",
                    line2: "落日前的最后一班云端列车到站了，要跑着去吗？"
                },
                {
                    line1: "Only U & Me",
                    line2: "别担心，这里只有我。"
                },
                {
                    line1: "Envelope",
                    line2: "给你的信，收到了吗？"
                },
                {
                    line1: "Miss U",
                    line2: "想你了，请多多来信~^^"
                },
                {
                    line1: "骤雨之章",
                    line2: "所有朝你打来的风雨，都不该出现在这世界上"
                },
                {
                    line1: "无尽夏",
                    line2: "只有你，能让我期待夏天"
                },
                {
                    line1: "限定余味",
                    line2: "美味的东西要及时吃掉，想见什么人，也要及时告诉ta"
                },
                {
                    line1: "暗潮边缘",
                    line2: "我想要你留在这里。留下来，跟我过一百年。"
                },
                {
                    line1: "清醒梦",
                    line2: "或许因为…… 我恰好也比你想象中的多爱你一点"
                },
                {
                    line1: "远空棠雨",
                    line2: "我总会想到哄你的办法，只要…… 你还在我身边"
                },
                {
                    line1: "远空迷航",
                    line2: "那你也拥有一点罪，好不好，别让我太孤独了"
                },
                {
                    line1: "触痛讯号",
                    line2: "也只有你，才能停止我的痛苦"
                },
                {
                    line1: "绕金枝",
                    line2: "以后每年都会回到你身边，和你一起过年"
                },
                {
                    line1: "适配流言",
                    line2: "放心，我不会和其他人走太近"
                },
                {
                    line1: "预支约定",
                    line2: "我会是那个一直哄你开心的人"
                },
                {
                    line1: "回夏",
                    line2: "分开的这段时间里，也多想想我"
                },
                {
                    line1: "长昼如昨",
                    line2: "给你的链子，有好好戴着吗？^^"
                },
                {
                    line1: "戏中局外",
                    line2: "你是我无法割舍的、最重要的人"
                },
                {
                    line1: "天际线",
                    line2: "那下辈子的小海鸟，别再让我错过你了"
                },
                {
                    line1: "长昼顷刻",
                    line2: "你一直是我的榜样"
                },
                {
                    line1: "寥落假象",
                    line2: "当你不安时只需要选择——奔向我，或者拉住我"
                },
                {
                    line1: "附骨之痕",
                    line2: "不是擅长等待，只是相信你。所以，不要让我等太久.."
                },
                {
                    line1: "槐序",
                    line2: "永远期待你偷偷回来"
                },
                {
                    line1: "浮花以载",
                    line2: "和你的小世界里，从此也会花开不断"
                },
                {
                    line1: "无可逃逸夜",
                    line2: "以后每年的今天，我都会循着唯一的坐标——穿越黑暗，抵达你身边"
                },
                {
                    line1: "永无岛",
                    line2: "现在 就是未来"
                },
                {
                    line1: "退相干",
                    line2: "夏天终于成为了我生命中不可剥离的一部分"
                },
                {
                    line1: "寂路不归",
                    line2: "不管多少次，请唤醒我"
                },
                {
                    line1: "寂路同赴",
                    line2: "说好了，生和死都…… 不再分开"
                },
                {
                    line1: "离途幻乐",
                    line2: "只要你想，这里就是只属于我们两个人的乐园"
                },
                {
                    line1: "离途密触",
                    line2: "即使意识与躯体都不复存在，我的灵魂也依然会与你同频"
                },
                {
                    line1: "暖融呵护",
                    line2: "有我陪着你呢，安心睡吧"
                },
                {
                    line1: "授予",
                    line2: "As long as you want, I'll let you"
                },
                {
                    line1: "夜航波段",
                    line2: "Night, I'll back soon"
                },
                {
                    line1: "眷耳",
                    line2: "We won't stop then"
                },
                {
                    line1: "拥怀炽语",
                    line2: "还要继续纵容我吗？^^"
                },
                {
                    line1: "澄风掠海",
                    line2: "倾听你的秘密，永远不会嫌多"
                },
                {
                    line1: "焚线",
                    line2: "普通一点也没关系，只要你平安就好"
                },
                {
                    line1: "奔夏一刻",
                    line2: "U can only be mine"
                },
                {
                    line1: "灼频过载",
                    line2: "You got me under your spell"
                },
                {
                    line1: "慵懒共谋",
                    line2: "我喜欢的，是全部的你"
                },
                {
                    line1: "牵夜灼灼",
                    line2: "拉住衣角，你就不会离开"
                },
                {
                    line1: "浴冕歌",
                    line2: "假如一颗心略大于整个宇宙"
                },
                {
                    line1: "晴昼当归",
                    line2: "喜欢你，跟喜欢其他任何东西都不一样"
                },
                {
                    line1: "阴阳阙",
                    line2: "忘尘水冷，相思尚温"
                },
                {
                    line1: "沉冥幽眷",
                    line2: "哥哥就是会实现妹妹… 一切的愿望"
                },
                {
                    line1: "沉冥相遥",
                    line2: "无论天地如何翻覆，我们都会一直相伴"
                },
                {
                    line1: "蔓生本能",
                    line2: "血脉是你我自生下起便缠绕于彼此周身的红线"
                },
                {
                    line1: "倾目如驻",
                    line2: "All eyes on you"
                },
                {
                    line1: "残宵莲烬",
                    line2: "这片莲花池，只为你我开放"
                },
                {
                    line1: "残宵绯梦",
                    line2: "照花前后镜，花面交相映"
                },
                {
                    line1: "忆中香甜",
                    line2: "Apple honey dew 25g"
                },
                {
                    line1: "昼夜同流",
                    line2: "play with me till sunrise"
                },
                {
                    line1: "无路之地",
                    line2: "比起怕和死，我更想到达目的地"
                },
                {
                    line1: "Nestling",
                    line2: "人类对爱也会有雏鸟情节吗？"
                },
                {
                    line1: "Utopia",
                    line2: "这里是只属于我们的乌托邦"
                },
                {
                    line1: "Our Diary",
                    line2: "when you come back, I'll be yours"
                },
                {
                    line1: "Holograph",
                    line2: "熔岩流表的织网是我们挣扎在爱里的生长纹"
                },
                {
                    line1: "手",
                    line2: "下次牵手不需要理由"
                },
                {
                    line1: "Home",
                    line2: "等很久了吧，我们回家"
                },
                {
                    line1: "Anchor",
                    line2: "我会回到有你在的地方"
                },
                {
                    line1: "邂逅",
                    line2: "今天不是路过，是来见你"
                },
                {
                    line1: "temper",
                    line2: "如果想发脾气，就冲我来"
                },
                {
                    line1: "Promise",
                    line2: "以后，睁眼就能见到我"
                },
                {
                    line1: "habit",
                    line2: "摸摸头是习惯，改不掉的"
                },
                {
                    line1: "pamper",
                    line2: "在我这里，还是可以任性"
                },
                {
                    line1: "Proud",
                    line2: "你已经很让我骄傲了"
                },
                {
                    line1: "story",
                    line2: "睡不着就给你讲故事"
                },
                {
                    line1: "fly",
                    line2: "飞走的航班还会再回来"
                },
                {
                    line1: "liar",
                    line2: "骗你是小狗，不是夏以昼"
                },
                {
                    line1: "grow-up",
                    line2: "有时候突然感觉你长大了"
                },
                {
                    line1: "everywhere",
                    line2: "带你飞去任何地方"
                },
                {
                    line1: "call",
                    line2: "打电话的频率可以再高点"
                },
                {
                    line1: "taste",
                    line2: "你想吃的我都会做"
                },
                {
                    line1: "Infinite limited",
                    line2: "和好券的有限期是永远"
                },
                {
                    line1: "family",
                    line2: "可以吵架，但要一起吃饭"
                },
                {
                    line1: "protect",
                    line2: "不许有人伤害你，包括我"
                },
                {
                    line1: "backing",
                    line2: "返航途中已经想好来见你"
                },
                {
                    line1: "secret",
                    line2: "帮你守护小时候的秘密"
                },
                {
                    line1: "Landing",
                    line2: "只想降落在你身边"
                },
                {
                    line1: "partiality",
                    line2: "不用平分，我的都归你"
                },
                {
                    line1: "waiting",
                    line2: "从接你放学到接你下班"
                },
                {
                    line1: "regulation",
                    line2: "老规矩，我会主动来哄你"
                },
                {
                    line1: "Guide",
                    line2: "你将指引我返航的方向"
                },
                {
                    line1: "Dream",
                    line2: "渴望你，无关清醒梦境"
                },
                {
                    line1: "Own Care",
                    line2: "本来就该我罩着你一辈子"
                },
                {
                    line1: "love",
                    line2: "爱是唯导向你的专属引力"
                },
                {
                    line1: "Our base",
                    line2: "这次的礼物藏在秘密基地"
                },
                {
                    line1: "dreamland",
                    line2: "梦境的尽头是你"
                },
                {
                    line1: "necklace",
                    line2: "项链戴着呢，要不要摸摸看"
                },
                {
                    line1: "endure",
                    line2: "异地恋，越来越难忍受了"
                },
                {
                    line1: "shared",
                    line2: "我们永远享有同一个秘密"
                },
                {
                    line1: "need",
                    line2: "再说一遍需要我，好不好？"
                },
                {
                    line1: "similarity",
                    line2: "字迹和你越来越像了"
                },
                {
                    line1: "stay",
                    line2: "就算雨停了，也不要离开"
                },
                {
                    line1: "frank",
                    line2: "让我来说喜欢，喜欢你"
                },
                {
                    line1: "greedy",
                    line2: "怎么办，对你越来越贪心了"
                },
                {
                    line1: "apple",
                    line2: "苹果跑到嘴边了，要吃吗"
                },
                {
                    line1: "kite",
                    line2: "我愿意做你手里的风筝"
                },
                {
                    line1: "hands-in-hands",
                    line2: "习惯了这双从小牵到大的手"
                },
                {
                    line1: "willing",
                    line2: "你给的一切，我都甘之如饴"
                },
                {
                    line1: "weather",
                    line2: "每次见面都会是好天气"
                },
                {
                    line1: "bitter-sweet",
                    line2: "爱是苦涩，但爱你是甜的"
                },
                {
                    line1: "umbrella",
                    line2: "风雨再大，还有我帮你接着"
                },
                {
                    line1: "times",
                    line2: "想要预支你的所有时间"
                },
                {
                    line1: "cloud",
                    line2: "去见你的路上每朵云都很美"
                },
                {
                    line1: "desire",
                    line2: "感受过温暖，就不想失去了"
                },
                {
                    line1: "achieve",
                    line2: "勾过手指的约定都会实现"
                },
            ],
            WELCOME_ICONS: [
                "fas fa-heart", "fas fa-star", "fas fa-moon", "fas fa-sun", "fas fa-cloud", "fas fa-feather", "fas fa-book", "fas fa-music", "fas fa-pen", "fas fa-key", "fas fa-compass", "fas fa-globe", "fas fa-leaf", "fas fa-water", "fas fa-fire", "fas fa-snowflake", "fas fa-umbrella", "fas fa-anchor", "fas fa-bell", "fas fa-gem", "fas fa-crown", "fas fa-dragon", "fas fa-feather-alt", "fas fa-fish", "fas fa-frog", "fas fa-hat-wizard", "fas fa-magic", "fas fa-ring", "fas fa-scroll", "fas fa-shield-alt", "fas fa-dove", "fas fa-cat", "fas fa-dog", "fas fa-horse", "fas fa-otter", "fas fa-paw", "fas fa-spider", "fas fa-kiwi-bird", "fas fa-crow", "fas fa-dove", "fas fa-seedling", "fas fa-tree", "fas fa-mountain", "fas fa-water", "fas fa-wind", "fas fa-volcano", "fas fa-meteor", "fas fa-satellite", "fas fa-rocket", "fas fa-user-astronaut"
            ],
            PARTNER_STATUSES: [],
            REPLY_MESSAGES: [],
            REPLY_EMOJIS: [],
            POKE_ACTIONS: [],
            TAROT_CARDS: [
                { name: "愚人", eng: "The Fool", meaning: "新的开始、冒险、天真、无畏", keyword: "流浪", icon: "fa-hiking" },
                { name: "魔术师", eng: "The Magician", meaning: "创造力、技能、意志力、化腐朽为神奇", keyword: "创造", icon: "fa-hat-wizard" },
                { name: "女祭司", eng: "The High Priestess", meaning: "直觉、潜意识、神秘、智慧", keyword: "智慧", icon: "fa-book-open" },
                { name: "女帝", eng: "The Empress", meaning: "丰饶、母性、自然、感官享受", keyword: "丰收", icon: "fa-seedling" },
                { name: "皇帝", eng: "The Emperor", meaning: "权威、结构、控制、父亲形象", keyword: "支配", icon: "fa-crown" },
                { name: "教皇", eng: "The Hierophant", meaning: "传统、信仰、教导、精神指引", keyword: "援助", icon: "fa-church" },
                { name: "恋人", eng: "The Lovers", meaning: "爱、和谐、关系、价值观的选择", keyword: "结合", icon: "fa-heart" },
                { name: "战车", eng: "The Chariot", meaning: "意志力、胜利、决心、自我控制", keyword: "胜利", icon: "fa-horse-head" },
                { name: "力量", eng: "Strength", meaning: "勇气、耐心、控制、内在力量", keyword: "意志", icon: "fa-fist-raised" },
                { name: "隐士", eng: "The Hermit", meaning: "内省、孤独、寻求真理、指引", keyword: "探索", icon: "fa-lightbulb" },
                { name: "命运之轮", eng: "Wheel of Fortune", meaning: "循环、命运、转折点、运气", keyword: "轮回", icon: "fa-dharmachakra" },
                { name: "正义", eng: "Justice", meaning: "公正、真理、因果、法律", keyword: "均衡", icon: "fa-balance-scale" },
                { name: "倒吊人", eng: "The Hanged Man", meaning: "牺牲、新的视角、等待、放下", keyword: "奉献", icon: "fa-user-injured" },
                { name: "死神", eng: "Death", meaning: "结束、转变、重生、放手", keyword: "结束", icon: "fa-skull" },
                { name: "节制", eng: "Temperance", meaning: "平衡、适度、耐心、调和", keyword: "净化", icon: "fa-glass-whiskey" },
                { name: "恶魔", eng: "The Devil", meaning: "束缚、物质主义、欲望、诱惑", keyword: "诱惑", icon: "fa-link" },
                { name: "高塔", eng: "The Tower", meaning: "突变、混乱、启示、破坏", keyword: "毁灭", icon: "fa-gopuram" },
                { name: "星星", eng: "The Star", meaning: "希望、灵感、平静、治愈", keyword: "希望", icon: "fa-star" },
                { name: "月亮", eng: "The Moon", meaning: "幻觉、恐惧、焦虑、潜意识", keyword: "不安", icon: "fa-moon" },
                { name: "太阳", eng: "The Sun", meaning: "快乐、成功、活力、清晰", keyword: "生命", icon: "fa-sun" },
                { name: "审判", eng: "Judgement", meaning: "复活、觉醒、号召、决定", keyword: "复活", icon: "fa-bullhorn" },
                { name: "世界", eng: "The World", meaning: "完成、整合、成就、圆满", keyword: "达成", icon: "fa-globe-americas" }
            ]
        };

window.APP_PREFIX = APP_PREFIX;
