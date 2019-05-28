
/*
What's new for this lab:


Material Icons


Here is the html tag for the delete icon:
`<i class="material-icons">delete</i>`
note: the inner text of each <i> tag tells the browser which specific icon to use. The library we link in the head contains hundreds if not thousands of options.

Be sure to include this link in your index header:

`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">` (edited)
*/

class Contact {
    constructor(name, phone, email, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}


class AddressBook {
    constructor() {
        this.contacts = []
    }
    
    add() {
        const addedContact = new Contact(name.value, phone.value, email.value, relation.value);
        this.contacts.push(addedContact);
    
    }
    display() {
        let contactList = document.getElementById("contact-list");
        let div = document.createElement("div");
        let info = document.createElement("p");
        let icon = document.createElement("i");

        div.classList.add("contact-box");
        icon.classList.add("material-icons");
        icon.classList.add("delete");

        icon.innerText ="delete";
        info.innerText = `Name: ${name.value}
        Email: ${email.value}
        Phone: ${phone.value}
        Relation: ${relation.value}`;

        div.appendChild(info);
        div.appendChild(icon);
        contactList.appendChild(div);

        icon.addEventListener("click", () => {
            div.remove();
        });
    }
}

let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let number = document.querySelector("#phone");
    let relation = document.querySelector("#relation");
    let button = document.querySelector("#button");

    let myAddressBook = new AddressBook;

    button.addEventListener("click", () => {
        myAddressBook.add();
        myAddressBook.display();
        name.value = "";
        email.value = "";
        number.value = "";
        relation.value = "";
    });
