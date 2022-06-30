console.log("-----TypeConversion-----")

let variable = true;
console.log("variable=true: typeof=", typeof variable, ", value=", variable);

variable = "hello";
console.log("variable= 'hello': typeof=", typeof variable, ", value=", variable);

variable = Number(1293);
console.log("variable = Number(1293): typeof=", typeof variable, ", value=", variable);

variable = Number("hello");
console.log("variable = Number('hello'): typeof=", typeof variable, ", value=", variable);

variable = Boolean(0 || -0 || "" || undefined || null || false || NaN)
console.log('variable = Boolean(0 || -0 || "" || undefined || null || false || NaN ):', "typeof=", typeof variable, ", value=", variable);

variable = Boolean(1 && 1.23 && "hello" && "false" && 2+1.2 && -1);
console.log('variable = Boolean(1 && 1.23 && "hello" && "false" && 2+1.2 && -1):', "typeof=", typeof variable, ", value=", variable);

variable = +'2';
console.log("variable= +'2': typeof=", typeof variable, ", value=", variable);

variable = +'hello';
console.log("variable= +'2': typeof=", typeof variable, ", value=", variable);

variable = String(23);
console.log("variable= String(23): typeof=", typeof variable, ", value=", variable);

variable = Number(true);
console.log("variable= Number(true): typeof=", typeof variable, ", value=", variable);

variable = Number(false);
console.log("variable= Number(false): typeof=", typeof variable, ", value=", variable);

variable = (210).toString();
console.log("variable= (210).toString: typeof=", typeof variable, ", value=", variable);

variable = (3.14159).toFixed(3);
console.log("variable= (3.14159).toFixed(3): typeof=", typeof variable, ", value=", variable);

variable = (314159).toExponential(2);
console.log("variable= (314159).toExponential(3): typeof=", typeof variable, ", value=", variable);