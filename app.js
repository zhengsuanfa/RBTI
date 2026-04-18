const profiles = [
  {
    id: "INFP",
    nickname: "理想潜水员",
    inertia: "把需求藏进“都可以”",
    reverseSkill: "主动说出一个小需求",
    dungeonName: "便利店开口试炼",
    bossName: "假装随便",
    goal: "把一个小需求具体说出口。",
    image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "货架前的沉默",
        scene: "你想买一杯热饮，但货架上没有想要的口味。",
        habit: "算了，随便拿一个。",
        brave: "你好，这个还有热的吗？",
        playful: "站在货架前假装自己在研究人生。",
        habitFeedback: "检测到经典闪避：把需求伪装成不重要。",
        braveFeedback: "你把需求说出口了，Boss 血量明显下降。",
        playfulFeedback: "你绕了一下，但至少没有立刻逃走。"
      },
      {
        title: "店员给了两个选择",
        scene: "店员说还有两个口味，一个甜一点，一个清爽一点。",
        habit: "都可以，你决定吧。",
        brave: "我想要不太甜的。",
        playful: "我想要那个听起来不会让我后悔的。",
        habitFeedback: "“都可以”让选择权溜走了。",
        braveFeedback: "偏好说得很具体，这一步很清楚。",
        playfulFeedback: "表达有点绕，但方向已经变清楚了。"
      },
      {
        title: "十秒确认",
        scene: "对方等你确认，后面还有人排队。",
        habit: "我再看看吧。",
        brave: "就要这杯，麻烦帮我加热。",
        playful: "今天交给命运，就它了。",
        habitFeedback: "你又回到了熟悉的缓冲区。",
        braveFeedback: "你完成了一次明确表达。",
        playfulFeedback: "你没有继续拖，通关有效。"
      }
    ]
  },
  {
    id: "INFJ",
    nickname: "读空气法师",
    inertia: "过度理解别人，忘了自己的边界",
    reverseSkill: "先确认自己的需要",
    dungeonName: "不读空气的一天",
    bossName: "过度体谅",
    goal: "在照顾气氛之前，先说出自己的真实选择。",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "群聊里的沉默",
        scene: "大家在讨论去哪吃饭，你其实不想吃辣。",
        habit: "没事，我都可以。",
        brave: "我今天不太想吃辣，可以换一个吗？",
        playful: "我的胃申请退出辣椒局。",
        habitFeedback: "你又优先照顾了所有人的方便。",
        braveFeedback: "你没有破坏气氛，只是补充了真实信息。",
        playfulFeedback: "轻松表达也算建立边界。"
      },
      {
        title: "朋友开始犹豫",
        scene: "朋友说“那你们定吧”，空气突然安静。",
        habit: "那还是按你们原来的来。",
        brave: "我可以接受不辣的川菜，大家看行不行。",
        playful: "我提案一个胃和友情都能存活的方案。",
        habitFeedback: "你太快撤回了自己的需求。",
        braveFeedback: "你给出了可协商方案。",
        playfulFeedback: "气氛保住了，需求也没有消失。"
      },
      {
        title: "最终选择",
        scene: "现在需要有人拍板。",
        habit: "你们决定就好。",
        brave: "我选这家，大家不反对就定它。",
        playful: "我投出胃部和平的一票。",
        habitFeedback: "Boss 靠“算了”回血了。",
        braveFeedback: "你把读空气换成了给方向。",
        playfulFeedback: "你用低压力方式完成了拍板。"
      }
    ]
  },
  {
    id: "INTP",
    nickname: "无限分析师",
    inertia: "一直推演，迟迟不开始",
    reverseSkill: "先交一版，再优化",
    dungeonName: "不要再优化了",
    bossName: "再想想",
    goal: "停止无限分析，提交一个可展示版本。",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "项目起名",
        scene: "你的项目还没有名字，但路演只剩几个小时。",
        habit: "再查十个竞品名字。",
        brave: "先定一个能讲清楚的名字。",
        playful: "用第一个不尴尬的名字活过今晚。",
        habitFeedback: "研究很爽，但进度没有前进。",
        braveFeedback: "名字先落地，项目开始变成作品。",
        playfulFeedback: "不完美也能帮你进入下一步。"
      },
      {
        title: "功能砍刀",
        scene: "你列了六个功能，但只能完成两个。",
        habit: "我想想有没有架构能全做。",
        brave: "砍掉四个，只留能演示闭环的两个。",
        playful: "把野心先锁进明日待办。",
        habitFeedback: "Boss 最喜欢你设计一个全能系统。",
        braveFeedback: "MVP 清晰了，血量下降。",
        playfulFeedback: "你没有否定想法，只是换了时间盒。"
      },
      {
        title: "提交按钮",
        scene: "版本已经能跑，但你看见三个还可以改的细节。",
        habit: "再改半小时。",
        brave: "现在提交，留下改进说明。",
        playful: "让这个版本带着瑕疵出去见人。",
        habitFeedback: "你被“还可以更好”拖回去了。",
        braveFeedback: "你完成了从思考到交付的切换。",
        playfulFeedback: "瑕疵没有消失，但项目出门了。"
      }
    ]
  },
  {
    id: "INTJ",
    nickname: "全局规划者",
    inertia: "想掌控每个变量",
    reverseSkill: "接受 80 分方案先运行",
    dungeonName: "80 分发布计划",
    bossName: "完美蓝图",
    goal: "把过度规划换成一次可验证行动。",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "方案不够优雅",
        scene: "队友给了一个能跑但不够漂亮的方案。",
        habit: "我重写一版架构。",
        brave: "先问：这个方案能验证哪个关键假设？",
        playful: "让它先跑，丑也算生命体征。",
        habitFeedback: "你接管了变量，也接管了所有工作。",
        braveFeedback: "你把控制欲变成了验证问题。",
        playfulFeedback: "你允许一个不漂亮的东西先存在。"
      },
      {
        title: "时间被压缩",
        scene: "现在只剩一小时，路线图还有三步。",
        habit: "继续按原计划推进。",
        brave: "删到只剩一条主路径。",
        playful: "把路线图剪成一张能活的纸片。",
        habitFeedback: "旧计划已经不适配新时间。",
        braveFeedback: "你根据现实更新了计划。",
        playfulFeedback: "你用轻松方式完成了收缩。"
      },
      {
        title: "让别人执行",
        scene: "队友准备接手一个模块，但速度可能没你快。",
        habit: "还是我来吧。",
        brave: "说清边界，然后让他做。",
        playful: "把方向盘借出去五分钟。",
        habitFeedback: "Boss 靠“我来”回血了。",
        braveFeedback: "你保留了标准，也释放了执行权。",
        playfulFeedback: "短暂放手也是放手。"
      }
    ]
  },
  {
    id: "ISFP",
    nickname: "随性艺术家",
    inertia: "不想被选择绑定",
    reverseSkill: "明确选一个，不再漂移",
    dungeonName: "不许说随便",
    bossName: "选择雾气",
    goal: "在低风险场景里做一次明确选择。",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "封面二选一",
        scene: "你有两张都还不错的封面，时间不够继续试。",
        habit: "再找找有没有更有感觉的。",
        brave: "选更能表达主题的那一张。",
        playful: "让直觉投票，三秒内拍板。",
        habitFeedback: "感觉很重要，但现在需要落点。",
        braveFeedback: "你把感受变成了选择。",
        playfulFeedback: "直觉这次没有被拖走。"
      },
      {
        title: "朋友问你想去哪",
        scene: "朋友问你今晚想去哪，你脑子里其实有答案。",
        habit: "随便，你定。",
        brave: "我想去安静一点的地方。",
        playful: "我投安静阵营一票。",
        habitFeedback: "“随便”让别人猜你。",
        braveFeedback: "你说出了方向，不必解释太多。",
        playfulFeedback: "轻松但明确，这次有效。"
      },
      {
        title: "最后一项调整",
        scene: "作品还有一个颜色细节可以改，也可以不改。",
        habit: "我再凭感觉调一下。",
        brave: "保留当前版本，进入展示准备。",
        playful: "停止调色，拯救睡眠。",
        habitFeedback: "你又被微妙感觉拉住了。",
        braveFeedback: "你完成了收束。",
        playfulFeedback: "你用玩笑结束了漂移。"
      }
    ]
  },
  {
    id: "ISFJ",
    nickname: "可靠守护者",
    inertia: "不好意思拒绝别人",
    reverseSkill: "温和但清楚地说不",
    dungeonName: "好人边界保卫战",
    bossName: "我来扛吧",
    goal: "在不伤害关系的前提下守住自己的边界。",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "临时加活",
        scene: "队友问你能不能顺手再做一个页面。",
        habit: "可以，我来吧。",
        brave: "我现在做不完，可以帮你看结构。",
        playful: "我的待办已经满员了，但可以给你地图。",
        habitFeedback: "你又把别人的紧急变成了自己的任务。",
        braveFeedback: "你没有拒绝人，只是拒绝超载。",
        playfulFeedback: "边界说出来了，语气也轻。"
      },
      {
        title: "对方继续请求",
        scene: "对方说“这个很快的，就十分钟”。",
        habit: "那好吧，我试试。",
        brave: "我不能接完整任务，只能给十分钟建议。",
        playful: "十分钟建议套餐可以，代做套餐售罄。",
        habitFeedback: "Boss 靠你的心软回血了。",
        braveFeedback: "你把帮助范围说清楚了。",
        playfulFeedback: "你把拒绝变得不僵硬。"
      },
      {
        title: "收尾确认",
        scene: "对方等你最终答复。",
        habit: "算了，我还是做吧。",
        brave: "这次我不接，你可以按我刚说的做。",
        playful: "我把祝福和建议都给你，任务不收。",
        habitFeedback: "你回到了熟悉的自我消耗。",
        braveFeedback: "你守住了边界。",
        playfulFeedback: "你拒绝了任务，没有拒绝关系。"
      }
    ]
  },
  {
    id: "ISTP",
    nickname: "冷静修理工",
    inertia: "只行动，不解释",
    reverseSkill: "把判断过程说完整",
    dungeonName: "别只说都行",
    bossName: "沉默扳手",
    goal: "让别人听见你的判断，而不是只看到结果。",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "队友问为什么",
        scene: "你改了一个交互，队友问为什么这样做。",
        habit: "这样更顺。",
        brave: "因为这一步能减少一次点击，用户更快完成。",
        playful: "我不是玄学调参，是少走一步。",
        habitFeedback: "判断对了，但别人没法复用。",
        braveFeedback: "你把经验翻译成了理由。",
        playfulFeedback: "有解释，也保留了你的风格。"
      },
      {
        title: "方案争论",
        scene: "有人提出另一个方案，你觉得会出问题。",
        habit: "都行，试了就知道。",
        brave: "我担心这里会卡在加载时间，可以先测这个点。",
        playful: "我闻到了一个加载坑，建议先探雷。",
        habitFeedback: "“都行”省事，但风险没被看见。",
        braveFeedback: "你把直觉说成了可验证风险。",
        playfulFeedback: "你没有长篇大论，但说到了关键。"
      },
      {
        title: "演示前同步",
        scene: "大家需要知道你刚修了什么。",
        habit: "没事，已经好了。",
        brave: "我修了上传预览，剩下分享卡还没接。",
        playful: "车能开了，后备箱还空着。",
        habitFeedback: "别人知道好了，但不知道边界。",
        braveFeedback: "你同步了进度和风险。",
        playfulFeedback: "表达简短，但信息够用。"
      }
    ]
  },
  {
    id: "ISTJ",
    nickname: "秩序管理员",
    inertia: "计划被打乱就想拉回原轨",
    reverseSkill: "根据现实调整规则",
    dungeonName: "临时改路线挑战",
    bossName: "原计划幽灵",
    goal: "在变化出现时，快速给出新秩序。",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "场地临时变化",
        scene: "展示位置变了，原来的动线不适合。",
        habit: "按原计划来，别再变了。",
        brave: "重新排一个 10 分钟可执行动线。",
        playful: "原计划退居顾问席，新路线登场。",
        habitFeedback: "稳定感保住了，但现实没被处理。",
        braveFeedback: "你把变化纳入了新规则。",
        playfulFeedback: "你允许计划换皮肤。"
      },
      {
        title: "材料缺了一项",
        scene: "一个展示物料没准备好。",
        habit: "没有它就不完整。",
        brave: "用现有材料补一个替代说明。",
        playful: "让替补选手上场。",
        habitFeedback: "完整性让你卡住了。",
        braveFeedback: "你保留了目标，换了路径。",
        playfulFeedback: "替代方案开始工作。"
      },
      {
        title: "时间提前",
        scene: "评委比预期早来五分钟。",
        habit: "等等，我们还没准备好。",
        brave: "先演示主流程，细节现场补充。",
        playful: "主线先开播，花絮稍后上线。",
        habitFeedback: "等待不会让时间变多。",
        braveFeedback: "你让秩序为目标服务。",
        playfulFeedback: "节奏被你接住了。"
      }
    ]
  },
  {
    id: "ENFP",
    nickname: "灵感烟花",
    inertia: "想法太多，难以收束",
    reverseSkill: "只选一件事做完",
    dungeonName: "灵感过载急救室",
    bossName: "新想法诱惑",
    goal: "从一堆灵感里只保留一个可完成动作。",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "五个新点子",
        scene: "你突然想到五个都很有趣的玩法。",
        habit: "把五个都先写进版本。",
        brave: "只选最能现场演示的一个。",
        playful: "其余四个送进灵感冷冻库。",
        habitFeedback: "Boss 最爱你同时开五扇门。",
        braveFeedback: "你把兴奋感变成了推进力。",
        playfulFeedback: "灵感没有死，只是排队。"
      },
      {
        title: "刷到新参考",
        scene: "你又刷到一个看起来更酷的产品。",
        habit: "我们是不是换方向？",
        brave: "记录参考，但不改当前主线。",
        playful: "给新参考发一张明天再聊卡。",
        habitFeedback: "新鲜感开始劫持方向。",
        braveFeedback: "你承认它有趣，但没有被带走。",
        playfulFeedback: "你用仪式感关上了岔路。"
      },
      {
        title: "最后十分钟",
        scene: "你还想加一个彩蛋。",
        habit: "彩蛋很小，我马上加。",
        brave: "停止加功能，完整跑一遍 Demo。",
        playful: "彩蛋下班，Demo 上班。",
        habitFeedback: "小彩蛋常常变成大坑。",
        braveFeedback: "你把完成放在了新鲜感前面。",
        playfulFeedback: "你保住了好玩，也保住了交付。"
      }
    ]
  },
  {
    id: "ENFJ",
    nickname: "气氛指挥家",
    inertia: "太容易替别人负责",
    reverseSkill: "把责任还给本人",
    dungeonName: "放下拯救欲",
    bossName: "全员我来救",
    goal: "支持别人，但不替别人完成他们的人生任务。",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "队友卡住了",
        scene: "队友遇到问题，一直看起来很焦虑。",
        habit: "我来帮你做完。",
        brave: "我陪你拆第一步，后面你继续。",
        playful: "我提供导航，不直接开车。",
        habitFeedback: "你很温暖，但也把任务拿走了。",
        braveFeedback: "你给了支持，也保留了对方的责任。",
        playfulFeedback: "边界变轻了，但还在。"
      },
      {
        title: "气氛变低",
        scene: "大家都有点累，你想立刻让所有人振作。",
        habit: "开始安排每个人的状态。",
        brave: "先问一句：你现在需要什么帮助？",
        playful: "不强行打鸡血，先发一杯水。",
        habitFeedback: "你把气氛当成了自己的 KPI。",
        braveFeedback: "你没有替别人定义需求。",
        playfulFeedback: "你照顾了人，但没有接管。"
      },
      {
        title: "有人没有按时交付",
        scene: "一个模块延迟，你想替他补上。",
        habit: "算了，我来收尾。",
        brave: "请他给出最小可交付版本和时间。",
        playful: "温柔催更，不代写结局。",
        habitFeedback: "Boss 靠你的负责感回血。",
        braveFeedback: "你让责任回到了该在的位置。",
        playfulFeedback: "你保持了关系，也推进了事情。"
      }
    ]
  },
  {
    id: "ENTP",
    nickname: "辩论发动机",
    inertia: "下意识反驳，享受拆解",
    reverseSkill: "先赞同一个有效点",
    dungeonName: "三分钟赞同挑战",
    bossName: "但是怪",
    goal: "先找到对方观点里可用的一部分，再表达补充。",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "听到一个普通建议",
        scene: "队友提出一个你觉得不够严谨的建议。",
        habit: "但是这里有三个问题。",
        brave: "这个方向能解决展示问题，我补一个风险点。",
        playful: "先给它一朵小红花，再拆一颗螺丝。",
        habitFeedback: "反应很快，但对话容易变成防御。",
        braveFeedback: "你先接住了有效点。",
        playfulFeedback: "你保留锋利，也降低了攻击感。"
      },
      {
        title: "评委提问",
        scene: "评委提出一个你认为有误解的问题。",
        habit: "不是，这个问题应该这样看。",
        brave: "您提到的点很关键，我们这里的处理是...",
        playful: "先接球，再换角度扣篮。",
        habitFeedback: "你急着纠正，容易丢掉听感。",
        braveFeedback: "你把反驳变成了回应。",
        playfulFeedback: "表达更顺了，锋芒还在。"
      },
      {
        title: "最后一次争论",
        scene: "你发现自己又想开辩。",
        habit: "我必须把这个逻辑讲清楚。",
        brave: "我先总结我们已经一致的部分。",
        playful: "暂停辩论模式，切到队友模式。",
        habitFeedback: "Boss 靠胜负欲回血。",
        braveFeedback: "你让讨论回到共同目标。",
        playfulFeedback: "你不是闭嘴，是换了目标。"
      }
    ]
  },
  {
    id: "ENTJ",
    nickname: "进度统帅",
    inertia: "急着推进，容易接管",
    reverseSkill: "只给边界，不替别人做",
    dungeonName: "控制狂休假日",
    bossName: "我来安排一切",
    goal: "把命令式推进换成授权和边界。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "队友低效讨论",
        scene: "队友讨论了五分钟，还没得出结论。",
        habit: "停，我来定。",
        brave: "我们需要十分钟内定一个方案，谁来给两个选项？",
        playful: "统帅暂时放下权杖，只设倒计时。",
        habitFeedback: "效率上来了，但参与感被你拿走了。",
        braveFeedback: "你设了边界，没有直接接管。",
        playfulFeedback: "你还在推进，只是少了一点压迫感。"
      },
      {
        title: "方案只有 80 分",
        scene: "一个方案不完美，但能完成演示。",
        habit: "重做，我要更好的。",
        brave: "先用它跑通，再记录优化点。",
        playful: "让 80 分先上场打怪。",
        habitFeedback: "完美标准开始吞时间。",
        braveFeedback: "你把胜利条件换成了可运行。",
        playfulFeedback: "你允许一个可用方案先赢一局。"
      },
      {
        title: "别人执行较慢",
        scene: "队友正在做，但速度比你慢。",
        habit: "算了，我来。",
        brave: "我只确认截止时间和验收标准。",
        playful: "把手从键盘上拿开十秒。",
        habitFeedback: "Boss 靠你的接管回血。",
        braveFeedback: "你保留结果要求，放掉过程控制。",
        playfulFeedback: "十秒很短，但这一步已经不一样了。"
      }
    ]
  },
  {
    id: "ESFP",
    nickname: "现场能量源",
    inertia: "容易被即时刺激带走",
    reverseSkill: "安静完成一个短任务",
    dungeonName: "派对动物静音模式",
    bossName: "热闹雷达",
    goal: "把注意力收回到一个三分钟内能完成的动作。",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "旁边很热闹",
        scene: "隔壁队在试一个很好玩的 Demo。",
        habit: "去看一眼，马上回来。",
        brave: "先完成当前这一小段，再去看。",
        playful: "给热闹发排队号。",
        habitFeedback: "“看一眼”经常不是一眼。",
        braveFeedback: "你把奖励放到了完成之后。",
        playfulFeedback: "热闹还在，但你先稳住了。"
      },
      {
        title: "消息弹出",
        scene: "手机来了几条新消息。",
        habit: "先回一下。",
        brave: "开 10 分钟勿扰。",
        playful: "让手机去墙角冷静。",
        habitFeedback: "刺激源抢走了主线。",
        braveFeedback: "你给注意力立了边界。",
        playfulFeedback: "你用一点仪式感切断干扰。"
      },
      {
        title: "收尾无聊",
        scene: "最后检查很枯燥，但必须做。",
        habit: "我需要换点有趣的做。",
        brave: "只检查三项关键流程。",
        playful: "把无聊压缩成三连击。",
        habitFeedback: "Boss 靠无聊感回血。",
        braveFeedback: "你完成了低刺激但高价值的部分。",
        playfulFeedback: "你把枯燥变得可吞咽。"
      }
    ]
  },
  {
    id: "ESFJ",
    nickname: "气氛照顾者",
    inertia: "太在意所有人的感受",
    reverseSkill: "不替所有情绪负责",
    dungeonName: "今天不做气氛组",
    bossName: "全场满意",
    goal: "把自己的任务从“让所有人舒服”里拿出来。",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "有人沉默",
        scene: "讨论时有个人没有说话，你开始担心他不开心。",
        habit: "立刻照顾他的情绪。",
        brave: "先完成当前决定，之后单独确认。",
        playful: "气氛雷达暂时待机。",
        habitFeedback: "你又把所有情绪扛在身上。",
        braveFeedback: "你没有忽视他，只是没有打断主线。",
        playfulFeedback: "雷达还在，但音量变小了。"
      },
      {
        title: "意见不一致",
        scene: "两个队友观点冲突，你想马上调停。",
        habit: "我来帮你们折中。",
        brave: "请他们各说一个必须保留的点。",
        playful: "不当和事佬，当需求翻译机。",
        habitFeedback: "折中太快会盖住真实分歧。",
        braveFeedback: "你让冲突变成信息。",
        playfulFeedback: "你仍然在照顾团队，但方式更有效。"
      },
      {
        title: "自己也累了",
        scene: "你很累，但还想去问每个人要不要水。",
        habit: "我先照顾大家。",
        brave: "我先休息三分钟，再回来帮忙。",
        playful: "气氛组长申请充电。",
        habitFeedback: "Boss 靠你的透支回血。",
        braveFeedback: "你把自己也放进了团队。",
        playfulFeedback: "你没有抛下大家，只是先补电。"
      }
    ]
  },
  {
    id: "ESTP",
    nickname: "冲锋玩家",
    inertia: "先冲再想",
    reverseSkill: "按下三秒暂停键",
    dungeonName: "冲动暂停键",
    bossName: "马上就上",
    goal: "在行动前补一个最小判断。",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "新方案很刺激",
        scene: "你想到一个很炸的互动玩法。",
        habit: "现在就改。",
        brave: "先问：会不会影响主流程演示？",
        playful: "冲之前看一眼地板有没有坑。",
        habitFeedback: "速度很快，但可能撞墙。",
        braveFeedback: "你没有停止行动，只是加了判断。",
        playfulFeedback: "暂停三秒，没有损失你的能量。"
      },
      {
        title: "现场有人挑战",
        scene: "有人说这个功能做不到，你想立刻证明。",
        habit: "我现场给你做一个。",
        brave: "先用现有 Demo 证明核心能力。",
        playful: "不被挑衅牵着跑。",
        habitFeedback: "Boss 靠即时胜负欲回血。",
        braveFeedback: "你把冲劲放回目标。",
        playfulFeedback: "你保留了气势，也少踩一个坑。"
      },
      {
        title: "最后一次冒险",
        scene: "还有 15 分钟，你想上线一个没测过的效果。",
        habit: "加上去，坏了再说。",
        brave: "复制一份备份，再决定是否展示。",
        playful: "给冒险系安全绳。",
        habitFeedback: "这次冲锋可能炸掉已有成果。",
        braveFeedback: "你让冒险可回滚。",
        playfulFeedback: "你没有变保守，只是带了降落伞。"
      }
    ]
  },
  {
    id: "ESTJ",
    nickname: "执行裁判长",
    inertia: "太直接，容易压迫",
    reverseSkill: "把命令改成清晰请求",
    dungeonName: "温柔下命令",
    bossName: "按我说的做",
    goal: "保留标准，但降低沟通摩擦。",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    levels: [
      {
        title: "进度落后",
        scene: "队友负责的部分明显落后。",
        habit: "你这个必须马上做完。",
        brave: "我们还差这一步，十分钟内能给我一个可跑版本吗？",
        playful: "裁判长放下红牌，先发任务卡。",
        habitFeedback: "要求清楚，但压力也被放大了。",
        braveFeedback: "你保留了标准，也给了明确请求。",
        playfulFeedback: "威严还在，摩擦少了。"
      },
      {
        title: "有人没按规范",
        scene: "文件命名不统一，你有点烦。",
        habit: "这不是早说过了吗？",
        brave: "这里统一成这个格式，之后都按它来。",
        playful: "规范警报响了，但先给模板。",
        habitFeedback: "正确，但会让人防御。",
        braveFeedback: "你把责备换成了可执行规则。",
        playfulFeedback: "规范落地了，火药味降了。"
      },
      {
        title: "最终分工",
        scene: "收尾阶段需要重新分工。",
        habit: "你做这个，你做那个，别问了。",
        brave: "我建议这样分，大家有阻塞现在说。",
        playful: "执行列车准备发车，乘客可报故障。",
        habitFeedback: "效率高，但信息可能被压住。",
        braveFeedback: "你给了方向，也留了反馈口。",
        playfulFeedback: "你没有丢掉效率，只是加了缓冲。"
      }
    ]
  }
];

