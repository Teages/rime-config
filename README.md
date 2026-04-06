# 【鼠鬚管】用戶配置

基於 [薄荷輸入法（oh-my-rime）](https://github.com/Mintimate/oh-my-rime) 的【鼠鬚管】（Squirrel）個人配置，運行於 macOS。

## 特色

- 基於薄荷拼音方案，精簡保留常用功能
- 亮色/暗色主題自動切換
- 自動化部署腳本，一鍵構建並重新加載配置
- Agent 驅動管理，配置變更有跡可循

> **⚠️ AI 維護提醒**
>
> 本倉庫的配置文件由 AI Agent 協助生成與維護。AI 生成的內容可能存在錯誤或不適用於您的使用場景。使用前請務必自行審閱判斷，確認配置符合預期後再行部署。

## 使用示例

本倉庫內附 Rime 相關技能文件，搭配支持 Agent 的編輯器（如 [OpenCode](https://opencode.ai/)）即可用自然語言調整配置。以下為常用提示詞示例：

```text
# 調整候選詞數量
把候選詞數量改為 9

# 切換皮膚主題
把暗色模式的主題改為 purity_of_form

# 添加英文詞典
參考霧凇拼音的英文詞庫，為我的方案加入英文混輸功能

# 應用級中英文切換
在 VS Code 和終端裡默認使用英文輸入，其他應用保持中文

# 添加雙拼方案
幫我加入小鶴雙拼方案，保留現有的全拼方案
```

修改完成後執行 `pnpm build` 即可部署生效。

## 快速開始

### 前置條件

- macOS 已安裝【鼠鬚管】
- [Node.js](https://nodejs.org) >= 18
- [pnpm](https://pnpm.io)

### 安裝

```bash
# 克隆倉庫並初始化子模組
git clone https://github.com/Teages/rime-config.git ~/Library/Rime
cd ~/Library/Rime
git submodule update --init --recursive

# 安裝依賴
pnpm install
```

### 構建與部署

```bash
pnpm build
```

此命令會從薄荷輸入法子模組複製方案文件、詞典、Lua 腳本及 OpenCC 配置到用戶目錄，自動下載萬象拼音語法模型，並觸發【鼠鬚管】重新部署。

## 配置說明

| 文件 | 說明 |
|------|------|
| [rime_mint_lite.schema.yaml](rime_mint_lite.schema.yaml) | 薄荷拼音精簡方案定義 |
| [rime_mint_lite.dict.yaml](rime_mint_lite.dict.yaml) | 精簡方案詞典 |
| [default.custom.yaml](default.custom.yaml) | 全局配置：方案列表、候選詞數量、快捷鍵、中西文切換 |
| [squirrel.custom.yaml](squirrel.custom.yaml) | 外觀配置：皮膚主題、字體、候選框樣式 |
| [scripts/deploy.ts](scripts/deploy.ts) | 部署腳本（從子模組複製文件、下載語法模型、觸發重新部署） |
| [user.yaml](user.yaml) | 用戶狀態（自動生成） |
| [installation.yaml](installation.yaml) | 安裝信息（自動生成） |

## 參考方案

本配置參考了以下 Rime 方案倉庫，以 git submodule 形式收錄於 `.agents/skills/`：

- [霧凇拼音（rime-ice）](https://github.com/iDvel/rime-ice)
- [薄荷輸入法（oh-my-rime）](https://github.com/Mintimate/oh-my-rime)
- [萬象拼音（rime_wanxiang）](https://github.com/amzxyz/rime_wanxiang)

## License

[MIT](./LICENSE)
