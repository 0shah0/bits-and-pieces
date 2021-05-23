/*
  Problem : Given an amount and the denominations of coins available, determine how many ways change can be made for amount. There is a limitless supply of each coin type.
*/

function getWays(n, c) {
    // Write your code here
    let tC = new Array(c.length).fill([]);
    let cC = 0;
    let wC = 0;
    c = c.sort((a,b)=>a-b);
    while(cC<c.length){
        wC = 0;
        while(wC<=n){
            if(wC == 0){
                tC[cC][wC] = 1;
            }else if(cC == 0){
                if(c[cC]<=wC && wC%c[cC] ==0)tC[cC][wC] = 1;
                else tC[cC][wC] = 0;
            }else{      
                if(c[cC]<=wC){
                     tC[cC][wC] = tC[cC-1][wC] + tC[cC][wC - c[cC]];
                }else{
                     tC[cC][wC] = tC[cC-1][wC];
                }
            
            }
            wC++;
        }
        cC++;
    }
    return tC[tC.length-1][n];
}
console.log(getWays(3, [8,3,1,2])) // return 3
// Feel free to improve
