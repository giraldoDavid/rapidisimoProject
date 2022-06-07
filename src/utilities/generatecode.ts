const aletorio = () => {
    return Math.floor(Math.random() * 9); 
}

export default () => {
    const arr = [aletorio(),aletorio(),aletorio(),aletorio(),aletorio(),aletorio()]

    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }

    return arr.join().replace(/,/g, "");
}