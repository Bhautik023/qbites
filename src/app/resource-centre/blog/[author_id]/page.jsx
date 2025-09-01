// app/resource-centre/blog/[author_id]/page.jsx
import React from "react";

// Build-time fetch to list all authors for static export
async function fetchAllBlogs() {
  const res = await fetch("https://srv733641.hstgr.cloud:22443/view-blog/");
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

// Required for output: 'export' — pre-generate all author pages
export async function generateStaticParams() {
  const data = await fetchAllBlogs();
  const blogs = data?.data ?? [];
  const uniqueAuthorIds = Array.from(new Set(blogs.map((b) => String(b.author))));
  return uniqueAuthorIds.map((author_id) => ({ author_id }));
}

// Helper to fetch author-specific blogs
async function fetchBlogsByAuthor(author_id) {
  const qs = new URLSearchParams({ author_id });
  const res = await fetch(`https://srv733641.hstgr.cloud:22443/view-blog/?${qs.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch author blogs");
  return res.json();
}

// Dynamic SEO from API fields (first published blog preferred)
export async function generateMetadata({ params }) {
  const data = await fetchBlogsByAuthor(params.author_id);
  const items = (data?.data ?? []).filter((b) => b.publish_blog !== false);
  const first = items[0]; // Fixed: was missing [0]

  const title = first?.meta_title || first?.title || "Blogs";
  const description = first?.meta_description || first?.subtitle || "Blog details";
  const keywords = first?.meta_keyword || undefined;
  const canonical = first?.canonical_url || undefined;
  const image = first?.blog_picture || undefined;

  return {
    title,
    description,
    keywords,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      images: image ? [image] : undefined,
    },
  };
}

export default async function AuthorBlogsPage({ params }) {
  const data = await fetchBlogsByAuthor(params.author_id);
  const blogs = (data?.data ?? []).filter((b) => b.publish_blog !== false);

  // Use first blog for hero if available
  const hero = blogs[0]; // Fixed: was missing [0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Hero Section */}
      {hero ? (
        <header className="relative w-full overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[85vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
            <img
              src={hero.blog_picture ?? "/images/placeholder.jpg"}
              alt={hero.alt_text || hero.title}
              className="w-full h-full object-cover"
            />
            
            {/* Hero Content Overlay */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-6 md:px-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center px-4 py-2 bg-[#16A16C]/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Featured Article
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {hero.title}
                  </h1>
                  
                  {hero.subtitle && (
                    <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                      {hero.subtitle}
                    </p>
                  )}
                  
                  <div className="flex items-center space-x-6 text-gray-300">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      {hero.publish_date
                        ? new Date(hero.publish_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })
                        : 'Not published'}
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                      Author ID: {params.author_id}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <div className="w-full h-64 bg-gradient-to-r from-[#16A16C] to-green-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">Author Blog Collection</h1>
            <p className="text-green-100">Author ID: {params.author_id}</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-8 py-12">
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No Blogs Found</h2>
              <p className="text-gray-600">This author hasn't published any blogs yet.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            {/* Main Article Content */}
            <article className="xl:col-span-8">
              {hero && (
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  {/* Article Header */}
                  <div className="relative">
                    <div className="h-80 md:h-96 overflow-hidden">
                      <img
                        src={hero.blog_picture ?? "/images/placeholder.jpg"}
                        alt={hero.alt_text || hero.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center px-4 py-2 bg-[#16A16C] text-white text-sm font-semibold rounded-full shadow-lg">
                        Featured Post
                      </span>
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="p-8 md:p-12">
                    <div className="mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {hero.title}
                      </h2>
                      
                      {hero.subtitle && (
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                          {hero.subtitle}
                        </p>
                      )}
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-6">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-[#16A16C]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                          </svg>
                          {hero.publish_date
                            ? new Date(hero.publish_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })
                            : 'Draft'}
                        </div>
                        
                        {/* <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-[#16A16C]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                          </svg>
                          Author #{params.author_id}
                        </div> */}
                        
                        {hero.is_trending && (
                          <div className="flex items-center text-orange-600">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                            </svg>
                            Trending
                          </div>
                        )}
                        
                        {hero.is_evergreen && (
                          <div className="flex items-center text-green-600">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                            </svg>
                            Evergreen
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Article Body */}
                    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
                      <div className="text-gray-800 leading-relaxed whitespace-pre-wrap text-lg">
                        {hero.body}
                      </div>
                    </div>
                    
                    {/* Article Footer */}
                    {/* <div className="mt-12 pt-8 border-t border-gray-100">
                      <div className="flex flex-wrap gap-4">
                        {hero.featured && (
                          <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            Featured
                          </span>
                        )}
                        
                        {hero.draft_mode && (
                          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                            </svg>
                            Draft
                          </span>
                        )}
                        
                        {hero.reviewed && (
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            Reviewed
                          </span>
                        )}
                      </div>
                    </div> */}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="xl:col-span-4">
              <div className="sticky top-8 space-y-8">
                {/* Author Info Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#16A16C] to-green-600 p-6 text-white">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold">Author #{params.author_id}</h3>
                        <p className="text-green-100">{blogs.length} Published Article{blogs.length !== 1 ? 's' : ''}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* More Articles */}
                {blogs.length > 1 && (
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#16A16C]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                        </svg>
                        More Articles
                      </h3>
                    </div>
                    
                    <div className="divide-y divide-gray-100">
                      {blogs.slice(1).map((blog) => (
                        <div key={blog.post_id} className="p-6 hover:bg-gray-50 transition-colors duration-200 group">
                          <div className="flex gap-4">
                            <div className="w-24 h-18 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                              <img
                                src={blog.blog_picture ?? "/images/placeholder.jpg"}
                                alt={blog.alt_text || blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#16A16C] transition-colors duration-200 line-clamp-2">
                                {blog.title}
                              </h4>
                              
                              {blog.subtitle && (
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                  {blog.subtitle}
                                </p>
                              )}
                              
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-gray-500">
                                  {blog.publish_date
                                    ? new Date(blog.publish_date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                      })
                                    : 'Draft'}
                                </p>
                                
                                <div className="flex items-center gap-2">
                                  {blog.featured && (
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full" title="Featured"></span>
                                  )}
                                  {blog.is_trending && (
                                    <span className="w-2 h-2 bg-orange-400 rounded-full" title="Trending"></span>
                                  )}
                                  {blog.is_evergreen && (
                                    <span className="w-2 h-2 bg-green-400 rounded-full" title="Evergreen"></span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Blog Stats */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#16A16C]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                    Quick Stats
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Articles</span>
                      <span className="font-semibold text-[#16A16C] text-lg">{blogs.length}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Featured</span>
                      <span className="font-semibold text-yellow-600">
                        {blogs.filter(b => b.featured).length}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Trending</span>
                      <span className="font-semibold text-orange-600">
                        {blogs.filter(b => b.is_trending).length}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Evergreen</span>
                      <span className="font-semibold text-green-600">
                        {blogs.filter(b => b.is_evergreen).length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}