
import en from '../build/data/script/en-US';
import ja from '../build/data/script/ja-JP';
import ko from '../build/data/script/ko-KR';
import zh from '../build/data/script/zh-CN';

const getCharacterScript = (data, dollCodename, skinCode) => {
  if (!data[dollCodename]) return null;

  let dollScript = data[dollCodename];

  if (skinCode && Number.isInteger(skinCode)) { // 스킨별로 대사가 달라질 경우
    const skinCodeHeader = Number.parseInt(skinCode / 100, 10);

    if (skinCodeHeader === 9 || skinCodeHeader === 22) { // 아동절 스킨
      dollScript = data[`${dollCodename}_0`];
    }
  }

  return dollScript;
};

const bindLocale = (locale) => {
  switch (locale) {
    case 'en-US': return getCharacterScript.bind(null, en);
    case 'ja-JP': return getCharacterScript.bind(null, ja);
    case 'ko-KR': return getCharacterScript.bind(null, ko);
    case 'zh-CN': return getCharacterScript.bind(null, zh);
    default: return null;
  }
};

export default bindLocale;
