'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export default function Search() {
  const router = useRouter();

  const [search, setSearch] = useState('');
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('search') || '';
    setSearch(q);
  }, []);

  const showClear = search.length > 0;

  function updateQueryParams(newParams) {
    const currentParams = new URLSearchParams(window.location.search);

    Object.entries(newParams).forEach(([key, value]) => {
      if (value !== null && value !== '') {
        currentParams.set(key, value);
      } else {
        currentParams.delete(key);
      }
    });

    router.push(`/products/0/${currentParams.toString()}`);
  }

  function handleSearch() {
    updateQueryParams({ search });
  }

  function handleClear() {
    updateQueryParams({ search: null });
    setSearch('');
  }

  // Handle Enter key press in input
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="header-section-search">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        value={search}
        onKeyDown={handleKeyDown}
        className="header-section-search-input"
        placeholder="Search For Products..."
      />
      <FaSearch onClick={handleSearch} className="header-section-search-icon" />
      {showClear && <FaX onClick={handleClear} className="header-section-search-icon" />}
    </div>
  );
}
