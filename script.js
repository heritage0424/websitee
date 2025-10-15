<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Heritage | Twitch Freelancer Portfolio</title>

  <style>
    /* ===== Global Styles ===== */
    body {
      background-color: #0e0e10;
      color: #fff;
      font-family: 'Poppins', Arial, sans-serif;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }

    a {
      color: #9146ff;
      text-decoration: none;
      transition: color 0.3s;
    }

    a:hover {
      color: #b678ff;
    }

    /* ===== Header ===== */
    header {
      background: #18181b;
      padding: 25px 20px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.5);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    h1 {
      color: #9146ff;
      font-size: 2.4em;
      margin-bottom: 5px;
      font-weight: 700;
    }

    header p {
      color: #ccc;
      font-size: 1.1em;
      margin-bottom: 15px;
    }

    .socials a {
      margin: 0 12px;
      font-weight: bold;
      font-size: 1em;
    }

    /* ===== Section Titles ===== */
    .section-title {
      font-size: 1.8rem;
      color: #9146ff;
      text-align: center;
      margin-top: 50px;
      margin-bottom: 15px;
      font-weight: 600;
      letter-spacing: 1px;
    }

    /* ===== Portfolio Section ===== */
    .portfolio {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 20px;
      padding: 20px 40px;
    }

    .portfolio img {
      width: 100%;
      height: auto;
      border-radius: 15px;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
      box-shadow: 0 0 15px rgba(145, 70, 255, 0.25);
    }

    .portfolio img:hover {
      transform: scale(1.05);
      box-shadow: 0 0 25px rgba(145, 70, 255, 0.4);
    }

    /* ===== Video Section ===== */
    .videos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      padding: 20px 40px;
      text-align: center;
    }

    .videos video {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(145, 70, 255, 0.25);
    }

    .videos p {
      color: #bbb;
      margin-top: 10px;
      font-size: 1rem;
    }

    /* ===== Footer ===== */
    footer {
      background: #18181b;
      padding: 25px;
      color: #999;
      font-size: 14px;
      text-align: center;
      margin-top: 40px;
      border-top: 1px solid #222;
    }

    footer a {
      color: #9146ff;
      font-weight: 600;
    }

    /* ===== Animations ===== */
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 1s ease forwards;
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ===== Responsive ===== */
    @media (max-width: 600px) {
      h1 {
        font-size: 1.8em;
      }
      header p {
        font-size: 1em;
      }
      .socials a {
        display: inline-block;
        margin: 8px;
      }
    }
  </style>
</head>

<body>
  <!-- ===== Header ===== -->
  <header>
    <h1>Welcome to Heritage</h1>
    <p>Twitch Streamer & Creative Designer</p>
    <div class="socials">
      <a href="https://www.twitch.tv/heritage0424" target="_blank">Twitch</a>
      <a href="https://www.youtube.com/@Heritage0424" target="_blank">YouTube</a>
      <a href="https://tiktok.com/@heritage0424" target="_blank">TikTok</a>
    </div>
  </header>

 <section class="portfolio">
  <img src="IMG-20250424-WA0005.jpg" alt="Portfolio 1" class="fade-in">
  <img src="IMG-20250424-WA0006.jpg" alt="Portfolio 2" class="fade-in">
  <img src="IMG-20250424-WA0007.jpg" alt="Portfolio 3" class="fade-in">
  <img src="IMG-20250511-WA0010.jpg" alt="Portfolio 4" class="fade-in">
</section>

<h2 class="section-title fade-in">What Streamers Say</h2>
<section class="videos">
  <div class="fade-in">
    <video controls>
      <source src="VID-20250809-WA0004-1-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p>Streamer Testimonial</p>
  </div>

  <div class="fade-in">
    <video controls>
      <source src="VID-20250810-WA0000-1-2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p>Collaboration Project</p>
  </div>
</section>
