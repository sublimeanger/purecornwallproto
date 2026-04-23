import { User, Heart, MessageSquare } from "lucide-react";

const links = [
  { label: "Customer Stories", icon: MessageSquare, href: "/contact" },
  { label: "View Wishlist", icon: Heart, href: "/contact" },
  { label: "My Account", icon: User, href: "/contact" },
];

const UtilityBar = () => (
  <div className="w-full bg-brand-dark" style={{ height: 32 }}>
    <div className="pc-container h-full flex items-center justify-end gap-6">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
          style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "2px" }}
        >
          <l.icon size={12} />
          {l.label}
        </a>
      ))}
    </div>
  </div>
);

export default UtilityBar;
