import { getChallenges, getOrders, getPaidOrders } from "@/modules/challenge/services/challenge.service"
import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function Page() {

  const session = await getServerSession(authOptions)
  const { success, data } = await getChallenges({user_id: session?.user.info.userId! ,user_token: session?.user.token!})
  return (
    <div>CHALLENGE</div>
  )
}
