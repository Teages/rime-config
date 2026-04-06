---
name: rime-config
description: Rime 輸入法配置指南。用於 Agent 查閱 Rime 方案配置、拼寫代數、自定義技巧、詞典管理等。涵蓋【鼠鬚管】、【小狼毫】等前端。
---

# Rime 輸入法配置

Rime（中州韻輸入法引擎）是跨平臺的開源輸入法框架，支持拼音、注音、倉頡、五筆等多種輸入方案。Agent 可藉此理解並修改 Rime 用戶配置。

## 參考資料索引

本地參考倉庫位於 `references/` 目錄（只讀），按需查閱：

### Rime 官方 Wiki（`references/rime-wiki/`）

| 文件 | 主題 |
|------|------|
| `Configuration.md` | 配置文件格式與加載機制 |
| `CustomizationGuide.md` | 自定義指南（patch 用法） |
| `SpellingAlgebra.md` | 拼寫代數（模糊音、簡拼等） |
| `RimeWithSchemata.md` | 方案定義詳解 |
| `RimeWithSquirrel.md` | 【鼠鬚管】配置說明 |
| `RimeWithWeasel.md` | 【小狼毫】配置說明 |
| `SharedData.md` | 共享數據與用戶數據 |
| `UserData.md` | 用戶數據目錄結構 |
| `Recipes.md` | 方案訣竅與範例 |
| `FAQ.md` | 常見問題解答 |
| `GettingStarted.md` | 入門指南 |
| `Introduction.md` | Rime 簡介與設計理念 |

### 【鼠鬚管】源碼（`references/squirrel/`）

`data/` 目錄包含內置默認配置與皮膚方案。

## 核心概念

### 方案（Schema）

方案是 Rime 輸入功能的核心，定義輸入規則與轉換邏輯。以 `.schema.yaml` 為後綴。

### 配置文件層次

1. **共享目錄**：方案自帶的默認配置
2. **用戶目錄**：用戶級配置（`~/.config/ibus/rime/` 或本倉庫）
3. **用戶自定義**：`*.custom.yaml` 通過 `patch` 機制覆蓋默認值，避免直接修改方案文件

### 自定義機制（patch）

通過 `*.custom.yaml` 文件使用 `patch:` 鍵合併或覆蓋默認配置，確保升級方案時不丟失自定義設置。

### 拼寫代數

Rime 的拼寫代數（Spelling Algebra）用於在輸入碼與候選詞之間建立靈活的映射關係，實現模糊音、簡拼、雙拼等功能。

## 常用查閱指引

| 需求 | 查閱 |
|------|------|
| 修改候選詞數量 | `references/rime-wiki/CustomizationGuide.md` |
| 配置模糊音 | `references/rime-wiki/SpellingAlgebra.md` |
| 新增或修改方案 | `references/rime-wiki/RimeWithSchemata.md` |
| 【鼠鬚管】外觀與皮膚 | `references/rime-wiki/RimeWithSquirrel.md`、`references/squirrel/data/` |
| 詞庫管理 | `references/rime-wiki/SharedData.md`（霧凇拼音詳見 `rime-recipes-ice` 技能） |
| 排查部署問題 | `references/rime-wiki/FAQ.md` |
