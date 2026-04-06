---
name: rime-recipes-wanxiang
description: 萬象拼音（rime_wanxiang）方案配置指南。用於 Agent 查閱萬象拼音的詞庫、方案定義、輔助碼、雙拼配置、Lua 擴展等。
---

# 萬象拼音

[萬象拼音](https://github.com/amzxyz/rime_wanxiang)是一套基於深度優化詞庫與語法模型的 Rime 拼音輸入方案，提供帶聲調詞庫、多種雙拼支持、輔助碼系統及豐富的 Lua 擴展功能。

## 版本說明

萬象拼音提供兩個主要版本：

| 版本 | 方案文件 | 說明 |
|------|----------|------|
| 標準版（Standard） | `wanxiang.schema.yaml` | 支持全拼、任意雙拼，默認開啟自動調頻 |
| 增強版（Pro） | `wanxiang_pro.schema.yaml` | 僅支持雙拼，支持 7 種輔助碼，默認關閉調頻 |

## 參考資料索引

源碼位於 `references/rime_wanxiang/`（只讀）。

### 方案文件

| 文件 | 說明 |
|------|------|
| `wanxiang.schema.yaml` | 萬象拼音標準版主文件（全拼/雙拼） |
| `wanxiang_pro.schema.yaml` | 萬象拼音增強版（僅雙拼，支持輔助碼） |
| `wanxiang_english.schema.yaml` | 英文輸入方案（支持整句、自動加空格） |
| `wanxiang_mixedcode.schema.yaml` | 混合編碼方案（中英混合、字母數字組合） |
| `wanxiang_reverse.schema.yaml` | 部件拆字反查方案（兩分、多分、筆畫） |
| `wanxiang_t9.schema.yaml` | 九宮格方案 |
| `custom/wanxiang_chaifen.schema.yaml` | 拆分輔助方案模板 |

### 詞典文件

| 文件 | 說明 |
|------|------|
| `wanxiang.dict.yaml` | 主詞典（帶聲調拼音標注） |
| `wanxiang_english.dict.yaml` | 英文詞典 |
| `wanxiang_mixedcode.dict.yaml` | 混合編碼詞典 |
| `wanxiang_reverse.dict.yaml` | 反查詞典 |
| `dicts/jichu.dict.yaml` | 基礎詞庫 |
| `dicts/zi.dict.yaml` | 單字詞庫 |
| `dicts/lianxiang.dict.yaml` | 聯想詞庫 |
| `dicts/en.dict.yaml` | 英文詞庫 |
| `dicts/cn&en.dict.yaml` | 中英混合詞庫 |
| `dicts/cuoyin.dict.yaml` | 錯音提示詞庫 |
| `dicts/diming.dict.yaml` | 地名詞庫 |
| `dicts/duoyin.dict.yaml` | 多音字詞庫 |
| `dicts/renming.dict.yaml` | 人名詞庫（按需下載） |
| `dicts/shici.dict.yaml` | 詩詞詞庫 |
| `dicts/wuzhong.dict.yaml` | 物種詞庫（按需下載） |
| `custom_phrase.txt` | 用戶自定義短語（建議在此添加置頂詞） |

### 雙拼配置

通過 `wanxiang_algebra.yaml` 定義拼寫代數，支持在方案中輸入 `/` 指令切換：

| 指令 | 雙拼類型 |
|------|----------|
| `/pinyin` | 全拼 |
| `/flypy` | 小鶴雙拼 |
| `/mspy` | 微軟雙拼 |
| `/zrm` | 自然碼 |
| `/sogou` | 搜狗雙拼 |
| `/znabc` | 智能 ABC |
| `/ziguang` | 紫光雙拼 |
| `/pyjj` | 拼音加加 |
| `/gbpy` | 國標雙拼 |
| `/lxsq` | 亂序 17 |
| `/wxsp` | 萬象雙拼 |
| `/zrlong` | 自然龍 |
| `/hxlong` | 漢心龍 |

### 輔助碼系統（僅 Pro 版）

| 輔助碼 | 說明 |
|--------|------|
| 墨奇碼 | 默認輔助碼 |
| 鶴形 | 小鶴輔助碼 |
| 自然碼 | 自然碼輔助碼 |
| 虎碼首末 | 虎碼輔助碼 |
| 五筆前 2 | 五筆輔助碼 |
| 漢心碼 | 漢心輔助碼 |
| 首右碼 | 首右輔助碼 |

輔助碼支持兩種模式：
- **直接輔助碼**：雙拼後直接追加部首聲母（如 `vfj` → 鎮）
- **間接輔助碼**：使用 `/` 分隔引導（如 `ni/re`）

相關拆分詞典位於 `custom/` 目錄：
- `wanxiang_chaifen_flypy.dict.yaml` — 小鶴拆分
- `wanxiang_chaifen_zrm.dict.yaml` — 自然碼拆分
- `wanxiang_chaifen_moqi.dict.yaml` — 墨奇拆分
- `wanxiang_chaifen_tiger.dict.yaml` — 虎碼拆分
- `wanxiang_chaifen_wubi.dict.yaml` — 五筆拆分
- `wanxiang_chaifen_hanxin.dict.yaml` — 漢心拆分
- `wanxiang_chaifen_shouyou.dict.yaml` — 首右拆分

### 全局配置

| 文件 | 說明 |
|------|------|
| `default.yaml` | 全局默認配置 |
| `weasel.yaml` | 【小狼毫】外觀配置 |
| `wanxiang_algebra.yaml` | 拼寫代數定義（全拼/雙拼轉換） |
| `wanxiang_symbols.yaml` | 符號方案（`/` 引導模式） |

### Lua 腳本

腳本位於 `lua/wanxiang/` 目錄：

| 文件 | 說明 |
|------|------|
| `wanxiang.lua` | Lua 入口與模塊加載 |
| `librime.lua` | Rime API 封裝 |
| `super_processor.lua` | 綜合處理器（小鍵盤、字母選詞、符號快打、分詞、限制等） |
| `super_filter.lua` | 綜合過濾器（字符集過濾等） |
| `super_comment_preedit.lua` | 超級注釋（輔助碼提示、聲調提示、拆分提示、錯音提示） |
| `super_english.lua` | 英文處理（語句流、自動加空格、大小寫格式化） |
| `super_lookup.lua` | 反查輔助篩選 |
| `super_replacer.lua` | OpenCC 替代器（簡繁轉換、Emoji、翻譯、簡碼等） |
| `super_calculator.lua` | 超級計算器（V 引導） |
| `super_tips.lua` | 超級提示（表情、化學式、翻譯、簡碼等） |
| `super_sequence.lua` | 手動排序（Ctrl+j/k/l/p） |
| `shijian.lua` | 日期、時間、節氣、節日、農曆等 |
| `number_translator.lua` | 數字/金額大寫（R 引導） |
| `unicode.lua` | Unicode 輸入（U 引導） |
| `auto_phrase.lua` | 無感造詞、英文造詞 |
| `charset_filter.lua` | 字符集過濾（支持簡繁聯動） |
| `input_statistics.lua` | 輸入統計 |
| `key_binder.lua` | 按鍵綁定擴展 |
| `set_schema.lua` | 方案快速切換（`/flypy` 等指令） |
| `version_display.lua` | 版本信息顯示 |
| `partial_commit.lua` | 候選切割機（Ctrl+1~0 局部上屏） |
| `force_upper_aux.lua` | 固定已輸入語句 |
| `userdb.lua` | 用戶詞庫管理 |

### Lua 數據文件

數據文件位於 `lua/data/` 目錄：

| 文件 | 說明 |
|------|------|
| `emoji.txt` | Emoji 數據 |
| `english_chinese.txt` | 英中翻譯數據 |
| `chinese_english.txt` | 中英翻譯數據 |
| `abbrev.txt` | 公共簡碼數據 |
| `t9_abbrev.txt` | T9 簡碼數據 |
| `chengyu.txt` | 成語簡碼數據 |
| `tips_show.txt` | Tips 自帶數據 |
| `tips_user.txt` | Tips 用戶自定義數據 |
| `others.txt` | 其他替換數據 |
| `STCharacters.txt` | 簡繁轉換（單字） |
| `STPhrases.txt` | 簡繁轉換（詞組） |
| `HKVariants.txt` | 香港繁體轉換 |
| `TWVariants.txt` | 臺灣繁體轉換 |
| `charset.reverse.bin` | 字符集反向查詢二進制數據 |

### Custom 配置模板

`custom/` 目錄提供用戶自定義模板（複製到根目錄後修改生效）：

| 文件 | 說明 |
|------|------|
| `wanxiang.custom.yaml` | 主方案補丁模板 |
| `wanxiang_pro.custom.yaml` | Pro 版補丁模板 |
| `wanxiang_english.custom.yaml` | 英文方案補丁模板 |
| `wanxiang_mixedcode.custom.yaml` | 混合編碼補丁模板 |
| `wanxiang_reverse.custom.yaml` | 反查方案補丁模板 |
| `patch方法论.md` | Custom Patch 使用指南 |

## 特色功能

- **帶聲調詞庫**：所有詞語自帶音調標注，支持聲調輔助篩選（7890 代表 1234 聲）
- **語法模型**：配合 [RIME-LMDG](https://github.com/amzxyz/RIME-LMDG) 語法模型實現精準整句預測
- **輔助碼系統**：拼音 + 部首聲母的自然邏輯，支持 7 種主流輔助碼
- **深度反查**：兩分、多分、筆畫三種反查方式，支持至 Unicode 17
- **英文整句**：支持英文整句輸入，智能加空格，大小寫格式化
- **中英混輸**：混合編碼方案無需引導，直接輸入
- **豐富的 Lua 擴展**：日期時間、農曆、計算器、Unicode、金額大寫等
- **超級提示（Tips）**：表情、化學式、翻譯、簡碼等實時提示
- **成對符號包裹**：自動為候選詞添加成對符號
- **超級替換**：Lua 實現的 OpenCC 增強替代，支持簡繁轉換、Emoji 等
- **手動排序**：自定義候選詞順序
- **字符集過濾**：支持簡繁轉換聯動的字符集過濾
- **無感造詞**：Pro 版支持無感造詞不調頻
- **候選切割**：Ctrl+1~0 局部上屏
