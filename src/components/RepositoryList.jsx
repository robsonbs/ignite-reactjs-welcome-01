const repository = {
  name: 'unform',
  description: 'Forms in React',
  url: '#limbo'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <ul>
        <li>
          <strong>{repository.name}</strong>
          <p>{repository.description}</p>
          <a href={repository.url}>Acessar Repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="#limbo">Acessar Repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="#limbo">Acessar Repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="#limbo">Acessar Repositório</a>
        </li>
      </ul>
    </section>
  )
}
