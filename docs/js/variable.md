---
title: Variable
---

# 변수(Variable)

## 소개

변수는 프로그래밍 언어의 가장 기본적인 개념입니다. 변수는 변하는 값을 의미하고 특정 데이터를 담는 용기나 그릇과 같습니다. 변하는 값을 저장하는 공간을 변수라고 합니다. 프로그래밍을 할 때 로직의 대부분은 변수를 기반으로 작성하게 됩니다. 단순한 덧셈 등의 사칙 연산부터 시작하여 복잡한 로직의 계산까지 모두 변수가 관여합니다.

자바스크립트에서 변수는 아래와 같이 정의할 수 있습니다.

```js
var a;
```

위는 `a`라는 변수를 선언한 코드입니다. 변수를 선언하고 아무 값도 할당하지 않으면 기본적으로 `undefined` 라는 초기값을 가집니다.

## 변수에 값 할당하기

일반적으로 변수를 선언하고 나면 변수 안에 원하는 값을 정의할 수 있습니다.

```js
var a;
a = 10;
```

위 코드는 `a`라는 변수를 정의하고 이 변수에 `10`이라는 숫자를 할당한 코드입니다. 다른 프로그래밍 언어와 달리 자바스크립트가 입문자에게 좋은 이유는 위와 같이 변수의 타입(종류)을 정의하지 않아도 코드를 실행할 때 자동으로 타입이 결정된다는 점입니다.

아래와 같이 유연하게 코드의 값을 바꿀 수 있습니다.

```js
var a;
a = 10;
console.log(a); // 10

a = 'hi';
console.log(a); // hi

a = false;
console.log(a); // false
```

## 변수명 규칙

변수명은 영어와 한글 모두 사용할 수 있습니다. 숫자도 사용할 수는 있지만 숫자로 시작되어선 안됩니다. `$`, `_` 등의 특수문자를 사용할 수 있고 대소문자가 구분됩니다.

```js
// 가능한 변수명
var myName;
var 내이름;
var 내첫번째이름;
var _a;
var $won;
```

변수명에 [예약어](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_keywords_as_of_ecmascript_2015)를 사용할 수 없습니다.

```js
// 불가능한 변수명
var 1이름;
var continue;
var function;
```

## 변수의 타입 확인하기 - typeof

앞에서 본 것처럼 `a`라는 변수의 값은 숫자, 문자열, 진위 값 순서로 변경되었습니다. 여기서는 다행히 할당한 값을 쉽게 구분할 수 있었지만 실제로 코딩하다보면 아래와 같이 쉽게 타입을 추측하기가 어렵습니다.

```html
<input value="100" />
```

```js
var divElement = document.querySelector('input').value;
console.log(divElement);
```

이 때 `divElement` 변수의 타입을 확인할 수 있는 방법은 아래와 같습니다.

```js
console.log(typeof divElement);
```

이처럼 변수의 타입은 typeof 라는 예약어로 확인할 수 있습니다.

::: tip
예약어 : 언어에서 미리 지정해놓은 키워드, 단어
:::
