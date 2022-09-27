for (let i = 0 ; i <=10 ; i++){
    //break
    // if(i === 4){
    //     console.log("I is event four")
    //     break; // it stop our loop when condition is done
    // }

    // contiune case

    if (i === 5 || i === 7){
        console.log("I is event to five and seven")
        continue; // it stop our loop only when condition is done and ther pass it throught
    }
    console.log(i)
}