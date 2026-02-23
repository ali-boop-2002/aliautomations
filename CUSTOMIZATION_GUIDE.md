# CUSTOMIZATION EXAMPLES - Code Snippets

## 🖼️ Example 1: Adding Your Professional Photo

**Find this in `src/app/page.tsx` (around line 95):**
```tsx
{/* Right - Placeholder for Professional Photo */}
<div className="relative">
  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-blue-600/20 to-slate-900 border border-slate-800 flex items-center justify-center">
    <div className="text-center text-slate-400">
      <div className="text-6xl mb-4">📸</div>
      <p className="text-sm">Professional headshot + video will go here</p>
      <p className="text-xs mt-2">Replace with your image</p>
    </div>
  </div>
</div>
```

**Replace with:**
```tsx
{/* Right - Professional Photo */}
<div className="relative">
  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-800">
    <img
      src="/images/ali-headshot.jpg"
      alt="Ali - Property Operations Specialist"
      className="w-full h-full object-cover"
    />
  </div>
</div>
```

**Steps:**
1. Create a `public/images/` folder in your project root
2. Add your headshot photo named `ali-headshot.jpg`
3. Replace the placeholder code above

---

## 🎥 Example 2: Embedding Your Intro Video (Loom/YouTube)

**Find this in `src/app/page.tsx` (around same area as photo):**
```tsx
<div className="text-center text-slate-400">
  <div className="text-6xl mb-4">📸</div>
  <p className="text-sm">Professional headshot + video will go here</p>
</div>
```

**Add this YouTube embed:**
```tsx
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Ali Automations Intro"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

**Or for Loom:**
```tsx
<iframe
  className="w-full h-full"
  src="https://www.loom.com/embed/YOUR_LOOM_ID"
  frameBorder="0"
  allowFullScreen
/>
```

---

## 📹 Example 3: Adding Demo Video in "How It Works"

**Find this in `src/app/page.tsx` (around line 280):**
```tsx
{/* Demo Placeholder */}
<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 p-8 min-h-96 flex items-center justify-center">
  <div className="text-center text-slate-400">
    <div className="text-6xl mb-4">🎬</div>
    <p className="text-lg font-semibold">20–30 sec Demo GIF/Video</p>
    <p className="text-sm mt-2">Photo → Extraction → Ticket → Sheets Update</p>
  </div>
</div>
```

**Replace with your demo video:**
```tsx
{/* Demo Video */}
<div className="relative rounded-2xl overflow-hidden border border-slate-700">
  <video
    className="w-full h-auto"
    controls
    autoPlay
    loop
    muted
  >
    <source src="/videos/demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
```

**Or YouTube:**
```tsx
<iframe
  className="w-full aspect-video rounded-2xl"
  src="https://www.youtube.com/embed/YOUR_DEMO_VIDEO_ID"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>
```

---

## 🔗 Example 4: Update Calendly Links

**Find all instances of `https://calendly.com` and replace:**

### Location 1: Navigation Bar (line ~40)
```tsx
// Before:
href="https://calendly.com"

// After:
href="https://calendly.com/muhammadalishahid14/15min"
```

### Location 2: Hero Section CTA (line ~110)
Same update as above

### Location 3: How It Works CTA (line ~315)
Same update as above

### Location 4: Final CTA Section (line ~470)
Same update as above

**Quick Find & Replace:**
1. Press `Ctrl+H` (or `Cmd+H` on Mac) in VS Code
2. Find: `https://calendly.com`
3. Replace with: `https://calendly.com/muhammadalishahid14/15min`
4. Click "Replace All"

---

## 👥 Example 5: Update LinkedIn Link

**Find this in `src/app/page.tsx` (around line 520 in footer):**
```tsx
<a
  href="https://linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition"
>
  <Linkedin size={16} />
  LinkedIn
</a>
```

**Replace the href with your LinkedIn:**
```tsx
<a
  href="https://linkedin.com/in/your-linkedin-username"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition"
>
  <Linkedin size={16} />
  LinkedIn
</a>
```

---

## 🎨 Example 6: Change the Blue Color Theme

**Edit `tailwind.config.ts`:**

