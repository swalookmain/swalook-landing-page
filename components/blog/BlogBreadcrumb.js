import Link from 'next/link';
import styles from './BlogBreadcrumb.module.css';

export default function BlogBreadcrumb({ title }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">/</span>
      <Link href="/blogs">Blog</Link>
      <span aria-hidden="true">/</span>
      <span className={styles.current} title={title}>
        {title}
      </span>
    </nav>
  );
}
