let findValue = (hs, n)=>{
   if(hs.length == 1)
   return (hs[0] == n);
   
   let half = Math.floor(hs.length/2);
   let left = hs.slice(0, half);
   let right = hs.slice(half);
   let ph = (left[left.length-1] >= n ) ? left : right;
   return findValue(ph, n);
}

findValue([1,2,3,7,8,9,11,12,15,30], 15) // true
findValue([1,2,3,7,8,9,11,12,15,30], 13) // false
