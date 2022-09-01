function larger(array){
    var sum=0 ;
    var avg=0;
    var count=0;
    for(i=0;i<array.length;i++){
    sum+=array[i];
    }
   avg=sum/array.length;
   for(i=0;i<array.length;i++){
    if(array[i]>avg){
        count++;
    }
   }
   console.log(count);
}
var array= [6, 8, 3, 10, -2, 5, 9];
larger(array);