"use client";
import { useViewVideoGalleryItemsQuery } from "@/redux/services/heroApi";
import { Play } from "lucide-react";
import React, { useMemo } from "react";

// Utility: group by category_name and keep category order stable
const groupByCategoryName = (items) => {
  const order = [];
  const groups = {};
  for (const it of items) {
    const key = it.category_name || "Uncategorized";
    if (!groups[key]) {
      groups[key] = [];
      order.push(key);
    }
    groups[key].push(it);
  }
  return { order, groups };
};

export default function VideoGallerySections() {
  const { data, isLoading, isError } = useViewVideoGalleryItemsQuery();

  // Extract active items (optional) and map fields
  const items = useMemo(() => {
    const raw = data?.data || [];
    // Optionally filter inactive
    return raw.filter((v) => v.is_active !== false);
  }, [data]);

  const { order: categories, groups } = useMemo(
    () => groupByCategoryName(items),
    [items]
  );

  if (isLoading) {
    return (
      <div className="w-full px-4 py-12">
        <div className="h-10 w-48 bg-green-100 rounded mb-6 animate-pulse" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border-2 border-[#16A16C] shadow-md overflow-hidden"
            >
              <div className="aspect-video bg-green-50 animate-pulse" />
              <div className="p-4">
                <div className="h-4 w-2/3 bg-green-100 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full px-4 py-12">
        <div className="w-full bg-green-50 text-green-700 px-4 py-3 rounded-md">
          Failed to load gallery items. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {categories.map((catName, idx) => {
        const list = groups[catName] || [];
        const isGreenBand = idx % 2 === 1;

        return (
          <section
            key={catName}
            className={`${
              isGreenBand
                ? "bg-[#16A16C] -mx-4 px-4 py-12 md:py-16"
                : "container mx-auto px-4 py-12"
            }`}
          >
            <div className={`${isGreenBand ? "container mx-auto" : ""}`}>
              <div className="text-center mb-8">
                <h2
                  className={`text-2xl md:text-3xl font-semibold mb-8 ${
                    isGreenBand ? "text-white" : "text-orange-500"
                  }`}
                >
                  {catName}
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {list.map((item) => {
                  const href =
                    item.uploaded_file?.trim()
                      ? item.uploaded_file
                      : item.external_url?.trim()
                      ? item.external_url
                      : null;

                  return (
                    <div
                      key={item.video_id}
                      className={`group bg-white rounded-xl border-2 ${
                        isGreenBand ? "border-[#F69133]" : "border-[#16A16C]"
                      } shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300`}
                    >
                      <div className="relative aspect-video bg-gray-200 flex items-center justify-center">
                        <img
                          src={item.thumbnail}
                          alt={item.alt_text || item.title}
                          className="w-full h-full object-cover"
                        />

                        {href && (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors"
                            aria-label={`Open ${item.title} in new tab`}
                            title="Open in new tab"
                          >
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 bg-white/70 backdrop-blur-2xl text-black font-semibold p-3 rounded-full shadow">
                              <Play />
                            </span>
                          </a>
                        )}
                      </div>

                      <div className="p-4">
                        <h3 className="text-sm font-medium text-gray-900 text-center">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
