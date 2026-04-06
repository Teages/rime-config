> **重要**：此文件須與實際狀態保持同步。凡配置結構或工作流程有所變動，必先更新此文件。

# 【鼠鬚管】Agent 工作指南

本倉庫由 Agent 驅動管理，為【鼠鬚管】（Squirrel）on macOS 提供穩定、舒適的中文輸入法用戶配置。

## 文本風格

本倉庫所有註釋和文檔（包括 `AGENTS.md` 及 `.agents/` 目錄下的非自動生成的技能文件）均採用與 [Rime 官方 Wiki](https://github.com/rime/home/wiki) 一致的文本風格：

- 使用**繁體中文**書寫
- 行文簡練，語氣典雅，不冗贅
- 專有名稱以【】標示，如【鼠鬚管】、【小狼毫】
- 標題層次分明，使用 `##` 至 `####`
- 代碼、路徑以行內代碼或代碼塊呈現

## 概覽

| 項目 | 說明 |
|------|------|
| 輸入法客戶端 | 【鼠鬚管】（Squirrel），運行於 macOS |
| 包管理器 | pnpm |
| 腳本語言 | TypeScript（經由 jiti 執行） |

## 目錄結構

```
/
├── AGENTS.md              # 本文件，Agent 工作指南
├── package.json           # 項目依賴與腳本入口
├── user.yaml              # Rime 用戶級配置
├── installation.yaml      # Rime 安裝信息（自動生成，勿手動修改）
├── build/                 # Rime 構建輸出目錄（自動生成，勿手動修改）
└── .agents/skills/
    ├── rime-config/       # Rime 配置技能
    │   ├── SKILL.md       # 技能說明與參考索引
    │   └── references/    # 參考資料（只讀，git submodule）
    │       ├── rime-wiki/ # Rime 官方 Wiki
    │       └── squirrel/  # 【鼠鬚管】源碼
    ├── rime-recipes-ice/  # 霧凇拼音技能
    │   ├── SKILL.md       # 技能說明與參考索引
    │   └── references/
    │       └── rime-ice/  # 霧凇拼音方案
    ├── rime-preset-mint/  # 薄荷輸入法技能
    │   ├── SKILL.md       # 技能說明與參考索引
    │   └── references/
    │       └── oh-my-rime/ # 薄荷輸入法方案
    ├── rime-recipes-wanxiang/ # 萬象拼音技能
    │   ├── SKILL.md           # 技能說明與參考索引
    │   └── references/
    │       └── rime_wanxiang/ # 萬象拼音方案
    └── rime-recipes-wanxiang-model/ # 萬象拼音語法模型技能
        ├── SKILL.md                # 技能說明與參考索引
        └── references/
            ├── RIME-LMDG/          # 萬象拼音語法模型
            └── RIME-LMDG.wiki/     # 萬象拼音語法模型 Wiki
```

## 核心原則

1. **穩定優先**：避免引入實驗性或不穩定的配置，每次變更應可回滾。
2. **舒適體驗**：以用戶實際輸入習慣為準，減少誤觸與干擾。
3. **最小改動**：只修改必要的配置，不過度工程化。
4. **文檔同步**：每次對配置結構或工作流程的重要改動，須同步更新本文件。

## 常用命令

```bash
# 構建配置
pnpm cli build

# 代碼檢查
pnpm lint

# 代碼檢查並自動修復
pnpm lint:fix
```

## 參考資料

參考倉庫已收錄於 `.agents/skills/`，各技能詳見：

- [rime-config 技能](.agents/skills/rime-config/SKILL.md) — Rime 配置指南、拼寫代數、自定義技巧
- [rime-recipes-ice 技能](.agents/skills/rime-recipes-ice/SKILL.md) — 霧凇拼音方案詞庫與配置
- [rime-preset-mint 技能](.agents/skills/rime-preset-mint/SKILL.md) — 薄荷輸入法方案、皮膚與 Lua 腳本
- [rime-recipes-wanxiang 技能](.agents/skills/rime-recipes-wanxiang/SKILL.md) — 萬象拼音方案、輔助碼與 Lua 擴展
- [rime-recipes-wanxiang-model 技能](.agents/skills/rime-recipes-wanxiang-model/SKILL.md) — 萬象拼音語法模型、部署與配置

- [Rime 官方網站](https://rime.im)
