import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import socialNetwork from '@/data/social-network';
import styles from './SocialLinks.module.css';

const iconMap: Record<string, React.ComponentType> = {
  FaLinkedin,
  FaGithub,
  FaInstagram,
};

const nameMap: Record<string, string> = {
  FaLinkedin: 'LinkedIn',
  FaGithub: 'GitHub',
  FaInstagram: 'Instagram',
};

export default function SocialLinks() {
  return (
    <div className="container-fluid mt-4 mb-4">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-4 col-lg-4 col-sm-8 col-md-12">
          <div className="card bg-dark">
            <div className={`${styles.circularPortrait} border border-success m-auto`}>
              <Image
                src="/profilephoto.jpg"
                alt="Jean Carlos Reyes"
                width={200}
                height={200}
              />
            </div>
            <span className="text-white text-center mt-3 h4 fw-900">
              Jean Carlos Reyes
            </span>
            <span className="text-white text-center mt-3 h5 fw-900">
              @jean.020
            </span>
            <div className="card-body">
              {socialNetwork.map((sn) => {
                const Icon = iconMap[sn.icon];
                return (
                  <a
                    className={`${sn.class} w-100 text-center mb-3 mt-2 rounded rounded-5 shadow shadow-3`}
                    href={sn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={sn.name}
                  >
                    {Icon && <Icon />}
                    {nameMap[sn.icon] || sn.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
