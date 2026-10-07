'use client';

import { useMemo, useState } from 'react';
import styles from './BlogCategoryTabs.module.css';

const DEFAULT_VISIBLE = 6;

export default function BlogCategoryTabs({
  categories,
  activeCategory,
  onChange,
  initialVisible = DEFAULT_VISIBLE,
}) {
  const [expanded, setExpanded] = useState(false);

  const { visible, hiddenCount } = useMemo(() => {
    const list = Array.isArray(categories) ? categories : [];
    if (expanded || list.length <= initialVisible) {
      return { visible: list, hiddenCount: 0 };
    }

    const primary = list.slice(0, initialVisible);
    const rest = list.slice(initialVisible);
    const activeInRest = rest.find((category) => category.label === activeCategory);

    // Keep the selected category visible even when collapsed.
    const merged = activeInRest
      ? [...primary.filter((category) => category.label !== activeCategory), activeInRest]
      : primary;

    return {
      visible: merged,
      hiddenCount: Math.max(0, list.length - merged.length),
    };
  }, [categories, activeCategory, expanded, initialVisible]);

  return (
    <div className={styles.wrap}>
      <div className={styles.tabs} role="tablist" aria-label="Blog categories">
        {visible.map((category) => {
          const isActive = activeCategory === category.label;

          return (
            <button
              key={category.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.tab} ${isActive ? styles.active : ''}`}
              onClick={() => onChange(category.label)}
            >
              {category.label}
            </button>
          );
        })}

        {hiddenCount > 0 || expanded ? (
          <button
            type="button"
            className={styles.moreBtn}
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? 'Show less' : `More (${hiddenCount})`}
          </button>
        ) : null}
      </div>
    </div>
  );
}