```typescript
// Find this section:
extend: {
  colors: {
    primary: {
      50: '#f0f4ff',
      100: '#e0e9ff',
      200: '#c7d8ff',
      300: '#a4bbff',
      400: '#7c93ff',
      500: '#5b69ff',
      600: '#4247f5',
      700: '#3234d0',
      800: '#2a2ba8',
      900: '#262a85',
      950: '#0d0e2e',
    },
  },
},

// To use a different professional color, replace the hex codes above
// Example: For a professional purple instead:
primary: {
  50: '#f3e8ff',
  100: '#e9d5ff',
  // ... etc
}
```

---

## 📝 Example 7: Update the About Section Photo

**Find this in `src/app/page.tsx` (around line 380):**
```tsx
{/* Left - Placeholder Photo */}
<div className="order-2 md:order-1">
  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-blue-600/20 to-slate-900 border border-slate-800 flex items-center justify-center">
    <div className="text-center text-slate-400">
      <div className="text-6xl mb-4">👋</div>
      <p className="text-sm">Personal photo + fun fact</p>
    </div>
  </div>
</div>
```

**Replace with your photo:**
```tsx
{/* Left - Personal Photo */}
<div className="order-2 md:order-1">
  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-800">
    <img
      src="/images/ali-personal.jpg"
      alt="Ali from Endicott, NY"
      className="w-full h-full object-cover"
    />
  </div>
</div>
```

---

## ✏️ Example 8: Edit Your Bio Text

**Find this in `src/app/page.tsx` (around line 405):**
```tsx
<div className="space-y-4 text-lg text-slate-300 leading-relaxed">
  <p>
    I'm Ali, a builder from Endicott, NY obsessed with making property ops effortless. 
  </p>
  <p>
    From manual spreadsheets to AI orchestration—without ditching your tools. I've helped property managers save 10+ hours per week by automating their most painful workflows.
  </p>
  <p>
    My approach: understand your chaos, build the solution, integrate seamlessly with what you already use.
  </p>
</div>
```

**Edit the text inside the `<p>` tags to match your story**

---

## 🎯 Example 9: Add or Remove Review Cards

**Find the reviews array (around line 75):**
```typescript
const reviews = [
  {
    name: "Client 1",
    title: "JavaScript Development Project",
    rating: 5,
    text: "Ali did an excellent job...",
    badges: ["Clear Communicator", "Committed to Quality"]
  },
  // ... more reviews
];
```

**To add a new review, add a new object:**
```typescript
{
  name: "Client 4",
  title: "Your Project Type",
  rating: 5,
  text: "Their review text goes here...",
  badges: ["Badge 1", "Badge 2", "Badge 3"]
},
```

**To remove a review, delete the entire object**

---

## 🚀 Example 10: Deploy to Vercel

**In your terminal:**
```bash
# 1. Make sure your code is saved and committed to git
cd /Users/ali/Desktop/aliautomations

# 2. Install Vercel CLI
npm i -g vercel

# 3. Deploy
vercel

# Follow the prompts and your site will be live!
```

---

## 📂 File Organization

```
aliautomations/
├── public/                    ← Add your images/videos here
│   ├── images/
│   │   ├── ali-headshot.jpg  ← Your professional photo
│   │   └── ali-personal.jpg  ← Your personal photo
│   └── videos/
│       └── demo.mp4          ← Your demo video
├── src/
│   ├── app/
│   │   ├── page.tsx          ← Edit content HERE
│   │   └── layout.tsx
│   └── styles/
│       └── globals.css
└── tailwind.config.ts        ← Edit colors HERE
```

---

## ✅ Quick Customization Checklist

- [ ] Add professional headshot to `public/images/`
- [ ] Add intro video link (YouTube/Loom URL)
- [ ] Add demo video to `public/videos/`
- [ ] Replace all `https://calendly.com` with your Calendly link (4 places)
- [ ] Update LinkedIn URL in footer (1 place)
- [ ] Add personal photo to About section
- [ ] Review and edit your bio text
- [ ] Test all links and buttons
- [ ] Deploy to Vercel

---

**Ready to customize? Edit `src/app/page.tsx` and follow these examples!**