const states = [
  {
    id: "social",
    label: "不想社交",
    modifier: "今天的挑战会压到一次低风险表达。",
    next: "找一个低风险对象，说出一个具体请求。"
  },
  {
    id: "delay",
    label: "拖延",
    modifier: "今天的挑战会强制你把任务拆成一个十分钟动作。",
    next: "选一件事，设置十分钟倒计时并开始。"
  },
  {
    id: "control",
    label: "控制欲爆棚",
    modifier: "今天的挑战会要求你只设边界，不接管过程。",
    next: "把一个任务交给别人，只同步验收标准。"
  },
  {
    id: "low",
    label: "低能量",
    modifier: "今天的挑战会降低门槛，只保留最小可行动作。",
    next: "完成一个两分钟动作，然后允许自己休息。"
  },
  {
    id: "brave",
    label: "想变勇敢",
    modifier: "今天的挑战会让你在安全范围内多迈一步。",
    next: "做一件平时会想太久的小事。"
  }
];

const intensities = [
  {
    id: "soft",
    label: "轻轻推一下",
    description: "低压力，适合先试一局。",
    courageGain: 22,
    playGain: 13,
    escapeGain: 14,
    bossDamage: 28,
    playDamage: 16
  },
  {
    id: "normal",
    label: "来点狠的",
    description: "现场 Demo 推荐强度。",
    courageGain: 32,
    playGain: 17,
    escapeGain: 20,
    bossDamage: 36,
    playDamage: 20
  },
  {
    id: "hard",
    label: "让我破防",
    description: "反馈更直接，Boss 更凶。",
    courageGain: 40,
    playGain: 20,
    escapeGain: 26,
    bossDamage: 43,
    playDamage: 24
  }
];

