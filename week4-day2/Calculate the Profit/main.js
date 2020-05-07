//Calculate the Profit
profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
})

function profit(info) {
	return Math.round((info.sellPrice-info.costPrice)*info.inventory);
}
