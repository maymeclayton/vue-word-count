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
      this.sentence = this.enteredText.toString().split(/[\./||\?/||\!/]/g).length-1;

      //number of paragraphs
      this.paragraph = this.enteredText.toString().split("\n\n").length;

      //longest word
      this.longest = this.enteredText.sort((a,b) => {return a.length<b.length;})[0];

      // most frequent character
      //this.freqChar = this.enteredText

      //clears out the input field when button is clicked.
      //this.inputData = "";

    }


}

});
