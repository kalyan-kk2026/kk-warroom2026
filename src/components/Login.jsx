import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Smartphone, KeyRound } from 'lucide-react'

// Demo OTP (no backend) — use 1234 to login
const DEMO_OTP = '1234'
const MOBILE_LENGTH = 10

function formatMobile(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  return digits
}

export default function Login({ onLogin }) {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [resendCooldown, setResendCooldown] = useState(0)

  const mobileDigits = formatMobile(mobile)
  const isMobileValid = mobileDigits.length === MOBILE_LENGTH

  const handleSendOtp = (e) => {
    e.preventDefault()
    setError('')
    if (!isMobileValid) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }
    setStep(2)
    setOtp('')
    setResendCooldown(30)
    const interval = setInterval(() => {
      setResendCooldown((c) => {
        if (c <= 1) {
          clearInterval(interval)
          return 0
        }
        return c - 1
      })
    }, 1000)
  }

  const handleVerifyAndLogin = (e) => {
    e.preventDefault()
    setError('')
    if (otp.trim() !== DEMO_OTP) {
      setError('Invalid OTP. Use 1234 for demo.')
      return
    }
    const displayName = `${mobileDigits.slice(0, 5)}****${mobileDigits.slice(-2)}`
    onLogin('user', displayName, mobileDigits)
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-war-dark p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in-down-visible">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-war-panel border border-war-accent/30 mb-4 shadow-lg shadow-war-accent/10">
            <Shield className="w-8 h-8 text-war-accent" />
          </div>
          <h1 className="text-2xl font-bold text-white">War Room Dashboard</h1>
          <p className="text-war-muted mt-1">Assembly Constituency Command Center</p>
        </div>

        <form
          onSubmit={step === 1 ? handleSendOtp : handleVerifyAndLogin}
          className="bg-war-panel border border-war-border rounded-xl p-6 shadow-xl animate-fade-in-up-visible"
          style={{ animationDelay: '100ms' }}
        >
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-war-danger/10 border border-war-danger/30 text-war-danger text-sm">
              {error}
            </div>
          )}

          {/* Step 1: Mobile number */}
          {step >= 1 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Mobile number
              </label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-war-muted" />
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={mobile}
                  onChange={(e) => setMobile(formatMobile(e.target.value))}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  className="w-full pl-10 pr-4 py-2.5 bg-war-dark border border-war-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-war-accent focus:border-transparent"
                  disabled={step > 1}
                />
                {step > 1 && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-war-muted text-xs">
                    {mobileDigits.slice(0, 5)} **** {mobileDigits.slice(-2)}
                  </span>
                )}
              </div>
              {step === 1 && (
                <p className="text-war-muted text-xs mt-1.5">
                  We’ll send a one-time password to this number
                </p>
              )}
            </div>
          )}

          {/* Step 2: OTP */}
          {step >= 2 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Enter OTP
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-war-muted" />
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter OTP (demo: 1234)"
                  maxLength={6}
                  className="w-full pl-10 pr-4 py-2.5 bg-war-dark border border-war-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-war-accent focus:border-transparent tracking-[0.4em] text-center text-lg"
                />
              </div>
              {step === 2 && (
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-war-muted text-xs">Demo OTP: 1234</p>
                  <button
                    type="button"
                    disabled={resendCooldown > 0}
                    onClick={() => {
                      setResendCooldown(30)
                      const id = setInterval(() => {
                        setResendCooldown((c) => (c <= 1 ? (clearInterval(id), 0) : c - 1))
                      }, 1000)
                    }}
                    className="text-war-accent text-xs font-medium disabled:text-war-muted disabled:cursor-not-allowed hover:underline"
                  >
                    {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : 'Resend OTP'}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Buttons */}
          {step === 1 && (
            <button
              type="submit"
              disabled={!isMobileValid}
              className="w-full py-3 rounded-lg bg-war-accent hover:bg-war-accentDim font-semibold text-war-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send OTP
            </button>
          )}
          {step === 2 && (
            <button
              type="submit"
              disabled={otp.length < 4}
              className="w-full py-3 rounded-lg bg-war-accent hover:bg-war-accentDim font-semibold text-war-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify OTP & Login
            </button>
          )}
        </form>

        <p className="text-center text-war-muted text-sm mt-4">
          Secure access • OTP verification
        </p>
      </div>
    </div>
  )
}
