function saveToLocalStorage(){
    let fullname=document.getElementById("fullname").value
    let mobile=document.getElementById("mobile").value
    let address=document.getElementById("address").value
    let branch=document.getElementById("branch").value 
    if(localStorage.getItem('fullname')){
        localStorage.clear();
    }
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('address', address);
    localStorage.setItem('branch', branch);      
}