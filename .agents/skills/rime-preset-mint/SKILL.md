---
name: rime-preset-mint
description: 薄荷輸入法（oh-my-rime）方案配置指南。用於 Agent 查閱薄荷拼音方案、雙拼混輸、五筆方案、皮膚配置、詞典與 Lua 腳本等。
---

# 薄荷輸入法（oh-my-rime）

[薄荷輸入法](https://github.com/Mintimate/oh-my-rime)是一套開箱即用的 Rime 整合方案，提供多種拼音、雙拼與五筆輸入方案，附帶自定義皮膚與 Lua 擴展腳本。

## 參考資料索引

源碼位於 `references/oh-my-rime/`（只讀）。

### 方案文件

| 文件 | 說明 |
|------|------|
| `rime_mint.schema.yaml` | 薄荷拼音—全拼輸入（默認方案） |
| `rime_mint_flypy.schema.yaml` | 薄荷拼音—小鶴混輸 |
| `double_pinyin_flypy.schema.yaml` | 小鶴雙拼 |
| `double_pinyin.schema.yaml` | 自然碼雙拼 |
| `double_pinyin_abc.schema.yaml` | ABC 雙拼 |
| `double_pinyin_mspy.schema.yaml` | 微軟雙拼 |
| `double_pinyin_sogou.schema.yaml` | 搜狗雙拼 |
| `double_pinyin_ziguang.schema.yaml` | 紫光雙拼 |
| `terra_pinyin.schema.yaml` | 地球拼音—薄荷定製 |
| `melt_eng.schema.yaml` | 英文混輸方案 |
| `radical_pinyin.schema.yaml` | 筆畫拆字方案 |
| `radical_pinyin_flypy.schema.yaml` | 拆字—小鶴雙拼 |
| `stroke.schema.yaml` | 筆畫方案 |
| `t9.schema.yaml` | 九宮格方案 |
| `wubi86_jidian.schema.yaml` | 五筆 86—極點五筆 |
| `wubi98_mint.schema.yaml` | 五筆 98—五筆小築 |

### 詞典文件

| 目錄/文件 | 說明 |
|-----------|------|
| `dicts/rime_mint.base.dict.yaml` | 萬象詞庫—基礎 |
| `dicts/rime_mint.chars.dict.yaml` | 萬象詞庫—單字 |
| `dicts/rime_mint.correlation.dict.yaml` | 萬象詞庫—關聯 |
| `dicts/rime_mint.ext.dict.yaml` | 萬象詞庫—擴展 |
| `dicts/rime_mint.compatible.dict.yaml` | 萬象詞庫—兼容 |
| `dicts/custom_simple.dict.yaml` | 用戶自定義詞庫（建議在此添加） |
| `dicts/other_emoji.dict.yaml` | Emoji 詞庫 |
| `dicts/other_kaomoji.dict.yaml` | 顏文字詞庫 |
| `dicts/rime_ice.cn_en.txt` | 中英混合詞彙 |
| `dicts/rime_ice.en.dict.yaml` | 英文詞庫 |
| `dicts/rime_ice.en_ext.dict.yaml` | 英文擴展詞庫 |
| `dicts/rime_ice.others.dict.yaml` | 其他詞庫（用於自動糾錯） |
| `dicts/wubi86_core.dict.yaml` | 五筆 86 詞庫 |
| `dicts/wubi98_base.dict.yaml` | 五筆 98 詞庫 |
| `rime_mint.dict.yaml` | 薄荷拼音主詞典 |
| `melt_eng.dict.yaml` | 英文混輸詞典 |

### 全局配置

| 文件 | 說明 |
|------|------|
| `default.yaml` | 全局默認配置（方案列表、快捷鍵、標點等） |
| `squirrel.yaml` | 【鼠鬚管】外觀與皮膚配置 |
| `weasel.yaml` | 【小狼毫】外觀與皮膚配置 |
| `ibus_rime.yaml` | IBus 前端配置 |
| `symbols.yaml` | 符號方案 |
| `terra_symbols.yaml` | 地球拼音符號方案 |
| `rime.lua` | Lua 入口腳本 |

### Lua 腳本

| 文件 | 說明 |
|------|------|
| `lua/shijian.lua` | 日期、時間、節氣、節日等 |
| `lua/number_translator.lua` | 金額大小寫 |
| `lua/chineseLunarCalendar_translator.lua` | 農曆轉換 |
| `lua/mint_calculator_translator.lua` | 計算器 |
| `lua/corrector_filter.lua` | 錯音錯字提示 |
| `lua/super_preedit.lua` | 輸入碼顯示帶聲調全拼 |
| `lua/autocap_filter.lua` | 英文自動大寫 |
| `lua/reduce_english_filter.lua` | 降低英文候選詞位置 |
| `lua/auxCode_filter.lua` | 輔助碼過濾器 |
| `lua/codeLengthLimit_processor.lua` | 輸入長度限制 |
| `lua/select_character.lua` | 選詞處理 |
| `lua/force_gc.lua` | 強制垃圾回收 |
| `lua/log.lua` | 日誌工具 |
| `lua/tag_user_dict.lua` | 用戶詞典標記 |

### 皮膚方案

薄荷自帶四套皮膚（定義於 `squirrel.yaml`）：

| 名稱 | 說明 |
|------|------|
| `mint_light_blue` | 藍水鴨（亮色） |
| `mint_dark_blue` | 黑水鴨（暗色） |
| `mint_light_green` | 碧皓青（亮色） |
| `mint_dark_green` | 碧月青（暗色） |

### OpenCC 配置

| 文件 | 說明 |
|------|------|
| `opencc/emoji.json` | Emoji 轉換 |
| `opencc/fly_Chaifen.json` | 小鶴拆分 |

## 特色功能

- **多方案支持**：全拼、小鶴雙拼混輸、地球拼音、五筆 86/98
- **萬象詞庫**：帶聲調的拼音詞庫，支持音調顯示
- **Lua 擴展**：日期時間、農曆、計算器、錯音提示等實用功能
- **自定義皮膚**：水鴨、青澀系列皮膚，亮暗色兼備
- **反查功能**：支持五筆（`Uw`）、筆畫（`Ui`）、拆字（`Uu`）反查
