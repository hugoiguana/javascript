class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();

        //AeroFunction/Lambda
       let data = new Date(
          ...this._inputData.value.split('-').map((item, i) => (i == 1 ? item - 1 : item))
        );

       
        let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);
        console.log(negociacao);

        let diaMesAno = negociacao.data.getDate() 
                        + '/' + (negociacao.data.getMonth() + 1)
                        + '/' + negociacao.data.getFullYear();

        console.log(diaMesAno);
    
    }
}