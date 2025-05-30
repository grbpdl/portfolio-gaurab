"use client";

// This is a client-side only module
export const motion = {
  div: function CustomMotionDiv({
    initial = {},
    animate = {},
    transition = {},
    className = "",
    children,
    ...rest
  }: any) {
    // Simple implementation to avoid adding framer-motion as a dependency
    // In a real project, you would use the actual framer-motion library
    return (
      <div
        className={`transition-all duration-500 ${className}`}
        style={{
          // Apply any inline styles needed for the animation effect
          opacity: animate.opacity !== undefined ? animate.opacity : 1,
          transform: `translateY(${animate.y || 0}px)`,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  },
  h1: function CustomMotionH1({
    initial = {},
    animate = {},
    transition = {},
    className = "",
    children,
    ...rest
  }: any) {
    return (
      <h1
        className={`transition-all duration-500 ${className}`}
        style={{
          opacity: animate.opacity !== undefined ? animate.opacity : 1,
          transform: `translateY(${animate.y || 0}px)`,
        }}
        {...rest}
      >
        {children}
      </h1>
    );
  },
  p: function CustomMotionP({
    initial = {},
    animate = {},
    transition = {},
    className = "",
    children,
    ...rest
  }: any) {
    return (
      <p
        className={`transition-all duration-500 ${className}`}
        style={{
          opacity: animate.opacity !== undefined ? animate.opacity : 1,
          transform: `translateY(${animate.y || 0}px)`,
        }}
        {...rest}
      >
        {children}
      </p>
    );
  },
};