const resultTypes = {
  perfect: {
    code: "BOSS",
    name: "Boss 扣血狂魔",
    line: "平时不敢做的事，今天真的动了一下。",
    roast: "今日嘴替：你不是突然换人了，你只是发现自己也能换个做法。"
  },
  habit: {
    code: "ZZZ",
    name: "算了没事人",
    line: "嘴上说没事，身体已经自动切到省电模式。",
    roast: "今日嘴替：你没有失败，你只是看清了自己最常用的躲法。"
  },
  playful: {
    code: "SIDE",
    name: "绕路开门人",
    line: "正面硬刚太吓人，那就从旁边开个小门。",
    roast: "今日嘴替：你确实绕了一下，但至少没有直接退出。"
  },
  social: {
    code: "ASK",
    name: "都可以本人",
    line: "嘴上说随便，心里其实有一个很明确的想法。",
    roast: "今日嘴替：你不是没有想法，你只是太习惯让别人猜。"
  },
  delay: {
    code: "MVP",
    name: "再想五分钟人",
    line: "脑子里已经做完十版，手上还没开始第一版。",
    roast: "今日嘴替：再想五分钟这句话，已经骗了你五百次。"
  },
  control: {
    code: "CTRL",
    name: "还是我来吧人",
    line: "手离键盘十秒钟，世界竟然没有立刻崩塌。",
    roast: "今日嘴替：你不是不信任别人，你只是太相信自己了。"
  },
  low: {
    code: "LOW",
    name: "电量 1% 硬撑人",
    line: "明明已经没电了，还想假装自己能满格运行。",
    roast: "今日嘴替：你不是摆烂，是系统正在低电量保护。"
  },
  brave: {
    code: "GO",
    name: "怕但还是点了人",
    line: "没有热血 BGM，也可以往前挪一厘米。",
    roast: "今日嘴替：你不是突然无所畏惧，你只是决定怕着也点一下。"
  },
  brake: {
    code: "RUN",
    name: "油门踩到底人",
    line: "油门已经踩下去了，刹车才刚刚想起自己存在。",
    roast: "今日嘴替：先冲再说很帅，先看一眼坑也不丢人。"
  },
  care: {
    code: "ALL",
    name: "全场情绪客服",
    line: "别人还没开口，你已经开始替所有人负责。",
    roast: "今日嘴替：你不是冷漠，你只是终于把自己也算进去了。"
  },
  boundary: {
    code: "NO",
    name: "说不出口人",
    line: "嘴上说可以，心里已经打开求救窗口。",
    roast: "今日嘴替：你不是不好相处，你只是终于给好人模式加了门禁。"
  },
  focus: {
    code: "NEW",
    name: "新想法插队人",
    line: "主线还没走完，新想法已经开始敲锣打鼓。",
    roast: "今日嘴替：新想法没有被抛弃，只是暂时不能坐驾驶位。"
  },
  conflict: {
    code: "BUT",
    name: "开口先但是人",
    line: "“但是”两个字，已经站在舌尖准备出场。",
    roast: "今日嘴替：你不是输给了对方，你只是赢回了对话。"
  },
  default: {
    code: "RBTI",
    name: "换个做法试试人",
    line: "人格没有换号，只是今天多解锁了一个动作。",
    roast: "今日嘴替：你还是你，但老习惯开始有点慌。"
  }
};

