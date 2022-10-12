const {
    findMean,
    findMedian,
    findMode,
} = require("./helpers");

describe("#findMedian", function() {
    it("Finds the median of an even set", function() {
        expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
    })
    it("Finds the median of an odd set", function () {
        expect(findMedian([1, -1, 4])).toEqual(1)
    })
})

describe("#findMean", function () {
    it("Finds the mean of an empty array", function () {
        expect(findMean([])).toEqual(0)
    })
    it("Finds the mean of an array of numbers", function() {
        expect(findMean([1, -1, 4, 2])).toEqual(1.5)
    })
})

describe("findMode", function() {
    it("Finds the mode", function() {
        expect(findMode([1,1,1,2,2,3])).toEqual(1)
    })
})