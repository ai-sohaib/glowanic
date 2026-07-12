import Script from "next/script";

export function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
          document.addEventListener('click', function(event) {
            const target = event.target instanceof Element ? event.target : null;
            const link = target ? target.closest('[data-affiliate-link="amazon"]') : null;
            if (link) gtag('event', 'affiliate_click', { link_url: link.href, merchant: 'Amazon' });
          });
        `}
      </Script>
    </>
  );
}
