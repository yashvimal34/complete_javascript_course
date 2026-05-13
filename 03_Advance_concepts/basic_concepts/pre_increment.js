let currentTicketNumber = 0

function getNextTicketNumber() {
    return ++currentTicketNumber
}

console.log(`Ticket  ${getNextTicketNumber()}`)
console.log(`Ticket ${getNextTicketNumber()}`)
console.log(`Ticket ${getNextTicketNumber()}`)