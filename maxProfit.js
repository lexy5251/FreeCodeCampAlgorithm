//  Say you have an array prices for which the ith element is the price of a given stock on day i.
//  Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
// (i.e., buy one and sell one share of the stock multiple times).



let maxProfit = (prices) => {
    let profit = 0;
    for(let i=1; i<prices.length; i++) {
        if(prices[i]>prices[i-1]){
            profit += prices[i] - prices[i-1];
        }
    }
    return profit;    
}

console.log("Input: [7,1,5,3,6,4], expected: 7, actual: ",maxProfit([7,1,5,3,6,4]));
console.log("Input: [1,2,3,4,5], expected: 4, actual: ",maxProfit([1,2,3,4,5]));
