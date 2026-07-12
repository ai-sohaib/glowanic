export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "affiliate-note compact" : "affiliate-note"} role="note">
      <strong>Affiliate disclosure:</strong> As an Amazon Associate I earn from qualifying purchases.
      {!compact && " Glowanic may receive a commission when you buy through qualifying links, at no additional cost to you."}
    </div>
  );
}
