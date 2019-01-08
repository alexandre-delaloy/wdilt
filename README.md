# What did I learned today

## What is it

**wdilt** aims to:

- encourage me to **learn something new** every day
- see my progression **over time**
- become **better**

> As much as possible related to the **front-end development**

## Generate a Markdown Calendar

```JavaScript
class Calendar(year, month)
```

### Parameters

- `year` : the year of the **month you choose**
- `month` : the **month** you choose

### Run it

- **Create** a new `Calendar` with specific parameters
- Add `.fill()` **method**
- run `node app.js` in a **large terminal** to see the **results**

__Exemple:__

```JavaScript
const December2018 = new Calendar(2018, 12).fill();
```

> You can see the result in markdown below ⬇️

# Progression

## January

| 🗓 |        Su       |        Mo       |        Tu       |        We       |        Tu       |        Fr       |        Sa       |
| -- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| W1 |                 |                 |[01](#2019-01-01)|[02](#2019-01-02)|[03](#2019-01-03)|[04](#2019-01-04)|[05](#2019-01-05)|
| W2 |[06](#2019-01-06)|[07](#2019-01-07)|[08](#2019-01-08)|[09](#2019-01-09)|[10](#2019-01-10)|[11](#2019-01-11)|[12](#2019-01-12)|
| W3 |[13](#2019-01-13)|[14](#2019-01-14)|[15](#2019-01-15)|[16](#2019-01-16)|[17](#2019-01-17)|[18](#2019-01-18)|[19](#2019-01-19)|
| W4 |[20](#2019-01-20)|[21](#2019-01-21)|[22](#2019-01-22)|[23](#2019-01-23)|[24](#2019-01-24)|[25](#2019-01-25)|[26](#2019-01-26)|
| W5 |[27](#2019-01-27)|[28](#2019-01-28)|[29](#2019-01-29)|[30](#2019-01-30)|[31](#2019-01-31)|                 |                 |

----

### 2019-01-01

Happy new year !

----

### 2019-01-02

Today I made a list of useful alias

```bash
# GLOBAL

alias a=alias
alias c=clear
alias cdc="cd && c"
alias e=exit
alias vs="&& code ."

# SHUTDOWN

alias bye="sudo shutdown -h now"

# REBOOT

alias rbt="sudo shutdown -r now"

# PACKAGE MANAGER

alias n=npm
alias ni="npm i"
alias nig="npm i -g"

alias y=yarn
alias ya="yarn add"
alias yga="yarn global add"
```

----

### 2019-01-03

Today I learned how to work with props, states, and localStorage

[Repository Here](https://github.com/blyndusk/quizzzy)

----

### 2019-01-04

Today I learned how specific React component method works:

- [`ComponentDidMount`](https://reactjs.org/docs/react-component.html#componentdidmount): invoked immediately after a component is mounted.
- [`ComponentDidUpdate`](https://reactjs.org/docs/react-component.html#componentdidupdate): invoked immediately after updating occurs. This method is not called for the initial render.
- [`UNSAFE_componentWillMount()`](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount):  invoked just before mounting occurs. It is called before `render()`method.
- [`UNSAFE_componentWillReceiveProps()`](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops): invoked before a mounted component receives new props.
- [`UNSAFE_componentWillUpdate()`](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate):  is invoked just before rendering when new props or state are being received. This method is not called for the initial render.

----

### 2019-01-05

Today I learned how to [deploy](https://facebook.github.io/create-react-app/docs/deployment) a project using [create-react-app](https://github.com/facebook/create-react-app) and [GitHub Pages](https://pages.github.com/)

----

### 2019-01-06

----

### 2019-01-07

----

### 2018-01-08

Today I learned how to use [GreenSock](https://greensock.com/), a **JS library** to make **easy animations**
