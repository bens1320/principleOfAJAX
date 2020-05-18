console.log("我是main.js")


getHTML.onclick = () => {
    const ajax = new XMLHttpRequest()
    ajax.open("GET", "/3.html")
    ajax.onload = () => {
        const content = ajax.response
        console.log(content)
        const html = document.createElement("div")
        html.innerHTML = content
        document.body.appendChild(html)
    }
    ajax.onerror = () => {}
    ajax.send()
}


getJS.onclick = () => {
    const ajax = new XMLHttpRequest()
    ajax.open("GET", "/2.js")
    ajax.onload = () => {
        const content = ajax.response
        console.log(content)
        const script = document.createElement("script")
        script.innerHTML = content
        document.body.appendChild(script)
    }
    ajax.onerror = () => {
        console.log("错误了")
    }
    ajax.send()
}


getCSS.onclick = () => {
    const ajax = new XMLHttpRequest()
    ajax.open("GET", "/style.css")
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
            if (ajax.status >= 200 && ajax.status < 300) {
                const content = ajax.response
                const style = document.createElement("style")
                style.innerHTML = content
                document.head.appendChild(style)
            } else {
                console.log("失败了")
            }
        }
    }
    ajax.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const content = request.responseXML
            const text = content.getElementsByTagName("warning")[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const content = request.response
            const object = JSON.parse(content)
            console.log(object)
        }
    }
    request.send()
}

let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const content = request.response
            const array = JSON.parse(content)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n += 1
        }
    }
    request.send()
}