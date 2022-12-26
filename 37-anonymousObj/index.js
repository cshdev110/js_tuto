/**
 * anonymous objects
 * They are objects without name
 * they don't neet a direct reference
 * No necessary unique names
 */

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let card1 = new Card("A", "Hearts");
let card2 = new Card("A", "Spades");
let card3 = new Card("A", "Diamonds");
let card4 = new Card("A", "Clubs");
let card5 = new Card("2", "Hearts");
let card6 = new Card("2", "Spades");
let card7 = new Card("2", "Diamonds");
let card8 = new Card("2", "Clubs");

let cards = [];
let cards2 = [card1, card2];
for(let i = 1; i < 9; i++){
    //eval helps with the use of dynamic variable names.
    eval('cards.push(card' + i + ');');
}

cards.forEach((item) => console.log(`${item.value} ${item.suit}`));
console.log('\nor\n\n')
console.log(`${cards[4].value} ${cards[4].suit}`)
