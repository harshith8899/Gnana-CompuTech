import { useState } from 'react'
import logo from '../assets/logo.png'
import './AdminLogin.css'

function EyeIcon({ off }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {off ? (
        <>
          <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-10-8-10-8a18.4 18.4 0 0 1 4.22-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19" />
          <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
          <path d="M1 1l22 22" />
        </>
      ) : (
        <>
          <path d="M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  )
}

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (error) setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Please enter both your email and password.')
      return
    }
    setLoading(true)
    try {
      // Replace with your real auth call, e.g.:
      // const res = await fetch('/api/admin/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // })
      // if (!res.ok) throw new Error('Invalid email or password.')
      await new Promise((resolve) => setTimeout(resolve, 900))
      console.log('Admin login submitted:', form)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-grid" aria-hidden="true"></div>

      <div className="admin-login-card">
        <div className="admin-login-brand">
          <img src={logo} alt="Gnana CompuTech Solutions logo" />
          <div className="brand-word">
            Gnana CompuTech
            <span>EDUCATION TECHNOLOGY SOLUTIONS</span>
          </div>
        </div>

        <div className="eyebrow">
          <span className="num">Staff Access</span> ADMIN PORTAL
        </div>
        <h1>Sign in to your dashboard</h1>
        <p className="admin-login-lede">
          Enter your admin credentials to manage courses, enquiries and
          institutional partners.
        </p>

        {error && <div className="admin-login-error">{error}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="admin@gnanacomputech.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="username"
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <div className="admin-password-wrap">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="admin-password-toggle"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <EyeIcon off={showPassword} />
              </button>
            </div>
          </div>

          <div className="admin-login-row">
            <label className="admin-checkbox">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
              />
              <span>Keep me signed in</span>
            </label>
            <a href="#forgot-password" className="admin-forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-amber" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <div className="admin-login-footer">
          <a href="/">← Back to website</a>
        </div>
      </div>
    </div>
  )
}
