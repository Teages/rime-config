---
name: rime-recipes-ice
description: 霧凇拼音（rime-ice）方案配置指南。用於 Agent 查閱霧凇拼音的詞庫、方案定義、雙拼配置、符號方案等。
---

# 霧凇拼音

[霧凇拼音](https://github.com/iDvel/rime-ice)是一套開箱即用的 Rime 拼音輸入方案，提供豐富的詞庫與多種雙拼支持。

## 參考資料索引

源碼位於 `references/rime-ice/`（只讀）。

### 方案文件

| 文件 | 說明 |
|------|------|
| `rime_ice.schema.yaml` | 全拼方案主文件 |
| `double_pinyin.schema.yaml` | 自然碼雙拼 |
| `double_pinyin_flypy.schema.yaml` | 小鶴雙拼 |
| `double_pinyin_abc.schema.yaml` | ABC 雙拼 |
| `double_pinyin_mspy.schema.yaml` | 微軟雙拼 |
| `double_pinyin_sogou.schema.yaml` | 搜狗雙拼 |
| `double_pinyin_ziguang.schema.yaml` | 紫光雙拼 |
| `double_pinyin_jiajia.schema.yaml` | 拼音加加雙拼 |
| `melt_eng.schema.yaml` | 英文混輸方案 |
| `radical_pinyin.schema.yaml` | 筆畫輔助方案 |
| `t9.schema.yaml` | 九宮格方案 |

### 詞典文件

| 目錄/文件 | 說明 |
|-----------|------|
| `cn_dicts/` | 中文詞庫 |
| `en_dicts/` | 英文詞庫 |
| `rime_ice.dict.yaml` | 主詞典 |
| `melt_eng.dict.yaml` | 英文混輸詞典 |

### 其他配置

| 文件 | 說明 |
|------|------|
| `default.yaml` | 全局默認配置 |
| `squirrel.yaml` | 【鼠鬚管】外觀配置 |
| `weasel.yaml` | 【小狼毫】外觀配置 |
| `symbols_v.yaml` | v 模式符號方案 |
| `symbols_caps_v.yaml` | V 模式符號方案 |
| `opencc/` | OpenCC 轉換配置 |
| `lua/` | Lua 腳本擴展 |
