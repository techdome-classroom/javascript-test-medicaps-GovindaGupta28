function longestSubstring(s) {
    let seenChars = new set() ; 
    let left = 0;
    let right = 0;
    let maxlength = 0;
    while(right< s.length){
        if(!seenChars.has(s[right])){
            seenChars.add(s[right]);
            right++ ;
            maxlength = Math.max(maxlength, right-left);
        }else{
            seenChars.delete(s[left]);
            left++;
        }
    }
    return maxlength;
}

const exampleInput = "abcab"

module.exports = { longestSubstring };


