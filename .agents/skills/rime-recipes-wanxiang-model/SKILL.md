---
name: rime-recipes-wanxiang-model
description: 萬象拼音語法模型（RIME-LMDG）配置指南。用於 Agent 查閱語法模型、詞庫構建、輔助碼轉換、語料處理與部署配置。
---

# 萬象拼音語法模型（RIME-LMDG）

[RIME-LMDG](https://github.com/amzxyz/RIME-LMDG) 是萬象拼音的語法模型與詞庫項目，基於 32GB 中文語料構建，提供精準的 n-gram 語法模型、帶聲調詞庫、多種輔助碼轉換工具及完整的語料處理流水線。

## 版本說明

RIME-LMDG 提供簡體與繁體兩套詞庫：

| 詞庫 | 目錄 | 說明 |
|------|------|------|
| 簡體詞庫 | `dicts/` | 適配 `zh-hans` |
| 繁體詞庫 | `dicts_hant/` | 適配 `zh-hant` |

## 參考資料索引

源碼位於 `references/RIME-LMDG/`（只讀），Wiki 位於 `references/RIME-LMDG.wiki/`（只讀）。

### 詞典文件（`dicts/`）

| 文件 | 說明 |
|------|------|
| `zi.dict.yaml` | 單字詞典（43,324 字，覆蓋 CJK 至 Extension G 及康熙部首） |
| `jichu.dict.yaml` | 基礎詞庫（2–3 字詞，約 147 萬條） |
| `lianxiang.dict.yaml` | 聯想詞庫（5 字以上長詞，約 20 萬條） |
| `duoyin.dict.yaml` | 多音字兼容詞庫 |
| `cuoyin.dict.yaml` | 錯音兼容詞庫 |
| `diming.dict.yaml` | 地名詞庫（約 7 萬條） |
| `renming.dict.yaml` | 人名詞庫（約 6.6 萬條） |
| `wuzhong.dict.yaml` | 物種詞庫（約 7.2 萬條） |
| `shici.dict.yaml` | 詩詞古典詞庫（約 33.5 萬條） |
| `mixed.dict.yaml` | 混合內容詞庫 |

### 拼音標注數據（`pinyin_data/`）

| 文件 | 說明 |
|------|------|
| `单字.dict.yaml` | 單字拼音標注 |
| `词组.dict.yaml` | 詞組拼音標注 |

### 語法模型

| 文件 | 說明 |
|------|------|
| `predict.txt` | 語法模型預測數據（約 37MB） |

### 腳本工具（`scripts/`）

| 文件 | 說明 |
|------|------|
| `fetch_any_dict.py` | 獲取並轉換 Rime 詞典，支持多種編碼類型 |
| `sync_user_dict.py` | 合併排序用戶詞典（支持拼音、五筆、虎碼等） |
| `sync_rime.py` | 用戶數據同步 |
| `deploy_rime.py` | 自動部署 Rime |
| `pinyin2aux.py` | 將詞典轉換為帶輔助碼格式 |
| `sort_dict.py` | 詞典排序 |
| `auxiliary_code.yaml` | 輔助碼元數據定義 |

### 工具腳本（根目錄）

| 文件 | 說明 |
|------|------|
| `wanxiang-tools.py` | 主圖形界面工具（PySide6），整合詞典管理、更新、同步、部署 |
| `语法模型构建.py` | n-gram 語法模型構建（分詞、剪枝、訓練） |
| `rime固定或用户词典刷新为带声调编码.py` | 刷新詞典為帶聲調編碼 |
| `rime固定或用户词典刷新为带辅助码编码.py` | 刷新詞典為帶輔助碼編碼 |
| `TXT清洗.py` | 語料文本清洗（去除標點、特殊字符） |
| `json语料解析.py` | JSON 語料解析 |
| `维基中文语料解析.py` | 維基中文語料解析 |
| `多线程分词.py` | 多線程分詞（基於 Jieba） |

### AHK 腳本（`ahk/`）

| 文件 | 說明 |
|------|------|
| `rime.ahk` | AutoHotkey 自動化腳本，提供部署、同步、候選管理等快捷操作 |

### 輔助碼系統

RIME-LMDG 詞庫支持以下輔助碼：

| 輔助碼 | 說明 |
|--------|------|
| 墨奇碼 | 默認輔助碼 |
| 鶴形（Flypy） | 小鶴輔助碼 |
| 自然碼 | 自然碼輔助碼 |
| 簡單鶴 | 簡化鶴形 |
| 倉頡 | 倉頡輔助碼 |
| 虎碼首末 | 虎碼輔助碼 |
| 五筆前二 | 五筆輔助碼 |
| 漢心碼 | 漢心輔助碼 |

## 語法模型配置

在萬象拼音方案中啟用語法模型：

```yaml
__include: octagram
octagram:
  __patch:
    grammar:
      language: wanxiang-lts-zh-hans
      collocation_max_length: 8
      collocation_min_length: 2
      collocation_penalty: -10
      non_collocation_penalty: -20
      weak_collocation_penalty: -35
      rear_penalty: -12
    translator/contextual_suggestions: false
    translator/max_homophones: 5
    translator/max_homographs: 5
```

## 詞典遷移

將帶聲調詞庫遷移至其他格式時，常用的拼寫代數轉換：

- **無聲調**：`xlit/āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜü/aaaaooooeeeeiiiiuuuuvvvvv/`
- **數字後綴**：`xform/^([a-z]+)$/$1④/`（配合聲調轉數字規則）
- **元音後數字**：`xform/ā/a1/` 等

## Wiki 文檔索引

Wiki 位於 `references/RIME-LMDG.wiki/`，主要頁面：

| 頁面 | 說明 |
|------|------|
| `Home.md` | 首頁，文檔導航 |
| `自述.md` | 項目起源與設計理念 |
| `词频统计与词库建立.md` | 詞頻統計方法與詞庫構建流程 |
| `将万象词库迁移到你的项目.md` | 詞庫遷移指南（聲調格式轉換） |
| `万象词库PRO的设计理念.md` | 萬象詞庫 PRO 設計理念 |
| `为什么要关闭调频以及与之关联的措施有哪些.md` | 調頻關閉原因與替代措施 |
| `探索语法模型中的大数据与"人工智能".md` | 語法模型中大數據的應用 |
| `KenLM工具--discount_fallback-选项的应用逻辑.md` | KenLM 工具參數詳解 |
| `SRILM工具在ngram训练的应用实践.md` | SRILM 工具使用實踐 |
| `Q&A-常见问题及注意事项.md` | 常見問題與注意事項 |
