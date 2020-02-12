class Negociacao {
    
    constructor(data, quantidade, valor) {
        
        // É uma boa prática colocar o underline para mostrar que essas variaveis sao imutáveis (clean code)
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        //Não existe propriedade privada no JS, então esse recurso encapsula as propriedades (não deixa alterar)
        Object.freeze(this);
    }
    
    // Retorna o método sem precisar utilizar .volume() quando for utilizar a funcao EX(necociacao.volume)
    get volume() {
        
        return this._quantidade * this._valor;
    }
    
    get data() {
        
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        
        return this._quantidade;
    }
    
    get valor() {
        
        return this._valor;
    }
}