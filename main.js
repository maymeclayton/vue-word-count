let app = new Vue({

  el: "#app",

  data: {

    enteredText: [ ],
    inputData: '',
    elements: ["characters", "words", "sentences", "paragraphs", "longest word", "most frequent character"],
    chars: '',
    word: '',
    sentence:'',
    paragraph: '',
    longest: '',
    freqChar: ''



  },

  methods: {

    analyze: function(){

      //takes input text and puts it into an array
      this.enteredText = this.inputData.split(" ");

      //number of characters
      this.chars = this.enteredText.toString().length;

      //gets the number of words
      this.word = this.enteredText.length;

      //number of sentences
      this.sentence = this.enteredText.toString().split(/[\./||\?/||\!/]/g).length;

      //number of paragraphs
      this.paragraph = this.enteredText.toString().split("\n\n").length;

      //longest word
      let noPunc=this.enteredText.toString().replace(/[,.?!]/g,' ');
      let onlyWords=noPunc.split( " " );
      let length=0;
      let word = '';

      for (let i =0; i<onlyWords.length; i++){
        if(onlyWords[i].length>length){
          length = onlyWords[i].length;
          word = onlyWords[i];
        }

      }
        this.longest = word;

      // most frequent character
      let frequent = {};
      let max = '';
      let ar = this.enteredText.toString().replace(/\s/g, " ");

      for (let i = 0; i < ar.length; i++){
        let key =this.enteredText.toString().replace(/\s/g, " ")[i];

        if (!frequent[key]){
          frequent[key]=1;
        }

        else {
          frequent[key] ++;
          if(max==''|| frequent[key] > frequent[max]){
            max=key;
            this.freqChar = max;
          }
        }
      }

      //this.freqChar = this.enteredText


      //clears out the input field when button is clicked. Not sure if I want this.
      //this.inputData = "";

    }


}

});
