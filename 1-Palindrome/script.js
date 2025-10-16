const button = document.getElementById('check-btn');

button.addEventListener('click' , ()=>{
    const input = document.getElementById('input').value;
    const result = document.getElementById('result');

    let reversed = input.split('').reverse().join('');
    if(input.toUpperCase() === reversed.toUpperCase()){
        result.innerText = `${input} is a Palindrome`;
    }else{
        result.innerText = `${input} is not a Palindrome`;
    }
})