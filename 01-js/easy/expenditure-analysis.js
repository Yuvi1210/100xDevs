/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var categories = {};
  for (let i = 0; i < transactions.length; i++) {
    var t = transactions[i];
    categories["Drink"];
    if (categories[t.category]) {
      categories[t.category] += t.price;
    } else {
      categories[t.category] = t.price;
    }
  }
  var keys = Object.keys(categories);
  // console.log(categories);
  // console.log(keys);
  let result = [];
  for (let i = 0; i < keys.length; i++) {
    result.push({ category: keys[i], totalSpent: categories[keys[i]] });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
