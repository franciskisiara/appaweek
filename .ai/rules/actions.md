---
paths:
  - 'app/Http/Controllers/Auth/**,app/Http/Requests/*,app/Actions/**'
---

# Actions

## Auth is hand-rolled, not Fortify
laravel/fortify was removed. Login, registration, password reset, and email verification are custom: routes in routes/auth.php, controllers in app/Http/Controllers/Auth/*, validation in app/Http/Requests/* (RegisterRequest, LoginRequest, NewPasswordRequest, ForgotPasswordRequest), and shared validation rules live in app/Concerns/PasswordValidationRules and ProfileValidationRules — use those traits instead of re-inlining password/name/email rules.

Do not reintroduce Fortify, Fortify actions, or Fortify-style view/route registration. There is no Settings/Profile/Security page or route in this app (profile.edit, security.edit, user-password.update, etc. do not exist) — if that UI is ever built, add real controllers/routes/Vue pages rather than resurrecting the old orphaned Http/Requests/Settings/* classes (deleted) or Fortify actions (deleted).
