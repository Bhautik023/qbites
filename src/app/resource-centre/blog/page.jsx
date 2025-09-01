import React from 'react';
import BlogList from '@/component/blogList/BlogList';

export const metadata = {
  title: 'Blogs - Qbits Inverters',
  description: 'Latest updates and stories from Qbits Inverters.',
};

export default function BlogPage() {
  return (
    <div className="min-h-[50vh] bg-[#16A16C] pt-16 text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center">Blogs</h2>
      </div>
      <div className="bg-white text-gray-900">
        <div className="container mx-auto px-4 py-12">
          <BlogList />
        </div>
      </div>
    </div>
  );
}
