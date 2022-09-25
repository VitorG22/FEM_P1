let feature = document.getElementById("feature")
let company = document.getElementById("company")



let feat_i = false
let comp_i = false


function feat(){
    
    if(feat_i == false ){
        feature.innerHTML = ` Feature <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`
        feat_i = true 
    }else if(feat_i ==true){
        feature.innerHTML = `Feature <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`
        feat_i = false
    }

}


function comp(){

    if (comp_i == false){
        company.innerHTML = ` Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`
        comp_i = true
    }else if(comp_i == true){
        company.innerHTML = `Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`
        comp_i = false
    }

}








