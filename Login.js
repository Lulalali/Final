function CheckInput()
{

    var firstName = document.getElementById("fname").value;
    
    
    var LastName = document.getElementById("lname").value;
    

    var allName = firstName +  " " + LastName;

    var len = allName.length;
    

    var badge = document.getElementById("badgeNum").value;
    

    if (len >20)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid name length";
    }
    else if ((badge>0) && (badge <1000))
    {
        document.getElementById("loginStatus").innerHTML =" Valid login!!!";
        location.replace("Nav.html");
    }
    else
    {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number";
    }

}