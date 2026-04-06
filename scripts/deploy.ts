/**
 * Rime 配置部署腳本
 *
 * 從薄荷拼音（oh-my-rime）子模組複製必要文件到用戶目錄，
 * 並觸發【鼠鬚管】重新部署。
 *
 * 用法：pnpm build
 */

import { execSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import process from 'node:process'

// === 路徑配置 ===
const ROOT = resolve(import.meta.dirname, '..')
const MINT_REF = join(ROOT, '.agents/skills/rime-preset-mint/references/oh-my-rime')

// 精簡版需要保留的 Lua 腳本
const LUA_SCRIPTS = [
  'select_character.lua',
  'force_gc.lua',
  'corrector_filter.lua',
  'reduce_english_filter.lua',
]

// 需要複製的頂層文件
const TOP_FILES = [
  'melt_eng.schema.yaml',
  'melt_eng.dict.yaml',
  'radical_pinyin.schema.yaml',
  'radical_pinyin.dict.yaml',
  'default.yaml',
  'symbols.yaml',
  'squirrel.yaml',
]

// 需要複製的詞典子目錄
const DICTS_SUBDIR = 'dicts'

// 需要複製的詞典文件
const DICT_FILES = [
  'custom_simple.dict.yaml',
  'other_kaomoji.dict.yaml',
  'rime_ice.cn_en.txt',
  'rime_ice.en.dict.yaml',
  'rime_ice.en_ext.dict.yaml',
  'rime_ice.others.dict.yaml',
  'rime_mint.base.dict.yaml',
  'rime_mint.chars.dict.yaml',
  'rime_mint.compatible.dict.yaml',
  'rime_mint.correlation.dict.yaml',
  'rime_mint.ext.dict.yaml',
]

// OpenCC 配置
const OPENCC_DIR = 'opencc'

// === 部署邏輯 ===

function log(msg: string) {
  console.log(`[deploy] ${msg}`)
}

function ensureDir(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }
}

function copyFile(src: string, dest: string) {
  if (!existsSync(src)) {
    log(`  ⚠ 來源不存在，跳過: ${src}`)
    return false
  }
  cpSync(src, dest)
  return true
}

function deploy() {
  // 檢查子模組是否存在
  if (!existsSync(MINT_REF)) {
    console.error(`[deploy] ✘ 薄荷拼音子模組不存在: ${MINT_REF}`)
    console.error('[deploy]   請先執行: git submodule update --init --recursive')
    process.exit(1)
  }

  log('開始部署薄荷拼音精簡版...')

  // 1. 複製頂層文件
  log('複製方案與詞典文件...')
  for (const file of TOP_FILES) {
    const src = join(MINT_REF, file)
    const dest = join(ROOT, file)
    if (copyFile(src, dest)) {
      log(`  ✓ ${file}`)
    }
  }

  // 2. 複製詞典子目錄
  log('複製詞典文件...')
  const dictsDir = join(ROOT, DICTS_SUBDIR)
  ensureDir(dictsDir)
  for (const file of DICT_FILES) {
    const src = join(MINT_REF, DICTS_SUBDIR, file)
    const dest = join(dictsDir, file)
    if (copyFile(src, dest)) {
      log(`  ✓ ${DICTS_SUBDIR}/${file}`)
    }
  }

  // 3. 複製精簡後的 Lua 腳本
  log('複製 Lua 腳本（精簡）...')
  const luaDir = join(ROOT, 'lua')
  ensureDir(luaDir)
  for (const file of LUA_SCRIPTS) {
    const src = join(MINT_REF, 'lua', file)
    const dest = join(luaDir, file)
    if (copyFile(src, dest)) {
      log(`  ✓ lua/${file}`)
    }
  }

  // 4. 複製 rime.lua（入口）
  const rimeLuaSrc = join(MINT_REF, 'rime.lua')
  const rimeLuaDest = join(ROOT, 'rime.lua')
  if (copyFile(rimeLuaSrc, rimeLuaDest)) {
    log('  ✓ rime.lua')
  }

  // 5. 複製 OpenCC 配置
  log('複製 OpenCC 配置...')
  const openccDir = join(ROOT, OPENCC_DIR)
  ensureDir(openccDir)
  const openccSrc = join(MINT_REF, OPENCC_DIR)
  if (existsSync(openccSrc)) {
    const openccFiles = ['emoji.json', 'emoji.txt']
    for (const file of openccFiles) {
      const src = join(openccSrc, file)
      const dest = join(openccDir, file)
      if (copyFile(src, dest)) {
        log(`  ✓ ${OPENCC_DIR}/${file}`)
      }
    }
  }

  // 6. 觸發【鼠鬚管】重新部署
  log('觸發【鼠鬚管】重新部署...')
  const squirrelBin = '/Library/Input Methods/Squirrel.app/Contents/MacOS/Squirrel'
  if (existsSync(squirrelBin)) {
    try {
      execSync(`"${squirrelBin}" --reload`, { timeout: 10000 })
      log('  ✓ 已觸發重新部署')
    }
    catch (e: any) {
      log(`  ⚠ 觸發部署失敗: ${e.message}`)
      log('  請手動執行：【鼠鬚管】→「重新部署」')
    }
  }
  else {
    log('  ⚠ 未找到【鼠鬚管】，請手動重新部署')
  }

  log('部署完成！')
}

deploy()
