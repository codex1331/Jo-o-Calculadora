
let botao = Array.from(document.getElementsByClassName('numero')) ;
let result = document.getElementById('result');

botao.map(button =>{
    button.addEventListener("click", (e) => {

        switch(e.target.innerHTML)
        {
            case 'Del':
                if(result.innerHTML)
                {
                    result.innerHTML = result.innerHTML.slice(0,-1);
                } 
                break;

            case 'C':
                result.innerHTML = '';
                break;

            case '=':
                try
                {
                    result.innerHTML = eval(result.innerHTML);
                }
                catch
                {
                    result.innerHTML = 'ERROR...';
                }
                break;   

            default:
                result.innerHTML += e.target.innerHTML;
        }
    })
})