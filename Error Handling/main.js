document.getElementById('myBtn').addEventListener('click',function(e){
    var nameInp = document.getElementById('name');
    var ageInp = document.getElementById('age')
    var errors = document.getElementById('errors')
    errors.innerHTML = ""

    try{
        if(nameInp.value.length === 0){
            throw new Error("Name is required")
        }
        if(ageInp.value.length === 0){
            throw new Error("Age is required")
        }
        if(isNaN(ageInp.value)){
            throw new Error("Age is not numeric")
        }
        if(nameInp.value.length > 20){
            throw new Error("Name is too long")
        }
    } catch(err){
        errors.innerHTML = err.message;
    } finally{
        nameInp.value = ""
        ageInp.value = ""
    }
    e.preventDefault()
})