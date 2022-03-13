const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")
const contentDarkMode = document.querySelector(".content-in-dark-mode")
const contentDaymode = document.querySelector(".content-in-day-mode")
const imgMain = document.querySelector("#img-main")
const logoHeader = document.querySelector("#logo-header")
const logoFooter = document.querySelector("#logo-footer")


function darkModeChanges(){
    contentDarkMode.classList.remove("content-in-dark-mode")
    contentDaymode.classList.remove("content-in-day-mode")
    contentDaymode.classList.add("hide")
    imgMain.src = 'assets/img/batman.png'
    logoHeader.src = 'assets/img/logo-night.png'
    logoFooter.src = 'assets/img/logo-night.png'
}
function dayModeChanges(){
    contentDarkMode.classList.add("content-in-dark-mode")
    contentDaymode.classList.remove("hide")
    contentDaymode.classList.add("content-in-day-mode")
    imgMain.src = 'assets/img/superman.png'
    logoHeader.src = 'assets/img/logo-day.png'
    logoFooter.src = 'assets/img/logo-day.png'
}

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    backgroundHeader: getStyle(html, "--background-header"),
    textMenu: getStyle(html, "--text-menu")
}

const darkMode = {
    bg: "#333333",
    colorHeadings: "#FFC900",
    colorText: "#FFC900",
    backgroundHeader:"#FFC900",
    textMenu:"#1818f3"
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

