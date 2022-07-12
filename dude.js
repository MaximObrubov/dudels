class Dude {
  variations = {
    caps: {
      "chineseMaster": "/_______\\",
      "fly": "  \\ /",
    },    
    heads: {
      "chineseMaster": " (~´.`~)",
      "fly": " (#´#)",
    },
    bodies: {
      "chineseMaster": " < /\\ >",
      "fly": " 8>O<8",
    },
    legs: {
      "chineseMaster": "  /  \\",
      "fly": "   O",
    }
  }

  constructor(type = "chineseMaster") {
    // super();
    this.type = type;
  }

  get pic() {
    return Object.keys(this.variations).map(part => this.variations[part][this.type]).join("\n")
  }
}
