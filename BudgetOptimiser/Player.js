class Player {
    constructor(){
      this.index = null;
      this.monthlyincome = null;
      this.taxes = null;
      this.familysize = null;
    }
  
    
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "player" + this.index;
      database.ref(playerIndex).set({
        monthlyincome : this.monthlyincome,
        taxes: this.taxes,
        familysize: this.familysize
      });
    }

  
  }