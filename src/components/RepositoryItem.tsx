type Repository = {
  name: string;
  id: number;
  url: string;
  description: string
}

export function RepositoryItem({ id, name, description, url }: Repository) {
  return (
    <li>
      <strong>{name} {id}</strong>
      <p>{description}</p>
      <a href={url}>Acessar Repositório</a>
    </li>
  )
}