const resultTypeImages = {
  ALL: "./assets/result-types/ALL.jpg",
  ASK: "./assets/result-types/ASK.jpg",
  BOSS: "./assets/result-types/BOSS.jpg",
  BUT: "./assets/result-types/BUT.jpg",
  CTRL: "./assets/result-types/CTRL.jpg",
  GO: "./assets/result-types/GO.jpg",
  LOW: "./assets/result-types/LOW.jpg",
  MVP: "./assets/result-types/MVP.jpg",
  NEW: "./assets/result-types/NEW.jpg",
  NO: "./assets/result-types/NO.jpg",
  RUN: "./assets/result-types/RUN.jpg",
  SIDE: "./assets/result-types/SIDE.jpg",
  ZZZ: "./assets/result-types/ZZZ.jpg"
};

const assessmentDimensions = {
  express: {
    label: "不说需求",
    profile: "INFP",
    state: "social",
    intensity: "normal",
    resultType: "social",
    scenario: "我想去问导师一个问题，但又怕自己表达不清楚。",
    description: "你今天最容易把想法藏进“都可以”。挑战会从一次低风险开口开始。",
    tags: ["表达", "请求", "低风险社交"]
  },
  action: {
    label: "一直想想",
    profile: "INTP",
    state: "delay",
    intensity: "normal",
    resultType: "delay",
    scenario: "我想把功能做完整，但时间只够交一个 MVP。",
    description: "你今天最容易在优化和推演里打转。挑战会把大目标压成一个先能交出去的版本。",
    tags: ["启动", "MVP", "先交一版"]
  },
  boundary: {
    label: "不好拒绝",
    profile: "ISFJ",
    state: "brave",
    intensity: "normal",
    resultType: "boundary",
    scenario: "我想拒绝一个临时请求，但怕对方不开心。",
    description: "你今天最容易把别人的临时请求接到自己身上。挑战会让你练一句清楚的拒绝。",
    tags: ["边界", "拒绝", "不过载"]
  },
  control: {
    label: "总想自己来",
    profile: "ENTJ",
    state: "control",
    intensity: "normal",
    resultType: "control",
    scenario: "我想让队友接手，但总觉得还是我来更快。",
    description: "你今天最容易用“我来更快”接管现场。挑战会让你只说清目标，不替别人做。",
    tags: ["协作", "授权", "松手"]
  },
  focus: {
    label: "灵感跑偏",
    profile: "ENFP",
    state: "delay",
    intensity: "normal",
    resultType: "focus",
    scenario: "我突然想到新功能，但当前主流程还没跑通。",
    description: "你今天最容易被新鲜想法拐走。挑战会让新点子排队，先把主线跑完。",
    tags: ["收束", "主线", "防分心"]
  },
  conflict: {
    label: "一开口就反驳",
    profile: "ENTP",
    state: "brave",
    intensity: "normal",
    resultType: "conflict",
    scenario: "我不同意一个方案，但怕讨论变成争论。",
    description: "你今天最容易把不同意说成直接开辩。挑战会让你先接一句，再说问题。",
    tags: ["回应", "讨论", "先接球"]
  },
  impulse: {
    label: "先冲再说",
    profile: "ESTP",
    state: "brave",
    intensity: "normal",
    resultType: "brake",
    scenario: "我想马上加一个新效果，但还没测试当前版本。",
    description: "你今天最容易被即时刺激带上油门。挑战会给冲劲加一个三秒暂停。",
    tags: ["刹车", "冒险", "先看坑"]
  },
  energy: {
    label: "低电量硬撑",
    profile: "ESFJ",
    state: "low",
    intensity: "soft",
    resultType: "low",
    scenario: "我已经很累，但还在强撑着继续做。",
    description: "你今天最容易把低电量误判成不够努力。挑战会降低门槛，只保留一个两分钟动作。",
    tags: ["低能量", "续命", "小动作"]
  },
  brave: {
    label: "敢试一下",
    profile: "ESTP",
    state: "brave",
    intensity: "hard",
    resultType: "brave",
    scenario: "我已经有点敢反着来，想试一件平时会想太久的小事。",
    description: "你在 8 个场景里都选了更主动的做法。本局会给你一个更直接的挑战。",
    tags: ["进阶", "反向", "加难度"]
  }
};

const assessmentInterpretations = {
  social:
    "让我们直面这个今日人格：ASK。它不是没主见，而是把主见塞进了“都可以”的保温杯里。别人问你想要什么，你的大脑其实已经写好小作文，但嘴巴为了维护现场和平，自动发送了一个无害版本。ASK 的核心不是沉默，而是太擅长把需求降噪。今天的反着来，不需要你突然变成社交悍匪，只要把一个小需求说清楚，让别人终于不用靠猜谜理解你。",
  delay:
    "MVP 型人格的大脑通常很热闹，版本号已经迭代到 18.3，现实里的文件还停在“新建文档”。你不是不会做，而是太想一次做对、做全、做漂亮。问题是时间不会等灵感排队。今天的反着来，就是把脑内史诗项目压成一个能展示的小版本：先让它出门，再让它变好。",
  boundary:
    "NO 型人格最强的技能是把“我不行”翻译成“我来吧”。你的好人系统响应很快，快到自己的电量还没检查，别人的请求已经接单成功。今天的关键不是变冷漠，而是把帮助范围说清楚：拒绝任务，不等于拒绝关系；守住边界，也不等于变成坏人。",
  control:
    "CTRL 型人格不是控制狂，至少你本人会说这叫“保证质量”。你确实很能扛，也很容易觉得“还是我来更快”。但当所有方向盘都在你手里，队友只会越来越像乘客。今天的反着来，是练习只给目标、截止时间和验收标准，把过程真的交出去一点。",
  focus:
    "NEW 型人格的脑内像开了灵感弹幕，新功能、新参考、新彩蛋随时刷屏。问题不是你没有创造力，而是主线还没跑完，支线已经开始要求加戏。今天的反着来，不是杀死灵感，而是给灵感发号码牌：先完成当前主线，再决定谁能上车。",
  conflict:
    "BUT 型人格的反应速度很快，快到“但是”两个字已经站在舌尖热身。你能看见问题，也擅长拆解逻辑，但别人有时只听见了否定。今天的反着来，是先接住一个有效点，再补风险。不是让你闭嘴，而是让你的判断更容易被听进去。",
  brake:
    "RUN 型人格的行动力很猛，看到刺激方案就想直接踩油门。你不是莽，你只是相信现场会给答案。但 Demo、协作和时间线有时候经不起裸奔式冒险。今天的反着来，是在冲之前加三秒刹车：先看坑，再起跳，帅气不减，翻车率下降。",
  low:
    "LOW 型人格不是摆烂，而是系统已经进入低电量保护，你还在假装满格运行。你习惯把累解释成“不够努力”，于是越撑越卡。今天的反着来，是承认电量这件事真的存在：先做一个两分钟动作，再允许自己恢复，不靠硬撑证明价值。",
  brave:
    "GO 型人格说明你今天已经有点反着来了。别人还在和旧习惯谈判，你已经连续选择更主动的做法。这个结果不是说你无所畏惧，而是你愿意怕着也往前挪一点。接下来的挑战会更直接一点，看看这份主动能不能落到真实场景里。",
  default:
    "RBTI 的重点不是给你盖章，而是抓住今天最容易重复的动作。你还是你，只是系统帮你把旧习惯标红，然后给出一个能反着试的小任务。"
};

