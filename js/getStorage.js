function getLocalStorageItems(){
    let fullname=localStorage.getItem('fullname');
    // console.log('fullname',fullname)
    if(fullname){
        document.getElementById('name').innerHTML=fullname;  
    }
 
}
function getDataFromAPI() {  
    // Instantiate an new XHR Object
    const xhr = new XMLHttpRequest();
    // Open an obejct (GET/POST, PATH,
    // ASYN-TRUE/FALSE)
    xhr.open("GET", 
"https://jsonplaceholder.typicode.com/posts", true);
    // When response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            // // Changing string data into JSON Object
            // obj = JSON.parse(this.responseText);
            // // Getting the ul element
            // let list = document.getElementById("list");
            // str = ""
            // for (key in obj.data) {
            //     str += `<li>${obj.data[key].employee_name}</li>`;
            // }
            // list.innerHTML = str;
            console.log('response',this.responseText)
        }
        else {
            console.log("File not found");
        }
    }
    // At last send the request
    xhr.send();
}