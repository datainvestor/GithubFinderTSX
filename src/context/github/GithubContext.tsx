import { createContext, useState } from 'react'

export type User = {
  id: number;
  login: string;
  avatar_url: string;
}

interface GithubContextProps {
  users: User[];
  loading: boolean;
  fetchUsers: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const GithubContext = createContext<GithubContextProps | null>(null)

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }: ProviderProps) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    const data = await response.json()

    setUsers(data)
    setLoading(false)
  }

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