const dimensionMeta = {
  express: {
    code: "R1",
    title: "需求表达",
    copy: [
      "能把偏好说出来，别人不需要全靠猜。",
      "会试探着说一点，但关键需求还容易变模糊。",
      "一紧张就把想法塞回“都可以”里。"
    ]
  },
  action: {
    code: "R2",
    title: "行动启动",
    copy: [
      "能先交一版，再接受后续优化。",
      "会做计划，但启动按钮偶尔还会卡住。",
      "脑内已经做完十版，现实还在等待开工。"
    ]
  },
  boundary: {
    code: "R3",
    title: "边界拒绝",
    copy: [
      "能拒绝完整任务，同时保留关系温度。",
      "知道自己接不下，但话容易说得太软。",
      "好人模式响应太快，自己的电量排在后面。"
    ]
  },
  control: {
    code: "R4",
    title: "掌控松手",
    copy: [
      "能设清标准，然后让别人真的去做。",
      "表面放手，手指还停在遥控器上。",
      "“我来更快”很容易接管整个现场。"
    ]
  },
  focus: {
    code: "R5",
    title: "灵感收束",
    copy: [
      "能让新想法排队，先保住当前主线。",
      "灵感来了会看一眼，但还没完全偏航。",
      "主线还没跑完，新功能已经开始敲门。"
    ]
  },
  conflict: {
    code: "R6",
    title: "对话接球",
    copy: [
      "能先接住有效点，再补充自己的风险判断。",
      "会缓和语气，但观点仍容易绕着否定开场。",
      "“但是”两个字经常抢跑。"
    ]
  },
  impulse: {
    code: "R7",
    title: "冲动刹车",
    copy: [
      "行动前会先补一个最小风险判断。",
      "动作变小了，但安全绳还不够明显。",
      "速度很快，备份和回滚还没来得及上车。"
    ]
  },
  energy: {
    code: "R8",
    title: "能量自觉",
    copy: [
      "能承认电量，并用小动作维持推进。",
      "知道自己累了，但还想再硬撑一点。",
      "低电量已经报警，你还想靠意志力满格运行。"
    ]
  }
};

const quizQuestions = [
  {
    id: "express",
    dimension: "express",
    title: "朋友问：你想吃什么？",
    scene: "你其实想吃清淡一点，但怕别人觉得麻烦。",
    options: [
      {
        value: "habit",
        label: "A",
        text: "都可以，你们定就好。",
        hint: "把需求交给空气处理。",
        score: 2
      },
      {
        value: "middle",
        label: "B",
        text: "我都行，但最好别太麻烦。",
        hint: "说了一点，但还不够具体。",
        score: 1
      },
      {
        value: "reverse",
        label: "C",
        text: "我想要 A，最好不要太辣。",
        hint: "偏好和边界都说清楚。",
        score: 0
      }
    ]
  },
  {
    id: "action",
    dimension: "action",
    title: "今晚必须交一版，你会？",
    scene: "你有很多想法，但现在只能先跑通主流程。",
    options: [
      {
        value: "habit",
        label: "A",
        text: "再想想有没有办法全都做。",
        hint: "推演很爽，进度停住。",
        score: 2
      },
      {
        value: "middle",
        label: "B",
        text: "先列一个更完整的计划。",
        hint: "计划有用，但还没有交付。",
        score: 1
      },
      {
        value: "reverse",
        label: "C",
        text: "砍到两个功能，先交能演示的。",
        hint: "让作品先出门。",
        score: 0
      }
    ]
  },
  {
    id: "boundary",
    dimension: "boundary",
    title: "别人临时让你帮忙，你会？",
    scene: "你知道自己接不下，但又怕拒绝让关系变尴尬。",
    options: [
      {
        value: "habit",
        label: "A",
        text: "可以，我来吧。",
        hint: "好人模式自动接单。",
        score: 2
      },
      {
        value: "middle",
        label: "B",
        text: "我可能做不完，但我试试。",
        hint: "说了困难，但边界还软。",
        score: 1
      },
      {
        value: "reverse",
        label: "C",
        text: "我不能接完整任务，但可以给十分钟建议。",
        hint: "拒绝任务，不拒绝关系。",
        score: 0
      }
    ]
  },
  {
    id: "control",
    dimension: "control",
    title: "队友说他来做，你会？",
    scene: "你觉得他可能没你快，手已经想伸过去。",
    options: [
      {
        value: "habit",
        label: "A",
        text: "算了，还是我来。",
        hint: "效率上来，协作下线。",
        score: 2
      },
      {
        value: "middle",
        label: "B",
        text: "你先做，我随时看着。",
        hint: "像放手，但仍在遥控。",
        score: 1
      },
      {
        value: "reverse",
        label: "C",
        text: "我只确认截止时间和验收标准。",
        hint: "保留标准，放掉过程。",
        score: 0
      }
    ]
  },
  {
    id: "focus",
    dimension: "focus",
    title: "你突然想到新功能，你会？",
    scene: "它真的很有趣，但当前版本还没完整跑通。",
    options: [
      {
        value: "habit",
        label: "A",
        text: "这个很小，我马上加。",
        hint: "新鲜感劫持主线。",
        score: 2
      },
      {
        value: "middle",
        label: "B",
        text: "我先查一下怎么做。",
        hint: "还没动手，但注意力已偏航。",
        score: 1
      },
      {
        value: "reverse",
        label: "C",
        text: "先记到明日清单，继续跑主流程。",
        hint: "灵感排队，主线先走。",
        score: 0
      }
    ]
  },
  {
    id: "conflict",
    dimension: "conflict",
    title: "你不同意一个方案，你会？",
    scene: "你看到了问题，但不想让讨论变成争论。",
    options: [
      {
        value: "habit",
        label: "A",
        text: "但是这里有三个问题。",
        hint: "判断很快，听感很硬。",
        score: 2
      },
      {
        value: "middle",
        label: "B",
        text: "我不是反对，只是觉得不太对。",
        hint: "缓了一下，但还没给方向。",
        score: 1
      },
      {
        value: "reverse",
        label: "C",
        text: "这个方向能解决展示问题，我补一个风险点。",
        hint: "先接球，再补充。",
        score: 0
      }
    ]
  },
  {
    id: "impulse",
    dimension: "impulse",
    title: "现场想加一个刺激效果，你会？",
    scene: "你很想马上冲，但它可能影响已有成果。",
    options: [
      {
        value: "habit",
        label: "A",
        text: "先上，坏了再说。",
        hint: "速度很快，风险裸奔。",
        score: 2
      },
      {
        value: "middle",
        label: "B",
        text: "我先改一点点看看。",
        hint: "动作变小，但还没安全绳。",
        score: 1
      },
      {
        value: "reverse",
        label: "C",
        text: "先备份，再判断要不要展示。",
        hint: "冒险可以，但要可回滚。",
        score: 0
      }
    ]
  },
  {
    id: "energy",
    dimension: "energy",
    title: "你已经没电了，你会？",
    scene: "脑子开始卡，但你还想用意志力硬撑。",
    options: [
      {
        value: "habit",
        label: "A",
        text: "继续顶住，不能拖后腿。",
        hint: "把低电量当成不努力。",
        score: 2
      },
      {
        value: "middle",
        label: "B",
        text: "再撑十分钟看看。",
        hint: "听起来短，但还在透支。",
        score: 1
      },
      {
        value: "reverse",
        label: "C",
        text: "先完成一个两分钟动作，然后休息。",
        hint: "先保命，再推进。",
        score: 0
      }
    ]
  }
];

let selectedMbti = "INFP";
let selectedChallengeMbti = null;
let selectedState = "social";
let selectedIntensity = "normal";
let quizIndex = 0;
let quizScores = {};
let quizAnswers = [];
let quizLocked = false;
let assessmentResult = null;
let currentDungeon = null;
let currentLevelIndex = 0;
let selectedChoice = null;
let choiceHistory = [];
let loadingTimer = null;
let scores = {
  courage: 0,
  escape: 0,
  completion: 0,
  bossHp: 100
};

const $ = (id) => document.getElementById(id);

