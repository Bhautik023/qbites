// src/redux/services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Single API slice for the same base URL
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://srv733641.hstgr.cloud:22443/",
    }),
    endpoints: (builder) => ({
        // Hero sections
        viewHeroSections: builder.query({
            query: () => "view-hero-sections/",
        }),

        // Products
        viewProducts: builder.query({
            query: () => "view-product/",
        }),

        viewVideoGalleryItems: builder.query({
            query: () => "view-video-gallery-items/",
            // Optionally only keep active items here:
            // transformResponse: (resp) => ({
            //   ...resp,
            //   data: (resp?.data ?? []).filter(v => v.is_active),
            // }),
        }),

        viewBlogs: builder.query({
            query: () => "view-blog/",
        }),

        // Blogs filtered by author_id using query params
        viewBlogsByAuthor: builder.query({
            query: ({ author_id }) => ({
                url: "view-blog/",
                params: { author_id },
            }),
        }),
    }),
});

// Auto-generated hooks
export const {
    useViewHeroSectionsQuery,
    useViewProductsQuery,
    useViewVideoGalleryItemsQuery,
    useViewBlogsQuery,
    useViewBlogsByAuthorQuery,
} = api;
