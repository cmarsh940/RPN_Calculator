const { getResults, isOperator } = require('../index.js');

describe("Add numbers together", () => {
    it("should add both numbers together to get 7", function () {
        expect(getResults).toBeDefined();
        expect(getResults("5 2 +")).toEqual(7);
    });
})

describe("Subtract numbers together", () => {
    it("should subtract both numbers together to get 5", function () {
        expect(getResults).toBeDefined();
        expect(getResults("18 13 -")).toEqual(5);
    });
})

describe("Multiply numbers together", () => {
    it("should multiply both numbers together to get 10", function () {
        expect(getResults).toBeDefined();
        expect(getResults("5 2 *")).toEqual(10);
    });
})


describe("Divide numbers together", () => {
    it("should divide both numbers together to get 2", function () {
        expect(getResults).toBeDefined();
        expect(getResults("4 2 /")).toEqual(2);
    });
})


describe("Using multiple operators", () => {
    it("should multiply then add the already multiplied number to get 11", function () {
        expect(getResults).toBeDefined();
        expect(getResults("-3 -2 * 5 +")).toEqual(11);
    });
})

describe("Check operator", () => {
    it("should send true if operator is sent and false if anything else", function () {
        expect(isOperator).toBeDefined();
        expect(isOperator("+")).toEqual(true);
    });
})

describe("Check operator", () => {
    it("should send true if operator is sent and false if anything else", function () {
        expect(isOperator).toBeDefined();
        expect(isOperator("3")).toEqual(false);
    });
})