const appShell = document.querySelector(".app-shell");
const screens = Array.from(document.querySelectorAll(".screen"));
const startButton = $("startButton");
const quizProgress = $("quizProgress");
const quizProgressBar = $("quizProgressBar");
const quizScanDots = $("quizScanDots");
const quizScanCode = $("quizScanCode");
const quizScanStatus = $("quizScanStatus");
const quizDimension = $("quizDimension");
const quizTitle = $("quizTitle");
const quizScene = $("quizScene");
const quizOptions = $("quizOptions");
const quizReaction = $("quizReaction");
const assessmentCode = $("assessmentCode");
const assessmentName = $("assessmentName");
const assessmentPosterName = $("assessmentPosterName");
const assessmentPosterCode = $("assessmentPosterCode");
const assessmentPosterImage = $("assessmentPosterImage");
const assessmentPosterLine = $("assessmentPosterLine");
const assessmentDimension = $("assessmentDimension");
const assessmentScore = $("assessmentScore");
const assessmentCopy = $("assessmentCopy");
const assessmentTags = $("assessmentTags");
const assessmentInterpretation = $("assessmentInterpretation");
const assessmentDimensionList = $("assessmentDimensionList");
const shareAssessmentButton = $("shareAssessmentButton");
const generateFromAssessmentButton = $("generateFromAssessmentButton");
const retakeQuizButton = $("retakeQuizButton");
const toSceneButton = $("toSceneButton");
const startLevelButton = $("startLevelButton");
const mbtiGrid = $("mbtiGrid");
const stateGrid = $("stateGrid");
const intensityGrid = $("intensityGrid");
const selectedProfileLabel = $("selectedProfileLabel");
const selectedStateLabel = $("selectedStateLabel");
const selectedIntensityLabel = $("selectedIntensityLabel");
const scenarioInput = $("scenarioInput");
const generateButton = $("generateButton");
const loadingPanel = $("loadingPanel");
const dungeonCard = $("dungeonCard");
const dungeonImage = $("dungeonImage");
const bossName = $("bossName");
const dungeonName = $("dungeonName");
const dungeonGoal = $("dungeonGoal");
const dungeonTags = $("dungeonTags");
const taskCode = $("taskCode");
const taskRbti = $("taskRbti");
const taskRisk = $("taskRisk");
const taskEstimate = $("taskEstimate");
const taskIntensity = $("taskIntensity");
const runMbti = $("runMbti");
const runState = $("runState");
const runIntensity = $("runIntensity");
const bossMeter = $("bossMeter");
const courageValue = $("courageValue");
const escapeValue = $("escapeValue");
const completionValue = $("completionValue");
const levelArea = $("levelArea");
const reportEmpty = $("reportEmpty");
const reportCard = $("reportCard");
const resultCode = $("resultCode");
const resultName = $("resultName");
const reportTypeImage = $("reportTypeImage");
const resultLine = $("resultLine");
const reportTitle = $("reportTitle");
const reportSummary = $("reportSummary");
const basisLine = $("basisLine");
const reportWeakness = $("reportWeakness");
const reportSkill = $("reportSkill");
const reportNext = $("reportNext");
const resultRoast = $("resultRoast");
const shareLine = $("shareLine");
const rerunButton = $("rerunButton");

function showScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === screenId);
  });
  appShell.classList.remove("is-challenge-mode");
  window.scrollTo({ top: 0, behavior: "auto" });
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getDimensionLevel(score) {
  if (score >= 2) return { label: "H", points: 6, percent: 100 };
  if (score === 1) return { label: "M", points: 4, percent: 64 };
  return { label: "L", points: 2, percent: 28 };
}

function getAssessmentConfidence(result) {
  if (result.id === "brave") {
    return "主动选择命中度很高，当前结果可视为你的今日进阶画像。";
  }
  if (result.matchPercent >= 82) {
    return "维度命中度很高，当前结果可视为你的今日第一人格画像。";
  }
  if (result.matchPercent >= 70) {
    return "维度命中度较高，当前结果可视为你的今日主要人格画像。";
  }
  return "维度命中度中等，当前结果更适合当作今天的行动提醒。";
}

function getProfile() {
  const profileId = selectedChallengeMbti || selectedMbti;
  return profiles.find((profile) => profile.id === profileId) || profiles[0];
}

function getBaseProfile() {
  return profiles.find((profile) => profile.id === selectedMbti) || profiles[0];
}

function getState() {
  return states.find((state) => state.id === selectedState) || states[0];
}

function getIntensity() {
  return intensities.find((intensity) => intensity.id === selectedIntensity) || intensities[1];
}

function getRiskLabel(intensityId) {
  if (intensityId === "hard") return "高能量";
  if (intensityId === "soft") return "轻量";
  return "低风险";
}

function getResultTypeImage(code) {
  return resultTypeImages[code] || resultTypeImages.ASK || "./assets/home-hero.png";
}

function getQuizOptionMeta(value) {
  if (value === "habit") {
    return {
      label: "老习惯",
      reaction: "已记录一个老习惯"
    };
  }
  if (value === "middle") {
    return {
      label: "试探一下",
      reaction: "已记录一个中间态"
    };
  }
  return {
    label: "反着来",
    reaction: "已记录一次反着来"
  };
}

function resetQuiz() {
  quizIndex = 0;
  quizScores = {};
  quizQuestions.forEach((question) => {
    quizScores[question.dimension] = 0;
  });
  quizAnswers = [];
  quizLocked = false;
  assessmentResult = null;
  selectedChallengeMbti = null;
  renderQuiz();
}

function renderQuiz() {
  const question = quizQuestions[quizIndex] || quizQuestions[0];
  const dimension = assessmentDimensions[question.dimension];
  const meta = dimensionMeta[question.dimension];
  const progress = Math.round(((quizIndex + 1) / quizQuestions.length) * 100);

  quizLocked = false;
  quizProgress.textContent = `${quizIndex + 1} / ${quizQuestions.length}`;
  quizProgressBar.style.width = `${progress}%`;
  quizScanCode.textContent = meta?.code || `R${quizIndex + 1}`;
  quizScanStatus.textContent = `扫描 ${quizIndex + 1} / ${quizQuestions.length}`;
  quizScanDots.innerHTML = quizQuestions
    .map((_, index) => {
      const state = index < quizIndex ? "is-done" : index === quizIndex ? "is-current" : "";
      return `<i class="${state}"></i>`;
    })
    .join("");
  quizDimension.textContent = `正在检测：${dimension.label}`;
  quizTitle.textContent = question.title;
  quizScene.textContent = question.scene;
  quizReaction.classList.remove("is-visible");
  quizReaction.removeAttribute("data-tone");
  quizReaction.textContent = "";
  quizOptions.classList.remove("is-locked");
  quizOptions.innerHTML = question.options
    .map(
      (option, index) => {
        const optionMeta = getQuizOptionMeta(option.value);
        return `
        <button class="quiz-option" type="button" data-quiz-option="${index}" data-quiz-value="${option.value}">
          <span>${String.fromCharCode(65 + index)}</span>
          <em>${escapeHTML(optionMeta.label)}</em>
          <strong>${escapeHTML(option.text)}</strong>
          <small>${escapeHTML(option.hint)}</small>
        </button>
      `;
      }
    )
    .join("");
}

function calculateAssessment() {
  const dimensionOrder = quizQuestions.map((question) => question.dimension);
  const ranked = dimensionOrder
    .map((id, order) => ({
      id,
      order,
      score: quizScores[id] || 0
    }))
    .sort((a, b) => b.score - a.score || a.order - b.order);
  const top = ranked[0] || { id: "express", score: 0 };
  const dominantId = top.score === 0 ? "brave" : top.id;
  const dimension = assessmentDimensions[dominantId];
  const resultType = resultTypes[dimension.resultType] || resultTypes.default;
  const reverseCount = quizAnswers.filter((answer) => answer.value === "reverse").length;
  const habitCount = quizAnswers.filter((answer) => answer.value === "habit").length;
  const middleCount = quizAnswers.filter((answer) => answer.value === "middle").length;
  const answerCount = quizAnswers.length || quizQuestions.length;
  const dimensionScores = dimensionOrder.map((id) => ({
    id,
    score: quizScores[id] || 0,
    max: 2
  }));
  const totalScore = dimensionScores.reduce((sum, item) => sum + item.score, 0);
  const maxScore = dimensionScores.length * 2;
  const hitCount = dominantId === "brave" ? reverseCount : dimensionScores.filter((item) => item.score > 0).length;
  const matchPercent =
    dominantId === "brave"
      ? clampNumber(Math.round(68 + (reverseCount / answerCount) * 24), 72, 96)
      : clampNumber(
          Math.round(56 + (top.score / 2) * 18 + (totalScore / maxScore) * 20 + (habitCount / answerCount) * 8),
          62,
          96
        );

  return {
    id: dominantId,
    ...dimension,
    baseMbti: selectedMbti,
    challengeMbti: dimension.profile,
    score: top.score,
    reverseCount,
    habitCount,
    middleCount,
    answerCount,
    dimensionScores,
    hitCount,
    matchPercent,
    code: resultType.code,
    name: resultType.name,
    line: resultType.line
  };
}

function applyAssessmentResult() {
  if (!assessmentResult) return;
  selectedChallengeMbti = assessmentResult.challengeMbti;
  selectedState = assessmentResult.state;
  selectedIntensity = assessmentResult.intensity;
  scenarioInput.value = assessmentResult.scenario;
}

function renderAssessment() {
  if (!assessmentResult) return;
  const baseProfile = getBaseProfile();
  const scoreLine =
    assessmentResult.id === "brave"
      ? `匹配度 ${assessmentResult.matchPercent}% · 主动命中 ${assessmentResult.reverseCount}/${assessmentResult.answerCount} 维`
      : `匹配度 ${assessmentResult.matchPercent}% · 精准命中 ${assessmentResult.hitCount}/${assessmentResult.answerCount} 维`;
  const confidence = getAssessmentConfidence(assessmentResult);
  const interpretation =
    assessmentInterpretations[assessmentResult.resultType] || assessmentInterpretations[assessmentResult.id] || assessmentInterpretations.default;
  const assessmentImage = resultTypeImages[assessmentResult.code] || resultTypeImages.ASK;

  assessmentPosterName.textContent = assessmentResult.name;
  assessmentPosterCode.textContent = assessmentResult.code;
  assessmentPosterImage.src = assessmentImage;
  assessmentPosterLine.textContent = assessmentResult.line;
  assessmentCode.textContent = assessmentResult.code;
  assessmentName.textContent = assessmentResult.name;
  assessmentDimension.textContent = `${assessmentResult.code}（${assessmentResult.name}）`;
  assessmentScore.textContent = scoreLine;
  assessmentCopy.textContent = `${confidence} 你选择的人格底色是 ${baseProfile.id} ${baseProfile.nickname}。${assessmentResult.description}`;
  assessmentTags.innerHTML = [
    `匹配度 ${assessmentResult.matchPercent}%`,
    `底色 ${baseProfile.id}`,
    assessmentResult.label,
    `挑战 ${assessmentResult.challengeMbti}`,
    states.find((state) => state.id === assessmentResult.state)?.label || "今日状态",
    intensities.find((intensity) => intensity.id === assessmentResult.intensity)?.label || "挑战强度",
    ...assessmentResult.tags
  ]
    .map((tag) => `<span>${escapeHTML(tag)}</span>`)
    .join("");
  assessmentInterpretation.textContent = interpretation;
  assessmentDimensionList.innerHTML = assessmentResult.dimensionScores
    .map((item) => {
      const meta = dimensionMeta[item.id];
      const level = getDimensionLevel(item.score);
      const description = meta.copy[item.score] || meta.copy[0];
      return `
        <article class="dimension-item">
          <header>
            <strong>${escapeHTML(meta.code)} ${escapeHTML(meta.title)}</strong>
            <em>${level.label} / ${level.points}分</em>
          </header>
          <p>${escapeHTML(description)}</p>
          <div class="dimension-meter" aria-hidden="true"><i style="width: ${level.percent}%"></i></div>
        </article>
      `;
    })
    .join("");
}

