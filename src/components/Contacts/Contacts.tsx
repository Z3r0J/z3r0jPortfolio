'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { FaWindowClose } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { cardContactAnimated, inputAnimated } from '@/lib/animations';
import Text from '@/i18n/Text';
import styles from './Contacts.module.css';

interface FormValues {
  from_name: string;
  user_email: string;
  message: string;
}

export default function Contacts() {
  const form = useRef<HTMLFormElement>(null);
  const [inputValue, setInputValue] = useState<FormValues>({
    from_name: '',
    user_email: '',
    message: '',
  });
  const [response, setResponse] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          setResponse(
            `${inputValue.from_name}, the email was sended sucessfully, I will keep in touch soon...`,
          );
          setShowToast(true);
          setInputValue({ from_name: '', user_email: '', message: '' });
        },
        () => {
          setResponse(`Oops ${inputValue.from_name}, something went wrong...`);
          setShowToast(true);
        },
      );
  };

  return (
    <div
      className={`row mt-4 mb-3 text-white d-flex justify-content-center ${styles.bgContacts}`}
      id="contacts"
    >
      <h3 className="text-white text-center">
        <Text tid="contacts" />
      </h3>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 1 }}
        transition={{ staggerChildren: 0.5 }}
        className="col-lg-5 col-xl-5 col-md-5"
      >
        <motion.div variants={cardContactAnimated} className="card bg-dark mb-3">
          <div className="card-body">
            <form ref={form} onSubmit={sendEmail}>
              <label className="form-label fs-5 mb-1">
                Name<span className="text-danger">*</span>
              </label>
              <motion.input
                variants={inputAnimated}
                type="text"
                name="from_name"
                value={inputValue.from_name}
                onChange={handleInput}
                className="form-control mb-2 bg-transparent text-white"
                placeholder="You name"
                required
              />
              <label className="form-label fs-5 mb-1">
                Email<span className="text-danger">*</span>
              </label>
              <motion.input
                variants={inputAnimated}
                type="email"
                name="user_email"
                value={inputValue.user_email}
                onChange={handleInput}
                className="form-control mb-2 bg-transparent text-white"
                placeholder="You Email"
                required
              />
              <label className="form-label fs-5 mb-1">
                Message<span className="text-danger">*</span>
              </label>
              <motion.textarea
                variants={inputAnimated}
                name="message"
                value={inputValue.message}
                onChange={handleInput}
                className="form-control mb-3 bg-transparent text-white"
                required
              />
              <input type="hidden" name="to_name" value="Jean Carlos Reyes" />
              <button
                type="submit"
                className="btn btn-primary rounded rounded-3 w-100 ms-auto me-auto"
              >
                Send Contact
              </button>
            </form>
          </div>
        </motion.div>

        {showToast && (
          <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div
              className="toast bg-dark show"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              style={{ display: 'flex' }}
            >
              <div className="toast-header bg-dark">
                <Image
                  src="/icon_jc.png"
                  className="rounded me-2"
                  width={32}
                  height={32}
                  alt="<Jean Carlos/>"
                />
                <strong className="me-auto">{'<Jean Carlos/>'}</strong>
                <small>Website</small>
                <button
                  type="button"
                  className="btn border-0"
                  aria-label="Close"
                  onClick={() => setShowToast(false)}
                >
                  <FaWindowClose className="text-white" />
                </button>
              </div>
              <div className="toast-body bg-dark">{response}</div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
