//use object literal notation to create an array
//add code to that array

var peopleList =
    [
    {firstname : "Jimmy", lastname: "Page" , age: "62" , zipCode : "00281"},
    {firstname : "Rick", lastname: "Neilson" , age: "57" , zipCode : "61016"},
    {firstname : "Jimi", lastname: "Hendrix" , age: "57" , zipCode : "90001"},
    {firstname : "Lemny", lastname: "Kilmeiser" , age: "57" , zipCode : "21120"}
    ];

peopleList[0].famousSong = "purple haze";
peopleList[1].famousSong = "rock and roll";
peopleList[2].famousSong = "summer time song";
peopleList[3].famousSong = "loving and living";

peopleList[0].getBandAndZip = function()
{
    return "Led Zeppelin HISZIPCODE " + this.zipCode
};



console.log(peopleList[0].firstname);
console.log(peopleList[0].lastname);
console.log(peopleList[0].age);
console.log(peopleList[0].zipCode);
console.log(peopleList[0].famousSong);
console.log(peopleList[0].getBandAndZip());



