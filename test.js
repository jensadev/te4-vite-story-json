import json from "./story.json"

export function run (element, position = 0) {
    element.innerHTML = ""

    let story = json[position]

    let p = document.createElement("p")
    p.innerText = story.description
    element.appendChild(p)

    story.options.forEach((option) =>{
        let button = document.createElement("button")
        button.innerText = option.text
        button.addEventListener("click", () => {
            run(element, option.target)
        })
        element.appendChild(button)
    })
    
}






