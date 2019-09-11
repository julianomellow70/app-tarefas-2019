class CategoriaService extends Service {
  constructor(){
    //esse método copia as heranças de Service
    super();
    //concatenando url(Service) junto com categoria
    this._path = `${this._url}/categorias`
  }

  listarTodas(){
    return fetch (`${this._path}`) //buscando através do método fetch via http uma api  
        .then(res => res.json()) //executa outa coisa, joga a (res) dentro de um método
        .catch(error => console.log(error))//excessão se caso ultimo método não executar
  }
}
