let s = "PAYPALISHIRING";

function convert(s: string, numRows: number): string {

    if(numRows == 1) return s;

    let str = "";
    let n = s.length;
    let formula = (numRows - 1)*2;

    for(let i = 0; i < numRows; i++) {
        let index = i;

        while(index < n){
            str += s[index];

            if(i !== 0 && i !== numRows-1){
                let k1 = formula-2*i;
                let k2 = index + k1;

                if(k2 < n){
                    str += s[k2];
                }
            }
            index += formula;
        }
    }
    return str;
}

console.log(convert(s, 4));