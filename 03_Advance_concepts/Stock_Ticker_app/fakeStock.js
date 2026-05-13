export function stockDetailsData() {
    return {
        name: "QStockAI",
        sym: "QTA",
        price: (Math.random() * 3).toFixed(2),
        time: new Date().toLocaleTimeString()
    }
}