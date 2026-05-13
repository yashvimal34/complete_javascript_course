function selectItem(item) {
    let price = 0

    switch(item) {
        case 'coffee':
            price = 2
            break
        case 'sandwiches':
            price = 5
            break
        case 'lemon cake':
            price = 10
            break
        default:
            return `sorry we don't sell ${item}`        
    }
    return `you have selected ${item} that will cost ${price}`
}

console.log(selectItem("ksdlf"))