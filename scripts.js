const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")
const contentDarkMode = document.querySelector(".content-in-dark-mode")
const contentDaymode = document.querySelector(".content-in-day-mode")
const imgMain = document.querySelector("#img-main")


function darkModeChanges(){
    contentDarkMode.classList.remove("content-in-dark-mode")
    contentDaymode.classList.remove("content-in-day-mode")
    contentDaymode.classList.add("hide")
    imgMain.src = 'assets/img/batman.png'
}
function dayModeChanges(){
    contentDarkMode.classList.add("content-in-dark-mode")
    contentDaymode.classList.remove("hide")
    contentDaymode.classList.add("content-in-day-mode")
    imgMain.src = 'assets/img/superman.jpeg'
}

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    if(target.checked){
        changeColors(darkMode)
        darkModeChanges()
        localStorage.setItem('gmtNightMode', 'true')


    }
    else{
        changeColors(initialColors)
        dayModeChanges()
        localStorage.removeItem('gmtNightMode')
    }

})
const nightModeStorage = localStorage.getItem('gmtNightMode')

    if(nightModeStorage){
      changeColors(darkMode)
    }
    else {
      changeColors(initialColors)
    }

