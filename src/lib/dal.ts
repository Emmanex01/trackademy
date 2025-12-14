'use server'
import 'server-only'
import { cookies } from 'next/headers'
import { decrypt } from '@/lib/session'
import { cache } from 'react'
import prisma from './prisma'
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  console.log('Cookie in verifySession:', cookie) // Debugging line
  const session = await decrypt(cookie)
  console.log('Decrypted session:', session) // Debugging line
  if (!session?.sessionId) {
    console.log('No valid session found')
    // redirect('/login')
    return { isAuth: false }
  }
  console.log('Session ID found:', session.sessionId) // Debugging line
  const dbSession = await prisma.session.findUnique({
    where: { id: session.sessionId },
    select: { userId: true, expiresAt: true },
  })

  if (!dbSession) {
    console.log('Session not found in database')
    return { isAuth: false }
  }
 
  return { isAuth: true, userId: dbSession?.userId }
})

export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) return null
 
  try {
    const data = await prisma.user.findMany({
      where: { id: session.userId },
      select: { id: true, name: true, email: true, role: true },
    })
 
    const user = data[0]
 
    return user
  } catch (error) {
    console.log('Failed to fetch user')
    return null
  }
})