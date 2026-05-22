"use client";

import { memo, useEffect, useRef, useState } from "react";

const dreamWorldMarkup = "<!-- CURSOR -->\n<div id=\"cursor\"></div>\n<div id=\"cursor-trail\"></div>\n\n<!-- HUD FRAME -->\n<div class=\"hud-bracket-tl\"></div>\n<div class=\"hud-bracket-tr\"></div>\n<div class=\"hud-bracket-bl\"></div>\n<div class=\"hud-bracket-br\"></div>\n<div class=\"hud-corner hud-tl\">\n  DREAM · WORLD<br>\n  <span id=\"hud-section\">LAYER · 00</span>\n</div>\n<div class=\"hud-corner hud-tr\">\n  <span id=\"hud-time\">--:--:--</span><br>\n  SYS · ONLINE\n</div>\n<div class=\"hud-corner hud-bl\">\n  SCROLL · DEPTH<br>\n  <span id=\"hud-depth\">000%</span>\n</div>\n<div class=\"hud-corner hud-br\">\n  CURSOR · ACTIVE<br>\n  <span id=\"hud-xy\">000 · 000</span>\n</div>\n\n<!-- BACKGROUND CANVAS -->\n<canvas id=\"bg-canvas\"></canvas>\n\n<!-- NAV -->\n<nav id=\"main-nav\">\n  <div class=\"nav-logo\">DW · 梦境</div>\n  <ul class=\"nav-links\">\n    <li><a href=\"#about\">关于</a></li>\n    <li><a href=\"#skills\">技能</a></li>\n    <li><a href=\"#projects\">项目</a></li>\n    <li><a href=\"#contact\">联系</a></li>\n  </ul>\n</nav>\n\n<!-- LOADER -->\n<div id=\"loader\">\n  <div class=\"loader-noise\" aria-hidden=\"true\"></div>\n  <div class=\"loader-burst\" aria-hidden=\"true\"></div>\n  <div class=\"loader-glyph loader-glyph-top\">ONEIRION · DREAM SYSTEM · INITIALIZING</div>\n  <div class=\"loader-title\" aria-label=\"WHERE WORLDS BEGIN\">\n    <span class=\"loader-line loader-line-one\">WHERE WORLDS</span>\n    <span class=\"loader-line loader-line-two\">BEGIN</span>\n  </div>\n  <button class=\"btn-enter\" id=\"btn-enter\">BEGIN JOURNEY</button>\n  <div class=\"loader-glyph loader-glyph-bottom\">LAYER 01 · VOID WORLD · READY</div>\n</div>\n\n<!-- ── SECTION 1: HERO ── -->\n<section class=\"section\" id=\"hero\">\n  <div class=\"parallax-fog\" data-speed=\"0.3\"></div>\n  <video autoPlay muted loop playsInline src=\"videos/hero.mp4\" style=\"position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;opacity:0.6\"></video>\n  <div class=\"hero-video-frame\"></div>\n  <div class=\"hero-content\">\n    <div class=\"hero-eyebrow reveal\">DREAM WORLD · 01 · ENTRY</div>\n    <h1 class=\"hero-title reveal reveal-delay-1\">\n      WANG<br>NAN\n    </h1>\n    <p class=\"hero-sub reveal reveal-delay-2\">\n      一个试图把 AI 变成梦境的人<br>\n      正在建造属于自己的世界\n    </p>\n    <div class=\"scroll-hint reveal reveal-delay-3\">\n      <div class=\"scroll-line\"></div>\n      SCROLL · 向下探索\n    </div>\n  </div>\n</section>\n\n<!-- ── CHAPTER MARKER ── -->\n<div class=\"chapter-divider\"><span>CHAPTER · 02 · SELF</span></div>\n\n<!-- ── SECTION 2: ABOUT ── -->\n<section class=\"section\" id=\"about\">\n  <div class=\"parallax-fog\" data-speed=\"0.5\"></div>\n  <div class=\"section-header reveal\">\n    <div class=\"section-num\">02 · ABOUT</div>\n    <h2 class=\"section-title\">About Me</h2>\n    <div class=\"section-line\"></div>\n  </div>\n  <div class=\"about-inner reveal reveal-delay-1\">\n    <div class=\"about-identity\">\n      <div class=\"about-pinyin\">WANG NAN</div>\n      <div class=\"about-big-name\">王楠</div>\n      <div class=\"about-role-line\">AI 训练师 / 多模态评测 / 3D角色建模</div>\n    </div>\n    <div class=\"about-advantages\">\n      <div class=\"advantage-row\">\n        <span class=\"advantage-dot\"></span>\n        <span class=\"advantage-copy\">多模态视频生成评测，累计完成 <strong class=\"about-metric-number\" data-count=\"8000\" data-suffix=\"+\">0</strong> 条数据标注，通过率 <strong class=\"about-metric-number\" data-count=\"95\" data-suffix=\"%\">0</strong></span>\n      </div>\n      <div class=\"advantage-row\">\n        <span class=\"advantage-dot\"></span>\n        <span class=\"advantage-copy\">AI 自动化评测协作，效率提升约 <strong class=\"about-metric-number\" data-count=\"2\" data-suffix=\"倍\">0</strong>，日均 50 组到 100 组</span>\n      </div>\n      <div class=\"advantage-row\">\n        <span class=\"advantage-dot\"></span>\n        <span class=\"advantage-copy\">千帆 Agent 工作流搭建，任务拆解、节点编排、功能测试</span>\n      </div>\n      <div class=\"advantage-row\">\n        <span class=\"advantage-dot\"></span>\n        <span class=\"advantage-copy\"><strong class=\"about-metric-number\" data-count=\"2\" data-suffix=\"年\">0</strong> 次世代 3D 角色建模，熟悉风格化 / 二次元 / 卡通风格审核</span>\n      </div>\n      <div class=\"advantage-row\">\n        <span class=\"advantage-dot\"></span>\n        <span class=\"advantage-copy\">熟练使用 ChatGPT、Claude、Codex、可灵、即梦、VEO3.0</span>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"chapter-divider\"><span>CHAPTER · 03 · SKILL FOREST</span></div>\n\n<!-- ── SECTION 3: SKILLS ── -->\n<section class=\"section\" id=\"skills\">\n  <div class=\"parallax-fog\" data-speed=\"0.4\"></div>\n  <div class=\"section-header reveal\">\n    <div class=\"section-num\">03 · SKILLS</div>\n    <h2 class=\"section-title\">Skill Forest</h2>\n    <div class=\"section-line\"></div>\n  </div>\n\n  <div class=\"skill-forest reveal reveal-delay-1\">\n    <svg class=\"forest-map\" style=\"position:absolute;inset:0;width:100%;height:100%;pointer-events:none;\">\n      <line class=\"forest-connector\" x1=\"50%\" y1=\"50%\" x2=\"24%\" y2=\"20%\"/>\n      <line class=\"forest-connector\" x1=\"50%\" y1=\"50%\" x2=\"76%\" y2=\"20%\"/>\n      <line class=\"forest-connector\" x1=\"50%\" y1=\"50%\" x2=\"24%\" y2=\"80%\"/>\n      <line class=\"forest-connector\" x1=\"50%\" y1=\"50%\" x2=\"76%\" y2=\"80%\"/>\n    </svg>\n\n    <div class=\"skill-node skill-node-core\" data-skill=\"T2V\" role=\"button\" tabindex=\"0\" style=\"left:50%;top:50%;--size:74px;--breathe:3s;--delay:0s;\">\n      <div class=\"node-orb\"><div class=\"node-inner\">T2V</div></div>\n      <div class=\"node-label\">AI 生图/视频<br>Stable Diffusion · 可灵 · 即梦 · VEO3.0</div>\n    </div>\n    <div class=\"skill-node\" data-skill=\"LLM\" role=\"button\" tabindex=\"0\" style=\"left:24%;top:20%;--size:50px;--breathe:4s;--delay:0.3s;\">\n      <div class=\"node-orb\"><div class=\"node-inner\">LLM</div></div>\n      <div class=\"node-label\">AI 对话/训练<br>ChatGPT · Claude · Prompt优化</div>\n    </div>\n    <div class=\"skill-node\" data-skill=\"AGT\" role=\"button\" tabindex=\"0\" style=\"left:76%;top:20%;--size:50px;--breathe:5s;--delay:0.6s;\">\n      <div class=\"node-orb\"><div class=\"node-inner\">AGT</div></div>\n      <div class=\"node-label\">Agent/工作流<br>千帆工作流 · 自动化评测</div>\n    </div>\n    <div class=\"skill-node\" data-skill=\"EVAL\" role=\"button\" tabindex=\"0\" style=\"left:24%;top:80%;--size:48px;--breathe:4.5s;--delay:0.9s;\">\n      <div class=\"node-orb\"><div class=\"node-inner\">EVAL</div></div>\n      <div class=\"node-label\">模型评测<br>多模态评测 · 打分体系 · 评测规范</div>\n    </div>\n    <div class=\"skill-node\" data-skill=\"3D\" role=\"button\" tabindex=\"0\" style=\"left:76%;top:80%;--size:48px;--breathe:3.5s;--delay:1.2s;\">\n      <div class=\"node-orb\"><div class=\"node-inner\">3D</div></div>\n      <div class=\"node-label\">美术/3D<br>ZBrush · 3DsMax · SubstancePainter · Maya</div>\n    </div>\n  </div>\n</section>\n\n<div class=\"chapter-divider\"><span>CHAPTER · 04 · PROJECT WORLDS</span></div>\n\n<!-- ── SECTION 5: PROJECTS ── -->\n<section class=\"section\" id=\"projects\">\n  <div class=\"parallax-fog\" data-speed=\"0.3\"></div>\n  <div class=\"section-header reveal\">\n    <div class=\"section-num\">04 · WORKS</div>\n    <h2 class=\"section-title\">Project Worlds</h2>\n    <div class=\"section-line\"></div>\n  </div>\n\n  <div class=\"project-filter-status\" id=\"project-filter-status\" hidden>\n    <span id=\"project-filter-text\"></span>\n    <button id=\"clear-project-filter\" type=\"button\"></button>\n  </div>\n\n  <div class=\"projects-grid\">\n    <div class=\"project-ruin reveal\" data-project=\"auto\">\n      <div class=\"project-idx\">001</div>\n      <div>\n        <div class=\"project-name\">自动化评测系统 · 2026.01-2026.04</div>\n        <p class=\"project-desc\">人工逐条评测视频生成内容效率低、标准不统一，搭建可批量处理的自动化评测流程，提升内容质检效率。<br><br>职责 · 参与自动化评测流程搭建与规则校准，对生成视频进行图文对齐度、风格一致性、画面连贯性的自动检测；用1000+生成样本对比自动评测与人工评测结果差异，协助调整评测判定标准。<br><br>成果 · 自动评测与人工评测吻合度≥88%，校准样本1000+；原需4人的任务压缩至2人完成，人力减少约50%，单人效率提升约2倍。</p>\n        <div class=\"project-stack\">\n          \n          <span class=\"stack-tag\">自动化评测</span>\n          <span class=\"stack-tag\">规则校准</span>\n          <span class=\"stack-tag\">Badcase分析</span>\n          <span class=\"stack-tag\">数据规范</span>\n        </div>\n      </div>\n      <div class=\"project-metrics\" aria-hidden=\"true\"><strong>88%</strong><span>MATCH</span><strong>50%</strong><span>LESS LABOR</span></div>\n      <button class=\"project-cta\">ENTER ↗</button>\n    </div>\n\n    <div class=\"project-ruin reveal reveal-delay-1\" data-project=\"agent\">\n      <div class=\"project-idx\">002</div>\n      <div>\n        <div class=\"project-name\">Agent工作流搭建与功能评测 · 2025.06-2025.12</div>\n        <p class=\"project-desc\">使用千帆搭建AI工作流，验证Agent在复杂任务、多轮对话与工具调用场景中的稳定性。<br><br>职责 · 使用千帆搭建AI工作流，完成任务拆解、节点编排与流程测试；对Agent进行功能评测，覆盖指令理解准确率、多轮对话连贯性、工具调用成功率；整理评测报告反馈优化方向，定位功能异常与边界Case。<br><br>成果 · 完成4000+条Agent功能测试，覆盖工具调用、多轮对话、边界Case等场景；输出结构化评测报告，支持工作流稳定性持续优化。</p>\n        <div class=\"project-stack\">\n          \n          <span class=\"stack-tag\">千帆</span>\n          <span class=\"stack-tag\">Agent</span>\n          <span class=\"stack-tag\">工作流编排</span>\n          <span class=\"stack-tag\">模型评测</span>\n          <span class=\"stack-tag\">边界Case分析</span>\n        </div>\n      </div>\n      <div class=\"project-metrics\" aria-hidden=\"true\"><strong>4000+</strong><span>TESTS</span><strong>CASE</strong><span>BOUNDARY</span></div>\n      <button class=\"project-cta\">ENTER ↗</button>\n    </div>\n\n    <div class=\"project-ruin reveal reveal-delay-2\" data-project=\"t2v\">\n      <div class=\"project-idx\">003</div>\n      <div>\n        <div class=\"project-name\">多模态T2V文生视频训练数据生产 · 2025.02-2025.06</div>\n        <p class=\"project-desc\">针对Prompt质量不稳定、语义对齐度低的问题，通过Prompt优化与系统评测提升训练数据质量。<br><br>职责 · 对不同风格整理并迭代Prompt模板，覆盖画面风格、动作描述、场景氛围、镜头语言，每套风格平均经过7轮调整；按评测规范对生成视频进行人工打分，评估画面流畅度、内容匹配度、主体一致性；输出badcase归因报告，反馈优化生成规则。<br><br>成果 · 累计完成T2V数据标注与评测8000+条；语义匹配准确率由60%提升至85%；单次视频生成所需轮次由4.2次降至2.1次，效率提升50%；Prompt模板沉淀为团队标准。</p>\n        <div class=\"project-stack\">\n          \n          <span class=\"stack-tag\">T2V</span>\n          <span class=\"stack-tag\">Prompt优化</span>\n          <span class=\"stack-tag\">人工评测</span>\n          <span class=\"stack-tag\">Badcase归因</span>\n        </div>\n      </div>\n      <div class=\"project-metrics\" aria-hidden=\"true\"><strong>8000+</strong><span>DATA</span><strong>50%</strong><span>FASTER</span></div>\n      <button class=\"project-cta\">ENTER ↗</button>\n    </div>\n\n    <div class=\"project-ruin reveal\" data-project=\"3dasset\">\n      <div class=\"project-idx\">004</div>\n      <div>\n        <div class=\"project-name\">3D角色资产训练数据与质量评测 · 2024.06-2025.01</div>\n        <p class=\"project-desc\">为AI模型提供高质量3D角色训练数据，建立系统化的3D资产评测标准。<br><br>职责 · 参与制定3D角色资产评测规则，建立覆盖模型结构、拓扑、UV、PBR材质与风格一致性的审核标准；对二次元、风格化、写实等不同风格角色进行风格一致性评测；对动作绑定后的角色资产进行动画合理性检查；与算法团队同步AI生成角色的结构异常、材质错误与风格偏移问题。<br><br>成果 · 累计完成3D角色资产评测3000+条，覆盖6万+资产库；badcase分类准确率提升至92%+；团队风格审核一致率提升约25%；新增“风格一致性专项审核规则”。</p>\n        <div class=\"project-stack\">\n          <span class=\"stack-tag\">向己科技 · AI训练师</span>\n          <span class=\"stack-tag\">3D资产评测</span>\n          <span class=\"stack-tag\">拓扑审核</span>\n          <span class=\"stack-tag\">UV检查</span>\n          <span class=\"stack-tag\">PBR材质</span>\n          <span class=\"stack-tag\">风格一致性</span>\n        </div>\n      </div>\n      <div class=\"project-metrics\" aria-hidden=\"true\"><strong>3000+</strong><span>ASSETS</span><strong>92%+</strong><span>BADCASE</span></div>\n      <button class=\"project-cta\">ENTER ↗</button>\n    </div>\n\n    <div class=\"project-ruin reveal reveal-delay-1\" data-project=\"modeling\">\n      <div class=\"project-idx\">005</div>\n      <div>\n        <div class=\"project-name\">次世代角色模型全流程制作 · 2022.08-2024.02</div>\n        <p class=\"project-desc\">负责游戏次世代角色模型全流程制作，涵盖风格化、卡通等美术风格。<br><br>职责 · 分析原画设定，使用ZBrush完成中高模雕刻，精准还原原画比例与结构；执行拓扑重建，控制低模面数符合项目规范；展开UV，规划UV空间分布；使用SubstancePainter完成PBR材质制作，包括底色、粗糙度、金属度、法线贴图与纹理烘焙。<br><br>成果 · 独立完成多款上线游戏角色制作，包括趣加《Call of Antia》、祖龙娱乐《以闪亮之名》、腾讯《天涯明月刀手游》、永航科技《QQ炫舞》等；简单模型1-2天，复杂模型1个月以上。</p>\n        <div class=\"project-stack\">\n          <span class=\"stack-tag\">那美网络科技有限公司 · 次世代3D角色建模师</span>\n          <span class=\"stack-tag\">ZBrush</span>\n          <span class=\"stack-tag\">3DsMax</span>\n          <span class=\"stack-tag\">SubstancePainter</span>\n          <span class=\"stack-tag\">Maya</span>\n          <span class=\"stack-tag\">PBR材质</span>\n        </div>\n      </div>\n      <div class=\"project-metrics\" aria-hidden=\"true\"><strong>1-2D</strong><span>SIMPLE</span><strong>1M+</strong><span>COMPLEX</span></div>\n      <button class=\"project-cta\">ENTER ↗</button>\n    </div>\n\n  </div>\n</section>\n\n<div class=\"chapter-divider\"><span>CHAPTER · 05 · DEEP DREAM</span></div>\n\n<!-- ── SECTION 6: DEEP ── -->\n<section class=\"section\" id=\"deep\">\n  <div class=\"parallax-fog\" data-speed=\"0.7\"></div>\n  <div class=\"deep-works-inner\">\n    <p class=\"deep-text reveal\">每一个世界都是一次向内的旅程</p>\n    <div class=\"works-accordion-list reveal reveal-delay-1\">\n      <article class=\"works-accordion is-open\" data-works-category=\"zodiac\">\n        <button class=\"works-accordion-header\" type=\"button\" aria-expanded=\"true\">\n          <span class=\"works-accordion-num\">01</span>\n          <span class=\"works-accordion-title\">十二生肖</span>\n          <span class=\"works-accordion-meta\">Zodiac</span>\n          <span class=\"works-accordion-arrow\">↗</span>\n        </button>\n        <div class=\"works-accordion-panel\">\n          <div class=\"works-track-frame\" data-label=\"01 · Zodiac · HORIZONTAL ARCHIVE\">\n            <div class=\"works-track\">\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-01.jpg\" alt=\"十二生肖 01\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 01</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-02.jpg\" alt=\"十二生肖 02\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 02</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-03.jpg\" alt=\"十二生肖 03\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 03</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-04.jpg\" alt=\"十二生肖 04\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 04</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-05.jpg\" alt=\"十二生肖 05\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 05</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-06.jpg\" alt=\"十二生肖 06\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 06</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-07.jpg\" alt=\"十二生肖 07\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 07</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-08.jpg\" alt=\"十二生肖 08\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 08</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-09.jpg\" alt=\"十二生肖 09\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 09</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-10.jpg\" alt=\"十二生肖 10\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 10</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-11.jpg\" alt=\"十二生肖 11\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 11</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-12.jpg\" alt=\"十二生肖 12\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 12</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Zodiac/zodiac-13.jpg\" alt=\"十二生肖 13\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">十二生肖</span>\n              <span class=\"works-card-meta\">Zodiac · 13</span>\n            </figcaption>\n          </figure>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"works-accordion\" data-works-category=\"anime\">\n        <button class=\"works-accordion-header\" type=\"button\" aria-expanded=\"false\">\n          <span class=\"works-accordion-num\">02</span>\n          <span class=\"works-accordion-title\">二次元角色原画</span>\n          <span class=\"works-accordion-meta\">Anime Character</span>\n          <span class=\"works-accordion-arrow\">↗</span>\n        </button>\n        <div class=\"works-accordion-panel\">\n          <div class=\"works-track-frame\" data-label=\"02 · Anime Character · HORIZONTAL ARCHIVE\">\n            <div class=\"works-track\">\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Anime%20Character/Anime%20Character-01.jpg\" alt=\"二次元角色原画 01\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">二次元角色原画</span>\n              <span class=\"works-card-meta\">Anime Character · 01</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Anime%20Character/Anime%20Character-02.jpg\" alt=\"二次元角色原画 02\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">二次元角色原画</span>\n              <span class=\"works-card-meta\">Anime Character · 02</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Anime%20Character/Anime%20Character-03.jpg\" alt=\"二次元角色原画 03\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">二次元角色原画</span>\n              <span class=\"works-card-meta\">Anime Character · 03</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Anime%20Character/Anime%20Character-04.jpg\" alt=\"二次元角色原画 04\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">二次元角色原画</span>\n              <span class=\"works-card-meta\">Anime Character · 04</span>\n            </figcaption>\n          </figure>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"works-accordion\" data-works-category=\"product\">\n        <button class=\"works-accordion-header\" type=\"button\" aria-expanded=\"false\">\n          <span class=\"works-accordion-num\">03</span>\n          <span class=\"works-accordion-title\">产品广告</span>\n          <span class=\"works-accordion-meta\">Product Ad</span>\n          <span class=\"works-accordion-arrow\">↗</span>\n        </button>\n        <div class=\"works-accordion-panel\">\n          <div class=\"works-track-frame\" data-label=\"03 · Product Ad · HORIZONTAL ARCHIVE\">\n            <div class=\"works-track\">\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Product%20Ad/Product%20Ad-01.jpg\" alt=\"产品广告 01\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">产品广告</span>\n              <span class=\"works-card-meta\">Product Ad · 01</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Product%20Ad/Product%20Ad-02.jpg\" alt=\"产品广告 02\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">产品广告</span>\n              <span class=\"works-card-meta\">Product Ad · 02</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Product%20Ad/Product%20Ad-03.jpg\" alt=\"产品广告 03\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">产品广告</span>\n              <span class=\"works-card-meta\">Product Ad · 03</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Product%20Ad/Product%20Ad-04.jpg\" alt=\"产品广告 04\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">产品广告</span>\n              <span class=\"works-card-meta\">Product Ad · 04</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Product%20Ad/Product%20Ad-05.jpg\" alt=\"产品广告 05\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">产品广告</span>\n              <span class=\"works-card-meta\">Product Ad · 05</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Product%20Ad/Product%20Ad-06.jpg\" alt=\"产品广告 06\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">产品广告</span>\n              <span class=\"works-card-meta\">Product Ad · 06</span>\n            </figcaption>\n          </figure>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"works-accordion\" data-works-category=\"game\">\n        <button class=\"works-accordion-header\" type=\"button\" aria-expanded=\"false\">\n          <span class=\"works-accordion-num\">04</span>\n          <span class=\"works-accordion-title\">游戏场景</span>\n          <span class=\"works-accordion-meta\">Game Scene</span>\n          <span class=\"works-accordion-arrow\">↗</span>\n        </button>\n        <div class=\"works-accordion-panel\">\n          <div class=\"works-track-frame\" data-label=\"04 · Game Scene · HORIZONTAL ARCHIVE\">\n            <div class=\"works-track\">\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Game%20Scene/Game%20Scene-01.jpg\" alt=\"游戏场景 01\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">游戏场景</span>\n              <span class=\"works-card-meta\">Game Scene · 01</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Game%20Scene/Game%20Scene-02.jpg\" alt=\"游戏场景 02\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">游戏场景</span>\n              <span class=\"works-card-meta\">Game Scene · 02</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Game%20Scene/Game%20Scene-03.jpg\" alt=\"游戏场景 03\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">游戏场景</span>\n              <span class=\"works-card-meta\">Game Scene · 03</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Game%20Scene/Game%20Scene-04.jpg\" alt=\"游戏场景 04\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">游戏场景</span>\n              <span class=\"works-card-meta\">Game Scene · 04</span>\n            </figcaption>\n          </figure>\n            </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"works-accordion\" data-works-category=\"cartoon\">\n        <button class=\"works-accordion-header\" type=\"button\" aria-expanded=\"false\">\n          <span class=\"works-accordion-num\">05</span>\n          <span class=\"works-accordion-title\">卡通</span>\n          <span class=\"works-accordion-meta\">Cartoon</span>\n          <span class=\"works-accordion-arrow\">↗</span>\n        </button>\n        <div class=\"works-accordion-panel\">\n          <div class=\"works-track-frame\" data-label=\"05 · Cartoon · HORIZONTAL ARCHIVE\">\n            <div class=\"works-track\">\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Cartoon/Cartoon-01.jpg\" alt=\"卡通 01\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">卡通</span>\n              <span class=\"works-card-meta\">Cartoon · 01</span>\n            </figcaption>\n          </figure>\n          <figure class=\"works-card reveal\">\n            <img src=\"images/Cartoon/Cartoon-02.jpg\" alt=\"卡通 02\" loading=\"lazy\" />\n            <figcaption class=\"works-overlay\">\n              <span class=\"works-card-title\">卡通</span>\n              <span class=\"works-card-meta\">Cartoon · 02</span>\n            </figcaption>\n          </figure>\n            </div>\n          </div>\n        </div>\n      </article>\n    </div>\n  </div>\n</section>\n\n<div class=\"chapter-divider\"><span>CHAPTER · 06 · CONTACT</span></div>\n\n<!-- ── SECTION 7: CONTACT ── -->\n<section class=\"section\" id=\"contact\">\n  <div class=\"section-header reveal\">\n    <div class=\"section-num\">07 · END</div>\n    <h2 class=\"section-title\">Contact</h2>\n    <div class=\"section-line\"></div>\n  </div>\n  <div class=\"contact-inner\">\n    <div class=\"contact-grid reveal reveal-delay-1\">\n      <div class=\"contact-row\">\n        <span class=\"contact-key\">PHONE</span>\n        <span class=\"contact-val\">13520362249</span>\n      </div>\n      <div class=\"contact-row\">\n        <span class=\"contact-key\">EMAIL</span>\n        <span class=\"contact-val\">2904773451@qq.com</span>\n      </div>\n      <div class=\"contact-row\">\n        <span class=\"contact-key\">WECHAT</span>\n        <span class=\"contact-val\">nnn0906w</span>\n      </div>\n    </div>\n    <div class=\"contact-end reveal reveal-delay-2\">\n      DREAM WORLD · END OF JOURNEY<br>\n      ONEIRION · v1.0 · 2025<br>\n      ALL LAYERS EXPLORED\n    </div>\n  </div>\n</section>";

