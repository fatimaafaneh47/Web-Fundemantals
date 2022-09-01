var numbers = [6, 8, 3, 10, -2, 5, 9];
var temp=[];
var counter=0;
function highpass(){
    for(i=0;i<numbers.length;i++){
        if(numbers[i]>5){
          temp[counter]=numbers[i]
            counter++
        }
    }   
}

highpass(numbers);
console.log(temp);