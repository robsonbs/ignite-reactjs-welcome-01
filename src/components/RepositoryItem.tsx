export type RepositoryItemProps = {
  repository: {
    name: string;
    id: number;
    url: string;
    description: string
  }
}

export function RepositoryItem({ repository: { id, name, description, url } }: RepositoryItemProps) {
  return (
    <li>
      <strong>{name} {id}</strong>
      <p>{description}</p>
      <a href={url}>Acessar Repositório</a>
    </li>
  )
}
