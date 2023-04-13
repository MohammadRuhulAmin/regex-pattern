var reg = /[a-z]?pqr/ig; // i means insensitive , g means global

//var reg2 = new RegExp(parm1 , parm2); // parm1 = regular expression , param2 = flag like(i,g)

var reg2 = new RegExp(reg,'i')

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone:/^[0-9]{11}$/,
    username:/^[a-z]{5,12}$/,
    password:/^[\w@-]${8,20}/,
    slug:/^[a-z\d-!]${8-20}/,
    


}

function validate(field,regex){
    // console.log(regex.test(field.value));
    if(regex.test(field.value)){
        field.className = "valid"
    }
    else field.className = "Not Valid"
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        console.log(e.target.attributes.name.value)
        validate(e.target,patterns[e.target.attributes.name.value])
        
    })
})

