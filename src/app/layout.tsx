import { ThemeProvider } from "~/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/utils";

import { type Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

const fontSTKaiti = localFont({
  variable: "--font-st-kaiti",
  src: "./fonts/STKaiti.ttf",
  fallback: ["system-ui"],
});

export const metadata: Metadata = {
  title: "AsPoem.com - 现代化中国诗词学习网站",
  description: `aspoem.com 是现代化的中国诗词学习网站，提供全站搜索、拼音标注、注释和白话文翻译等功能。无论您对唐诗宋词感兴趣还是想深入学习，都是您的理想选择，从这里开始您的诗歌之旅！`,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "中国诗词学习",
    "现代化诗词网站",
    "全站搜索诗词",
    "拼音标注诗词",
    "注释诗词",
    "白话文翻译诗词",
    "诗词学习资源",
    "学习唐诗宋词",
    "诗词学习网站推荐",
  ],
  metadataBase: new URL("https://aspoem.com"),
  twitter: {
    creator: "@meetqy",
    images: "/opengraph-image",
  },
  openGraph: {
    images: "/opengraph-image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body
        className={cn(
          "min-h-screen bg-background font-cursive font-normal text-foreground antialiased",
          fontSTKaiti.variable,
        )}
      >
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
      <GoogleAnalytics gaId="G-PYEC5EG749" />
      <Script id="clarity">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=gtm2";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","ksel7bmi48");`}
      </Script>
    </html>
  );
}
