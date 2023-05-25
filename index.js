
function calculateAge() {
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastname").value;
    var dob = document.getElementById("dob").value;
    var currentDate = new Date();
    var selectedDate = new Date(dob);
    var age = currentDate.getFullYear() - selectedDate.getFullYear();
    
    
    // Check if the birthday hasn't occurred yet this year
    if (currentDate.getMonth() < selectedDate.getMonth() || 
        (currentDate.getMonth() === selectedDate.getMonth() && 
        currentDate.getDate() < selectedDate.getDate())) {
      age--;
    }
    
    document.getElementById("result").innerHTML = " Hi my name is " + name+ " " +lastName+ " Age is " +age+ " year";
    

    
    
    
  }