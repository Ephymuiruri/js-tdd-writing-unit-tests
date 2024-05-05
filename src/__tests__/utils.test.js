// Your tests here
import {pointsForWord} from "../utils"
describe("pointsForWord",()=>{
    it("calculates the total points for word(1 point per vowel, 2points per consonant)",()=>{
        //Arrange
        const word ="test";
        //Act
        const points = pointsForWord(word)
        //test
        expect(points).toBe(7)
    })
},
it("handles uppercase and lowercase input",()=>{
    const word ="tEsT"
    const points =pointsForWord(word);
    expect(points).toBe(7)
}))