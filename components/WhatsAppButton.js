import { FaWhatsapp } from 'react-icons/fa6';
import styles from './WhatsAppButton.module.css';

// Same number as the footer / contact page, in the digits-only form wa.me needs.
const WHATSAPP_NUMBER = '919870103761';
const MESSAGE = 'Hi Swalook, I would like to know more about your salon CRM.';

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Chat with Swalook on WhatsApp"
    >
      <FaWhatsapp className={styles.icon} aria-hidden="true" />
      <span className={styles.label}>Whatsapp</span>
    </a>
  );
}
