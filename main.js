var SYMBOLS = "qwertyuiop[]asdfghjkl;'\zxcvbnm,./\~!@#$%^&*()_`1234567890-=QWERTYUIOP}{ASDFGHJKL|ZXCVBNM<>?"

class Matrix{

    constructor(obj){
        this.bg = obj.bg || "#000"
        this.color = obj.color || "#0e6b0e"
        this.slideInterval = obj.slideInterval || 40
        this.symChgInterval = obj.symChgInterval || 400
        this.fontSizeRange =  obj.fontSizeRange || [20,26]
        this.symbols = obj.symbols || SYMBOLS

        document.body.style.background = this.bg

        this.topP = -15
        this.item = document.createElement("p")
        this.item.classList.add("item")
        this.item.style.top = this.topP + "px"
        this.item.style.fontSize = Math.floor(Math.random() * this.fontSizeRange[1] - this.fontSizeRange[0]) + this.fontSizeRange[0] + "px"
        this.item.style.left = Math.floor(Math.random() * 101) + "%"
        this.item.style.color = this.color
        document.body.appendChild(this.item)
        var obj = this
        this.generationInterval = setInterval(this.generateSymbol.bind(null,obj),this.symChgInterval)
        this.positionInterval = setInterval(this.updatePosition.bind(null,obj),this.slideInterval)
    }

    generateSymbol(bu){
        bu.item.innerText = bu.symbols[Math.floor(Math.random() * bu.symbols.length)]
    }

    updatePosition(bu){
        bu.topP += 1
        bu.item.style.top = bu.topP + "%"
        if(bu.topP >= 100){
            clearInterval(bu.generationInterval)
            clearInterval(bu.positionInterval)
            document.body.removeChild(bu.item)
        }
    }

}



setInterval( () => {
    var m1 = new Matrix({})
},10)


