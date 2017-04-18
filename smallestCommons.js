
function smallestCommons(arr) {
    function getPrimes(num){
         var x = [];
        for (var i = 2 ; i <= num; i ++){
            for (var j = 2; j <= i; j++){
                if ((i % j) === 0 && j != i ){
                    break;
                }
                if (i % j === 0 && j === i){
                    x.push(i);
                }
            }
        }
        return x;
    }
    function getFactors(num){
        var primearray = [];
        var primes = [];
          for (var i = 2 ; i <= num; i ++){
            for (var j = 2; j <= i; j++){
                if ((i % j) === 0 && j != i ){
                    break;
                }
                if (i % j === 0 && j === i){
                    primes.push(i);
                }
            }
        }
      
        for (i = 0; i < primes.length; i++){
            if (num % primes[i] === 0){
                primearray.push(primes[i]);
            }
        }
        return primearray;
    }
    function expandAscending(arr){
      var ray = [];
        if (arr[0] < arr[1]) {
            for (i = arr[0]; i <= arr[1]; i ++) {
                ray.push(i);
            }
        }
        if (arr[0] > arr[1]) {
            for (i = arr[1]; i <= arr[0]; i++) {
                ray.push(i);
            }    
        }
        return ray;
    }
    var primefactors = [];
    var ray = expandAscending(arr);
    for (i = 0; i < ray.length; i++) {
         primefactors.push(getFactors(ray[i]));
       }
  return primefactors;
  primefactors = primefactors.sort(function(a,b){
      return a - b;
  });
}
/*  return primefactors;
  return primefactors.reduce(function(a,b){
        return a * b;
    });
}
*/smallestCommons([1, 13]);
