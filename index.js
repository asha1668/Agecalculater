
function calculateAge() {
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastname").value;
    var dob = document.getElementById("dob").value;
    var currentDate = new Date();
    var selectedDate = new Date(dob);
    var age = currentDate.getFullYear() - selectedDate.getFullYear();
    
    if(name == "" || lastName == "" ||dob == "")
    {
        alert("Please fill the input");

    }
    
    // Check if the birthday hasn't occurred yet this year
     
    else if (currentDate.getMonth() < selectedDate.getMonth() || 
        (currentDate.getMonth() === selectedDate.getMonth() && 
        currentDate.getDate() < selectedDate.getDate())) 
        {
          age--;
        }

    else
    {
        document.getElementById("result").innerHTML = " Hi my name is " + name+ " " +lastName+ " Age is " +age+ " year";
    }
    
    

    
    
    
  }