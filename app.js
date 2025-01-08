let addbtn = document.querySelector("#add");
let card = document.querySelector("#card");
let relation_status = document.querySelector("#card h5");

let check = 0; // using check to make changes in relation status

addbtn.addEventListener("click", () => {
    if(check == 0) {
        relation_status.innerText = "Friend";
        relation_status.style.color = "green";
        check = 1;
        addbtn.innerText = "Remove";
    }else{
        relation_status.innerText = "Stranger";
        relation_status.style.color = "red";
        check = 0;
        addbtn.innerText = "Add Friend";
    }
    
});

