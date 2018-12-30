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
- [Array Element Finding](http://es6-features.org/#ArrayElementFinding)
- [String Searching](http://es6-features.org/#StringSearching)

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

### 2018-12-05

Today I learned how to **navigate** in a **canvas** with PixiJS:

- **Desktop**: 3 events:
    - mousedown
    - mouseup
    - mousemove
- **Mobile**: 3 events:
    - touchstart
    - touchend
    - touchmove

Also I learned how to make **interaction** with sprites, when I **click** on them

Also, I continued learned ES6 **changes** and **improvements**, I've update my list at [December, 2nd](#2018-12-02)

----

### 2018-12-06

Today I learned **how to fix a a container** when you navigate on the **Pixi Render**

----

### 2018-12-07

Today I learned the **difference** and the **usage** of `setter` and `getter` method in **OOP** in JavaScript:

- [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

```JavaScript
set prop(val) { ... }
set [expression](val) { ... }
```

- [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

```JavaScript
{get prop() { ... } }
{get [expression]() { ... } }
```

----

### 2018-12-08 & 2018-12-09

Today I learned in details how to configure Git & GitHub, and made a workshop about it.

Repository [here](https://github.com/blyndusk/git-github-ws)

----

### 2018-12-10

Today I learned the [main concept of React](https://reactjs.org/docs/hello-world.html), starting with [create-react-app](https://github.com/facebook/create-react-app):

Repository [here](https://github.com/blyndusk/interactive-story)

- [1. Hello World](https://reactjs.org/docs/hello-world.html)
- [2. Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [3. Rendering elements](https://reactjs.org/docs/rendering-elements.html)
- [4. Components and props](https://reactjs.org/docs/components-and-props.html)
- [5. State & lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [6. Handling events](https://reactjs.org/docs/handling-events.html)
- [7. Conditional rendering](https://reactjs.org/docs/conditional-rendering.html)
- [8. Lists & keys](https://reactjs.org/docs/lists-and-keys.html)

----

### 2018-12-11

Today I learned how to **create a form** which update a **list of people**, using [Meteor](https://www.meteor.com/).

Repository [here](https://github.com/blyndusk/meteor-form).

----

### 2018-12-12

Today I continued learn [main concept of React](https://reactjs.org/docs/hello-world.html), starting with [create-react-app](https://github.com/facebook/create-react-app):

- [9. Forms](https://reactjs.org/docs/forms.html)
- [10. Lifting state up](https://reactjs.org/docs/lifting-state-up.html)
- [11. Composition vs Inherance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [12. Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### 2018-12-13

Yoday I learned what is a [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) or **source-to-source** compiler

----

### 2018-12-14

Today I learned what is a [boilerplate](https://whatis.techtarget.com/definition/boilerplate)

----

### 2018-12-15

Today I slept

----

### 2018-12-16

Today I learned what is a **polyfill**:

- [Wikipédia](https://fr.wikipedia.org/wiki/Polyfill)
- [MDN](https://developer.mozilla.org/fr/docs/Glossaire/Polyfill)

----

### 2018-12-17

Today I learned how to use [SVN](https://fr.wikipedia.org/wiki/Apache_Subversion):

- [[?]](http://svnbook.red-bean.com/en/1.2/svn.ref.svn.c.checkout.html) `svn checkout <url> | svn co <url>` : pull a repo and create a working copy
- [[?]](http://svnbook.red-bean.com/en/1.2/svn.ref.svn.c.status.html) `svn status` : show files with their modifications or not
- [[?]](http://svnbook.red-bean.com/en/1.2/svn.ref.svn.c.add.html) `svn add` : add files
- [[?]](http://svnbook.red-bean.com/en/1.2/svn.ref.svn.c.update.html) `svn update | svn up` : check for modifications and try to merge if that is the case
- [[?]](http://svnbook.red-bean.com/en/1.2/svn.ref.svn.c.commit.html) `svn commit | svn ci` : send your changes to the SVN server

----

### 2018-12-18

Today I learned how to use the [jService](http://jservice.io/) API:

#### /Clues

- Url: `/api/clues`
- Options All options are optional:

    - `value(int)`: the value of the clue in dollars
    - `category(int)`: the id of the category you want to return
    - `min_date(date)`: earliest date to show, based on original air date
    - `max_date(date)`: latest date to show, based on original air date
    - `offset(int)`: offsets the returned clues. Useful in pagination

#### /Random

- Url: `/api/random`
- Options:

    - `count`(int): amount of clues to return, limited to 100 at a time

#### /Categories

- Url: `/api/categories`
- Options:

    - `count(int)`: amount of categories to return, limited to 100 at a time
    - `offset(int)`: offsets the starting id of categories returned. Useful in pagination.

#### /Category

- Url: `/api/category`
- Options:

    - `id(int)`: Required the ID of the category to return.

#### /Invalid

- Url: `/api/invalid`
- Options:

    - `id(int)`: Required the ID of the clue to mark as invalid.

> Please mark a clue as invalid when the needed information is not present in the clue. This sometimes happens when clues rely on images or sounds to be answered. When useing jService, you may want to check the invalid_count attribute on clues before using them.

----

### 2018-12-19

----

### 2018-12-20

----

### 2018-12-21

Today I learned how to install [powerlevel9k] theme on my terminal:

- [Install the Powerlevel9k Theme](https://github.com/bhilburn/powerlevel9k/wiki/Install-Instructions#step-1-install-powerlevel9k)
- [Install Powerline Fonts](https://github.com/bhilburn/powerlevel9k/wiki/Install-Instructions#step-2-install-a-powerline-font)

----

### 2018-12-22

Today I learned how to make some useful **alias** for **zsh**

```zsh
_=sudo
a=alias
c=clear
e=exit
n=npm
ni="npm i"
nig="npm i -g"
y=yarn
ya="yarn add"
yga="yarn global add"
(faire `alias newalias="too long command"` pour créer un alias)

```

----

### 2018-12-23


Today I learned how to work with react & Sass

Repository [here](https://github.com/blyndusk/react-scss-starter)

----

### 2018-12-24

Today I learned how to begin to work with jService in a React app

Repository [here](https://github.com/blyndusk/quizzzy)

----

### 2018-12-25

Today I learned how to use localStorage to use variables between React components

Repository [here](https://github.com/blyndusk/quizzzy)

### 2018-12-26

Today I learned how to fetch many API's from localstorage settings

Repository [here](https://github.com/blyndusk/quizzzy)

----

### 2018-12-27

null

----

### 2018-12-28

Today I learned how to export VSCode config

```Bash
CODE SETTINGS SYNC UPLOAD SUMMARY
Version: 3.2.4
--------------------
GitHub Token: 84fa0dbfe8f26f07918a92da26baff6b29bbe615
GitHub Gist: caf9d3ea47b843377ac7e22edcbe5b2d
GitHub Gist Type: Secret

Restarting Visual Studio Code may be required to apply color and file icon theme.
--------------------
Files Uploaded:
  extensions.json > extensions.json
  keybindings.json > keybindingsMac.json
  locale.json > locale.json
  settings.json > settings.json

Extensions Ignored:
  No extensions ignored.

Extensions Removed:
  No extensions removed.

Extensions Added:
  bracket-pair-colorizer v1.0.61
  code-settings-sync v3.2.4
  debugger-for-chrome v4.11.1
  gitlens v9.2.4
  path-intellisense v1.4.2
  vsc-material-theme v2.6.3
  vscode-codemetrics v1.17.4
  vscode-colorize v0.8.3
  vscode-eslint v1.7.2
  vscode-markdownlint v0.22.0
  vscode-scss v0.6.2
  vscode-versionlens v0.22.0
  vsliveshare v0.3.1071
--------------------
Done.CODE SETTINGS SYNC UPLOAD SUMMARY
Version: 3.2.4
--------------------
GitHub Token: 84fa0dbfe8f26f07918a92da26baff6b29bbe615
GitHub Gist: caf9d3ea47b843377ac7e22edcbe5b2d
GitHub Gist Type: Secret

Restarting Visual Studio Code may be required to apply color and file icon theme.
--------------------
Files Uploaded:
  extensions.json > extensions.json
  keybindings.json > keybindingsMac.json
  locale.json > locale.json
  settings.json > settings.json

Extensions Ignored:
  No extensions ignored.

Extensions Removed:
  No extensions removed.

Extensions Added:
  bracket-pair-colorizer v1.0.61
  code-settings-sync v3.2.4
  debugger-for-chrome v4.11.1
  gitlens v9.2.4
  path-intellisense v1.4.2
  vsc-material-theme v2.6.3
  vscode-codemetrics v1.17.4
  vscode-colorize v0.8.3
  vscode-eslint v1.7.2
  vscode-markdownlint v0.22.0
  vscode-scss v0.6.2
  vscode-versionlens v0.22.0
  vsliveshare v0.3.1071
--------------------
Done.CODE SETTINGS SYNC UPLOAD SUMMARY
Version: 3.2.4
--------------------
GitHub Token: 84fa0dbfe8f26f07918a92da26baff6b29bbe615
GitHub Gist: caf9d3ea47b843377ac7e22edcbe5b2d
GitHub Gist Type: Secret

Restarting Visual Studio Code may be required to apply color and file icon theme.
--------------------
Files Uploaded:
  extensions.json > extensions.json
  keybindings.json > keybindingsMac.json
  locale.json > locale.json
  settings.json > settings.json

Extensions Ignored:
  No extensions ignored.

Extensions Removed:
  No extensions removed.

Extensions Added:
  bracket-pair-colorizer v1.0.61
  code-settings-sync v3.2.4
  debugger-for-chrome v4.11.1
  gitlens v9.2.4
  path-intellisense v1.4.2
  vsc-material-theme v2.6.3
  vscode-codemetrics v1.17.4
  vscode-colorize v0.8.3
  vscode-eslint v1.7.2
  vscode-markdownlint v0.22.0
  vscode-scss v0.6.2
  vscode-versionlens v0.22.0
  vsliveshare v0.3.1071
--------------------
Done.CODE SETTINGS SYNC UPLOAD SUMMARY
Version: 3.2.4
--------------------
GitHub Token: 84fa0dbfe8f26f07918a92da26baff6b29bbe615
GitHub Gist: caf9d3ea47b843377ac7e22edcbe5b2d
GitHub Gist Type: Secret

Restarting Visual Studio Code may be required to apply color and file icon theme.
--------------------
Files Uploaded:
  extensions.json > extensions.json
  keybindings.json > keybindingsMac.json
  locale.json > locale.json
  settings.json > settings.json

Extensions Ignored:
  No extensions ignored.

Extensions Removed:
  No extensions removed.

Extensions Added:
  bracket-pair-colorizer v1.0.61
  code-settings-sync v3.2.4
  debugger-for-chrome v4.11.1
  gitlens v9.2.4
  path-intellisense v1.4.2
  vsc-material-theme v2.6.3
  vscode-codemetrics v1.17.4
  vscode-colorize v0.8.3
  vscode-eslint v1.7.2
  vscode-markdownlint v0.22.0
  vscode-scss v0.6.2
  vscode-versionlens v0.22.0
  vsliveshare v0.3.1071
--------------------
Done.CODE SETTINGS SYNC UPLOAD SUMMARY
Version: 3.2.4
--------------------
GitHub Token: 84fa0dbfe8f26f07918a92da26baff6b29bbe615
GitHub Gist: caf9d3ea47b843377ac7e22edcbe5b2d
GitHub Gist Type: Secret

Restarting Visual Studio Code may be required to apply color and file icon theme.
--------------------
Files Uploaded:
  extensions.json > extensions.json
  keybindings.json > keybindingsMac.json
  locale.json > locale.json
  settings.json > settings.json

Extensions Ignored:
  No extensions ignored.

Extensions Removed:
  No extensions removed.

Extensions Added:
  bracket-pair-colorizer v1.0.61
  code-settings-sync v3.2.4
  debugger-for-chrome v4.11.1
  gitlens v9.2.4
  path-intellisense v1.4.2
  vsc-material-theme v2.6.3
  vscode-codemetrics v1.17.4
  vscode-colorize v0.8.3
  vscode-eslint v1.7.2
  vscode-markdownlint v0.22.0
  vscode-scss v0.6.2
  vscode-versionlens v0.22.0
  vsliveshare v0.3.1071
--------------------
Done.CODE SETTINGS SYNC UPLOAD SUMMARY
Version: 3.2.4
--------------------
GitHub Token: 84fa0dbfe8f26f07918a92da26baff6b29bbe615
GitHub Gist: caf9d3ea47b843377ac7e22edcbe5b2d
GitHub Gist Type: Secret

Restarting Visual Studio Code may be required to apply color and file icon theme.
--------------------
Files Uploaded:
  extensions.json > extensions.json
  keybindings.json > keybindingsMac.json
  locale.json > locale.json
  settings.json > settings.json

Extensions Ignored:
  No extensions ignored.

Extensions Removed:
  No extensions removed.

Extensions Added:
  bracket-pair-colorizer v1.0.61
  code-settings-sync v3.2.4
  debugger-for-chrome v4.11.1
  gitlens v9.2.4
  path-intellisense v1.4.2
  vsc-material-theme v2.6.3
  vscode-codemetrics v1.17.4
  vscode-colorize v0.8.3
  vscode-eslint v1.7.2
  vscode-markdownlint v0.22.0
  vscode-scss v0.6.2
  vscode-versionlens v0.22.0
  vsliveshare v0.3.1071
--------------------
Done.
```

----

### 2018-12-29

----

### 2018-12-30

Today I learned how to use localStorage for a trivia made in React

Repository [here](https://github.com/blyndusk/react-scss-starter)
