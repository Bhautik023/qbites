'use client';
import React from 'react';
import Link from 'next/link';
import { useViewBlogsQuery } from '@/redux/services/heroApi';

export default function BlogList() {
  const { data, isLoading, isError } = useViewBlogsQuery();

  const blogs = (data?.data ?? []).filter(b => b.publish_blog !== false);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-green-200 overflow-hidden">
            <div className="aspect-video bg-green-50 animate-pulse" />
            <div className="p-4">
              <div className="h-5 w-2/3 bg-green-100 rounded animate-pulse mb-2" />
              <div className="h-4 w-1/2 bg-green-50 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full bg-green-50 text-green-700 px-4 py-3 rounded-md">
        Failed to load blogs. Please try again later.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blogs.map((b) => (
        <div key={b.post_id} className="rounded-xl border border-green-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="aspect-video bg-gray-100">
            <img
              src={b.blog_picture ?? '/images/placeholder.jpg'}
              alt={b.alt_text || b.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold text-[#16A16C] line-clamp-2">{b.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{b.subtitle}</p>
            <div className="pt-2">
              {/* Link to dynamic author page: /blog/author/[author_id] */}
              <Link
                href={`/resource-centre/blog/${b.author}`}
                className="inline-flex items-center gap-2 text-[#F69133] font-semibold hover:underline"
              >
                Read more
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 10a1 1 0 011-1h5.586L9.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L11.586 11H6a1 1 0 01-1-1z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
