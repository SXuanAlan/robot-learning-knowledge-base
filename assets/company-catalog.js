// Company dossiers: additional primary reports and contextual media.
REFS.find(r => r.n === 16).links.push(['Paper','https://www.pi.website/download/pi07.pdf']);
REFS.push(
  {"n":44,"short":"π0.5","cite":"Physical Intelligence","title":"π0.5: A Vision-Language-Action Model with Open-World Generalization","venue":"Apr. 2025","links":[["Blog","https://www.pi.website/blog/pi05"],["Paper","https://www.pi.website/download/pi05.pdf"]]},
  {"n":45,"short":"FAST","cite":"K. Pertsch et al.","title":"FAST: Efficient Action Tokenization for Vision-Language-Action Models","venue":"Jan. 2025","links":[["Blog","https://www.pi.website/research/fast"],["Paper","https://arxiv.org/abs/2501.09747"]]},
  {"n":46,"short":"Knowledge Insulation","cite":"D. Driess et al.","title":"Knowledge Insulating Vision-Language-Action Models: Train Fast, Run Fast, Generalize Better","venue":"May 2025","links":[["Blog","https://www.pi.website/research/knowledge_insulation"],["Paper","https://www.pi.website/download/pi05_KI.pdf"]]},
  {"n":47,"short":"MEM","cite":"Physical Intelligence","title":"VLAs with Long and Short-Term Memory","venue":"Mar. 2026","links":[["Blog","https://www.pi.website/research/memory"],["Paper","https://www.pi.website/download/Mem.pdf"]]},
  {"n":48,"short":"RTC","cite":"Physical Intelligence","title":"Real-Time Action Chunking with Large Models","venue":"Jun. 2025","links":[["Blog","https://www.pi.website/research/real_time_chunking"],["Paper","https://www.pi.website/download/real_time_chunking.pdf"]]},
  {"n":49,"short":"RLT","cite":"C. Xu et al.","title":"Precise Manipulation with Efficient Online RL","venue":"Mar. 2026","links":[["Blog","https://www.pi.website/research/rlt"],["Paper","https://www.pi.website/download/rlt.pdf"]]},
  {"n":50,"short":"GR00T 2","cite":"NVIDIA GEAR","title":"GR00T 2: Scaling Robot Foundation Models for Generalization, Dexterity, and Adaptation","venue":"Nov. 2026","links":[["Blog","https://research.nvidia.com/labs/gear/gr00t-2/"],["Paper","https://research.nvidia.com/labs/gear/gr00t-2/assets/gr00t2_whitepaper.pdf"]]},
  {"n":51,"short":"Gemini Robotics 1.5","cite":"Google DeepMind","title":"Gemini Robotics 1.5 brings AI agents into the physical world","venue":"Sep. 2025","links":[["Blog","https://deepmind.google/blog/gemini-robotics-15-brings-ai-agents-into-the-physical-world/"],["Paper","https://storage.googleapis.com/deepmind-media/gemini-robotics/Gemini-Robotics-1-5-Tech-Report.pdf"]]},
  {"n":52,"short":"Physical Self-Play","cite":"Skild Team","title":"Physical Self-Play","venue":"Sep. 23, 2026","links":[["Blog","https://skild.ai/blogs/physical-self-play"]]},
  {"n":53,"short":"1XWM Policy","cite":"1X AI Team","title":"From Video to Action: A New Way Robots Learn","venue":"Jan. 12, 2026","links":[["Blog","https://www.1x.tech/discover/world-model-self-learning"]]},
  {"n":54,"short":"1XWM Evaluation","cite":"1X AI Team","title":"1X World Model: Evaluating Bits, not Atoms","venue":"Jun. 2025","links":[["Blog","https://www.1x.tech/discover/redwood-ai-world-model"],["Paper","https://www.1x.tech/1x-world-model.pdf"]]},
  {"n":55,"short":"SGS","cite":"O. Zhang, M. Guaman Castro, P. Yin, I. Dagnino, A. Gupta, R. Scalise, B. Boots","title":"A Balanced Data Diet: Addressing the Exploration Bottleneck in Mega-Scale RL for Robot Control","venue":"CoRL 2026","links":[["Blog","https://sgs-rl.github.io/"],["Paper","https://arxiv.org/abs/2610.12465"]]},
  {"n":56,"short":"SGS thread","cite":"Octi Zhang","title":"SGS release thread","venue":"X, Oct. 9, 2026","links":[["Blog","https://x.com/octi_zhang/status/2108583315544682914"]]},
  {"n":57,"short":"Gemini Robotics 2 safety","cite":"Google DeepMind","title":"Gemini Robotics 2: Safety Technical Report","venue":"2026","links":[["Blog","https://storage.googleapis.com/deepmind-media/gemini-robotics/Gemini-Robotics-2-Safety.pdf"]]}
);
Object.assign(MEDIA,{
  "sunday_act1":{"ref":12,"kind":"video","fit":true,"src":"https://stream.mux.com/Mr4021teLzhkct5004YOtApgzJGmxfPS4QvNqKmEYZofs/highest.mp4","credit":"Sunday Robotics","cap":{"zh":"ACT-1：官方精细操作片段","en":"ACT-1: official dexterity clip"}},
  "sgs_nut":{"ref":55,"kind":"video","fit":true,"src":"https://sgs-rl.github.io/media/library/clips/ur5e-real-nut-3.mp4","credit":"SGS authors · CoRL 2026 · Real robot","cap":{"zh":"SGS：UR5e 真机螺母装配，1×","en":"SGS: UR5e nut assembly on hardware, 1×"}},
  "sgs_gear":{"ref":55,"kind":"video","fit":true,"src":"https://sgs-rl.github.io/media/library/clips/ur5e-real-gear-mesh-1.mp4","credit":"SGS authors · CoRL 2026 · Real robot","cap":{"zh":"SGS：UR5e 真机齿轮啮合，1×","en":"SGS: UR5e gear meshing on hardware, 1×"}},
  "pi_recap": {
    "ref": 11,
    "kind": "video",
    "src": "https://website.pi-asset.com/pi06star/value_folding_3.mp4",
    "cap": {
      "zh": "π*0.6 / RECAP：折衣过程的价值估计",
      "en": "π*0.6 / RECAP: value estimates during folding"
    },
    "credit": "Physical Intelligence",
    "fit": true
  },
  "reward_launch": {
    "ref": 22,
    "kind": "yt",
    "id": "IJvyS2aPsnA",
    "cap": {
      "zh": "Introducing OM-1：原始发布 Demo",
      "en": "Introducing OM-1: original launch demo"
    },
    "credit": "Reward AI · YouTube",
    "fit": true
  },
  "reward_cross": {
    "ref": 22,
    "kind": "video",
    "src": "https://www.rewardai.com/blog/OM-1/videos/cross-embodiment-720-h264-labeled.mp4",
    "cap": {
      "zh": "OM-1：官方跨本体演示",
      "en": "OM-1: official cross-body demonstration"
    },
    "credit": "Reward AI",
    "fit": true
  },
  "reward_unscrew": {
    "ref": 22,
    "kind": "video",
    "src": "https://www.rewardai.com/blog/OM-1/videos/unscrew-720-h264-labeled.mp4",
    "cap": {
      "zh": "OM-1：旋开连接件",
      "en": "OM-1: unscrewing a fitting"
    },
    "credit": "Reward AI",
    "fit": true
  },
  "reward_ethernet": {
    "ref": 22,
    "kind": "video",
    "src": "https://www.rewardai.com/blog/OM-1/videos/ethernet-unplug-720-h264-labeled.mp4",
    "cap": {
      "zh": "OM-1：拔出网线",
      "en": "OM-1: unplugging Ethernet"
    },
    "credit": "Reward AI",
    "fit": true
  },
  "gen1_fold": {
    "ref": 15,
    "kind": "video",
    "src": "https://generalistai.com/assets/pages/blog/gen-1/assets/generalist-gen1-tshirt-folding-86-50x.mp4",
    "cap": {
      "zh": "GEN-1：连续折衣（原片 50× 加速）",
      "en": "GEN-1: consecutive folding (50× time-lapse)"
    },
    "credit": "Generalist · 50×",
    "fit": true
  },
  "gen15_demo": {
    "ref": 20,
    "kind": "video",
    "src": "https://generalistai.com/assets/pages/blog/gen-1.5/assets/videos/compose_prompt.mp4",
    "cap": {
      "zh": "GEN-1.5：任务组合的提示与执行",
      "en": "GEN-1.5: compositional task prompting and execution"
    },
    "credit": "Generalist",
    "fit": true
  },
  "dyna2_rollout": {
    "ref": 18,
    "kind": "video",
    "src": "https://www.dyna.co/assets/videos/dyna2-fig6-robot-gallery-mobile.mp4",
    "cap": {
      "zh": "Dyna-2：官方机器人执行示例",
      "en": "Dyna-2: official robot execution examples"
    },
    "credit": "Dyna Robotics",
    "fit": true
  },
  "dyna_workflow": {
    "ref": 23,
    "kind": "video",
    "src": "https://www.dyna.co/assets/research/whole-employee/server-e2e-final.mp4",
    "cap": {
      "zh": "Dyna-2.1：Taku 服务器维护（原片 2×）",
      "en": "Dyna-2.1: Taku server maintenance (2× playback)"
    },
    "credit": "Dyna Robotics",
    "fit": true
  },
  "skild_selfplay": {
    "ref": 52,
    "kind": "video",
    "src": "https://assets.skild.ai/site/v1/blog/ps-6951ca2f9fab4531409a/soccer-gray.mp4",
    "cap": {
      "zh": "Physical Self-Play：仿真足球",
      "en": "Physical Self-Play: simulated soccer"
    },
    "credit": "Skild AI · Simulation",
    "fit": true
  },
  "groot2": {
    "ref": 50,
    "kind": "video",
    "src": "https://research.nvidia.com/labs/gear/gr00t-2/assets/video/xadapt_h2r_filter.mp4",
    "cap": {
      "zh": "GR00T 2：从人类示范到机器人滤纸操作",
      "en": "GR00T 2: human-to-robot filter-paper manipulation"
    },
    "credit": "NVIDIA GEAR",
    "fit": true
  },
  "groot_turbo": {
    "ref": 50,
    "kind": "video",
    "src": "https://research.nvidia.com/labs/gear/gr00t-2/assets/video/g1_popcorn_delivery.mp4",
    "cap": {
      "zh": "GR00T 2 Turbo：G1 运送爆米花",
      "en": "GR00T 2 Turbo: G1 popcorn delivery"
    },
    "credit": "NVIDIA GEAR",
    "fit": true
  },
  "gemini2": {
    "ref": 17,
    "kind": "yt",
    "id": "4lSQnrMC6nY",
    "cap": {
      "zh": "Gemini Robotics 2：官方发布演示",
      "en": "Gemini Robotics 2: official release demonstration"
    },
    "credit": "Google DeepMind · YouTube",
    "fit": true
  },
  "gemini_local": {
    "ref": 17,
    "kind": "video",
    "src": "https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/MVCfTE-4h3AwDVPZ/gdm_robotics_six-grid_270726.webm",
    "cap": {
      "zh": "Gemini Robotics On-Device 2：不同本体的任务执行",
      "en": "Gemini Robotics On-Device 2: execution across embodiments"
    },
    "credit": "Google DeepMind",
    "fit": true
  },
  "one_x_launch": {
    "ref": 53,
    "kind": "yt",
    "id": "lS_z60kjVEk",
    "cap": {
      "zh": "1XWM：原作视频预测与 NEO 执行演示",
      "en": "1XWM: original prediction and NEO execution demo"
    },
    "credit": "1X · YouTube",
    "fit": true
  }
});
