class TarefaService extends Service {
  constructor(){
    //importar a estrutura da classe que herdou
    super()
    //informando o path da tarefa
    this._path = `${this._url}/tarefas?f=`
  }

  listarTodas (descricao){
    return fetch(`${this._path}${descricao}`)
        .then(res => res.json())
        .catch(erro => console.log(erro))
      }
}
