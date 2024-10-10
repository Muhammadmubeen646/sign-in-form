
 function showAlert() {
     const Email = document.getElementById("Email").value;
     const Password = document.getElementById("Password").value;

     if (Email === '') {
       alert('Please enter an email');
     } else {
      alert('Hi' +  Email+ ' LOGIN SUCCESSFULLY');
     }
}
