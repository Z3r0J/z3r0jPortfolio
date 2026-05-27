'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { FaClipboardCheck, FaCode, FaGraduationCap, FaList } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';
import { LangContext } from '@/i18n/LangContext';
import Text from '@/i18n/Text';
import styles from './Menu.module.css';

export default function Menu() {
  const title = ['<Jean', ' Carlos/>'];
  const langCtx = useContext(LangContext);

  const handleLangChange = (newLang: string) => {
    langCtx?.handleChangeLanguages(newLang);
  };

  const currentLang = langCtx?.actualLanguage || 'en';

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-2 fw-700" href="/">
          <span className="text-primary">{title[0]}</span>
          <span className="text-danger">{title[1]}</span>
        </Link>
        <button
          className={`navbar-toggler outline-none ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaList className="navbar-toggler-icon text-white" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link text-white fs-6 ${styles.menuItem}`} href="/">
                <IoHomeSharp className="me-2" />
                <Text tid="navHome" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white fs-6 ${styles.menuItem}`} href="/#education">
                <FaGraduationCap className="me-2" />
                <Text tid="education" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white fs-6 ${styles.menuItem}`} href="/#skills">
                <FaClipboardCheck className="me-2" />
                <Text tid="programmingLang" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white fs-6 ${styles.menuItem}`} href="/projects">
                <FaCode className="me-2" />
                <Text tid="navProjects" />
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currentLang === 'en' ? '\u{1F1FA}\u{1F1F8}' : '\u{1F1E9}\u{1F1F4}'}
              </a>
              <ul className={`dropdown-menu ${styles.dropWidth} bg-dark`}>
                {currentLang === 'en' ? (
                  <li>
                    <a className="dropdown-item" href="#" onClick={() => handleLangChange('es')}>
                      {'\u{1F1E9}\u{1F1F4}'}
                    </a>
                  </li>
                ) : (
                  <li>
                    <a className="dropdown-item" href="#" onClick={() => handleLangChange('en')}>
                      {'\u{1F1FA}\u{1F1F8}'}
                    </a>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
