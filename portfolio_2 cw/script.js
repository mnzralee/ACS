let heading = document.querySelectorAll(".hero-line");

heading.forEach( (line) => {
    // console.log(line.innerText.split(''));
    const text = line.innerText;
    line.innerHTML='';

    text.split('').forEach( char => {
        // console.log(char);
        const span = document.createElement('span');
        span.innerText = char;
        line.appendChild(span);
    })
    
})