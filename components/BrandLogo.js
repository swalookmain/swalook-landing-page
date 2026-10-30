import Link from 'next/link';
import styles from './BrandLogo.module.css';

const TAGLINE = 'Revenue Generation Engine for Salons';

export default function BrandLogo({
  variant = 'default',
  className = '',
  asLink = true,
}) {
  const classes = [
    styles.logo,
    variant === 'onDark' ? styles.onDark : '',
    !asLink ? styles.logoStatic : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      Swalook
      <span className={styles.tagline}>{TAGLINE}</span>
    </>
  );

  if (!asLink) {
    return <div className={classes}>{content}</div>;
  }

  return (
    <Link href="/" className={classes}>
      {content}
    </Link>
  );
}
