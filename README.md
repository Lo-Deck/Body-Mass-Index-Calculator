# Frontend Mentor - Body Mass Index Calculator solution

This is a solution to the [Body Mass Index Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Select whether they want to use metric or imperial units
- Enter their height and weight
- See their BMI result, with their weight classification and healthy weight range
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Body-Mass-Index-Calculator/blob/main/screenshot/Body%20Mass%20Index%20Calculator-mobile.png).
![screenshot tablet](https://github.com/Lo-Deck/Body-Mass-Index-Calculator/blob/main/screenshot/Body%20Mass%20Index%20Calculator-tablet.png).
![screenshot desktop](https://github.com/Lo-Deck/Body-Mass-Index-Calculator/blob/main/screenshot/Body%20Mass%20Index%20Calculator-desktop.png).
![screenshot desktop imperial](https://github.com/Lo-Deck/Body-Mass-Index-Calculator/blob/main/screenshot/Body%20Mass%20Index%20Calculator-desktop-imperial.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Body-Mass-Index-Calculator).
- Live Site URL: [Website](https://lo-deck.github.io/Body-Mass-Index-Calculator/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

I learned how to change a `form` when you click on `input radio` and display different `input`.

Create an new element with:

```js

const createSpan = document.createElement('span');
createSpan.innerText = 'Error not a valid input';
displayForm.insertAdjacentElement("afterend", createSpan);

```

and remove it with `displayForm.nextElementSibling.remove()`.

Using a for loop `for( const value of objBmi)` to fetch element and then display it.



### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.