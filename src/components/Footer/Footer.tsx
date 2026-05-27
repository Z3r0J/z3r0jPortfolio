'use client';

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import socialNetwork from '@/data/social-network';

const iconMap: Record<string, React.ComponentType> = {
  FaLinkedin,
  FaGithub,
  FaInstagram,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const siteName = '<Jean Carlos/>';

  return (
    <div className="row position-relative">
      <footer
        className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark position-absolute"
        style={{ height: '145px' }}
      >
        <div className="col-md-4 d-flex align-items-center">
          <Image src="/icon_jc.png" alt="Logo" width={32} height={32} />
          <span className="text-white ms-3 h4">
            &copy; {year} {siteName}
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {socialNetwork.map((sn) => {
            const Icon = iconMap[sn.icon];
            return (
              <li className="ms-2 me-2" key={sn.icon}>
                <a
                  className={sn.class}
                  href={sn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Icon ? <Icon /> : null}
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
}
