export default class Character{
    constructor({anime,character,quote}){
        this.anime =anime
        this.character = character
        this.quote = quote
        this.$Data = document.querySelector('#data-container')
        this.render();
    }

    Data(){
        return ` <div class="Data-list">
        <h2 class="data-labels"><img id="inf" src="../public/css/image/question.png" title="Press the button Kaonashi"></h2>
        <h2 class="data-labels" id="anime">${this.anime}</h2>
        <h1 class="data-labels" id="character">${this.character}</h1>
        <h2 class="data-labels" id="quote">Quote: ${this.quote}</h2>
        
        </div> `
    }

  


    render(){
        this.$Data.innerHTML = this.Data()
        
    }
}