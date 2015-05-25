/*
 * A parser for lambda-expressions
 * 
 */

start 
   = ws e:expr? ws {return e;}

expr 
   = n:integer      
   / x: variable {return {"name": x.join("")};}
   / function
   / application

application "application"
   = "(" ws left:expr ws right:expr ws ")" {return {"name": "@", "children": [left, right]};}

function "function"
   = lambda ws x:variable ws "." ws body:expr {return {"name": "λ" + x, "children": [body]};}

lambda "λ"
   = "λ"
   / "\\"

variable "variable" 
   = name:[a-zA-Z]+ 

integer "integer" 
   = digits:[0-9]+ { return {"name": parseInt(digits.join(""), 10)}; }

ws "whitespace" 
   = [ \t\n\r]* {return;}
