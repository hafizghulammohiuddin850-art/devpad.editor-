//!=========================================== task here ============================================================//
var textarea = document.getElementById("textarea")
var defaultsize = 16
var color = document.getElementById("color")
var fontsize = document.getElementById("font-size")
var fontfamily =document.getElementById("font-family")
var background = document.getElementById("background-color")

function textholder(action) {
    if (action == "bold") {
        if (textarea.style.fontWeight === "bold") {
            textarea.style.fontWeight = "normal"
        } else (textarea.style.fontWeight = "bold" )
        
    } 
    else if (action == "italic") {
        if (textarea.style.fontStyle === "italic"){
            textarea.style.fontStyle="normal"
        } else (textarea.style.fontStyle ="italic" )
        
    } else if (action == "capitalize") {
        if (textarea.style.textTransform === "capitalize"){
            textarea.style.textTransform = "none"
        }else{
            textarea.style.textTransform = "capitalize"
        }

    }
    else if (action == "uppercase") {
        if (textarea.style.textTransform === "uppercase") {
            textarea.style.textTransform = "none"
        } else{
            textarea.style.textTransform = "uppercase"
        }

    } else if (action == "increase") {
        defaultsize++
        textarea.style.fontSize = defaultsize + "px"
    }
    else if (action == "decrease") {
        defaultsize--
        textarea.style.fontSize = defaultsize + "px"
    } else if (action == "color") {
        textarea.style.color = color.value
    } else if (action == "underline") {
        if (textarea.style.textDecorationLine === "underline"){
            textarea.style.textDecorationLine = "none"
        } else(
            textarea.style.textDecorationLine = "underline"
        )

    } else if (action == "lowercase") {
        if (textarea.style.textTransform === "lowercase"){
            textarea.style.textTransform = "none" 
        } else (textarea.style.textTransform = "lowercase"

        )
        
    } else if (action == "center") {
        textarea.style.textAlign = "center"
    }
    else if (action == "right") {
        textarea.style.textAlign = "right"
    }
    else if (action == "justify") {
        textarea.style.textAlign = "justify"
    }
    else if (action == "fontsize") {

        textarea.style.fontSize = fontsize.value
    } //!“Main .value property ka istemal form control mein user ke dwara select ya enter ki gayi current value ko hasil karne ke liye karta hoon.”

    else if (action == "reset") {
        // 1. Text clear karo
        textarea.value = ""

        // 2. Global variable ko wapas 16 par lao
        defaultsize = 16

        // 3. Textarea ke styles ko default par set karo
        textarea.style.fontSize = "16px"
        textarea.style.fontWeight = "normal"
        textarea.style.fontStyle = "normal"
        textarea.style.textDecorationLine = "none"
        textarea.style.textTransform = "none"
        textarea.style.textAlign = "left"
        textarea.style.color = "#000000"
    }
    else if ( action == "fontfamily"){
        textarea.style.fontFamily= fontfamily.value
    }else if ( action == "background"){
        textarea.style.backgroundColor = background.value
    }
    
}


