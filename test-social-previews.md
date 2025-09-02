# Test Your Social Media Previews

## Quick Testing Guide

### 1. WhatsApp Preview Test
1. Open WhatsApp on your phone
2. Send this URL to yourself or a friend: `https://umukozihr-ai.vercel.app`
3. You should now see a preview with:
   - UmukoziHR logo
   - Title: "UmukoziHR - AI-Powered HR Solutions"
   - Description about transforming hiring
   - Preview image with your branding

### 2. LinkedIn Preview Test
1. Go to LinkedIn
2. Create a new post
3. Paste: `https://umukozihr-ai.vercel.app`
4. LinkedIn should automatically generate a preview card

### 3. Twitter/X Preview Test
1. Go to Twitter/X
2. Create a new tweet
3. Paste: `https://umukozihr-ai.vercel.app`
4. Twitter should show a large image card preview

### 4. Facebook Preview Test
1. Use Facebook's Sharing Debugger: https://developers.facebook.com/tools/debug/
2. Enter your URL: `https://umukozihr-ai.vercel.app`
3. Click "Debug" to see how Facebook sees your page

## If Previews Don't Show

### Common Issues:
1. **Caching**: Social platforms cache previews. Try:
   - Adding `?v=1` to your URL: `https://umukozihr-ai.vercel.app?v=1`
   - Wait 24-48 hours for cache to clear
   - Use Facebook's debugger to force refresh

2. **Images Not Loading**: 
   - Check if images are publicly accessible
   - Ensure images are the right size (1200x630 for Open Graph)

3. **Missing Meta Tags**:
   - View page source and look for `<meta property="og:` tags
   - Should see title, description, image, and URL tags

### Force Cache Refresh:
- **Facebook**: Use Sharing Debugger and click "Scrape Again"
- **LinkedIn**: Use LinkedIn Post Inspector
- **Twitter**: Use Twitter Card Validator

## Expected Preview Content

Your social media previews should show:
- **Title**: "UmukoziHR - AI-Powered HR Solutions | Get Qualified Candidates in Under 1 Hour"
- **Description**: "Transform your hiring with UmukoziHR's intelligent recruiting platform..."
- **Image**: Custom branded image with UmukoziHR logo and key messaging
- **URL**: https://umukozihr-ai.vercel.app

If you see this content, your social media optimization is working correctly!