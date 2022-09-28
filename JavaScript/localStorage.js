// save data into local storage

localStorage.setItem("Game title", "My first game!");
localStorage.setItem("Player One Score", "10");
localStorage.setItem("Player One Name", "Murdock");
localStorage.setItem("Player One Rank", "Rank: 69")


// read data form local storage

const titleGame = localStorage.getItem("Game title");
console.log(titleGame);

// delete data form local storage

localStorage.removeItem("Game title");

// delete all data from storage

if(confirm("Do you want to clear all storaged data?"))
{
    localStorage.clear();
    alert("Data is Gone!");
    console.log("All storaged data are dumpt...")
} else {
    alert("Data is still there")
    console.log("Data is still storaged");
}
    
    
