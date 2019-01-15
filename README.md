# JavaScript Object/Scope Classwork

1. What is the result of the following code? Explain your answer.
  ```
  var fullname = 'John Doe';
  var obj = 
  {
     fullname: 'Colin Ihrig',
     prop: 
     {
        fullname: 'Aurelio De Rosa',
        getFullname: function() 
        {        
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());

  var test = obj.prop.getFullname;
  
  console.log(test());
  ```
Fullname is defined as "Aurelio De Rosa" in the block where the function getFullname is defined
so console.log(obj.prop.getFullname) prints Aurelio De Rosa.
Console.log(test()) prints "Aurelio De Rosa" as well because 
the variable test is assigned to the same breakdown.

2. What will you see in the console for the following example?
  ```
  var a = 1; 
  function b() 
  { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  console.log(a);    
  ```
Function b is called but console.log is not used and there is not a console.log in the the function
so nothing prints from the function b being called.
The variable a is printed to the console and is defined globally as 1 so it will print 1 to the console.


3.Create an array called ```peopleList``` of objects using *Object Literal* notation. 
Each 'person' object in the 'people' collection should have the following information:

First Name
Last Name
Age
Zip Code

Add the following 4 People to your list:
```
Jimmy Page, 62, 00821

Rick Nielsen, 57, 61016

Jimi Hendrix, 58, 90001

Lemmy Kilmister, 57, 21120
```

Then Add code to perform the following:

* Dynamically add the property ```famousSong``` to the object instance for ```Jimi Hendrix``` 
and assign it the value ```Purple Haze```

* Dynamically add a function called ```getBandandZip()``` to the object instance for ```Jimmy Page``` 
that returns a concatenated string of ```Led Zeppelin HISZIPCODE``` (get zip code from the object instance). 
Call the function from your code and log the response.

* Write a function that accepts a zip code parameter and prints out all the people in the array 
with a matching zip code, or print the message ```No match found for zip code!``` if there is no match