const sectionIds = ["hero", "about", "skills", "projects", "deep", "contact"];
const sectionLabels = ["ENTRY", "ABOUT", "SKILLS", "PROJECTS", "WORKS", "CONTACT"];
const transitionDuration = 900;
const textRevealSelector = [
  ".loader-title",
  ".section-title",
  ".hero-eyebrow",
  ".hero-title",
  ".hero-sub",
  ".scroll-hint",
  ".about-pinyin",
  ".about-big-name",
  ".about-role-line",
  ".advantage-copy",
  ".node-label",
  ".project-name",
  ".project-desc",
  ".deep-text",
  ".deep-sub",
  ".works-accordion-title",
  ".works-accordion-meta",
  ".works-card-title",
  ".works-card-meta",
  ".contact-key",
  ".contact-val",
  ".contact-end",
].join(",");

const prepareTextReveal = (root: ParentNode = document) => {
  root.querySelectorAll<HTMLElement>(textRevealSelector).forEach((element) => {
    if (element.dataset.textRevealReady === "true") return;
    element.dataset.textRevealReady = "true";
    let charIndex = 0;

    const wrapTextNode = (node: Text) => {
      const text = (node.textContent || "").replace(/\s+/g, " ").trim();
      if (!text.trim()) return;

      const fragment = document.createDocumentFragment();
      Array.from(text).forEach((char) => {
        if (char === "\n" || char === "\r" || char === "\t") return;
        const span = document.createElement("span");
        span.className = "char-reveal";
        span.style.setProperty("--char-index", String(charIndex));
        span.textContent = char === " " ? "\u00A0" : char;
        fragment.appendChild(span);
        charIndex += 1;
      });
      node.replaceWith(fragment);
    };

    const visit = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        wrapTextNode(node as Text);
        return;
      }
      Array.from(node.childNodes).forEach(visit);
    };

    Array.from(element.childNodes).forEach(visit);
  });
};

