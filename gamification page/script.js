function unlockReward () { 
    let name = prompt("What is your name?");
    let bank = prompt ("Which bank do you use?");
     let email = prompt ("What is your email address?");

     if (email) { alert ('Thank you, '  + name +'!' + " " +'We will email you the link to your'+ " " + bank + " " + 'reward games.');}

}
 let button = document.querySelector(".rewardsButton");
button.addEventListener("click", unlockReward);

function changeTheme() { let body = document.querySelector("body");

    if (body.classList.contains("dark")){  

        body.classList.remove("dark");

    } else { body.classList.add("dark");}
    }
    let themeButton = document.querySelector(".theme-button");
    themeButton.addEventListener("click", changeTheme);
  