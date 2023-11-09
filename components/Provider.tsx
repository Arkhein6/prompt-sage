"use client"

import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"

type Props = {
  children: any,
  session: Session | null
}

const Provider = ({children, session}: Props) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider