export function RepositoryItem({ repository: { name, id, url, description } }) {
  return (
    <li>
      <strong>{name} {id}</strong>
      <p>{description}</p>
      <a href={url}>Acessar Repositório</a>
    </li>
  )
}
