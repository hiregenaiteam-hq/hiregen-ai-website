# 🔍 Verify Your SEO & Analytics Setup

## Quick Verification Checklist

### ✅ 1. Google Analytics Working

After deploying to production, verify Google Analytics is tracking:

1. **Real-time Test**:

   - Visit your live site: `https://umukozihr-ai.vercel.app`
   - Go to Google Analytics → Reports → Realtime
   - You should see your visit appear within 30 seconds

2. **Check Console**:

   - Open browser dev tools (F12)
   - Go to Console tab
   - Visit your site
   - Should see Google Analytics debug info (no errors)

3. **Network Tab**:
   - Open dev tools → Network tab
   - Refresh your site
   - Look for requests to `googletagmanager.com` and `google-analytics.com`

### ✅ 2. Social Media Previews Working

#### WhatsApp Test:

1. Send `https://umukozihr-ai.vercel.app` to yourself on WhatsApp
2. Should show:
   - UmukoziHR logo/image
   - Title: "UmukoziHR - AI-Powered HR Solutions"
   - Description about transforming hiring
   - Clean preview card

#### LinkedIn Test:

1. Create a LinkedIn post
2. Paste your URL
3. Should auto-generate preview with image and description

#### Twitter Test:

1. Create a tweet with your URL
2. Should show Twitter Card with large image

#### Facebook Test:

1. Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your URL
3. Should show all Open Graph data correctly

### ✅ 3. Google Search Console Verification

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://umukozihr-ai.vercel.app`
3. Choose "HTML tag" verification
4. Your tag is already added: `sx6blqhOL6lxGfZmcxCq-fRWfz35RUNQmTVlR33UOm8`
5. Click "Verify" - should work immediately

### ✅ 4. SEO Meta Tags Check

View page source (`Ctrl+U`) and verify these tags exist:

```html
<!-- Basic SEO -->
<title>
  UmukoziHR - AI-Powered HR Solutions | Get Qualified Candidates in Under 1 Hour
</title>
<meta
  name="description"
  content="Transform your hiring with UmukoziHR's intelligent recruiting platform..."
/>

<!-- Open Graph -->
<meta property="og:title" content="UmukoziHR - AI-Powered HR Solutions" />
<meta property="og:description" content="Transform your hiring..." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="https://umukozihr-ai.vercel.app" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="UmukoziHR - AI-Powered HR Solutions" />

<!-- Google Verification -->
<meta
  name="google-site-verification"
  content="sx6blqhOL6lxGfZmcxCq-fRWfz35RUNQmTVlR33UOm8"
/>

<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XRMHKYSRTS"
></script>
```

### ✅ 5. Structured Data Check

1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your URL: `https://umukozihr-ai.vercel.app`
3. Should detect:
   - Organization schema
   - FAQ schema
   - WebSite schema
   - SoftwareApplication schema

### ✅ 6. Technical SEO Check

#### Sitemap:

- Visit: `https://umukozihr-ai.vercel.app/sitemap.xml`
- Should show XML sitemap with your pages

#### Robots.txt:

- Visit: `https://umukozihr-ai.vercel.app/robots.txt`
- Should show robots directives

#### Manifest:

- Visit: `https://umukozihr-ai.vercel.app/manifest.webmanifest`
- Should show PWA manifest

### ✅ 7. Performance Check

1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Test your URL
3. Should score 90+ on both mobile and desktop

## 🚨 Troubleshooting

### Social Media Previews Not Showing:

- **Wait 10-15 minutes** for cache refresh
- Try adding `?v=1` to your URL
- Use Facebook Debugger to force refresh
- Check if images are publicly accessible

### Google Analytics Not Tracking:

- Check browser console for errors
- Verify environment variable is set
- Make sure ad blockers aren't blocking GA
- Wait 24-48 hours for data to appear in reports

### Search Console Verification Failed:

- Check if meta tag is in `<head>` section
- Verify exact verification code matches
- Try re-deploying your site
- Wait a few minutes and try again

### No Search Rankings:

- Submit sitemap to Search Console
- Request indexing for homepage
- Create more content with target keywords
- Build backlinks from relevant sites

## 📊 Success Indicators

Within 24-48 hours you should see:

- ✅ Google Analytics tracking visitors
- ✅ Social media previews working on all platforms
- ✅ Search Console verified and sitemap submitted
- ✅ Homepage indexed by Google
- ✅ Basic keyword rankings for "UmukoziHR"
- ✅ Rich snippets appearing in search results

## 🎯 Next Steps After Verification

1. **Monitor daily** in Google Analytics and Search Console
2. **Create content** targeting "Umukozi" keywords
3. **Build social media presence** with consistent posting
4. **Submit to directories** and industry listings
5. **Reach out for backlinks** from HR industry sites

Your SEO foundation is solid - now it's about consistent execution and content creation!
