const bodyE1 = document.querySelector('body')

bodyE1.addEventListener('mousemove', (event)=>{
    let spaneE1 = document.createElement('span')
    const xPos = event.offsetX
    const yPos = event.offsety
    spaneE1.style.top=(yPos) + 'px'
    spaneE1.style.left= (xPos) + 'px'
    const size = Math.random() * 100
    spaneE1.style.width = size + 'px'
    spaneE1.style.height = size +'px'
    bodyE1.appendChild(spaneE1)
    setTimeout(()=>{
        spaneE1.remove()
    },3000)
})
