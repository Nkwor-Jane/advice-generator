## Table of contents

- [Overview](#overview)
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
I created a Random Joke generator with ReactJS and a JokeAPI.  When the Dice button is clicked, a new random joke is displayed. Time intervals of at least 5 seconds should be given between jokes.

### Screenshot

- Light Mode
![screenshot1](https://user-images.githubusercontent.com/69125833/164842815-2dbe76d2-3945-4f3b-a744-55cfa2d5f228.png)
- Dark Mode
![screenshot2](https://user-images.githubusercontent.com/69125833/164843642-850122bf-dce6-4791-9d1a-603b371b3f57.png)


### Links

- Live Site URL: (https://resonant-empanada-55b3ec.netlify.app/)

## My process
- Installed React.
- Added neccessary files and a folder.
- Wrote necessary code and CSS.
- I used Axios to fetch data from the JokeApi Documentation.
- I added an extra feature: Dark/Light Mode feature.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learnt how to fetch data with React Hooks and Axios. 

Code Snippet:

```js
function App() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () =>{
    setTheme((curr) => (
      curr ==="dark" ? "light":"dark"
    ))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
      <Generator/>

      {/* switch slider for light/dark mode */}
      <div className="switch-checkbox">
              <span id="mode-text">{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
                <label className="switch">
                    <input type="checkbox" onChange={toggleTheme}/>
                    <span className="slider round"> </span>
                </label>
                </div>
    </div>
    </ThemeContext.Provider>
  );
}
```

### Continued development

I will focus on bulding projects from Frontend Mentor challenges and personal projects for personal development.

### Useful resources

- [Resource 1](https://www.asmeurer.com/git-workflow/) - This helped me with the Git wokflow.
- [Resource 2](https://sv443.net/jokeapi/v2/) - This helped me with the free API.


## Author

- Website - [Nkwor Jane](https://resonant-empanada-55b3ec.netlify.app/)
- Frontend Mentor - [@Nkwor-Jane](https://www.frontendmentor.io/profile/@Nkwor-Jane)


## Acknowledgments
I would like to thank Frontend Mentor.








