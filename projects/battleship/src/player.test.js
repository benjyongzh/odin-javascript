import player from "./player";
import game from "./gameManager";

describe.only("player's turn", () => {
    test("Game goes to next player's turn after attack().", () => {
        const player1 = player();
        const spy = jest.spyOn(game, 'nextPlayer');
        player1.attack = jest.fn(() => game.nextPlayer());
        player1.attack([4,6]);
        expect(spy).toHaveBeenCalled();
    });
});

describe("Computer player", () => {


    test("randomAttack() is called if player is computer", () => {

    });

    test("computer attack will never hit same coordinate twice", () => {
        
    });  
})