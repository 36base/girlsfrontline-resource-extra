# GirlsFrontline Extra Data

> 본 모듈은 인형 대사 및 별명 데이터만 포함되어 있습니다.
> 인형 스탯 등 Core 데이터는 [`girlsfrontline-core`](https://github.com/36base/girlsfrontline-core)
> 저장소를 참고 바랍니다.

## 사용 예시

---

### alias (별명)

alias 출력의 `1`, `2` 등은 `girlsfrontline-core` 의 데이터중 `id` 참고 바랍니다.

```js
const { alias } = gfextradata({ locale: 'ko-KR' });

console.log(alias);
// {"doll":{"1":["콜트","콜라"],"2":["운메이","운명이","운명"] ...}, "equip": {...}, "fairy": {...}}
```

#### 별명 데이터 예시

```json
{
  "doll": {
    "142": ["HOXY"]
  },
  "equip": {
    "1": ["옵티컬"]
  },
  "fairy": {
    "1": ["용사"]
  }
}
```

---

### getScript (대사)

`getScript(codename, skincode)` (`skincode` 는 생략 가능)

없을 시 `null` 반환

```js
const { getScript } = gfextradata({ locale: 'ko-KR' });

console.log(getScript('MG4').introduce[0]);
// "처음 제 이름은 MG43이었어요..."


console.log(getScript('G36', 0).dialogue1[0]); // G36 일반 대사
// "필요하신 게 있다면, 사양 말고 이야기 해주세요."
console.log(getScript('G36', 905).dialogue1[0]); // G36 아동절 스킨용 대사
// "어라？ 제 총이 원래 이렇게 컸나요？..."

console.log(getScript('asdasdasd')); // null
```

#### 대사 데이터 예시

대사 종류 (대사 개수는 캐릭터마다 다름)

- "introduce": "Introduce",
- "dialogue1": "Dialogue1",
- "dialogue2": "Dialogue2",
- "dialogue3": "Dialogue3",
- "soulcontract": "Soul Contract",
- "valentine": "Valentine",
- "allhallows": "Halloween",
- "christmas": "Christmas",
- "newyear": "New Year",
- "dialoguewedding": "Wedding Dialogue",
- "gain": "Gain",
- "skill1": "Skill1",
- "skill2": "Skill2",
- "skill3": "Skill3",
- "fix": "Fix",
- "retreat": "Retreat",
- "break": "Break",
- "operationover": "Operation Over",
- "hello": "Login",
- "mood1": "Laugh",
- "mood2": "Surprise",
- "agree": "Agree",
- "accept": "Accept",
- "lowmood": "Low Mood"

```json
{
  "dialogue1": ["배가 고파졌어~"],
  "soulcontract": [
    "에? 지휘관도 정말...갑자기 그런 걸...진심으로 말하는 거야?",
    "으응! 당연히 OK야! 오늘의 나는 엄청 행복한걸!",
    "허그해도 괜찮아?"
  ],
  "introduce": [
    "안녕, 지휘관! 나는 아스트라 357이야...."
  ],
  "gain": ["잘 부탁드릴게요."]
}
```

---

## `i18n/`

core 레포에 부족한 i18n 데이터를 수동으로 채우거나, 덮어 씌우는 용도

## 데이터

`data` 디렉토리 구조

```text
data
  locale
    {locale}
      alias.json // 각 나라별 별명 (빌드 시 `build/data/alias.json` 하나로 합쳐짐)
      NewCharacterVoice.json // 대사 (`asset_textes` 를 `girlsfrontline-resources-extract` 로 추출했을때 나오는 파일 사용)
```

참고: [`girlsfrontline-resources-extract`](https://github.com/36base/girlsfrontline-resources-extract)
