'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BlogNavbarProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export function BlogNavbar({ tags, selectedTag, onTagSelect }: BlogNavbarProps) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-linear-to-br from-[#f6d365]/80 to-[#fda085]/80 rounded-2xl p-2">
              <Zap className="w-6 h-6 text-black/80" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-black/85">
              JakeKuo Blog
            </h1>
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onTagSelect(null)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedTag === null
                  ? 'bg-linear-to-r from-[#f6d365] to-[#fda085] text-black/90 shadow-md'
                  : 'bg-black/5 hover:bg-black/10 text-black/70 border border-black/10'
              }`}
            >
              全部
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagSelect(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-linear-to-r from-[#f6d365] to-[#fda085] text-black/90 shadow-md'
                    : 'bg-black/5 hover:bg-black/10 text-black/70 border border-black/10'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

