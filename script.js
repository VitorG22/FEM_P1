let feature = document.getElementById("feature")
let feature1 = document.getElementById("feature1")
let company = document.getElementById("company")
let company1 = document.getElementById("company1")
let mobile = document.getElementById("mobile")
let bars = document.getElementById("bars")


let feat_i = false
let comp_i = false
let grad_i = false

function feat(){
    
    if(feat_i == false ){
        feature.innerHTML = ` Feature <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`
        feature1.innerHTML = ` Feature <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`
        feat_i = true 
    }else if(feat_i ==true){
        feature.innerHTML = `Feature <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`
        feature1.innerHTML = `Feature <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`
        feat_i = false
    }
    console.log(1)
}


function comp(){

    if (comp_i == false){
        company.innerHTML = ` Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`
        company1.innerHTML = ` Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`
        comp_i = true
    }else if(comp_i == true){
        company.innerHTML = `Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`
        company1.innerHTML = `Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`
        comp_i = false
    }

}

function gradient(){

    if(grad_i == false ){
        mobile.style.background = "rgba(0,0,0,.50)"
        bars.innerHTML = `<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg>`
        grad_i = true
    }else if(grad_i ==true){
        mobile.style.background = "none"
        bars.innerHTML = `<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>`
        grad_i = false;
    }
}

console.log(mobile)
console.log(feature1)







