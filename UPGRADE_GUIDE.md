# Portfolio Upgrade Guide

This document provides setup instructions for the newly added features to your portfolio.

## 🎯 Features Added

### 1. ✉️ EmailJS Contact Form Integration

**What's New:** The contact form now sends emails directly to your inbox using EmailJS.

#### Setup Required:
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up (free plan available)
2. Create a new service (e.g., Gmail)
3. Create a new email template
4. Get your:
   - **Service ID**
   - **Template ID**  
   - **Public Key**

#### Implementation:
Update `src/components/Contact.tsx` line 19:
```typescript
emailjs.init('YOUR_PUBLIC_KEY_HERE');
```

And update lines 32-40:
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',
  'YOUR_TEMPLATE_ID_HERE',
  {
    to_email: 'raselislam07575@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  }
);
```

### 2. 🔍 SEO Optimization

**What's New:** Added react-helmet-async for better SEO with:
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter cards
- Structured data support

No setup required! SEO component is ready to use.

### 3. ✨ Scroll Animations (AOS - Animate On Scroll)

**What's New:** Smooth animations for all sections when scrolling.

**Key Features:**
- Fade-up animations on sections
- Staggered animations for grid items
- Configurable duration and delays

Configuration in `src/main.tsx` can be customized:
```typescript
AOS.init({
  duration: 1000,  // animation duration
  once: false,     // animate every scroll
  offset: 100,     // trigger offset
});
```

### 4. 📊 Stats Counter Section

**What's New:** Animated stats showing:
- Projects Completed
- Hackathon Wins
- Years of Experience
- GitHub Followers

Located after Hero section. Update numbers in `src/components/StatsSection.tsx` if needed.

### 5. 📰 GitHub Statistics Widget

**What's New:** Live GitHub stats that fetch real data from GitHub API:
- Public repositories count
- Total stars across all repos
- Total forks across all repos
- Follower count

**How it Works:**
- Fetches data from `https://api.github.com/users/raselsbd`
- Automatically updates on page load
- Shows loading state while fetching
- Handles errors gracefully

No setup required! Works automatically.

### 6. 📧 Newsletter Signup Section

**What's New:** Email subscription form to build your audience.

#### Setup Options:

**Option A: Using Brevo (formerly Sendinblue)**
1. Sign up at [Brevo.com](https://www.brevo.com)
2. Create a contact list
3. Update `src/components/NewsletterSection.tsx` to integrate

**Option B: Using Mailchimp**
1. Sign up at [Mailchimp.com](https://mailchimp.com)
2. Create an audience
3. Integrate their API

**Option C: Using FormSubmit.co** (Easiest)
1. Update form action in `NewsletterSection.tsx`:
```typescript
const response = await fetch('https://formsubmit.co/YOUR_EMAIL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});
```

### 7. 🔗 Project Link Fixes

**What's Changed:** 
- Demo button now only shows if project has a valid demo URL
- Removed placeholder "#" links
- GitHub links are fully functional

## 📦 Installed Packages

```json
{
  "emailjs-com": "^3.2.0",
  "react-helmet-async": "^2.0.4",
  "aos": "^2.3.4"
}
```

## 🎨 Customization

### Update Contact Email
File: `src/components/Contact.tsx`
```typescript
to_email: 'your-email@example.com'
```

### Update GitHub Username
File: `src/components/GithubStats.tsx`
Replace `raselsbd` with your GitHub username in the API URL.

### Update Stats Numbers
File: `src/components/StatsSection.tsx`
Modify the `targetStats` array values.

### Update Newsletter Service
File: `src/components/NewsletterSection.tsx`
Replace mock API call with your newsletter service API.

## 🚀 Deployment Checklist

- [ ] Set EmailJS credentials
- [ ] Test contact form
- [ ] Verify GitHub stats loading
- [ ] Setup newsletter service
- [ ] Update OG images for social sharing
- [ ] Test all animations on mobile
- [ ] Check SEO meta tags
- [ ] Run lighthouse audit
- [ ] Deploy to production

## 📝 Environment Variables (Optional)

Create `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_USERNAME=raselsbd
```

Then update components to use:
```typescript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

## 🐛 Troubleshooting

### Animations not showing?
- Clear browser cache
- Check if AOS is initialized in `src/main.tsx`
- Verify `data-aos` attributes are present

### EmailJS not working?
- Check credentials are correct
- Verify email template format matches
- Check browser console for errors
- Test from EmailJS dashboard first

### GitHub stats not loading?
- Check GitHub username spelling
- GitHub API has rate limiting (60 requests/hour unauthenticated)
- Check network tab in DevTools

### Newsletter not submitting?
- Update form action to your service
- Check CORS settings if using external service
- Test API endpoint separately

## 📚 Resources

- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Helmet Async](https://github.com/steverep/react-helmet-async)
- [AOS Library](https://michalsnik.github.io/aos/)
- [GitHub API](https://docs.github.com/en/rest)

## ✅ Next Steps

1. Configure EmailJS for live contact form
2. Setup newsletter service
3. Test all features locally: `npm run dev`
4. Build project: `npm run build`
5. Deploy to hosting (Vercel, Netlify, etc.)

---

**For any issues or questions, refer to the official documentation of each service.**
