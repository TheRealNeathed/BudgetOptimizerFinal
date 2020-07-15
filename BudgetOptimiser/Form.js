class Form{
    constructor() {

this.titlexc = createElement('h1',"Budget Optimizer");

this.monthinstruction = createElement('h3',"What is your monthly income?")
this.taxinstruction = createElement('h3',"What is your cumulative income tax rate?* ")
this.asterisk1 = createElement('h5',"*(Federal + State Income tax, and other taxes like Medicare and Social Security)")
this.asterisk2 = createElement('h5',"*You can lower your savings and increase your investment depending on your investing knowledge.")

this.familyinstruction = createElement('h3',"What is your family size?")
this.discmi = createElement('h2')

this.monthinput = createInput("");
this.taxinput = createInput("");
this.familyinput = createInput("");


this.button = createButton("Submit");

this.tablebutton = createButton('Generate A Budget Plan')





    }

    display() {
        //positioning and hiding some of the titles

        this.titlexc.position(50, -30);
        this.monthinput.position(430,260);
        this.taxinput.position(430,360);
        this.familyinput.position(430,460);
        this.monthinstruction.position(430,200)
        this.taxinstruction.position(430,300)
        this.familyinstruction.position(430,400)
        this.button.position(450,500)
        this.button.size(120,40)

//I added classes to the buttons so that I could use css on them, they didn't look good before
        this.button.addClass('button');
        this.tablebutton.position(450,800)
        this.tablebutton.addClass('button');
        this.tablebutton.hide()
        this.asterisk1.position(700,700)
        this.asterisk2.position(700,1130)
        this.asterisk2.hide()
//this button is to submit the form
    this.button.mousePressed(() => {
    this.asterisk1.hide()
    this.monthinstruction.hide()
    this.taxinstruction.hide()
    this.familyinstruction.hide()
    this.button.hide()
    this.monthinput.hide()
    this.familyinput.hide()

    this.taxinput.hide()
    this.tablebutton.show()
    player.monthlyincome = this.monthinput.value();
    player.taxes = this.taxinput.value();
    player.familysize = this.familyinput.value();
    playerCount +=1;
    player.index = playerCount;
     player.update();
    player.updateCount(playerCount);
    calcfoodexp()


    
});
//this button is to generate the sample budget
this.tablebutton.mousePressed(() => {
    generate_table()
    this.tablebutton.hide()
    this.asterisk2.show()




});

}

}