let arr2 = ["BMW", "AUDI", "Mercedes"];

function cars(){

    document.write("German Cars:</br>  " +arr2);

    arr2.push("TATA_Motors","LAND_ROVER", "Jagur");
    document.write("<h5> New Cars in INDIAN Market </h5>");
    for(let j=0;j<arr2.length;j++){
        document.write(arr2[j]+ "</br>");
    }
};cars();

let x = 1;
let y = 1;

function pos_neg(){ // Function for checking positive and negative numbers
    if(x>0){
        document.write("<h4> Given number is positive</h4>");
    }else if(x<0){
        document.write("<h4>Given number is negative</h4>");
    }    else{
            document.write("<h4>Given number is equivalent to zero</h4>");
        }
    
};

function odd_even(){ // Function for checking odd and even for numbers
    if(x%2==0){
           document.write("<h5>Given number is even</h5>"); 
    }else if(x%2!=0) {
        document.write("<h5>Given number is odd</h5>");
    } else{
        document.write("<h5> Invalid Entry </h5>");
    }
};

function pos_even(){ // Function for checking positive and even nature of the numbers
    if(x%2==0){
        document.write("Given number is even");
    }else {
        document.write("Given number is odd");
    } 
    
    if(x>0){
        document.write("Given number is positive");
    }
};

function nine(){ // Function for printing the table of 9
    for(;x<=10;x++){
        document.write("<h6>"+ (x*9)+ "</h6>");
    }
};

function even(){ // Function for printing the first 5 even numbers
    document.write("<h5>First 5 Even Numbers</h5>")
    for(let a = 2;a<=10;a+=2){
        
        document.write("<h6>"+ a + "</h6>");
    }
};

function oddno(){ //Function for printing the first 5 odd numbers
    document.write("<h5>First 5 Odd Numbers</h5>")
    while(y<=10){
        document.write("<h4>"+ y+"</h4>");
        y=y+2;
    }
};

function lop(){ // Function for printing the "do-while statments"
    let x = 1; 
    document.write("<h4>Working With Do-While Loop Condition</h4>");
    do{
        document.write("<h5>Printing the " +  x  + " statment </h5>");
        x++;
    }while(x<=5);
};

function arr(){ // Function for Working with array
    let arr = [1,2,3,4,5,6,7,8,9,10];
        document.write("<h5>Number Series </h5> "+arr);
    arr.push(11,12,13,14,15,16,17,18,19,20);
    document.write("<h5> New Number Series</h5>"); 
        for(let i = 0; i<arr.length;i++){
            document.write(arr[i]+ "</br>" ); 
        }
};


//Calling All Functions
pos_neg();
odd_even();
pos_even();
nine();
even();
oddno();
lop();
arr(); 