async function shareAssessment() {
  if (!assessmentResult) return;
  const baseProfile = getBaseProfile();
  const text = `我的今日 RBTI：${assessmentResult.code} ${assessmentResult.name}，匹配度 ${assessmentResult.matchPercent}%。${assessmentResult.line} 人格底色是 ${baseProfile.id}，今天最该反着练的是${assessmentResult.label}。`;
  const originalText = "分享测试结果";

  try {
    if (navigator.share) {
      await navigator.share({
        title: "今天别做自己",
        text
      });
      return;
    }

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      shareAssessmentButton.textContent = "结果文案已复制";
    } else {
      shareAssessmentButton.textContent = "可以截图分享";
    }
  } catch (error) {
    shareAssessmentButton.textContent = "可以截图分享";
  }

  window.setTimeout(() => {
    shareAssessmentButton.textContent = originalText;
  }, 1600);
}

function answerQuiz(optionIndex) {
  if (quizLocked) return;
  const question = quizQuestions[quizIndex];
  const option = question?.options[Number(optionIndex)];
  if (!question || !option) return;
  const optionMeta = getQuizOptionMeta(option.value);
  const selectedButton = quizOptions.querySelector(`[data-quiz-option="${Number(optionIndex)}"]`);

  quizLocked = true;
  quizOptions.classList.add("is-locked");
  selectedButton?.classList.add("is-selected");
  quizReaction.textContent = `${optionMeta.reaction}：${option.hint}`;
  quizReaction.dataset.tone = option.value;
  quizReaction.classList.add("is-visible");

  window.setTimeout(() => {
    quizScores[question.dimension] = (quizScores[question.dimension] || 0) + option.score;
    quizAnswers.push({
      questionId: question.id,
      dimension: question.dimension,
      value: option.value,
      score: option.score
    });

    if (quizIndex < quizQuestions.length - 1) {
      quizIndex += 1;
      renderQuiz();
      return;
    }

    assessmentResult = calculateAssessment();
    applyAssessmentResult();
    renderAssessment();
    currentDungeon = buildDungeon();
    renderDungeon();
    renderLevel();
    showScreen("assessmentScreen");
  }, 420);
}

function renderControls() {
  mbtiGrid.innerHTML = profiles
    .map(
      (profile) => `
        <button class="choice-button ${profile.id === selectedMbti ? "is-active" : ""}" type="button" data-mbti="${profile.id}">
          <strong>${profile.id}</strong>
          <span>${profile.nickname}</span>
        </button>
      `
    )
    .join("");

  stateGrid.innerHTML = states
    .map(
      (state) => `
        <button class="choice-button ${state.id === selectedState ? "is-active" : ""}" type="button" data-state="${state.id}">
          <strong>${state.label}</strong>
          <span>${state.modifier}</span>
        </button>
      `
    )
    .join("");

  intensityGrid.innerHTML = intensities
    .map(
      (intensity) => `
        <button class="choice-button ${intensity.id === selectedIntensity ? "is-active" : ""}" type="button" data-intensity="${intensity.id}">
          <strong>${intensity.label}</strong>
          <span>${intensity.description}</span>
        </button>
      `
    )
    .join("");

  selectedProfileLabel.textContent = selectedMbti;
  selectedStateLabel.textContent = getState().label;
  selectedIntensityLabel.textContent = getIntensity().label;
}

function resetRunState() {
  currentLevelIndex = 0;
  selectedChoice = null;
  choiceHistory = [];
  scores = {
    courage: 0,
    escape: 0,
    completion: 0,
    bossHp: 100
  };
  reportEmpty.classList.remove("is-hidden");
  reportCard.classList.add("is-hidden");
  renderScores();
}

function buildDungeon() {
  const profile = getProfile();
  const baseProfile = getBaseProfile();
  const state = getState();
  const intensity = getIntensity();
  const scenario = scenarioInput.value.trim();
  const scenarioLine = scenario ? `今天的真实场景是：${scenario}` : "今天先从一个低风险动作开始。";
  const assessmentName = assessmentResult ? `${assessmentResult.label}挑战：` : "";
  const tags = assessmentResult
    ? [`底色 ${baseProfile.id}`, `挑战 ${profile.id}`, assessmentResult.label, state.label, intensity.label]
    : [profile.id, profile.nickname, state.label, intensity.label];

  return {
    profile,
    baseProfile,
    assessment: assessmentResult,
    state,
    intensity,
    name: `${assessmentName}${profile.dungeonName}`,
    boss: profile.bossName,
    goal: `${profile.goal}${state.modifier}`,
    tags,
    nextChallenge: state.next,
    levels: profile.levels.map((level, index) => ({
      ...level,
      scene: index === 0 ? `${level.scene}${scenarioLine}` : level.scene
    }))
  };
}

function showLoading(isLoading) {
  loadingPanel.classList.toggle("is-visible", isLoading);
  dungeonCard.classList.toggle("is-dimmed", isLoading);
  generateButton.disabled = isLoading;
  generateButton.textContent = isLoading ? "生成中..." : "生成挑战";
  startLevelButton.disabled = isLoading;
}

function generateDungeon(withLoading = true) {
  window.clearTimeout(loadingTimer);
  resetRunState();
  showScreen("dungeonScreen");

  if (!withLoading) {
    currentDungeon = buildDungeon();
    renderDungeon();
    renderLevel();
    return;
  }

  showLoading(true);
  levelArea.innerHTML = "";
  loadingTimer = window.setTimeout(() => {
    currentDungeon = buildDungeon();
    showLoading(false);
    renderDungeon();
    renderLevel();
  }, 720);
}

function renderDungeon() {
  if (!currentDungeon) return;
  const { profile, baseProfile, state, intensity, assessment } = currentDungeon;
  const rbtiCode = assessment?.code || profile.id;

  if (dungeonImage) dungeonImage.src = profile.image;
  bossName.textContent = currentDungeon.boss;
  if (dungeonName) dungeonName.textContent = currentDungeon.name;
  dungeonGoal.textContent = profile.goal;
  if (taskCode) taskCode.textContent = `${rbtiCode}-01`;
  if (taskRbti) taskRbti.textContent = `今日 RBTI: ${rbtiCode}`;
  if (taskRisk) taskRisk.textContent = getRiskLabel(intensity.id);
  if (taskEstimate) taskEstimate.textContent = intensity.id === "hard" ? "预计 5 分钟" : "预计 3 分钟";
  if (taskIntensity) taskIntensity.textContent = intensity.label;
  runMbti.textContent = assessment ? `${baseProfile.id} · ${assessment.label}` : profile.id;
  runState.textContent = state.label;
  runIntensity.textContent = intensity.label;
  dungeonTags.innerHTML = currentDungeon.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("");
  renderScores();
}

function renderScores() {
  if (courageValue) courageValue.textContent = scores.courage;
  if (escapeValue) escapeValue.textContent = scores.escape;
  if (completionValue) completionValue.textContent = `${scores.completion}%`;
  bossMeter.style.width = `${scores.bossHp}%`;
  bossMeter.dataset.state = scores.bossHp <= 25 ? "weak" : scores.bossHp <= 60 ? "hurt" : "strong";
}

function getChoiceMeta(choiceType, level) {
  if (choiceType === "brave") {
    return {
      label: "C",
      text: level.brave,
      feedback: level.braveFeedback,
      tone: "brave"
    };
  }
  if (choiceType === "playful") {
    return {
      label: "B",
      text: level.playful,
      feedback: level.playfulFeedback,
      tone: "playful"
    };
  }
  return {
    label: "A",
    text: level.habit,
    feedback: level.habitFeedback,
    tone: "habit"
  };
}

