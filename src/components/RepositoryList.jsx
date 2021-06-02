import { RepositoryItem } from "./RepositoryItem"

const repository = {
  name: 'unform',
  description: 'Forms in React',
  url: '#limbo'
}

const repositories = [
  { ...repository, id: 'uds' },
  { ...repository, id: 'uda' },
  { ...repository, id: 'udb' }
]

export function RepositoryList() {
  return (
    <section className="repository-list">
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  )
}
