import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";
import fs from 'fs';
import { componentTagger } from "lovable-tagger";

// --- Helper Functions ---

function getStaticRoutes() {
    // Define explicit mapping for routes based on App.tsx
    const routeMapping = {
        'Index': '/',
        'GameRules': '/regole',
        'Blog': '/blog',
        'Support': '/supporto',
        'PrivacyPolicy': '/privacy-policy',
        'TermsOfService': '/termini-utilizzo',
        'Maraffone': '/maraffone',
        'Beccaccino': '/beccaccino',
        'Maraffa': '/maraffa',
        'Trionfo': '/trionfo'
    };

    const pagesDir = path.resolve(__dirname, 'src/pages');
    const pageFiles = fs.readdirSync(pagesDir);
    const excludedPages = ['NotFound.tsx', 'BlogArticle.tsx'];
    
    return pageFiles
        .filter(file => file.endsWith('.tsx') && !excludedPages.includes(file))
        .map(file => {
            const pageName = file.replace('.tsx', '');
            return routeMapping[pageName] || `/${pageName.toLowerCase()}`;
        })
        .filter(route => route !== undefined); // Remove any undefined routes
}

function getBlogRoutes() {
  const articlesContent = fs.readFileSync(path.resolve(__dirname, 'src/data/articles.ts'), 'utf-8');
  const slugs = [];
  const regex = /slug:\s*["`]([^"`]+)["`]/gs;
  let match;
  while ((match = regex.exec(articlesContent)) !== null) {
    const objectChunk = articlesContent.substring(match.index - 100, match.index + 100);
    if (!/isExternalLink:\s*true/.test(objectChunk)) {
      slugs.push(`/blog/${match[1]}`);
    }
  }
  return slugs;
}

const staticRoutes = getStaticRoutes();
const dynamicRoutes = getBlogRoutes();
// Remove duplicates and ensure only unique routes
const allRoutes = [...new Set([...staticRoutes, ...dynamicRoutes])];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.marafone-romagnolo.it',
      dynamicRoutes: allRoutes,
      transform: (url, lastmod) => {
        let priority = 0.8;
        let changefreq = 'monthly';


        if (url === '/') {
          priority = 1.0;
          changefreq = 'daily';
        } else if (url.startsWith('/blog/')) {
          priority = 0.7;
          changefreq = 'weekly';
        } else if (['/maraffone', '/maraffa', '/beccaccino', '/trionfo'].includes(url)) {
          priority = 0.9;
          changefreq = 'monthly';
        } else if (['/privacy-policy', '/termini-utilizzo'].includes(url)) {
          priority = 0.3;
          changefreq = 'yearly';
        } else if (['/supporto', '/regole'].includes(url)) {
          priority = 0.6;
          changefreq = 'monthly';
        }

        return {
          url,
          lastmod,
          priority,
          changefreq,
        };
      },
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
