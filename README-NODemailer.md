
# Rancher Services – Contact Form Backend (Nodemailer)

This project now includes a lightweight Express server for the contact form.

## Env Vars
Create a `.env` file in the project root (same level as `package.json`):

```env
EMAIL_USER=yourbusiness@gmail.com
EMAIL_PASS=your_app_password
EMAIL_RECEIVER=yourbusiness@gmail.com
SMTP_SERVICE=gmail
PORT=5174
```

## Development
```bash
npm install
npm run dev
```
This runs Vite on port 5173 and the server on 5174 with a proxy on `/api`.

## Deploy
- **Render / Railway**: Deploy the Express server. Build the client with `vite build` and serve static files (or host on Netlify/Vercel and point `/api` to your server URL).
- Update the frontend fetch URL to your server domain if you don’t use a proxy in production.
