/* välj element */
let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerUpsDiv = document.getElementById("powerups");
/* variabel för att spara bank och klick power */
let bank = 0;
let pupCost = 10;
let pupCost2 = 200;
let pow = 1;
let powerupvalue = 0;
/* lyssna på knappen efter click event */
gameButton.addEventListener('click', function() {
    bank += pow;
    gameButton.textContent = "Boomers drank " + Math.floor(bank);
});
/* skapa ett powerup-element */
let powerUp = document.createElement("button");
powerUp.textContent = "Mönster? " + pupCost;
powerUp.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank -= pupCost;
        pupCost = pupCost * 1.5;
        pow = pow * 1.1;
        gameButton.textContent = bank;
        powerUp.textContent = "Mönster? " + Math.floor(pupCost);
        bankElement.textContent = "Slurp!";
    } else
        bankElement.textContent = "Uncorect amount of money dummy!";
});



let powerpup = document.createElement("button");
powerpup.textContent = "Wölverone? " + pupCost2;
powerpup.addEventListener('click', () => {
    if (bank >= pupCost2) {
        bank -= pupCost2;
        pupCost2 = pupCost2 * 1.5;
        powerupvalue += 0.4;
        powerpup.textContent = "Wölverone? " + Math.floor(pupCost2);
        bankElement.textContent = "Slurp!";
    } else
        bankElement.textContent = "Where is you ID!";
});

function step() {
    bank += powerupvalue;
    gameButton.textContent = "Boomers drank " + Math.floor(bank);
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

powerUpsDiv.appendChild(powerUp);
powerUpsDiv.appendChild(powerpup);