// Your code here

class Dragon {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }


  static getDragons(...dragon) {

    console.log(dragon)
    let newArr = []
    for (let ele of dragon) {
      newArr.push(ele.name)
    }
    return newArr
  }
}




/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
