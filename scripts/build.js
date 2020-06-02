
const path = require('path');
const fs = require('fs-extra');

const buildDirPath = `${__dirname}/../build/`;
const buildDataDirPath = path.join(buildDirPath, 'data/');

fs.ensureDirSync(buildDirPath);
fs.ensureDirSync(buildDataDirPath);

function buildAlias () {
  const en = require('../data/locale/en-US/alias');
  const ja = require('../data/locale/ja-JP/alias');
  const ko = require('../data/locale/ko-KR/alias');
  const zh = require('../data/locale/zh-CN/alias');

  const result = {};
  
  const mergeFunc = (locale) => {
    Object.keys(locale).map((type) => {
      if (!result[type]) { result[type] = {}; }

      Object.keys(locale[type]).map((item) => {
        if (!result[type][item]) { result[type][item] = []; }

        const aliasList = locale[type][item];
        aliasList.forEach((alias) => {
          if (!result[type][item].includes(alias)) {
            result[type][item].push(alias);
          }
        });
      })
    });
  };

  mergeFunc(en);
  mergeFunc(ja);
  mergeFunc(ko);
  mergeFunc(zh);

  fs.writeFileSync(path.join(buildDataDirPath, 'alias.json'), JSON.stringify(result));
}

function minifyScript () {
  const writeLocaleScriptFileToBuild = (locale) => {
    const scriptBuildDir = path.join(buildDataDirPath, 'script/');
    fs.ensureDirSync(scriptBuildDir);
    fs.writeFileSync(
      path.join(scriptBuildDir, `${locale}.json`),
      JSON.stringify(require(`../data/locale/${locale}/NewCharacterVoice`))
    );
  };

  writeLocaleScriptFileToBuild('en-US');
  writeLocaleScriptFileToBuild('ja-JP');
  writeLocaleScriptFileToBuild('ko-KR');
  writeLocaleScriptFileToBuild('zh-CN');
}

function buildI18n () {
  const writeLocaleScriptFileToBuild = (locale) => {
    const i18nBuildDir = path.join(buildDirPath, 'i18n/');
    fs.ensureDirSync(i18nBuildDir);
    fs.writeFileSync(
      path.join(i18nBuildDir, `${locale}.json`),
      JSON.stringify(require(`../i18n/${locale}`))
    );
  };

  writeLocaleScriptFileToBuild('en-US');
  writeLocaleScriptFileToBuild('ja-JP');
  writeLocaleScriptFileToBuild('ko-KR');
  writeLocaleScriptFileToBuild('zh-CN');
}

buildAlias();
minifyScript();
buildI18n();
