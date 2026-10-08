import Link from 'next/link';
import styles from './BrandLogo.module.css';

const TAGLINE = 'Revenue Generation Engine for Salons';

export default function BrandLogo({ variant = 'default', className = '' }) {
  const classes = [
    styles.logo,
    variant === 'onDark' ? styles.onDark : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link href="/" className={classes}>
      Swalook
      <span className={styles.tagline}>{TAGLINE}</span>
    </Link>
  );
}
