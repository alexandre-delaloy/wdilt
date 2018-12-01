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
> Exemple: December of 2018 has **6** empty spaces before the **first one**
![December](http://image.noelshack.com/fichiers/2018/48/6/1543664518-capture-d-ecran-2018-12-01-a-12-41-50.png)

### Demonstration

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

<!-- Today I learned all the **ES6 changes** and **improvements**

**Breaking** & very **useful** changes:

- [Spread Operator](http://es6-features.org/#SpreadOperator)
- [String Interpolation](http://es6-features.org/#StringInterpolation)
- [Array Matching](http://es6-features.org/#ArrayMatching)
- Object Matching:

    - [Shorthand Notation](http://es6-features.org/#ObjectMatchingShorthandNotation)
    - [Deep Matching](http://es6-features.org/#ObjectMatchingDeepMatching)
- [Value Export/Import](http://es6-features.org/#ValueExportImport)
