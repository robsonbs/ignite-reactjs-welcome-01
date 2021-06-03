import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";

type Repository = {
  name: string;
  id: number;
  url: string;
  description: string
}

type RepositoryResponse = {
  name: string;
  id: number;
  html_url: string;
  description: string
}
// https://api.github.com/orgs/rocketseat/repos
export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data.map((item: RepositoryResponse) => ({
        ...item, url: item.html_url
      }))))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem
            key={repository.id}
            repository={repository}
          />
        ))}
      </ul>
    </section>
  )
}
