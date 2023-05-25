"use client";

import { CacheProvider } from "@emotion/react";
import { MantineProvider, useEmotionCache } from "@mantine/core";
import { Sarabun } from "next/font/google";
import { useServerInsertedHTML } from "next/navigation";


//Need CacheProvider only for Mantine used on NextJS with App Router

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "700"],
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: sarabun.style.fontFamily,
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