const playTextReveal = (root: ParentNode | null) => {
  if (!root) return;
  prepareTextReveal(root);
  root.querySelectorAll<HTMLElement>(textRevealSelector).forEach((element) => {
    if (element.dataset.textRevealed === "true") return;
    element.dataset.textRevealed = "true";
    window.setTimeout(() => element.classList.add("text-reveal-active"), 30);
  });
};

const getDeployAwareMarkup = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath) return dreamWorldMarkup;
  return dreamWorldMarkup.replace(/\s(src)=["']\/(?!\/)([^"']+)["']/g, ' $1="' + basePath + '/$2"');
};

const DreamWorldStatic = memo(function DreamWorldStatic() {
  return <main dangerouslySetInnerHTML={{ __html: getDeployAwareMarkup() }} />;
});

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [previousSection, setPreviousSection] = useState<number | null>(null);
  const currentSectionRef = useRef(0);
  const previousSectionRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);
  const hasEnteredRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  const goToSection = (nextIndex: number) => {
    if (!hasEnteredRef.current || isScrollingRef.current) return;

    const boundedIndex = Math.max(0, Math.min(sectionIds.length - 1, nextIndex));
    const activeIndex = currentSectionRef.current;
    if (boundedIndex === activeIndex) return;

    isScrollingRef.current = true;
    previousSectionRef.current = activeIndex;
    currentSectionRef.current = boundedIndex;
    setPreviousSection(activeIndex);
    setCurrentSection(boundedIndex);

    window.setTimeout(() => {
      isScrollingRef.current = false;
      previousSectionRef.current = null;
      setPreviousSection(null);
    }, transitionDuration);
  };

  useEffect(() => {
    sectionIds.forEach((id, index) => {
      const section = document.getElementById(id);
      if (!section) return;

      const isActive = index === currentSection;
      const isExiting = index === previousSection;
      section.classList.toggle("is-active", isActive);
      section.classList.toggle("is-exiting", isExiting);
      section.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    document.querySelectorAll<HTMLElement>(".section .reveal").forEach((element) => {
      const section = element.closest(".section");
      const isActive = section?.classList.contains("is-active") ?? false;
      if (isActive && hasEnteredRef.current) element.classList.add("visible");
    });

    if (hasEnteredRef.current) {
      playTextReveal(document.getElementById(sectionIds[currentSection]));
    }

    document.querySelectorAll<HTMLElement>(".parallax-fog").forEach((element) => {
      element.style.transform = "";
    });

    if (sectionIds[currentSection] === "about") {
      document.querySelectorAll<HTMLElement>(".about-metric-number").forEach((element) => {
        if (element.dataset.counted === "true") return;
        element.dataset.counted = "true";
        const target = Number(element.dataset.count || "0");
        const suffix = element.dataset.suffix || "";
        const duration = 1400;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = String(Math.round(target * eased)) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      });
    }

    const hudDepth = document.getElementById("hud-depth");
    const hudSection = document.getElementById("hud-section");
    const progress = Math.round((currentSection / (sectionIds.length - 1)) * 100);
    if (hudDepth) hudDepth.textContent = String(progress).padStart(3, "0") + "%";
    if (hudSection) hudSection.textContent = "LAYER · 0" + (currentSection + 1);
  }, [currentSection, previousSection]);

  useEffect(() => {
    const canvas = document.getElementById("bg-canvas") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    const cursor = document.getElementById("cursor");
    const trail = document.getElementById("cursor-trail");
    const hudXY = document.getElementById("hud-xy");
    const hudTime = document.getElementById("hud-time");
    const hudDepth = document.getElementById("hud-depth");
    const hudSection = document.getElementById("hud-section");
    const button = document.getElementById("btn-enter");
    const loader = document.getElementById("loader");
    const nav = document.getElementById("main-nav");
    const loaderBurst = document.querySelector(".loader-burst");
    const worksAccordions = Array.from(document.querySelectorAll<HTMLElement>(".works-accordion"));
    const worksHeaders = Array.from(document.querySelectorAll<HTMLButtonElement>(".works-accordion-header"));

    if (!canvas || !ctx) {
      return;
    }

    const context = ctx;
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let cursorFrame = 0;
    let timeTimer = 0;
    let frame = 0;
    const mouse = { x: 0, y: 0 };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const waveCount = 10;

    const waveYAt = (x: number, index: number, t: number) => {
      const bandTop = height * 0.58;
      const bandGap = Math.max(18, height * 0.032);
      const amplitude = 7 + index * 1.45;
      const frequency = 0.0055 + index * 0.00055;
      return bandTop + index * bandGap
        + Math.sin(x * frequency + t * 0.028 + index * 0.72) * amplitude
        + Math.sin(x * 0.014 + t * 0.015 + index * 1.4) * 4;
    };

    class WaterParticle {
      x = 0;
      y = 0;
      r = 0;
      speed = 0;
      alpha = 0;
      waveIndex = 0;
      offsetY = 0;
      flickerSpeed = 0;
      phase = 0;
      sparkle = false;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.waveIndex = Math.floor(Math.random() * waveCount);
        this.offsetY = (Math.random() - 0.5) * 34;
        this.r = Math.random() * 5 + 1;
        this.speed = 0.08 + Math.random() * 0.28;
        this.alpha = Math.random() * 0.38 + 0.24;
        this.flickerSpeed = 0.01 + Math.random() * 0.03;
        this.phase = Math.random() * Math.PI * 2;
        this.sparkle = Math.random() < 0.2;
      }

      update(t: number) {
        this.x += this.speed;
        if (this.x > width + 20) this.x = -20;
        this.y = waveYAt(this.x, this.waveIndex, t) + this.offsetY;
      }

      draw(t: number) {
        const flicker = 0.5 + (this.sparkle ? 0.56 : 0.4) * Math.sin(t * this.flickerSpeed + this.phase);
        const a = Math.max(0.04, Math.min(0.7, this.alpha * flicker));
        const glow = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * (this.sparkle ? 5.2 : 3.8));
        glow.addColorStop(0, "rgba(160,210,255," + a + ")");
        glow.addColorStop(0.34, "rgba(160,210,255," + (a * 0.34) + ")");
        glow.addColorStop(1, "rgba(160,210,255,0)");
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.fillStyle = glow;
        context.fill();
      }
    }

    class FarStar {
      x = 0;
      y = 0;
      r = 0;
      alpha = 0;
      phase = 0;
      speed = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height * (0.16 + Math.random() * 0.68);
        this.r = 8 + Math.random() * 4;
        this.alpha = 0.12 + Math.random() * 0.18;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = 0.015 + Math.random() * 0.035;
      }

      draw(t: number) {
        this.x += this.speed;
        if (this.x > width + this.r * 3) this.x = -this.r * 3;
        const a = Math.min(0.7, this.alpha * (0.5 + 0.5 * Math.sin(t * 0.015 + this.phase)));
        const glow = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 4.4);
        glow.addColorStop(0, "rgba(160,210,255," + a + ")");
        glow.addColorStop(0.18, "rgba(160,210,255," + (a * 0.28) + ")");
        glow.addColorStop(1, "rgba(160,210,255,0)");
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.fillStyle = glow;
        context.fill();
      }
    }

    class FogBlob {
      x = 0;
      y = 0;
      rx = 0;
      ry = 0;
      alpha = 0;
      vx = 0;
      phase = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.rx = Math.random() * 180 + 80;
        this.ry = Math.random() * 80 + 30;
        this.alpha = Math.random() * 0.025 + 0.005;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.phase = Math.random() * Math.PI * 2;
      }

      draw(t: number) {
        const a = this.alpha * (0.7 + 0.3 * Math.sin(t * 0.3 + this.phase));
        const gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.rx);
        gradient.addColorStop(0, "rgba(100,170,220," + a + ")");
        gradient.addColorStop(1, "rgba(100,170,220,0)");
        context.beginPath();
        context.ellipse(this.x, this.y, this.rx, this.ry, 0, 0, Math.PI * 2);
        context.fillStyle = gradient;
        context.fill();
        this.x += this.vx;
        if (this.x > width + this.rx) this.x = -this.rx;
      }
    }

    resize();
    const waterParticles = Array.from({ length: 200 }, () => new WaterParticle());
    const farStars = Array.from({ length: 10 }, () => new FarStar());
    const fogBlobs = Array.from({ length: 8 }, () => new FogBlob());

    const drawWaterWaves = (t: number) => {
      for (let index = 0; index < waveCount; index += 1) {
        const y = waveYAt(0, index, t);
        const gradient = context.createLinearGradient(0, y, width, y);
        gradient.addColorStop(0, "rgba(40,120,220,0.04)");
        gradient.addColorStop(0.48, "rgba(80,160,255," + (0.14 + index * 0.012) + ")");
        gradient.addColorStop(1, "rgba(40,120,220,0.03)");
        context.beginPath();
        for (let x = -20; x <= width + 20; x += 18) {
          const waveY = waveYAt(x, index, t);
          if (x === -20) context.moveTo(x, waveY);
          else context.lineTo(x, waveY);
        }
        context.strokeStyle = gradient;
        context.lineWidth = 0.5 + (index % 3) * 0.18;
        context.stroke();
      }
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);
      frame += 1;

      const bg = context.createRadialGradient(width * 0.5, height * 0.4, 0, width * 0.5, height * 0.4, Math.max(width, height) * 0.8);
      bg.addColorStop(0, "rgba(12,30,60,0.08)");
      bg.addColorStop(1, "rgba(2,8,16,0)");
      context.fillStyle = bg;
      context.fillRect(0, 0, width, height);

      const mouseGlow = context.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
      mouseGlow.addColorStop(0, "rgba(120,190,230,0.04)");
      mouseGlow.addColorStop(1, "rgba(120,190,230,0)");
      context.fillStyle = mouseGlow;
      context.fillRect(0, 0, width, height);

      fogBlobs.forEach((blob) => blob.draw(frame * 0.01));
      drawWaterWaves(frame);
      farStars.forEach((star) => star.draw(frame));
      waterParticles.forEach((particle) => {
        particle.update(frame);
        particle.draw(frame);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent | PointerEvent) => {
      document.body.classList.add("cursor-ready");
      targetX = event.clientX;
      targetY = event.clientY;
      mouse.x = targetX;
      mouse.y = targetY;
      if (cursor) {
        cursor.style.left = targetX + "px";
        cursor.style.top = targetY + "px";
      }
      if (hudXY) {
        hudXY.textContent = String(Math.round(targetX)).padStart(3, "0") + " · " + String(Math.round(targetY)).padStart(3, "0");
      }
    };

    const lerpCursor = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (trail) {
        trail.style.left = currentX + "px";
        trail.style.top = currentY + "px";
      }
      cursorFrame = requestAnimationFrame(lerpCursor);
    };

    const updateTime = () => {
      const now = new Date();
      if (hudTime) {
        hudTime.textContent = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0");
      }
    };

    const sections = ["LOADER", "HERO", "ABOUT", "SKILL FOREST", "PROJECTS", "WORKS", "CONTACT"];
    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? Math.round((window.scrollY / maxScroll) * 100) : 0;
      if (hudDepth) hudDepth.textContent = String(Math.min(pct, 100)).padStart(3, "0") + "%";
      if (hudSection) {
        const idx = Math.min(Math.floor(pct / 14), sections.length - 1);
        hudSection.textContent = "LAYER · 0" + (idx + 1);
      }

      document.querySelectorAll<HTMLElement>(".parallax-fog").forEach((element) => {
        const speed = parseFloat(element.dataset.speed || "0.5");
        const section = element.closest("section");
        if (!section) return;
        const rect = section.getBoundingClientRect();
        element.style.transform = "translateY(" + (-rect.top * speed * 0.3) + "px)";
      });

      document.querySelectorAll<HTMLElement>(".reveal:not(.visible)").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) element.classList.add("visible");
      });
    };

    let worksScrollTarget = 0;
    let activeWorksTrack: HTMLElement | null = null;
    let worksMomentumFrame = 0;

    const getActiveWorksTrack = () => document.querySelector<HTMLElement>(".works-accordion.is-open .works-track");

    const clampWorksScroll = (value: number) => {
      if (!activeWorksTrack) return 0;
      return Math.max(0, Math.min(activeWorksTrack.scrollWidth - activeWorksTrack.clientWidth, value));
    };

    const animateWorksScroll = () => {
      if (!activeWorksTrack) return;
      const diff = worksScrollTarget - activeWorksTrack.scrollLeft;
      activeWorksTrack.scrollLeft += diff * 0.14;
      if (Math.abs(diff) > 0.5) {
        worksMomentumFrame = requestAnimationFrame(animateWorksScroll);
      } else {
        activeWorksTrack.scrollLeft = worksScrollTarget;
        worksMomentumFrame = 0;
      }
    };

    const scrollWorksBy = (delta: number) => {
      activeWorksTrack = getActiveWorksTrack();
      if (!activeWorksTrack) return;
      worksScrollTarget = clampWorksScroll(worksScrollTarget + delta);
      if (!worksMomentumFrame) worksMomentumFrame = requestAnimationFrame(animateWorksScroll);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!hasEnteredRef.current) return;

      const activeSection = document.getElementById(sectionIds[currentSectionRef.current]);
      if (activeSection?.id === "deep") {
        const openTrack = getActiveWorksTrack();
        if (openTrack) {
          activeWorksTrack = openTrack;
          if (Math.abs(event.deltaY) < 8) return;
          const atStart = openTrack.scrollLeft <= 1;
          const atEnd = openTrack.scrollLeft + openTrack.clientWidth >= openTrack.scrollWidth - 2;
          const canScrollInside = (event.deltaY > 0 && !atEnd) || (event.deltaY < 0 && !atStart);
          if (canScrollInside) {
            event.preventDefault();
            scrollWorksBy(event.deltaY * 1.25);
            return;
          }
        }
      }

      if (activeSection?.id === "projects" && activeSection.scrollHeight > activeSection.clientHeight) {
        const atTop = activeSection.scrollTop <= 0;
        const atBottom = activeSection.scrollTop + activeSection.clientHeight >= activeSection.scrollHeight - 2;
        const canScrollInside = (event.deltaY > 0 && !atBottom) || (event.deltaY < 0 && !atTop);
        if (canScrollInside) return;
      }

      event.preventDefault();
      if (Math.abs(event.deltaY) < 8) return;
      goToSection(currentSectionRef.current + (event.deltaY > 0 ? 1 : -1));
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!hasEnteredRef.current || touchStartYRef.current === null) return;
      const endY = event.changedTouches[0]?.clientY ?? touchStartYRef.current;
      const deltaY = touchStartYRef.current - endY;
      touchStartYRef.current = null;
      if (Math.abs(deltaY) < 42) return;
      goToSection(currentSectionRef.current + (deltaY > 0 ? 1 : -1));
    };

    const handleEnter = () => {
      createLoaderBurst();
      loader?.classList.add("is-bursting");
      window.setTimeout(() => loader?.classList.add("fade-out"), 620);
      window.setTimeout(() => {
        if (loader) loader.style.display = "none";
        nav?.classList.add("visible");
        document.body.classList.add("fullpage-ready");
        hasEnteredRef.current = true;
        previousSectionRef.current = null;
        currentSectionRef.current = 0;
        setPreviousSection(null);
        setCurrentSection(0);
        document.querySelectorAll<HTMLElement>("#hero .reveal").forEach((element, index) => {
          window.setTimeout(() => element.classList.add("visible"), index * 200);
        });
        window.setTimeout(() => playTextReveal(document.getElementById("hero")), 80);
      }, 2000);
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("#btn-enter")) {
        handleEnter();
        return;
      }

      const worksHeader = target?.closest<HTMLButtonElement>(".works-accordion-header");
      if (worksHeader) {
        const accordion = worksHeader.closest<HTMLElement>(".works-accordion");
        if (accordion) openWorksAccordion(accordion);
        return;
      }

      const projectButton = target?.closest<HTMLButtonElement>(".project-cta");
      if (projectButton) {
        const card = projectButton.closest<HTMLElement>(".project-ruin");
        const shouldExpand = !card?.classList.contains("is-expanded");
        projectCards.forEach((projectCard) => {
          projectCard.classList.remove("is-expanded");
          projectCard.querySelector<HTMLButtonElement>(".project-cta")!.textContent = "ENTER \u2197";
        });
        if (card && shouldExpand) {
          card.classList.add("is-expanded");
          projectButton.textContent = "CLOSE \u2199";
        }
      }
    };

    const createLoaderBurst = () => {
      if (!loaderBurst) return;
      updateLoaderGatherPoint();
      loaderBurst.querySelectorAll<HTMLElement>("span").forEach((particle) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 180 + Math.random() * Math.max(window.innerWidth, window.innerHeight) * 0.86;
        particle.style.setProperty("--bx", Math.cos(angle) * distance + "px");
        particle.style.setProperty("--by", Math.sin(angle) * distance + "px");
      });
    };

    const createLoaderDriftParticles = () => {
      if (!loaderBurst) return;
      loaderBurst.innerHTML = "";
      const count = 300;
      for (let index = 0; index < count; index += 1) {
        const particle = document.createElement("span");
        const curveAngle = Math.random() * Math.PI * 2;
        const isLarge = false;
        const size = 1 + Math.random() * 2;
        const column = index % 21;
        const row = Math.floor(index / 21);
        const jitterX = (Math.random() - 0.5) * (window.innerWidth / 21);
        const jitterY = (Math.random() - 0.5) * (window.innerHeight / 15);
        particle.classList.toggle("is-large", false);
        particle.style.setProperty("--x", Math.min(window.innerWidth, Math.max(0, (column + 0.5) * window.innerWidth / 21 + jitterX)) + "px");
        particle.style.setProperty("--y", Math.min(window.innerHeight, Math.max(0, (row + 0.5) * window.innerHeight / 15 + jitterY)) + "px");
        particle.style.setProperty("--a", (0.48 + Math.random() * 0.42).toFixed(2));
        particle.style.setProperty("--drift-x", (Math.cos(curveAngle) * (14 + Math.random() * 32)) + "px");
        particle.style.setProperty("--drift-y", (Math.sin(curveAngle) * (10 + Math.random() * 26)) + "px");
        particle.style.setProperty("--curve-x", ((Math.random() - 0.5) * 92) + "px");
        particle.style.setProperty("--curve-y", ((Math.random() - 0.5) * 72) + "px");
        particle.style.setProperty("--bx", "0px");
        particle.style.setProperty("--by", "0px");
        particle.style.setProperty("--s", size + "px");
        particle.style.setProperty("--float", (5.5 + Math.random() * 5.5).toFixed(2) + "s");
        particle.style.setProperty("--flicker", (2.2 + Math.random() * 3.4).toFixed(2) + "s");
        particle.style.setProperty("--d", (Math.random() * -6).toFixed(2) + "s");
        loaderBurst.appendChild(particle);
      }
      updateLoaderGatherPoint();
    };

    const updateLoaderGatherPoint = () => {
      if (!loaderBurst || !button) return;
      const rect = button.getBoundingClientRect();
      const gx = rect.left + rect.width / 2;
      const gy = rect.top + rect.height / 2;
      loaderBurst.querySelectorAll<HTMLElement>("span").forEach((particle) => {
        const x = parseFloat(particle.style.getPropertyValue("--x")) || 0;
        const y = parseFloat(particle.style.getPropertyValue("--y")) || 0;
        const distance = Math.hypot(gx - x, gy - y);
        const glow = Math.max(0.24, 1 - distance / Math.max(window.innerWidth, window.innerHeight));
        particle.style.setProperty("--gx", gx + "px");
        particle.style.setProperty("--gy", gy + "px");
        particle.style.setProperty("--a", (0.36 + glow * 0.52).toFixed(2));
      });
    };

    const handleLoaderPointerMove = (event: PointerEvent) => {
      if (!loader || loader.classList.contains("is-bursting") || !button) return;
      const rect = button.getBoundingClientRect();
      const bx = rect.left + rect.width / 2;
      const by = rect.top + rect.height / 2;
      const isNear = Math.hypot(event.clientX - bx, event.clientY - by) < 220;
      if (isNear && !loader.classList.contains("is-gathering")) {
        updateLoaderGatherPoint();
        loader.classList.add("is-gathering");
      } else if (!isNear && loader.classList.contains("is-gathering")) {
        loader.classList.remove("is-gathering");
      }
    };

    const handleProjectMove = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.setProperty("--mx", ((event.offsetX / target.offsetWidth) * 100) + "%");
      target.style.setProperty("--my", ((event.offsetY / target.offsetHeight) * 100) + "%");
    };

    const applyMetricFont = () => {
      const targets = document.querySelectorAll<HTMLElement>(
        ".about-placeholder, .node-label, .project-desc, .stack-tag, .contact-val, .ref-slot-label"
      );
      const metricPattern = /([0-9]+(?:\.[0-9]+)?(?:[A-Za-z]+)?|[≥+%→/·-])/g;

      targets.forEach((target) => {
        const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
        const textNodes: Text[] = [];

        while (walker.nextNode()) {
          const node = walker.currentNode;
          if (node.parentElement?.classList.contains("metric")) continue;
          if (metricPattern.test(node.textContent || "")) textNodes.push(node as Text);
          metricPattern.lastIndex = 0;
        }

        textNodes.forEach((node) => {
          const fragment = document.createDocumentFragment();
          const text = node.textContent || "";
          let lastIndex = 0;
          text.replace(metricPattern, (match, _token, offset) => {
            if (offset > lastIndex) fragment.append(text.slice(lastIndex, offset));
            const span = document.createElement("span");
            span.className = "metric";
            span.textContent = match;
            fragment.append(span);
            lastIndex = offset + match.length;
            return match;
          });
          if (lastIndex < text.length) fragment.append(text.slice(lastIndex));
          node.replaceWith(fragment);
        });
      });
    };

    const runAboutCounters = () => {
      document.querySelectorAll<HTMLElement>(".about-metric-number").forEach((element) => {
        if (element.dataset.counted === "true") return;
        element.dataset.counted = "true";
        const target = Number(element.dataset.count || "0");
        const suffix = element.dataset.suffix || "";
        const duration = 1400;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = String(Math.round(target * eased)) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      });
    };

    const aboutSection = document.getElementById("about");
    const aboutObserver = aboutSection
      ? new MutationObserver(() => {
          if (aboutSection.classList.contains("is-active")) runAboutCounters();
        })
      : null;
    aboutObserver?.observe(aboutSection!, { attributes: true, attributeFilter: ["class"] });

    const projectCards = Array.from(document.querySelectorAll<HTMLElement>(".project-ruin"));
    const skillNodes = Array.from(document.querySelectorAll<HTMLElement>(".skill-node[data-skill]"));
    const filterStatus = document.getElementById("project-filter-status");
    const filterText = document.getElementById("project-filter-text");
    const clearFilterButton = document.getElementById("clear-project-filter") as HTMLButtonElement | null;
    const skillProjectMap: Record<string, string[]> = {
      T2V: ["t2v"],
      LLM: ["agent"],
      AGT: ["agent"],
      EVAL: ["auto", "3dasset"],
      "3D": ["3dasset", "modeling"],
    };

    if (clearFilterButton) clearFilterButton.textContent = "\u00d7 \u53d6\u6d88";
    worksAccordions.forEach((item) => {
      const isOpen = item.classList.contains("is-open");
      item.querySelector<HTMLButtonElement>(".works-accordion-header")?.setAttribute("aria-expanded", isOpen ? "true" : "false");
      const arrow = item.querySelector<HTMLElement>(".works-accordion-arrow");
      if (arrow) arrow.textContent = isOpen ? "↙" : "↗";
    });

    const clearProjectFilter = () => {
      projectCards.forEach((card) => card.classList.remove("is-dimmed", "is-related"));
      skillNodes.forEach((node) => node.classList.remove("is-selected"));
      if (filterStatus) filterStatus.hidden = true;
    };

    const applyProjectFilter = (skill: string) => {
      const related = skillProjectMap[skill] || [];
      if (!related.length) return;

      skillNodes.forEach((node) => node.classList.toggle("is-selected", node.dataset.skill === skill));
      projectCards.forEach((card) => {
        const isRelated = related.includes(card.dataset.project || "");
        card.classList.toggle("is-related", isRelated);
        card.classList.toggle("is-dimmed", !isRelated);
      });

      if (filterText) filterText.textContent = "\u6b63\u5728\u67e5\u770b \u00b7 " + skill + " \u76f8\u5173\u9879\u76ee";
      if (filterStatus) filterStatus.hidden = false;
      goToSection(sectionIds.indexOf("projects"));
    };

    const openWorksAccordion = (accordion: HTMLElement) => {
      const shouldClose = accordion.classList.contains("is-open");
      worksAccordions.forEach((item) => {
        const isOpen = item === accordion && !shouldClose;
        item.classList.toggle("is-open", isOpen);
        item.querySelector<HTMLButtonElement>(".works-accordion-header")?.setAttribute("aria-expanded", isOpen ? "true" : "false");
        const arrow = item.querySelector<HTMLElement>(".works-accordion-arrow");
        if (arrow) arrow.textContent = isOpen ? "↙" : "↗";
        if (isOpen) {
          const track = item.querySelector<HTMLElement>(".works-track");
          if (track) track.scrollLeft = 0;
        }
      });
      activeWorksTrack = shouldClose ? null : accordion.querySelector<HTMLElement>(".works-track");
      worksScrollTarget = 0;
      playTextReveal(document.getElementById("deep"));
    };

    const handleSkillActivate = (event: Event) => {
      const node = event.currentTarget as HTMLElement;
      const skill = node.dataset.skill;
      if (skill) applyProjectFilter(skill);
    };

    const handleSkillKeydown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      handleSkillActivate(event);
    };

    window.addEventListener("resize", resize);
    document.addEventListener("pointermove", handleMouseMove);
    document.addEventListener("pointermove", handleLoaderPointerMove);
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("click", handleDocumentClick);
    clearFilterButton?.addEventListener("click", clearProjectFilter);
    skillNodes.forEach((node) => {
      node.addEventListener("click", handleSkillActivate);
      node.addEventListener("keydown", handleSkillKeydown);
    });
    projectCards.forEach((card) => card.addEventListener("mousemove", handleProjectMove));

    createLoaderDriftParticles();
    animate();
    lerpCursor();
    updateTime();
    timeTimer = window.setInterval(updateTime, 1000);
    applyMetricFont();
    prepareTextReveal(document);
    playTextReveal(document.getElementById("loader"));

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("pointermove", handleMouseMove);
      document.removeEventListener("pointermove", handleLoaderPointerMove);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("click", handleDocumentClick);
      aboutObserver?.disconnect();
      clearFilterButton?.removeEventListener("click", clearProjectFilter);
      skillNodes.forEach((node) => {
        node.removeEventListener("click", handleSkillActivate);
        node.removeEventListener("keydown", handleSkillKeydown);
      });
      projectCards.forEach((card) => card.removeEventListener("mousemove", handleProjectMove));
      window.clearInterval(timeTimer);
      cancelAnimationFrame(animationFrame);
      cancelAnimationFrame(cursorFrame);
      cancelAnimationFrame(worksMomentumFrame);
    };
  }, []);

  return (
    <>
      <DreamWorldStatic />
      <div className="page-dots" aria-label="Section navigation">
        {sectionLabels.map((label, index) => (
          <button
            aria-label={"Go to " + label}
            className={index === currentSection ? "is-active" : ""}
            key={label}
            onClick={() => goToSection(index)}
            type="button"
          >
            <span>{label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
