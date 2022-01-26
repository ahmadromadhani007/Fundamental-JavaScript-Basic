// Function Declaration Vs Function Expression

// Function Declaration
// function identifier (ParameterList "opt") {FunctionBody}

function jumlah2bilangan (a,b) {
    var total;
    total = a + b;

    return total;
}
alert (jumlah2bilangan(1,2));

// Funtion Expression 
// function identifier "opt" (ParameterList "opt") {FunctionBody}

var jumlah2bilangan = function(a,b) {
    var total;
    total = a + b;

    return total;
}
alert (jumlah2bilangan(200,2.5));