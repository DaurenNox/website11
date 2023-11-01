import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [language, setLanguage] = useState("ru"); // Default language set to English

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
      <header>
        <img src="/logo.png" alt="Logo" width="150" />
        <div></div>
        <h1>ЦЕНТР ТОРГОВО-ЭКОНОМИЧЕСКИХ СТРАТЕГИЙ</h1>
        <div className="cta">
          <span>Email: email@example.com</span>
          <span>Phone: +123-456-7890</span>
          <button>Заказать звонок</button>
        </div>
        <select onChange={handleLanguageChange} value={language}>
          <option value="ru">Русский</option>
          <option value="en">English</option>
          <option value="kz">Казахский</option>
          <option value="cn">中文</option>
        </select>
      </header>
      <section id="hero">
        <div className="hero-content">
          <h2>Welcome to Our Company</h2>
          <p>
            Providing top-notch trading and economic strategies for success.
          </p>
          <button className="hero-cta">Learn More</button>
        </div>
        <img src="/hero.png" alt="Hero Image" className="hero-bg" />
      </section>
      <section id="about" className="light-section">
        <div className="section-content">
          <div className="frame">
            <h2>О нашей компании</h2>
            <div className="about-intro">
              <p>
                Основанная в 1998 году, Центр торгово-экономических стратегий
                имеет миссию обеспечивать наших клиентов наилучшими торговыми и
                экономическими стратегиями для достижения успеха на глобальном
                рынке.
              </p>
            </div>
            <div className="about-details">
              <h3>Наши достижения</h3>
              <ul>
                <li>
                  <span className="icon">&#9733; </span> Партнерство с ведущими
                  финансовыми учреждениями
                </li>
                <li>
                  <span className="icon">&#9733; </span> Развитие стратегических
                  планов для более чем 500 компаний
                </li>
                <li>
                  <span className="icon">&#9733;</span> Награды за инновационные
                  экономические решения
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="expertise" className="dark-section">
        <div className="section-content">
          <h2>Области экспертизы</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Финансовые стратегии</h3>
              <p>Описание экспертизы в области финансовых стратегий.</p>
            </div>
            <div className="expertise-card">
              <h3>Глобальная торговля</h3>
              <p>Описание экспертизы в области глобальной торговли.</p>
            </div>
            <div className="expertise-card">
              <h3>Инновационные решения</h3>
              <p>Описание экспертизы в области инновационных решений.</p>
            </div>
            <div className="expertise-card">
              <h3>Консультационные услуги</h3>
              <p>Описание экспертизы в области консультационных услуг.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contacts" className="contact-section">
        <div className="section-content">
          <div className="contact-card">
            <div className="card-header">
              <h3>Центр торгово-экономических стратегий</h3>
              <span>Ваш надежный партнер в бизнесе</span>
            </div>
            <div className="card-body">
              <p>
                <span className="icon">&#127968;</span> г. Алматы, ул. Абая 150,
                оф. 205
              </p>
              <p>
                <span className="icon">&#128222;</span> +7 (727) 123-4567
              </p>
              <p>
                <span className="icon">&#9993;</span> info@example.com
              </p>
              <p>
                <span className="icon">&#128197;</span> Пн-Пт, 09:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="partners">
        <h2>Партнеры</h2>
        <p>Details about partners...</p>
      </section>
      <section id="feedback">
        <h2>Форма обратной связи</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Feedback"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
      <footer>
        <p>&copy; 2023 Company Name</p>
      </footer>
    </div>
  );
}
