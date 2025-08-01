const { decideAction } = require('./server');

describe('Bot Logic', () => {
    test('should attack when enemy is near', () => {
        const gameState = {
            bombs: 0,
            nearestEnemy: { distance: 1 },
            nearestPoint: null
        };
        
        const action = decideAction(gameState);
        expect(action).toEqual({
            move: "STAY",
            action: "BOMB"
        });
    });
    
    test('should collect points when available', () => {
        const gameState = {
            bombs: 0,
            nearestEnemy: null,
            nearestPoint: { direction: "UP" }
        };
        
        const action = decideAction(gameState);
        expect(action).toEqual({
            move: "UP",
            action: "COLLECT"
        });
    });
    
    test('should explore when no specific action needed', () => {
        const gameState = {
            bombs: 0,
            nearestEnemy: null,
            nearestPoint: null
        };
        
        const action = decideAction(gameState);
        expect(action.action).toBe("NONE");
        expect(["UP", "DOWN", "LEFT", "RIGHT"]).toContain(action.move);
    });
}); 