import { useState } from "react";
import Link from "next/link";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/about.css";
import "../styles/expertise.css";
import "../styles/contact.css";
import "../styles/partners.css";
import "../styles/feedback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChartLine,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

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
        <select
          className="language-dropdown"
          onChange={handleLanguageChange}
          value={language}
        >
          <option value="ru">Русский</option>
          <option value="en">English</option>
          <option value="kz">Казахский</option>
          <option value="cn">中文</option>
        </select>
      </header>
      <section id="hero">
        <div className="hero-content">
          <h2>
            Общественный фонд
            <br /> «Центр торгово-экономических стратегий»
          </h2>
          <p>
            Providing top-notch trading and economic strategies for success.
          </p>
          <button className="hero-cta">Learn More</button>
        </div>
        <img src="/hero.png" alt="Hero Image" className="hero-bg" />
      </section>
      <section id="about" className="about-section">
        <div className="about-section-content">
          <h2>Общественный фонд «Центр торгово-экономических стратегий»</h2>
          <div className="about-intro">
            <p>
              Основанная в 1998 году, Центр торгово-экономических стратегий
              имеет миссию обеспечивать наших клиентов наилучшими торговыми и
              экономическими стратегиями для достижения успеха на глобальном
              рынке.
            </p>
          </div>
          <div className="about-details">
            <div className="detail">
              <span className="icon">
                <FontAwesomeIcon icon={faBuilding} />
              </span>
              <h3>Партнерство с ведущими финансовыми учреждениями</h3>
            </div>
            <div className="detail">
              <span className="icon">
                <FontAwesomeIcon icon={faChartLine} />
              </span>
              <h3>Развитие стратегических планов для более чем 500 компаний</h3>
            </div>
            <div className="detail">
              <span className="icon">
                <FontAwesomeIcon icon={faAward} />
              </span>
              <h3>Награды за инновационные экономические решения</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="partners">
        <div className="partners-section-content">
          <h2>Наши Партнеры</h2>
          <div className="partner-grid">
            <div className="partner-logo">
              <img
                src="https://via.placeholder.com/100x100?text=Logo1"
                alt="Partner 1 Logo"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://via.placeholder.com/100x100?text=Logo2"
                alt="Partner 2 Logo"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://via.placeholder.com/100x100?text=Logo3"
                alt="Partner 3 Logo"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://via.placeholder.com/100x100?text=Logo4"
                alt="Partner 4 Logo"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="expertise" className="expertise-section">
        <div className="expertise-section-content">
          <h2>Области экспертизы</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Стратегическое Планирование</h3>
              <ul>
                <li>Комплексный анализ компании</li>
                <li>Разработка стратегического плана</li>
                <li>Мониторинг и корректировка стратегии</li>
              </ul>
            </div>
            <div className="expertise-card">
              <h3>Финансовые Стратегии</h3>
              <ul>
                <li>Оценка финансового состояния</li>
                <li>Разработка финансовых моделей</li>
                <li>Управление финансовыми рисками</li>
              </ul>
            </div>
            <div className="expertise-card">
              <h3>Глобальная Торговля</h3>
              <ul>
                <li>Исследование рынка</li>
                <li>Разработка экспортно-импортных стратегий</li>
                <li>Поиск партнеров и переговоры</li>
              </ul>
            </div>
            <div className="expertise-card">
              <h3>Инновационные Решения</h3>
              <ul>
                <li>Мониторинг технологических трендов</li>
                <li>Разработка и внедрение инновационных решений</li>
                <li>Консультации по цифровой трансформации</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="feedback">
        <div className="feedback-container">
          <h2>Форма обратной связи</h2>
          <form className="feedback-form">
            <div className="input-group">
              <label for="name">Ваше имя</label>
              <input type="text" id="name" placeholder="Ваше имя" />
            </div>
            <div className="input-group">
              <label for="email">Ваш Email</label>
              <input type="email" id="email" placeholder="email@example.com" />
            </div>
            <div className="input-group">
              <label for="feedback-text">Ваш отзыв</label>
              <textarea
                id="feedback-text"
                placeholder="Напишите ваш отзыв здесь..."
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Отправить
            </button>
          </form>
        </div>
      </section>
      <footer id="contacts" className="contact-section">
        <div className="contact-section-content">
          <div className="contact-card-container">
            <div className="contact-card-info">
              <p>Address: Your Address Here</p>
              <p>Phone: +123 456 7890</p>
              <p>Email: email@example.com</p>
            </div>
            <div className="contact-card-form"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
