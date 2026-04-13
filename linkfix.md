# Lenis Scroll-to-Top Fix

## Problem

When navigating between pages or clicking the same page link, Lenis's custom scroll behavior prevents native `window.scrollTo(0, 0)` from working. Users stay at their current scroll position instead of jumping to the top.

## Solution

Use Lenis's own API (`lenis.scrollTo()`) instead of the browser's native method. Three simple changes:

### 1. Create ScrollToTop Component

**File: `components/ScrollToTop.tsx`**

```tsx
"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}
```

- Watches route changes via `usePathname()`
- Calls `lenis.scrollTo(0, { immediate: true })` on every navigation
- `immediate: true` skips animation, snaps to top instantly

### 2. Add Click Handler to Navigation Links

**Update nav components** (e.g., `Navbar.tsx`):

```tsx
const lenis = useLenis();

const handleNavClick = (href: string) => {
  if (pathname === href) {
    lenis?.scrollTo(0, { immediate: true });
  }
};

// On your nav links:
<Link href={item.href} onClick={() => handleNavClick(item.href)}>
  {item.label}
</Link>;
```

- Only triggers when clicking the **current page** link
- Prevents unnecessary scroll resets on normal navigation

### 3. Mount ScrollToTop in Root Layout

**File: `app/(main)/layout.tsx`** (or wherever `SmoothScrollContainer` is used):

```tsx
import { ScrollToTop } from "@/components/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <SmoothScrollContainer>
      <ScrollToTop /> {/* Add this line */}
      <body>{children}</body>
    </SmoothScrollContainer>
  );
}
```

- Must be inside `<SmoothScrollContainer>` to access Lenis context
- Must be a client component (marked with `"use client"`)

## Key Points

✅ Use `lenis.scrollTo(0, { immediate: true })` for scroll resets  
✅ Use `{ immediate: true }` to skip smooth animations on navigation  
✅ Mount ScrollToTop inside the Lenis provider  
✅ Check your Lenis import path (newer versions: `lenis/react`)

## Reusable Checklist for Other Projects

- [ ] Create `ScrollToTop` component with route change listener
- [ ] Add `useLenis()` hook to nav component
- [ ] Add `onClick` handler for same-page link clicks
- [ ] Mount `<ScrollToTop />` inside `<SmoothScrollContainer>`
- [ ] Verify Lenis is properly initialized in root layout
