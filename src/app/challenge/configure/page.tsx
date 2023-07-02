import { getChallengeTimer, getChallenges } from "@/modules/challenge/services/challenge.service"

export default async function Page() {
  const user_id =  8401
  const user_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg0MDEsImVtYWlsIjoiZGV2LmRhbmllbGJvZ2dpYW5vKzEzNEBnbWFpbC5jb20iLCJ0b2tlbkdlbmVyYXRpb25UaW1lIjoiMjAyMy0wNi0zMCAxNDozODo0MSIsInRva2VuRXhwaXJhdGlvblRpbWUiOiIyMDI2LTA2LTI5IDE0OjM4OjQxIiwiaWF0IjoxNjg4MTM1OTIxfQ.lXLvQT0wzMFDMtKgixioCiBMtpUr1KAgfuc3QoLHQqo"

  const { success: successChallenges, data: dataChallenges  } = await getChallenges({user_id, user_token})
  const { success: succesTimer, data: dataTimer } = await getChallengeTimer({user_id, user_token})
  
  return (
    <div></div>
  )
}
