var Person =function(firstName,lastName)
{
    this.firstName=firstName;
    this.lastName=lastName;
}

var LogPerson=function(person)
{
   
    console.log(person.firstName+person.lastName);

}
var khanh=new Person("khanh","pham van");

LogPerson(khanh);