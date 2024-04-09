"use client";
import { useState } from 'react';
import styles from './JobSearchWidget.module.css'

export default function JobSearchWidget() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div id={styles.container}>
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
