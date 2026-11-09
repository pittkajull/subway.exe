import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function normalizeSiteUrl(value) {
  if (!value) return ''

  try {
    const url = new URL(value.trim())
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return ''
    return `${url.origin}${url.pathname}`.replace(/\/+$/, '')
  } catch {
    return ''
  }
}

function escapeXml(value) {
  return value.replace(
    /[<>&'"]/g,
    (char) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;',
      })[char],
  )
}

function seoPlugin(siteUrl) {
  return {
    name: 'seo',

    buildStart() {
      if (!siteUrl) {
        this.warn(
          'VITE_SITE_URL is not set. Canonical URLs, absolute social images, and sitemap.xml will be skipped.',
        )
      }
    },

    transformIndexHtml(html) {
      const canonical = siteUrl
        ? `<link rel="canonical" href="${siteUrl}/" />\n    <meta property="og:url" content="${siteUrl}/" />`
        : ''

      return html
        .replace('<!--seo:url-->', canonical)
        .replaceAll('%SITE_URL%', siteUrl)
    },

    generateBundle() {
      const robots = siteUrl
        ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
        : 'User-agent: *\nAllow: /\n'

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: robots,
      })

      if (!siteUrl) return

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${escapeXml(`${siteUrl}/`)}</loc>
  </url>
</urlset>
`

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemap,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = normalizeSiteUrl(process.env.VITE_SITE_URL || env.VITE_SITE_URL)

  return {
    plugins: [react(), seoPlugin(siteUrl)],
  }
})
