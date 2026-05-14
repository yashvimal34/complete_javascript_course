function sendappreciation(text, sender, ...names){

   return names.map(name => 
       `<div class="label-card">
        <p>Dear ${name.named} </p>
        <p>${text}</p>
        <p>Best Wishes</p>
        <p>${sender}</p>
        <p>_______________________</p>
        </div>
        `
    ).join('')
}

const text = "Thank you for all your hardwork throught the year!"
const sender = "Tom"

document.getElementById("labels-container").innerHTML = sendappreciation(
        text,
        sender,
        {named: "Yash"},
        {named:  "Asmit"},
        {named:  "Rahul"},
        {named: "Krishna"},
)