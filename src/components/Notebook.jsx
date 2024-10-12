function Notebook() {
  return (
    <div className="d-flex justify-content-center w-100">
      <div className="h-50">
        <button type="button" className="btn btn-primary btn-lg mt-3">Загрузить записи</button>
      </div>
      <div className="h-100 w-50 p-3 border border-primary rounded mx-5">
        <ul>
          <li>Запись для примера</li>
          <li>Какая-то инфа</li>
          <li>Еще информация</li>
        </ul>
      </div>
    </div>
  )
}

export default Notebook;