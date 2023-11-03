let arm = "157";

function checkArm(arm){

    let temp = "";
    for(let i = 0; i < arm.length; i++){
        temp += arm[i]*arm[i]*arm[i];
    }
    console.log(temp);
    // if(temp == arm) return "arm number";
    // else return "not arm";
}

console.log(checkArm(arm));