let i = 1;

/*while (i < 101){

    if (i % 3 == 0 && i % 5 == 0){

        console.log(i + " " + "os dois");

    } else if (i % 3 == 0) {

        console.log(i + " " + "Fizz");

    }else if(i% 5 == 0){

        console.log(i + " " + "Buzz");

    }else{

        console.log(i + " " + "FizzBuzz");
    }      

    i++
}*/

for(let i = 1; i < 101; i++){

    if(i % 3 == 0 && i % 5 == 0){

        console.log("FizzBuzz");

    }else if(i % 3 == 0){

        console.log("Fizz");

    }else if(i % 5 == 0) {

        console.log("Buzz");

    }else {

        console.log(i);

    }
    
}