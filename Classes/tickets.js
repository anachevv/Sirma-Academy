class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function displayTickets(arr, criteria) {
    var tickets = [];

    for (let i = 0; i < arr.length; i++) {
        let [destination, price, status] = arr[i].split('|');
        let ticket = new Ticket(destination, price, status)
        tickets.push(ticket);
    }

    switch (criteria) {
        case "destination":
            tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            tickets.sort((a, b) => a.price - b.price);
            break;
        case "status":
            tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return tickets;
}

console.log(displayTickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'

))

console.log(
    displayTickets(
        ['Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'],
        'status'

    )
)