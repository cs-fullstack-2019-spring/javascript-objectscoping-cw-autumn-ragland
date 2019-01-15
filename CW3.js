//create array
var peopleList =
    [
    {firstname : "Jimmy", lastname: "Page" , age: "62" , zipCode : "10281"},
    {firstname : "Rick", lastname: "Neilson" , age: "57" , zipCode : "61016"},
    {firstname : "Jimi", lastname: "Hendrix" , age: "57" , zipCode : "90001"},
    {firstname : "Lemny", lastname: "Kilmeiser" , age: "57" , zipCode : "21120"}
    ];
console.log(peopleList[0].firstname);

//add famous song to Hendrix
peopleList[2].famousSong = "purple haze";
console.log(peopleList[2].famousSong);

//add function to return band and zip code
peopleList[0].getBandAndZip = function()
{
    return "Led Zeppelin " + this.zipCode
};

//zipcode match function
var input = prompt("Enter a zip code");

function zipPrint(input)
{
    if (input == 10281)
    {
      return peopleList[0].firstname
    }
    else if (input == 61016)
    {
        return peopleList[1].firstname
    }
    else if (input == 90001)
    {
        return peopleList[2].firstname
    }
    else if (input == 21120)
    {
        return peopleList[3].firstname
    }
    else
    {
        return "NO MATCH"
    }
}

console.log(zipPrint(input));




