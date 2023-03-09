
function changefunc(){
    const input=document.getElementById('input1').value;
    if(input>=9){
        document.getElementById('Fspan').innerText='No such person exists in recorded history';

    }
    else if(input<0){
        document.getElementById('Fspan').innerText='Please enter a valid value';
    }
    else{
        let data1=input*30.48;
    document.getElementById('outputdiv1').innerHTML=data1;
    console.log(data1);

    let data2=input*12;
    document.getElementById('outputdiv2').innerHTML=data2;
    }
    
    input=document.getElementById('input1').value=""
}



// --------------


// function demofunction(){
//     const input=document.getElementById('input').value;

//     let data1=input*30.48;
//     const cent=document.getElementById('cent').innerHTML=data1;
//     let data2=input*12;
//     document.getElementById('inchh').innerHTML=data2;
// }