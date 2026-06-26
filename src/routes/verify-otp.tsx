import VerifyOtp from '@/pages/auth/verifyOtp'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/verify-otp')({
  component: RouteComponent,
})

function RouteComponent() {
  return <VerifyOtp />
}
