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

## Progression: February 2019

| 🗓 |        Su       |        Mo       |        Tu       |        We       |        Tu       |        Fr       |        Sa       |
| -- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| W1 |                 |                 |                 |                 |                 |[01](#2019-02-01)|[02](#2019-02-02)|
| W2 |[03](#2019-02-03)|[04](#2019-02-04)|[05](#2019-02-05)|[06](#2019-02-06)|[07](#2019-02-07)|[08](#2019-02-08)|[09](#2019-02-09)|
| W3 |[10](#2019-02-10)|[11](#2019-02-11)|[12](#2019-02-12)|[13](#2019-02-13)|[14](#2019-02-14)|[15](#2019-02-15)|[16](#2019-02-16)|
| W4 |[17](#2019-02-17)|[18](#2019-02-18)|[19](#2019-02-19)|[20](#2019-02-20)|[21](#2019-02-21)|[22](#2019-02-22)|[23](#2019-02-23)|
| W5 |[24](#2019-02-24)|[25](#2019-02-25)|[26](#2019-02-26)|[27](#2019-02-27)|[28](#2019-02-28)|                 |                 |

### 2019-02-01

Today I begin to write a guide about how to install from a new Mac.

----

### 2019-02-02

----

### 2019-02-03

Today I learned how to use [Dashlane](https://www.dashlane.com/fr) so that all my identity on the internet is more secure

----

### 2018-02-04

Today I learned how to paste string into HTML in React:

```
<a href="https://google.fr">Google</a>
```

becomes :

```HTML
<a href="https://google.fr">Google</a>
```

with [dangerouslySetInnerHTML()](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

```JavaScript
<div dangerouslySetInnerHTML={{__html: '<a href="https://google.fr">Google</a>'}} />;
```

will return:

```HTML
<div>
    <a href="https://google.fr">Google</a>
</div>
```

----

### 2019-02-05

----

### 2019-02-06

Today I learned how to add multiple inline-css in React:

```JavaScript
this.state = {
    style1: {
        prop1: 'attribute1',
        prop2: 'attribute2',
        prop3: 'attribute3'
    },
    style2: {
        prop4: 'attribute4',
        prop5: 'attribute5'
    }
}
```

```JavaScript
<Component style={{...this.state.style1, ...this.state.style2}}/>
```

----

### 2019-02-07

----

### 2019-02-08

Today I finished my 6months project.

Website [here](https://kikopiki.a-dll.com)

----

### 2019-02-09

Today I put kikopiki as a under domain of my portfolio, was https://blyndusk.github.io/kikopiki, and now is https://kikopiki.a-dll.com.

----

### 2019-02-10

I lack sleep ;_;

----

### 2019-02-11

Today i started my initiation to [Vuejs](https://vuejs.org).

Repository [here](https://github.com/blyndusk/vuejs-initiation)

----

### 2019-02-12

Today I learned the main concepts of [Vuejs](https://vuejs.org):

- [Introduction](https://vuejs.org/v2/guide/index.html)
- [Vue Instance](https://vuejs.org/v2/guide/instance.html)
- [Template Syntax](https://vuejs.org/v2/guide/syntax.html)
- [Computed Properties and Watchers](https://vuejs.org/v2/guide/computed.html)
- [Class And Style Binding](https://vuejs.org/v2/guide/class-and-style.html)
- [Conditional Rendering](https://vuejs.org/v2/guide/conditional.html)
- [List Rendering](https://vuejs.org/v2/guide/list.html)

----

### 2019-02-13

Today I made a basic clicker / idle game in [Vuejs](https://vuejs.org)

----

### 2019-02-14

Today I learned how to make a solar system using [three.js](https://threejs.org/)

Repository [here](https://github.com/blyndusk/threejs-initiation)

----

### 2019-01-15

Today I learned how to move into a [three.js](https://threejs.org/) environment using [new THREE.OrbitControls](https://threejs.org/docs/#examples/controls/OrbitControls)

----

### 2019-02-16

Today I studied the differences between [Vuejs](https://vuejs.org) & [Reactjs](https://react?org). [[?]](https://fr.vuejs.org/v2/guide/comparison.html)

----

### 2019-02-17

Today I learned the basics [vim](https://devhints.io/vim) commands.

----

### 2019-02-18

Today I commented source code of [calendar generation](/app.js)

----

### 2019-02-19 

Today I created [@idddle](https://github.com/idddle), an organisation for my idle / clicker game project.
