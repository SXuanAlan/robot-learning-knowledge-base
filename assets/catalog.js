
/* ---------- references (stable identifiers shared across pages) ---------- */
const P = `https://`;
const REFS = [
{ n:1, id:`dp`, date:`2023-03`, short:`Diffusion Policy`,
  cite:`C. Chi, S. Feng, Y. Du, Z. Xu, E. Cousineau, B. Burchfiel, S. Song`, title:`Diffusion Policy: Visuomotor Policy Learning via Action Diffusion`, venue:`RSS 2023`,
  links:[[`arXiv`,`${P}arxiv.org/abs/2303.04137`],[`Project`,`${P}diffusion-policy.cs.columbia.edu/`]] },
{ n:2, id:`aloha`, date:`2023-04`, short:`ALOHA`,
  cite:`T. Z. Zhao, V. Kumar, S. Levine, C. Finn`, title:`Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware`, venue:`RSS 2023`,
  links:[[`arXiv`,`${P}arxiv.org/abs/2304.13705`],[`Project`,`${P}tonyzhaozh.github.io/aloha/`]] },
{ n:3, id:`umi`, date:`2024-02`, short:`UMI`, status:`pdf`,
  cite:`C. Chi, Z. Xu, C. Pan, E. Cousineau, B. Burchfiel, S. Feng, R. Tedrake, S. Song`, title:`Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots`, venue:`RSS 2024`,
  links:[[`arXiv`,`${P}arxiv.org/abs/2402.10329`],[`Project`,`${P}umi-gripper.github.io/`]] },
{ n:4, id:`dexcap`, date:`2024-03`, short:`DexCap`,
  cite:`C. Wang, H. Shi, W. Wang, R. Zhang, L. Fei-Fei, C. K. Liu`, title:`DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation`, venue:`RSS 2024`,
  links:[[`arXiv`,`${P}arxiv.org/abs/2403.07788`],[`Project`,`${P}dex-cap.github.io/`]] },
{ n:5, id:`pi0`, date:`2024-10`, short:`π0`, status:`pdf`,
  cite:`K. Black, N. Brown, D. Driess, et al.`, title:`π0: A Vision-Language-Action Flow Model for General Robot Control`, venue:`arXiv 2024`,
  links:[[`arXiv`,`${P}arxiv.org/abs/2410.24164`],[`Blog`,`${P}www.pi.website/blog/pi0`]] },
{ n:6, id:`helix`, date:`2025-02`, short:`Helix`,
  cite:`Figure AI`, title:`Helix: A Vision-Language-Action Model for Generalist Humanoid Control`, venue:`Figure AI, Feb. 2025`,
  links:[[`Blog`,`${P}www.figure.ai/news/helix`]] },
{ n:7, id:`gr00t`, date:`2025-03`, short:`GR00T N1`,
  cite:`NVIDIA, J. Bjorck, F. Castañeda, N. Cherniadev, et al.`, title:`GR00T N1: An Open Foundation Model for Generalist Humanoid Robots`, venue:`arXiv 2025`,
  links:[[`arXiv`,`${P}arxiv.org/abs/2503.14734`],[`Project`,`${P}developer.nvidia.com/isaac/gr00t`]] },
{ n:8, id:`onexwm`, date:`2025-06`, short:`1X World Model`,
  cite:`1X AI Team`, title:`1X World Model`, venue:`1X, Jun. 2025`,
  links:[[`Blog`,`${P}www.1x.tech/discover/1x-world-model`],[`PDF`,`${P}www.1x.tech/1x-world-model.pdf`],[`Video`,`${P}youtu.be/xPX6dDRYbV4`]] },
{ n:9, id:`gen0`, date:`2025-11`, short:`GEN-0`,
  cite:`Generalist AI Team`, title:`GEN-0: Embodied Foundation Models That Scale with Physical Interaction`, venue:`Generalist AI, Nov. 2025`,
  links:[[`Blog`,`${P}generalistai.com/blog/gen-0`]] },
{ n:10, id:`sonic`, date:`2025-11`, short:`SONIC`,
  cite:`Z. Luo, Y. Yuan, T. Wang, C. Li, et al.`, title:`SONIC: Supersizing Motion Tracking for Natural Humanoid Whole-Body Control`, venue:`arXiv 2025`,
  links:[[`arXiv`,`${P}arxiv.org/abs/2511.07820`],[`Project`,`${P}nvlabs.github.io/GEAR-SONIC/`]] },
{ n:11, id:`pistar06`, date:`2025-11`, short:`π*0.6`, status:`pdf`,
  cite:`Physical Intelligence, A. Amin, R. Aniceto, A. Balakrishna, K. Black, et al.`, title:`π*0.6: a VLA That Learns From Experience`, venue:`arXiv 2025`,
  links:[[`arXiv`,`${P}arxiv.org/abs/2511.14759`],[`Blog`,`${P}www.pi.website/blog/pistar06`]] },
{ n:12, id:`act1`, date:`2025-11`, short:`ACT-1`,
  cite:`Sunday Team`, title:`ACT-1: A Robot Foundation Model Trained on Zero Robot Data`, venue:`Sunday, Nov. 2025`,
  links:[[`Blog`,`${P}www.sunday.ai/journal/no-robot-data`]] },
{ n:13, id:`helix02`, date:`2026-01`, short:`Helix 02`,
  cite:`Figure AI`, title:`Introducing Helix 02: Full-Body Autonomy`, venue:`Figure AI, Jan. 2026`,
  links:[[`Blog`,`${P}figure.ai/news/helix-02`]] },
{ n:14, id:`dreamzero`, date:`2026-02`, short:`DreamZero`,
  cite:`S. Ye, Y. Ge, K. Zheng, S. Gao, S. Yu, G. Kurian, et al.`, title:`World Action Models are Zero-shot Policies`, venue:`arXiv 2026`,
  links:[[`arXiv`,`${P}arxiv.org/abs/2602.15922`],[`Project`,`${P}dreamzero0.github.io/`]] },
{ n:15, id:`gen1`, date:`2026-04`, short:`GEN-1`,
  cite:`Generalist AI Team`, title:`GEN-1: Scaling Embodied Foundation Models to Mastery`, venue:`Generalist AI, Apr. 2026`,
  links:[[`Blog`,`${P}generalistai.com/blog/gen-1`],[`Going Beyond World Models & VLAs`,`${P}generalistai.com/blog/beyond-world-models`]] },
{ n:16, id:`pi07`, date:`2026-04`, short:`π0.7`,
  cite:`Physical Intelligence`, title:`π0.7: a Steerable Model with Emergent Capabilities`, venue:`Physical Intelligence, Apr. 2026`,
  links:[[`Blog`,`${P}www.pi.website/pi07`]] },
{ n:17, id:`gr2`, date:`2026-07`, short:`Gemini Robotics 2`,
  cite:`Google DeepMind`, title:`Gemini Robotics 2 brings whole-body intelligence to robots`, venue:`Google DeepMind, Jul. 2026`,
  links:[[`Blog`,`${P}deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots`],[`ER 2`,`${P}blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/`]] },
{ n:18, id:`dyna2`, date:`2026-08`, short:`Dyna-2`,
  cite:`Dyna Robotics`, title:`Dyna-2: A 1-Million-Hour Scaling Law for World-Action Models`, venue:`Dyna Robotics, Aug. 2026`,
  links:[[`Blog`,`${P}www.dyna.co/dyna-2`]] },
{ n:19, id:`skilds1`, date:`2026-08`, short:`Skild S1`,
  cite:`Skild AI Team`, title:`Introducing S1: In-Context Learning for Robotics`, venue:`Skild AI, Aug. 2026`,
  links:[[`Blog`,`${P}www.skild.ai/blogs/s1`]] },
{ n:20, id:`gen15`, date:`2026-08`, short:`GEN-1.5`,
  cite:`Generalist AI Team`, title:`GEN-1.5: Embodied Foundation Models are One-Shot Learners`, venue:`Generalist AI, Aug. 2026`,
  links:[[`Blog`,`${P}generalistai.com/blog/gen-1.5`],[`Thousand Hands`,`${P}generalistai.com/blog/towards-machines-with-a-thousand-hands`]] },
{ n:21, id:`homebody`, date:`2026-09`, short:`HomeBody`,
  cite:`G. Huh, C. Gu, T. E. Truong, C. K. Liu, G. Tevet`, title:`HomeBody: A Humanoid That Explores, Remembers, and Acts on Its Own`, venue:`Stanford TML, Sep. 2026`,
  links:[[`Project`,`${P}tml.stanford.edu/homebody/`]] },
{ n:22, id:`om1`, date:`2026-09`, short:`OM-1`,
  cite:`Reward AI Team`, title:`OM-1: Frontier Robot Intelligence, Learned Firsthand from Humans`, venue:`Reward AI, Sep. 2026`,
  links:[[`Blog`,`${P}www.rewardai.com/blog/OM-1/`],[`Video`,`${P}youtu.be/IJvyS2aPsnA`],[`Humanoid video`,`${P}youtu.be/63wq-Qu-K8o`]] },
{ n:23, id:`dyna21`, date:`2026-09`, short:`Dyna-2.1`,
  cite:`Dyna Robotics`, title:`Dyna-2.1: A Physical Agent for End-to-End Workflows`, venue:`Dyna Robotics, Sep. 2026`,
  links:[[`Blog`,`${P}www.dyna.co/dyna-2.1`]] },
{ n:24, id:`robosim`, date:`2026-10`, short:`RoboSimStudio`,
  cite:`K. Chen, S. Xie, U. Yoo, et al.`, title:`RoboSimStudio: An Interactive Toolkit for Rapid Real2Sim of Robot Manipulation Tasks`, venue:`arXiv 2026`,
  links:[[`arXiv`,`${P}arxiv.org/abs/2610.18835`],[`Project`,`${P}robosimstudio.github.io/`],[`X post`,`${P}x.com/keplerccccc/status/2110405269171921243`]] },
{ n:25, id:`piapi`, date:`2026-10`, short:`Pi API`,
  cite:`Physical Intelligence`, title:`Frontier Models for Every Robot`, venue:`Physical Intelligence, Oct. 2026`,
  links:[[`Blog`,`${P}www.pi.website/blog/api-beta`]] },
{ n:26, id:`specialist`, date:`2026-11`, short:`Specialist`,
  cite:`Y. Chi, Q. Liao, B. Nikolić, Y. S. Shao, P. Abbeel, K. Sreenath`, title:`Specialist: Yet Another Universal Manipulator Interface`, venue:`UC Berkeley, Nov. 2026`,
  links:[[`Project`,`${P}specialist-ai.github.io/`],[`Code`,`${P}github.com/specialist-ai/specialist`],[`Video`,`${P}youtu.be/5yV120OGIXg`]] },
];
REFS.sort((a, b) => a.n - b.n);

