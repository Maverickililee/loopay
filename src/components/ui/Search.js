'use client';

import { useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const inputRef = useRef(null);

  const showClear = search.length > 0;

  function handleClear() {
    setSearch('');
    inputRef.current?.focus();
    router.push('/products/0/'); // reset to base URL without search param
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = search.trim();
    const url = query
      ? `/products/0/?search=${encodeURIComponent(query)}`
      : `/products/0`;

    router.push(url); // This triggers a server re-render
  }

  return (
    <form onSubmit={handleSubmit} className="header-section-search">
      <input
        ref={inputRef}
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for products..."
        className="header-section-search-input"
        id="searchInput"
      />
      <button type="submit">
        <FaSearch className="header-section-search-icon" />
      </button>
      {showClear && (
        <FaX
          onClick={handleClear}
          className="header-section-search-icon cursor-pointer"
        />
      )}
    </form>
  );
}
