> *psst.. hey psst.. you can see the website version [here](https://blyndusk.github.io/wdilt/#/) !*

## Usage

**wdilt** *(What Did I Learned Today)* aims to:

- encourage me to **learn something new** every day
- see my progression **over time**
- become **better**

> As much as possible related to the **front-end development**

## Generate a Markdown Calendar

1. **Go to** [main.ts](https://github.com/blyndusk/wdilt/blob/master/main.ts)
2. **Create** a new Calendar with specific parameters: `new Calendar(year, month)`
    - `year` : the year of the **month you choose**
    - `month` : the **month** you choose
3. fill it: `new Calendar(year, month).fill()`
4. run `yarn build` or `npm run build` in a **large terminal** to see the **results**

__Exemple:__

```js
const April2019 = new Calendar(2019, 4).fill();
```

> You can see the result in markdown below:

# Progression: March 2019

| 🗓  |         Su       |         Mo       |         Tu       |         We       |         Tu       |         Fr       |         Sa       |
| -- | ---------------- | ---------------- | ---------------- | ---------------- | ---------------- | ---------------- | ---------------- |
| W1 |                  |                  |                  |                  |                  |[01](#_2019-03-01)|[02](#_2019-03-02)|
| W2 |[03](#_2019-03-03)|[04](#_2019-03-04)|[05](#_2019-03-05)|[06](#_2019-03-06)|[07](#_2019-03-07)|[08](#_2019-03-08)|[09](#_2019-03-09)|
| W3 |[10](#_2019-03-10)|[11](#_2019-03-11)|[12](#_2019-03-12)|[13](#_2019-03-13)|[14](#_2019-03-14)|[15](#_2019-03-15)|[16](#_2019-03-16)|
| W4 |[17](#_2019-03-17)|[18](#_2019-03-18)|[19](#_2019-03-19)|[20](#_2019-03-20)|[21](#_2019-03-21)|[22](#_2019-03-22)|[23](#_2019-03-23)|
| W5 |[24](#_2019-03-24)|[25](#_2019-03-25)|[26](#_2019-03-26)|[27](#_2019-03-27)|[28](#_2019-03-28)|[29](#_2019-03-29)|[30](#_2019-03-30)|
| W6 |[31](#_2019-03-31)|                  |                  |                  |                  |                  |                  |

## 2019-03-01

Today I finished my version of **auto-add-people-linkedin**.

Files [here](https://github.com/blyndusk/shitty-hacks/tree/master/auto-add-people-linkedin)

## 2019-03-02

Nothing today. To apologize, here a vaporwave GIF:

![random vapowave gif](https://thumbs.gfycat.com/UnsungCarelessHoiho-max-1mb.gif)

----

## 2019-03-03

Today I made the documentation about [shitty-hacks/auto-add-people-linkedin](https://github.com/blyndusk/shitty-hacks/tree/master/auto-add-people-linkedin)

----

## 2019-03-04

Today I learned how to use [lavomatix](https://github.com/jcchrrr/lavomatix), a front-end bundler.

----

## 2019-03-05

Today I learned how to make multiple AJAX calls in terms of resizing window.

----

## 2019-03-06

Today I learned how to call a function on time in terms of a breakpoint.

Gist [here](https://gist.github.com/blyndusk/32b437d4f5d3f2154502709e4bf37885)

----

## 2019-03-07

Today I learned how to use [TypeScript](https://www.typescriptlang.org/)

----

## 2019-03-08

Today I updated [wdilt](https://github.com/blyndusk/wdilt) & [shitty-hacks](https://github.com/blyndusk/shitty-hacks) with TS.

Also, I learned how to use **many depedencies** using **NPM scripts:**

```JSON
"scripts": {
    "build": "tsc main.ts && uglifyjs main.js -o main.min.js && rm -rf main.js && node main.min.js"
},
```

Here, the **build** script will:

- **compile** TS *input* file to TS *output* file
- **uglify** the output file and **minify** it to a new JS minified output file
- remove the **raw** JS file
- start the **script** of the JS minified file with node

----

## 2019-03-09

Today I learned how to contribute to a Wordpress UI.

----

## 2019-03-10

Today I learned that [GitStalk](https://gitstalk.netlify.com/) exist. **Wow**.

----

## 2019-03-11

Today I learned how to load a **YouTube playlist** using [YouTube API v3](https://developers.google.com/youtube/v3/getting-started):

- [how to load a specific playlist from a user](https://developers.google.com/youtube/v3/docs/playlistItems)
- [how to play a specific video in this playlist](https://developers.google.com/youtube/iframe_api_reference#Queueing_Functions)

----

## 2019-03-12

Today I learned how to generate a website with a markdown file using [docsify](https://docsify.js.org/#/)

----

## 2019-03-13

today I **recap my knowledge** as a **front-end developer**, following the [developer-roadmap](https://github.com/kamranahmedse/developer-roadmap) 2019:

- [Caption](/annexes/KNOWLEDGE.md#caption)
- [Required knowledge](/annexes/KNOWLEDGE.md#required-knowledge)
- [HTML](/annexes/KNOWLEDGE.md#html)

----