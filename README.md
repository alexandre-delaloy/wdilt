# What did I learned today

> Start December **1st** 📆

## What is it

**wdilt** aims to:

- encourage me to **learn something new** every day
- see my progression **over time**
- become **better**

> As much as possible related to the **front-end development**

## Generate a Markdown Calendar

```JavaScript
class Calendar(year, month, days, bfr)
```

### Parameters

- `year` : the year of the **month you choose**
- `month` : the **month** you choose
- `year` : the **number** of days
- `bfr` : the number of **empty spaces** before the **first one**

![December](http://image.noelshack.com/fichiers/2018/48/7/1543749577-december.png)
> Exemple: December of 2018 has **6** empty spaces before the **first one**

### Run it

- **Create** a new `Calendar` with specific parameters
- Add `.fill()` **method**
- run `node app.js` in a **large terminal** to see the **results**

__Exemple:__

```JavaScript
const December2018 = new Calendar(2018, 12, 31, 6).fill();
```

> You can see the result in markdown below ⬇️

# Progression

## December 2018

| 🗓 |        Su       |        Mo       |        Tu       |        We       |        Tu       |        Fr       |        Sa       |
| -- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| W1 |                 |                 |                 |                 |                 |                 |[01](#2018-12-01)|
| W2 |[02](#2018-12-02)|[03](#2018-12-03)|[04](#2018-12-04)|[05](#2018-12-05)|[06](#2018-12-06)|[07](#2018-12-07)|[08](#2018-12-08)|
| W3 |[09](#2018-12-09)|[10](#2018-12-10)|[11](#2018-12-11)|[12](#2018-12-12)|[13](#2018-12-13)|[14](#2018-12-14)|[15](#2018-12-15)|
| W4 |[16](#2018-12-16)|[17](#2018-12-17)|[18](#2018-12-18)|[19](#2018-12-19)|[20](#2018-12-20)|[21](#2018-12-21)|[22](#2018-12-22)|
| W5 |[23](#2018-12-23)|[24](#2018-12-24)|[25](#2018-12-25)|[26](#2018-12-26)|[27](#2018-12-27)|[28](#2018-12-28)|[29](#2018-12-29)|
| W6 |[30](#2018-12-30)|[31](#2018-12-31)|                 |                 |                 |                 |                 |
____

### 2018-12-01

Today I learned OOP in JavaScript:

- [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class): creates a new **class** with a **given name** using **prototype-based inheritance**.

```JavaScript
class Name [extends] {
  // class body
}
```

- [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor): a special **method** for **creating and initializing an object** created within a class.

```JavaScript
constructor([arguments]) { ... }
```

- [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super): used to **access** and **call functions** on an **object**'s parent.

```JavaScript
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
```

- [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static): defines a **static method** for a class. Static methods **aren't called** on **instances** of the class.

```JavaScript
static methodName() { ... }
```

____

### 2018-12-02

Today I learned in **details** what is **ES6 (ECMAScript6)** and all the **changes** and **improvements** compared to **ES5**

#### What is ES6

- [ECMA International](https://en.wikipedia.org/wiki/Ecma_International): a standards organization for **information** and **communication** **systems**.
- [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript): a **trademarked scripting-language** specification standardized by **Ecma International** in `ECMA-262` and `ISO/IEC 16262`
- [ES6 (ECMAScript6) features](http://es6-features.org): 6th version of ECMAScript

#### Breaking & very useful changes

- [Spread Operator](http://es6-features.org/#SpreadOperator)
- [String Interpolation](http://es6-features.org/#StringInterpolation)
- [Array Matching](http://es6-features.org/#ArrayMatching)
- **Object Matching:**

    - [Shorthand Notation](http://es6-features.org/#ObjectMatchingShorthandNotation)
    - [Deep Matching](http://es6-features.org/#ObjectMatchingDeepMatching)
- [Value Export/Import](http://es6-features.org/#ValueExportImport)
- [Class Inherance](http://es6-features.org/#ClassInheritance)
- [Getter/Setter](http://es6-features.org/#GetterSetter)
- [Generator Function](http://es6-features.org/#GeneratorFunctionDirectUse)

____

### 2018-12-03

Today I learned the **basics** of **PixiJS**, a **rendering engine** to make beautiful **2D webGL digital content**:

- [Website](http://www.pixijs.com/)
- [Repository](https://github.com/pixijs/pixi.js)
- [A very useful tutorial](https://github.com/kittykatattack/learningPixi)
- [Examples](https://pixijs.io/examples/#/basics/basic.js)
- [An opinion about Phaser VS PixiJS](https://stackoverflow.com/questions/38509629/decide-pixi-js-or-phaser)

----

### 2018-12-04

Today I learned how to display **static and animated sprites** from an **Adobe Animate** export:

- How to display them from a **parent JSON**
- How to check if it's **static or not**
- **Static**: display it with dynamic **positionning, size, scale and rotation**
- **Animated**: same shit, but using a **texture atlas** to make it **move in a loop**

Also I learned the **difference** between **HTTPS** request, **SSH** key & **PGP** key in [git](https://git-scm.com/), and how to use them:

- **SSH:**
    - [Checking for existing key](https://help.github.com/articles/checking-for-existing-ssh-keys/)
    - [Generate a new key and add to ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
    - [Add to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

- **GPG:**
    - [Generate a a new key](https://help.github.com/articles/generating-a-new-gpg-key/)
    - [Add to your GitHub account](https://help.github.com/articles/adding-a-new-gpg-key-to-your-github-account/)

____

**Learn soon:**

- setter
- getter
- boilerplate
- polyfill
- transpiller
