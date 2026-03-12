import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Web App</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif; color: #333; }

    /* Hero Section */
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      text-align: center;
      padding: 2rem;
    }
    .hero h1 { font-size: 3.5rem; margin-bottom: 1rem; }
    .hero p  { font-size: 1.25rem; max-width: 600px; margin-bottom: 2rem; opacity: 0.9; }
    .hero a {
      display: inline-block;
      padding: 0.75rem 2rem;
      border: 2px solid #fff;
      border-radius: 4px;
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      transition: background 0.2s, color 0.2s;
    }
    .hero a:hover { background: #fff; color: #764ba2; }

    /* Features Section */
    .features {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      padding: 4rem 2rem;
      max-width: 960px;
      margin: 0 auto;
    }
    .card {
      flex: 1 1 260px;
      max-width: 300px;
      background: #f9f9f9;
      border-radius: 8px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    .card h3 { margin-bottom: 0.75rem; color: #764ba2; }
    .card p  { font-size: 0.95rem; line-height: 1.5; }

    /* Footer */
    footer {
      text-align: center;
      padding: 2rem;
      font-size: 0.85rem;
      color: #999;
    }
  </style>
</head>
<body>
  <section class="hero">
    <h1>My Web App</h1>
    <p>A demo hero web application built with Express &amp; TypeScript, ready for Docker multi-stage builds.</p>
    <a href="/health">Check Health</a>
  </section>

  <section class="features">
    <div class="card">
      <h3>Express</h3>
      <p>Lightweight and flexible Node.js web framework for building APIs and web pages.</p>
    </div>
    <div class="card">
      <h3>TypeScript</h3>
      <p>Type-safe JavaScript that catches errors at compile time for more reliable code.</p>
    </div>
    <div class="card">
      <h3>Docker</h3>
      <p>Multi-stage Docker build for a small, secure production image.</p>
    </div>
  </section>

  <footer>&copy; 2026 My Web App</footer>
</body>
</html>`);
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
