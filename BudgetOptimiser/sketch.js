
var playerCount=0;
var player1 = null
var monthlyincome = null



function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  
  form = new Form()
  form.display();
  player = new Player();


}
//this is the code for the calculation of the advice
function calcfoodexp(){
  var tax = player.taxes
var mi = player.monthlyincome
var fam = player.familysize
  console.log(mi)
  console.log(fam)
  console.log(tax)
  var taxmoneyz = (mi * tax)/100
  console.log(taxmoneyz)
  var dmi = mi - taxmoneyz
  console.log("This is your dmi "+dmi)
  this.discmi = createElement("h2","Your Discretionary Monthly Income (The Income you have left after tax) is "+dmi +" dollars")
  this.discmi.position(50,200)
  var savings = dmi *0.15
  this.savingsquote = createElement("h2","Your Savings (The amount of money you should put in the bank or a secure form of investment) is "+savings +" dollars")
  this.savingsquote.position(50,300)
  var totalexp = dmi *0.5
  this.expquote = createElement("h2", "You should be spending "+totalexp+" dollars or less on things you need, such as groceries, electricity, rent, insurance, etc.")
  this.expquote.position(50,400)
  var totalwant = dmi * 0.3
  this.wantquote = createElement("h2","You should be spending "+totalwant+" dollars on things you want, like new furniture or entertainment.")
  this.wantquote.position(50,500)
  var invest = dmi * 0.05
  this.investquote = createElement("h2","You should be investing about "+invest+" dollars in stocks, ETFs, Options, Corporate Bonds, and more. This is a good way to make extra income on the side. However, make sure you do proper research before you invest")
  this.investquote.position(50,600)
  this.finalquote = createElement("h2","You should adhere to these values, and make sure not to have too much money going into wants. The more money you have in savings or investments, the better.")
  this.finalquote.position(50,700)
  

}

// this is the code for the sample budget
function generate_table() {
  var a = player.monthlyincome
  var b

  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 8; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 3; j++) {
      if (j===0 && i===0){
        b = "Income"
        a = ""
      }
      else if (j===1 && i===0){
          b = "Expense"
          a = ""
        }
        else if (j===2 && i===0){
          b = "Expense Reason"
          a = ""
        }
      else if (j===0 && i===1){
        b = "This is your income:"
        a = player.monthlyincome
      }
      else if (j===1 && i===1){
          b = "-"
          a = (player.taxes * player.monthlyincome)/100
        }
        else if (j===2 && i===1){
          b = "Taxes"
          a = "(Cumulative)"
        }
        else if (j===0 && i===2){
          b = "This is your remaining income:"
          a = player.monthlyincome - (player.taxes*player.monthlyincome/100)
        }
        else if (j===1 && i===2){
          b = "-"
          a = player.monthlyincome * 0.04 * player.familysize
        }
        else if (j===2 && i===2){
          b = "Groceries And Utilities"
          a = "(Approximate)"
        }
        else if (j===0 && i===3){
          b = "This is your remaning income:"
          a = (player.monthlyincome - player.monthlyincome*0.04*player.familysize)-player.monthlyincome*player.taxes/100
        }
        else if (j===1 && i===3){
          b = "-"
          a = player.monthlyincome * 0.20
        }
        else if (j===2 && i===3){
          b = "Insurance"
          a = "(Approximate)"
        }
        else if (j===0 && i==4){
          b = "This is your remaning income:"
          a = ((player.monthlyincome - player.monthlyincome*0.04*player.familysize)-player.monthlyincome*player.taxes/100) - player.monthlyincome*0.2
        }
        else if (j===1 && i===4){
          b = "-"
          a = player.monthlyincome * 0.30
        }
        else if (j===2 && i===4){
          b = "Wants and Entertainment"
          a = "(Approximate)"
        }
        else if (j===0 && i==5){
          b = "This is your remaning income:"
          a = ((player.monthlyincome - player.monthlyincome*0.04*player.familysize)-player.monthlyincome*player.taxes/100) - player.monthlyincome*0.2 - player.monthlyincome*0.3
        }
        else if (j===1 && i===5){
          b = "-"
          a = player.monthlyincome * 0.05
        }
        else if (j===2 && i===5){
          b = "Investment"
          a = "(Approximate)"
        }
        else if (j===0 && i==6){
          b = "This is your remaning income:"
          a = ((player.monthlyincome - player.monthlyincome*0.04*player.familysize)-player.monthlyincome*player.taxes/100) - player.monthlyincome*0.2 - player.monthlyincome*0.3 - player.monthlyincome * 0.05
        }
        else if (j===1 && i===6){
          b = "-"
          a = ((player.monthlyincome - player.monthlyincome*0.04*player.familysize)-player.monthlyincome*player.taxes/100) - player.monthlyincome*0.2 - player.monthlyincome*0.3 - player.monthlyincome * 0.05
        }
        else if (j===2 && i===6){
          b = "Savings"
          a = "(Approximate)"
        }
        else if (j===0 && i==7){
          b = "You have no money left!"
          a = ""
        }
        else if (j===1 && i===7){
          b = "You have finished creating your sample budget!!!"
          a = ""
        }
        else if (j===2 && i===7){
          b = "Good Job!!!"
          a = ""
        }
        
        

      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      
      var cell = document.createElement("td");
      var cellText = document.createTextNode(b+" "+a);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}


