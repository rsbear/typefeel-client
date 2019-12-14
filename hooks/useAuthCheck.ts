import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface Props {
  authUser?: any;
}
export default function useAuthCheck({ authUser }: Props) {
  const router = useRouter()

  useEffect(() => {
    if (!authUser) {
      router.push("/")
    }
  }, [])
}