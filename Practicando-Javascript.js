/*
El Sr. Scrooge tiene una suma de dinero 'P' que quiere invertir. Antes de hacerlo, quiere saber cuántos años 
'Y' debe mantenerse esta suma 'P' en el banco para que ascienda a la suma deseada de dinero 'D'.

La suma se mantiene durante 'Y' años en el banco donde se pagan los intereses 'I' anualmente. Después de pagar 
los impuestos 'T' del año, se reinvierte la nueva suma.

Nota sobre impuestos: no se grava el capital invertido, sino solo los intereses devengados del año

Ejemplo:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Por lo tanto, el Sr. Scrooge tiene que esperar 3 años para que el capital inicial ascienda a la suma deseada.

Su tarea es completar el método proporcionado y devolver el número de años 'Y' como un todo para que el Sr. 
Scrooge obtenga la suma deseada.

Supuesto: Suponga que el principal deseado 'D' es siempre mayor que el principal inicial. Sin embargo, es mejor 
tener en cuenta que si el Principal deseado 'D' es igual al Principal 'P', esto debería devolver 0

*/

function calculateYears(principal, interest, tax, desired) {
  // your code

  var intP; //--------------Principal x Interest
  var taxInt; //---------------interest x tax
  var intTotal; //---------------interest - taxInt
  var i = 0;

  while (principal < desired) {
    intP = principal * interest;
    taxInt = intP * tax;
    intTotal = intP - taxInt;
    principal += intTotal;

    i++;
  }

  return i;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); //------3
// calculateYears(1000, 0.01625, 0.18, 1200); //------14
// calculateYears(1000, 0.05, 0.18, 1000); //----------0