function renderLevel() {
  if (!currentDungeon) return;
  const level = currentDungeon.levels[currentLevelIndex];
  const choices = ["habit", "playful", "brave"].map((choiceType) => getChoiceMeta(choiceType, level));
  const feedback = selectedChoice ? getChoiceMeta(selectedChoice, level) : null;
  const nextLabel = currentLevelIndex === currentDungeon.levels.length - 1 ? "生成 RBTI 结果" : "进入下一关";
  const rbtiCode = currentDungeon.assessment?.code || currentDungeon.profile.id;
  const meterState = scores.bossHp <= 25 ? "weak" : scores.bossHp <= 60 ? "hurt" : "strong";

  runMbti.textContent = `${rbtiCode}-0${currentLevelIndex + 1} · 第 ${currentLevelIndex + 1} / ${currentDungeon.levels.length} 关`;
  runState.textContent = feedback ? "刚才这一步" : "选择你的动作";
  runIntensity.textContent = getRiskLabel(currentDungeon.intensity.id);

  levelArea.innerHTML = `
    <article class="level-card task-play-card ${feedback ? "has-feedback" : ""}">
      <span class="task-tape level-tape" aria-hidden="true"></span>
      <span class="task-dot level-dot-a" aria-hidden="true"></span>
      <span class="task-dot level-dot-b" aria-hidden="true"></span>
      <span class="warning-mark level-mark" aria-hidden="true">!</span>

      <div class="level-paper">
        <div class="task-card-topline">
          <strong>CHALLENGE STEP</strong>
          <span>${escapeHTML(rbtiCode)}-0${currentLevelIndex + 1}</span>
        </div>
        <div class="level-status-panel">
          <div class="level-boss-row">
            <span>Boss 血量</span>
            <strong>${scores.bossHp}%</strong>
          </div>
          <div class="boss-meter"><i style="width:${scores.bossHp}%" data-state="${meterState}"></i></div>
          <div class="score-strip">
            <article>
              <span>勇气值</span>
              <strong>${scores.courage}</strong>
            </article>
            <article>
              <span>逃避值</span>
              <strong>${scores.escape}</strong>
            </article>
            <article>
              <span>完成度</span>
              <strong>${scores.completion}%</strong>
            </article>
          </div>
        </div>
        <div class="level-topline">
          <span>第 ${currentLevelIndex + 1} / ${currentDungeon.levels.length} 关</span>
          <strong>${escapeHTML(level.title)}</strong>
        </div>
        <p class="level-scene">${escapeHTML(level.scene)}</p>
        <div class="option-grid">
          ${choices
            .map(
              (choice) => `
                <button
                  class="option-button ${selectedChoice === choice.tone ? "is-selected" : ""}"
                  type="button"
                  data-choice="${choice.tone}"
                  ${selectedChoice ? "disabled" : ""}
                >
                  <span>${choice.label}</span>
                  <strong>${escapeHTML(choice.text)}</strong>
                </button>
              `
            )
            .join("")}
        </div>
        ${
          feedback
            ? `
              <div class="feedback-box ${feedback.tone}">
                <span>刚才这一步</span>
                <strong>${escapeHTML(feedback.feedback)}</strong>
              </div>
              <button id="nextLevelButton" class="primary-button" type="button">${nextLabel}</button>
            `
            : "<p class=\"hint-text\">选一个最像你会做的选择。</p>"
        }
      </div>
    </article>
  `;
}

function applyChoice(choiceType) {
  if (!currentDungeon || selectedChoice) return;
  const intensity = currentDungeon.intensity;
  selectedChoice = choiceType;
  choiceHistory.push(choiceType);

  if (choiceType === "brave") {
    scores.courage += intensity.courageGain;
    scores.bossHp = Math.max(0, scores.bossHp - intensity.bossDamage);
  } else if (choiceType === "playful") {
    scores.courage += intensity.playGain;
    scores.escape += 5;
    scores.bossHp = Math.max(0, scores.bossHp - intensity.playDamage);
  } else {
    scores.courage += 4;
    scores.escape += intensity.escapeGain;
    scores.bossHp = Math.max(0, scores.bossHp - 7);
  }

  scores.completion = Math.round(((currentLevelIndex + 1) / currentDungeon.levels.length) * 100);
  renderScores();
  renderLevel();
}

function goNextLevel() {
  if (!currentDungeon) return;
  if (currentLevelIndex < currentDungeon.levels.length - 1) {
    currentLevelIndex += 1;
    selectedChoice = null;
    renderLevel();
    return;
  }
  renderReport();
  showScreen("resultScreen");
}

function getResultType() {
  if (!currentDungeon) return resultTypes.default;
  const { profile, state } = currentDungeon;
  const braveCount = choiceHistory.filter((choice) => choice === "brave").length;
  const playfulCount = choiceHistory.filter((choice) => choice === "playful").length;
  const habitCount = choiceHistory.filter((choice) => choice === "habit").length;

  if (braveCount === currentDungeon.levels.length) return resultTypes.perfect;
  if (habitCount >= 2) return resultTypes.habit;
  if (playfulCount >= 2) return resultTypes.playful;
  if (assessmentResult?.resultType && resultTypes[assessmentResult.resultType]) return resultTypes[assessmentResult.resultType];
  if (state.id === "delay" || ["INTP", "ENFP"].includes(profile.id)) return resultTypes.delay;
  if (state.id === "control" || ["INTJ", "ENTJ", "ESTJ"].includes(profile.id)) return resultTypes.control;
  if (state.id === "social" || ["INFP", "INFJ", "ISFJ"].includes(profile.id)) return resultTypes.social;
  if (["ENTP", "ESTP"].includes(profile.id)) return resultTypes.brake;
  if (["ENFJ", "ESFJ"].includes(profile.id)) return resultTypes.care;
  if (state.id === "low") return resultTypes.low;
  if (state.id === "brave") return resultTypes.brave;
  return resultTypes.default;
}

function renderReport() {
  const { profile, baseProfile, state, intensity, boss, nextChallenge, assessment } = currentDungeon;
  const resultType = getResultType();
  const resultImage = resultTypeImages[resultType.code] || resultTypeImages.ASK;
  const strongRun = scores.courage >= scores.escape + 25;
  const roughRun = scores.escape > scores.courage;
  const title = strongRun ? `你击败了${boss}` : roughRun ? `你看见了${boss}` : `你削弱了${boss}`;
  const assessmentLine = assessment ? `你的人格底色是 ${baseProfile.id}，8 题测评显示今天最该处理的是“${assessment.label}”。` : "";
  const summary = strongRun
    ? `${assessmentLine}你真的做了一次“${profile.reverseSkill}”。`
    : roughRun
      ? `${assessmentLine}你还没有完全反着来，但已经抓到了自己的惯性触发点。`
      : `${assessmentLine}你没有一次性改掉惯性，但已经让它松动了一点。`;
  const basisText = assessment
    ? `依据：先选择人格底色 ${baseProfile.id}，再由 8 题测评定位到“${assessment.label}”；挑战按 ${profile.id} / ${state.label} / ${intensity.label} 生成。`
    : `依据：手动选择 ${profile.id} / ${state.label} / ${intensity.label} 生成挑战。`;

  scores.completion = 100;
  renderScores();
  reportEmpty.classList.add("is-hidden");
  reportCard.classList.remove("is-hidden");
  resultCode.textContent = resultType.code;
  resultName.textContent = resultType.name;
  reportTypeImage.src = resultImage;
  resultLine.textContent = resultType.line;
  reportTitle.textContent = title;
  reportSummary.textContent = summary;
  basisLine.textContent = basisText;
  reportWeakness.textContent = profile.inertia;
  reportSkill.textContent = profile.reverseSkill;
  reportNext.textContent = nextChallenge;
  resultRoast.textContent = resultType.roast;
  shareLine.textContent = `我的今日 RBTI：${resultType.code} ${resultType.name}。${assessment ? `${baseProfile.id} 的今日卡点是${assessment.label}` : `${profile.id} 没有换号`}，只是多了一种选择。`;
}

mbtiGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mbti]");
  if (!button) return;
  assessmentResult = null;
  selectedChallengeMbti = null;
  selectedMbti = button.dataset.mbti;
  renderControls();
});

quizOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quiz-option]");
  if (!button) return;
  answerQuiz(button.dataset.quizOption);
});

document.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-screen]");
  if (!navButton) return;
  showScreen(navButton.dataset.screen);
});

stateGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-state]");
  if (!button) return;
  assessmentResult = null;
  selectedChallengeMbti = null;
  selectedState = button.dataset.state;
  renderControls();
});

intensityGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-intensity]");
  if (!button) return;
  assessmentResult = null;
  selectedChallengeMbti = null;
  selectedIntensity = button.dataset.intensity;
  renderControls();
});

levelArea.addEventListener("click", (event) => {
  const choiceButton = event.target.closest("[data-choice]");
  if (choiceButton) {
    applyChoice(choiceButton.dataset.choice);
    return;
  }

  if (event.target.closest("#nextLevelButton")) {
    goNextLevel();
  }
});

document.querySelectorAll("[data-scenario]").forEach((button) => {
  button.addEventListener("click", () => {
    assessmentResult = null;
    selectedChallengeMbti = null;
    scenarioInput.value = button.dataset.scenario;
  });
});

scenarioInput.addEventListener("input", () => {
  assessmentResult = null;
  selectedChallengeMbti = null;
});

startButton.addEventListener("click", () => {
  assessmentResult = null;
  selectedChallengeMbti = null;
  renderControls();
  showScreen("profileScreen");
});
toSceneButton.addEventListener("click", () => {
  resetQuiz();
  showScreen("quizScreen");
});
startLevelButton.addEventListener("click", () => {
  selectedChoice = null;
  renderLevel();
  showScreen("levelScreen");
});
generateFromAssessmentButton.addEventListener("click", () => generateDungeon(true));
shareAssessmentButton.addEventListener("click", shareAssessment);
retakeQuizButton.addEventListener("click", () => {
  selectedChallengeMbti = null;
  resetQuiz();
  showScreen("quizScreen");
});
generateButton.addEventListener("click", () => generateDungeon(true));
rerunButton.addEventListener("click", () => {
  resetRunState();
  selectedChallengeMbti = null;
  resetQuiz();
  renderControls();
  showScreen("profileScreen");
});

renderControls();
resetQuiz();
currentDungeon = buildDungeon();
renderDungeon();
renderLevel();
showScreen("homeScreen");