/* ---------- media embedded in figures ---------- */
const MEDIA = {
  umi_original:{fit:true, ref:3, kind:`video`, src:`${P}umi-gripper.github.io/videos/task_dish_washing_1x_compressed.mp4`, mb:3.5, env:`hw`, credit:`UMI authors · umi-gripper.github.io`, cap:{zh:`UMI 原作：双臂洗碗；可切换查看人的采集示范`,en:`Original UMI: bimanual dish washing; switch to the human demonstration`},
    tabs:[{zh:`机器人执行`,en:`Robot rollout`},{zh:`采集示范`,en:`Human demo`}],
    alt:{fit:true,kind:`video`,src:`${P}umi-gripper.github.io/videos/teaser_data_collection_dish.mp4`,mb:3.1,credit:`UMI authors · umi-gripper.github.io`}},
  aloha_teleop:{fit:true, ref:2, kind:`video`, src:`${P}tonyzhaozh.github.io/aloha/resources/teleop_all.mp4`, mb:83.8, env:`hw`, credit:`ALOHA authors`, cap:{zh:`ALOHA：操作者通过主臂遥控机器人，采集双臂示范`,en:`ALOHA: an operator uses leader arms to collect bimanual robot demonstrations`}},
  aloha_policy:{fit:true, ref:2, kind:`video`, src:`${P}tonyzhaozh.github.io/aloha/resources/slot_battery.mp4`, mb:14.1, env:`hw`, credit:`ALOHA / ACT authors`, cap:{zh:`ACT：从 Teleop 数据学习后的自主执行（装入电池）`,en:`ACT: autonomous battery insertion after learning from teleoperated demonstrations`}},
  ego_capture:{fit:true, ref:28, kind:`video`, src:`${P}egomimic.github.io/static/videos/method1.mp4`, mb:22.0, credit:`EgoMimic authors`, cap:{zh:`EgoMimic：使用 Aria 眼镜采集第一视角人类示范`,en:`EgoMimic: collecting egocentric human demonstrations with Aria glasses`}},
  ego_rollout:{fit:true, ref:28, kind:`video`, src:`${P}egomimic.github.io/static/videos/zeroshot_collage.mp4`, mb:11.4, env:`hw`, credit:`EgoMimic authors`, cap:{zh:`EgoMimic：机器人在新场景中的执行片段`,en:`EgoMimic: robot rollouts in new scenes`}},
  spec_lego:{ref:26, kind:`video`, src:`${P}specialist-ai.github.io/media/robot/lego.mp4`, mb:0.7, env:`hw`, credit:`specialist-ai.github.io`, cap:{zh:`Specialist：机器人按颜色分拣 LEGO`,en:`Specialist: a robot sorts LEGO bricks by color`}},
  spec_yt:{ref:26, kind:`yt`, id:`5yV120OGIXg`, credit:`YouTube · Hybrid Robotics`, cap:{zh:`Specialist 项目视频`,en:`Specialist project video`}},
  om1_yt:{ref:22, kind:`yt`, id:`IJvyS2aPsnA`, credit:`YouTube · Reward AI`, cap:{zh:`OM-1：从人的演示中学习`,en:`OM-1: learned firsthand from humans`}},
  gen0:{ref:9, kind:`video`, src:`${P}generalistai.com/assets/pages/blog/gen-0/assets/gen0_teaser.mp4`, mb:2.8, env:`hw`, credit:`generalistai.com`, cap:{zh:`Generalist GEN-0 发布视频`,en:`Generalist GEN-0 launch video`}},
  pi07:{ref:16, kind:`video`, src:`${P}website.pi-asset.com/pi07/coffee_compressed.mp4`, mb:3.2, env:`hw`, credit:`pi.website`, cap:{zh:`PI π0.7 做咖啡`,en:`PI π0.7 making espresso`}},
  skild:{ref:19, kind:`video`, src:`${P}assets.skild.ai/site/v1/blog/sb-812a99baf442e4fb5939/coffee.mp4`, mb:15.6, env:`hw`, credit:`skild.ai`, cap:{zh:`Skild S1：看一段演示后执行同一任务`,en:`Skild S1: executing a task after one demonstration`},
    tabs:[{zh:`执行`,en:`Robot`},{zh:`提示视频`,en:`Prompt`}],
    alt:{kind:`video`, src:`${P}assets.skild.ai/site/v1/blog/sb-812a99baf442e4fb5939/coffee-prompt.mp4`, mb:12.1, credit:`skild.ai`}},
  helix02:{ref:13, kind:`video`, src:`${P}videos.ctfassets.net/qx5k8y1u9drj/4dGcifcElIySe06nG0FQG3/fb5c5867bc98337b7df448ed50769bea/Video_Cover_-_Desktop_Helix.mp4`, mb:8.3, env:`hw`, credit:`figure.ai`, cap:{zh:`Figure Helix 02 发布视频`,en:`Figure Helix 02 launch video`}},
  dyna21:{ref:23, kind:`video`, src:`${P}lwo9i05drr11nipi.public.blob.vercel-storage.com/videos/we-system0-sim-farm-v339.mp4`, mb:9.2, env:`sim`, credit:`dyna.co`, cap:{zh:`Dyna-2.1 的 Whole-Body Controller：数千个 Taku 在 Isaac Lab 中并行训练`,en:`Dyna-2.1's whole-body controller: thousands of simulated Taku robots training in parallel in Isaac Lab`}},
  onexwm:{ref:8, kind:`yt`, id:`xPX6dDRYbV4`, credit:`YouTube · 1X`, cap:{zh:`1X World Model`,en:`1X World Model`}},
};


