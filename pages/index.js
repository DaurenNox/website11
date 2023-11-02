import { useState } from "react";
import Link from "next/link";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/about.css";
import "../styles/expertise.css";
import "../styles/contact.css";
import "../styles/globals.css";
import "../styles/partners.css";
import "../styles/feedback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBullseye, faTasks } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [language, setLanguage] = useState("ru"); // Default language set to English

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
      <header>
        <Link href="/">
          <img src="/logo.png" alt="Logo" style={{ cursor: "pointer" }} />
        </Link>
        <div></div>
        <h1>ЦЕНТР ТОРГОВО-ЭКОНОМИЧЕСКИХ СТРАТЕГИЙ</h1>
        <div className="cta">
          <span>АРГИНБАЕВА ГУЛЬЖАН МУХТАРОВНА</span>
          <span>Директор</span>
          <span>+7 701 761 4684</span>
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
          <h2>«Центр торгово-экономических стратегий»</h2>
          <p>Независимый аналитический центр. Создан в 2019 году </p>
          <button className="hero-cta">Подробнее</button>
        </div>
        <img src="/hero.png" alt="Hero Image" className="hero-bg" />
      </section>
      <section id="about" class="about-section">
        <div class="about-section-content">
          <h2>О компании</h2>
          <div class="mission-vision">
            <div class="detail">
              <h3>
                {" "}
                <span class="icon">
                  <FontAwesomeIcon icon={faBullseye} />
                </span>
                МИССИЯ
              </h3>
              <p>
                Совершенствование процессов принятия решений.
                <br />
                Объективный анализ.
                <br />
                Эффективные решения.
              </p>
            </div>
            <div class="detail">
              <h3>
                {" "}
                <span class="icon">
                  <FontAwesomeIcon icon={faEye} />
                </span>
                ВИДЕНИЕ
              </h3>
              <p>
                Независимый институт по выработке стратегических решений в
                торгово транспортной и экономической политике.
              </p>
            </div>
          </div>
          <div class="goals-tasks">
            <div class="detail large">
              <h3>
                {" "}
                <span class="icon">
                  <FontAwesomeIcon icon={faTasks} />
                </span>
                ЦЕЛИ И ЗАДАЧИ
              </h3>
              <p>
                Проведение комплексных исследований различных отраслях экономики
                и выработка эффективных рекомендаций для центров принятия
                решений по актуальным вопросам экономической и торговой
                политики; <br />
                Развитие и укрепление взаимосвязи с зарубежными
                исследовательскими центрами для организации совместных
                исследований по различным направлениям экономической политики.
              </p>
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
          <h2>Обратная связь</h2>
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
          <img src="/logo.png" alt="Company Logo" className="footer-logo" />
          <div className="contact-card-info">
            <p>АРГИНБАЕВА ГУЛЬЖАН МУХТАРОВНА - Директор</p>
            <p>Сотовый телефон: +7 701 761 4684</p>
            <p>Телефон ЦТЭС: +7 7172 64 28 95</p>
            <p>Электронная почта: ctesfund@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
