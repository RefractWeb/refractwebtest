# AnimatedText Component

A robust, customizable text animation component using GSAP's official SplitText plugin with automatic responsive re-splitting.

## Key Features

- ✅ **useGSAP hook** - Modern GSAP React integration with automatic cleanup
- ✅ **SplitText with autoSplit** - Automatically re-splits text when browser resizes
- ✅ **Viewport detection** - Animations trigger only when in view using IntersectionObserver
- ✅ **Multiple animation presets** - slideUp, slideDown, slideLeft, slideRight, fadeIn, scaleIn, rotateIn
- ✅ **Custom animations** - Full GSAP timeline/tween control via callback
- ✅ **ScrollTrigger support** - Scroll-linked animations with scrub
- ✅ **Mask animations** - Lines, words, or chars masking for reveal effects
- ✅ **TypeScript** - Full type safety
- ✅ **Design system ready** - Uses CSS variables from globals.css

## Quick Start

```tsx
import AnimatedText from "@/components/ui/animated-text";

// Basic usage
<AnimatedText
  splitType="lines"
  maskType="lines"
  animationType="slideUp"
  duration={0.8}
  stagger={0.1}
  className="text-4xl font-bold"
>
  Your animated text here
</AnimatedText>;
```

## Props

| Prop                  | Type                                                                    | Default      | Description                       |
| --------------------- | ----------------------------------------------------------------------- | ------------ | --------------------------------- |
| `splitType`           | `"chars" \| "words" \| "lines" \| "words,lines" \| "chars,words,lines"` | `"lines"`    | How to split the text             |
| `maskType`            | `"chars" \| "words" \| "lines" \| false`                                | `"lines"`    | Apply masking for reveal effect   |
| `duration`            | `number`                                                                | `0.6`        | Animation duration in seconds     |
| `ease`                | `string`                                                                | `"expo.out"` | GSAP easing function              |
| `stagger`             | `number \| object`                                                      | `0.1`        | Delay between elements            |
| `animationType`       | `preset \| "custom"`                                                    | `"slideUp"`  | Animation preset to use           |
| `customAnimation`     | `(instance: SplitText) => Tween \| Timeline`                            | -            | Custom animation function         |
| `delay`               | `number`                                                                | `0`          | Initial delay before animation    |
| `useScrollTrigger`    | `boolean`                                                               | `false`      | Enable scroll-based animation     |
| `scrollTriggerConfig` | `object`                                                                | -            | ScrollTrigger configuration       |
| `onAnimationComplete` | `() => void`                                                            | -            | Callback when animation completes |

## Examples

### Scroll-triggered Animation

```tsx
<AnimatedText
  splitType="lines"
  maskType="lines"
  useScrollTrigger={true}
  scrollTriggerConfig={{
    start: "top center",
    end: "bottom center",
    scrub: true,
  }}
>
  Animates on scroll
</AnimatedText>
```

### Custom Animation

```tsx
<AnimatedText
  customAnimation={(instance) => {
    return gsap.from(instance.words, {
      duration: 0.8,
      yPercent: 100,
      rotation: -10,
      opacity: 0,
      stagger: { amount: 0.5, from: "center" },
      ease: "back.out(1.7)",
    });
  }}
>
  Custom GSAP animation
</AnimatedText>
```

### Advanced Stagger

```tsx
<AnimatedText
  splitType="chars"
  stagger={{ amount: 0.5, from: "random" }}
  animationType="scaleIn"
>
  Random character animation
</AnimatedText>
```

## Demo

Check `src/components/ui/animated-text-demo.tsx` for comprehensive examples.

## Requirements

- `gsap-trial` (or `gsap` with Club GreenSock for SplitText)
- `@gsap/react`
- React 18+

## Notes

- Component uses IntersectionObserver for viewport detection (no motion/react dependency for this)
- Automatically handles responsive re-splitting via GSAP's `autoSplit` feature
- All animations are GPU-accelerated for optimal performance
- Uses design system CSS variables for styling consistency