REFS.push(
  {n:27,id:'ego4d',short:'Ego4D',cite:'K. Grauman et al.',title:'Ego4D: Around the World in 3,000 Hours of Egocentric Video',venue:'CVPR 2022',links:[['Project','https://ego4d-data.org/'],['Paper','https://arxiv.org/abs/2110.07058']]},
  {n:28,id:'egomimic',short:'EgoMimic',cite:'S. Kareer et al.',title:'EgoMimic: Scaling Imitation Learning via Egocentric Video',venue:'2024',links:[['Project','https://egomimic.github.io/'],['Paper','https://arxiv.org/abs/2410.24221']]},
  {n:29,id:'egodex',short:'EgoDex',cite:'Apple',title:'EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video',venue:'2025',links:[['Code and data','https://github.com/apple-aiml-research/ml-egodex'],['Paper','https://arxiv.org/abs/2505.11709']]}
);
MEDIA.egomimic = {ref:28,kind:'yt',id:'kgqQZVqJFlA',credit:'EgoMimic authors',cap:{zh:'EgoMimic：Egocentric 人类数据与机器人数据 Co-training',en:'EgoMimic: co-training with human egocentric and robot data'}};

// Primary sources for the cross-company narrative; numbers remain stable across pages.
REFS.push(
  {n:30,short:'Mobile ALOHA',cite:'Z. Fu, T. Z. Zhao, C. Finn',title:'Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation',venue:'CoRL 2024',links:[['Project','https://mobile-aloha.github.io/']]},
  {n:31,short:'Tony Zhao',cite:'Tony Z. Zhao',title:'Personal research biography',venue:'accessed Nov. 2026',links:[['Bio','https://tonyzhaozh.github.io/']]},
  {n:32,short:'Cheng Chi',cite:'Cheng Chi',title:'Personal research biography',venue:'accessed Nov. 2026',links:[['Bio','https://cheng-chi.github.io/']]},
  {n:33,short:'Zipeng Fu',cite:'Zipeng Fu',title:'Personal research biography',venue:'accessed Nov. 2026',links:[['Bio','https://zipengfu.github.io/']]},
  {n:34,short:'Chelsea Finn',cite:'Chelsea Finn',title:'Curriculum vitae',venue:'accessed Nov. 2026',links:[['CV','https://robotics.stanford.edu/~cbfinn/_files/cv.pdf']]},
  {n:35,short:'Robot-complete data',cite:'Shuran Song',title:'What I Wish I Had for Robot Learning',venue:'CoRL 2023 keynote abstract',links:[['Abstract','https://www.corl2023.org/speakers']]},
  {n:36,short:'Human-to-robot transfer',cite:'S. Kareer, K. Pertsch, J. Darpinian, J. Hoffman, D. Xu, S. Levine, C. Finn, S. Nair',title:'Emergence of Human to Robot Transfer in VLAs',venue:'Physical Intelligence, Dec. 2025',links:[['Blog','https://www.pi.website/research/human_to_robot']]},
  {n:37,short:'Tony on Helix 02',cite:'Tony Zhao',title:'Comment on the Helix 02 dishwasher demonstration',venue:'X, Jan. 27, 2026',links:[['Original post','https://x.com/tonyzzhao/status/2016221043715871181']]},
  {n:38,short:'Figure glassware response',cite:'Brett Adcock',title:'Glassware demonstration in response to Tony Zhao',venue:'X, Jan. 28, 2026',links:[['Original post','https://x.com/adcock_brett/status/2016600196428550309']]},
  {n:39,short:'Dishwasher exchange archive',cite:'Humanoids Daily',title:'The Dishwasher Wars: Figure Fires Back at Sunday Robotics with Glassware Demo',venue:'Jan. 28, 2026; embeds original posts',links:[['Report / embedded posts','https://www.humanoidsdaily.com/news/the-dishwasher-wars-figure-fires-back-at-sunday-robotics-with-glassware-demo']]}
);
MEDIA.mobile_aloha = {ref:30,kind:'video',fit:true,src:'https://mobile-aloha.github.io/resources/skills/wash_pan.mp4',credit:'Mobile ALOHA authors',cap:{zh:'Mobile ALOHA：自主清洗锅具，移动底盘与双臂协同',en:'Mobile ALOHA: autonomous pan washing with coordinated base and arms'}};
MEDIA.reward_hands = {ref:22,kind:'video',fit:true,src:'https://www.rewardai.com/blog/OM-1/videos/omnibody-hands-720-h264-labeled.mp4',credit:'Reward AI',cap:{zh:'OM-1：同一种 Omnibody Hand 用于人的采集与机器人的执行',en:'OM-1: Omnibody Hands on human demonstrators and robot arms'}};
MEDIA.om1_yt = {...MEDIA.reward_hands,cap:{zh:'OM-1：从人的演示中学习，采集端与执行端共享手部接口',en:'OM-1: learning from human demonstrations through a shared hand interface'}};
MEDIA.figure_glass = {ref:38,kind:'video',fit:true,src:'https://video.twimg.com/amplify_video/2016599269235707905/vid/avc1/480x852/YCc0tnNIV30jieuo.mp4',credit:'Brett Adcock / Figure · 2026-01-28',cap:{zh:'Figure 回应：Helix 02 操作玻璃器皿的片段',en:'Figure’s response: Helix 02 manipulating glassware'}};

