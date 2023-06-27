var actives = document.querySelector(".actives")
var completed = document.querySelector(".completed")
var tasks = [
    {
        "text": "Hello boy",
        "status": 1

    },
    {
        "text": "Hello man",
        "status": 0
    }
]
function update() {
    actives.innerHTML = ""
    completed.innerHTML = ""
    for (var task of tasks) {
        var index = tasks.indexOf(task)
        if (task.status == 1) {
            actives.innerHTML += `
    <div class="task">
                    <span id="t${index}" ></span>
                    <p>${task.text}</p>
                    <i id="t${index} class="fa-regular fa-circle-xmark"></i>
                </div>
`
        } else {
            completed.innerHTML += `
            <div  class="task">
                            <span id="t${index}"></span>
                            <p>${task.text}</p>
                            <i id="t${index} class="fa-regular fa-circle-xmark"></i>
                        </div>
        `
        }
    }
    add_events()
}
update()

var add = document.querySelector(".add")
add.addEventListener("click",()=>{
    var text = document.querySelector('input[type="search"]').value
    tasks.push({
        "text" :text,
        "status" :1
    })
    update()
    add_events()
})


function add_events() {
var spans = document.querySelectorAll("span")

spans.forEach((span) => {
    span.addEventListener("click", (event) => {
        var id = parseInt(event.target.id.slice(1))

        if (tasks[id].status == 0){
            tasks[id].status = 1
            update()
        }else{
            tasks[id].status = 0
            update()
        }
        })
})
}
add_events()