let s: string = "ab#c";
let t: string = "ad#c";

function backspaceCompare(s: string, t: string): boolean {
    
    let st1: any = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '#'){
            if(st1.length>0) st1.pop();
        }else{
            st1.push(s[i]);
        }
    }
    let pro1 = st1.join('');


    let st2: any = [];
    for(let i = 0; i < t.length; i++) {
        if(t[i] == '#'){
            if(st2.length>0) st2.pop();
        }else{
            st2.push(t[i]);
        }
    }
    let pro2 = st1.join('');


    if(pro1 == pro2) return true;
    else return false;
}


console.log(backspaceCompare(s, t));