REFS.push(
  {n:40,short:'Helix 2.5',cite:'Figure AI',title:'Helix 2.5: Zero-Shot 30-Home Generalization',venue:'Sep. 17, 2026',links:[['Blog','https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization'],['Original results figure','https://images.ctfassets.net/qx5k8y1u9drj/1uDWoFB8Pp4tABoKweAD5R/c9c8db99e1ca737eb5ed1275926bfbac/ZeroShotSuccess__2_.png']]},
  {n:41,short:'Tony on Helix 2.5',cite:'Tony Zhao',title:'Comment on reliability in Figure’s 30-home evaluation',venue:'X, Sep. 17, 2026',links:[['Original post','https://x.com/tonyzzhao/status/2100677624083423542'],['Text mirror','https://twiscan.com/en/x/tonyzzhao/2100677624083423542']]},
  {n:42,short:'Figure’s 30-home announcement',cite:'Brett Adcock',title:'Announcement of generalization across 30 unseen homes',venue:'X, Sep. 17, 2026',links:[['Original post','https://x.com/adcock_brett/status/2100657392056947066']]},
  {n:43,short:'ACT-2 Preview',cite:'Sunday Team',title:'ACT-2 Preview: Generalizing Reliability',venue:'Jul. 17, 2026',links:[['Blog','https://www.sunday.ai/blog/act-2-preview']]}
);
MEDIA.figure25 = {ref:40,kind:'video',fit:true,src:'https://videos.ctfassets.net/qx5k8y1u9drj/3o0Slich33yfh6rGIrnfjU/34a724da8c10868d0e403d9d52b85c13/3_Task_Overview_91726A.mp4',credit:'Figure · Helix 2.5 · 2026-09-17',cap:{zh:'Helix 2.5：整理玩具、叠毛巾与铺床的任务示例',en:'Helix 2.5: examples of toy tidying, towel folding and bed making'}};
