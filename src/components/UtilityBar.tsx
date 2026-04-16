import { User, Heart, MessageSquare } from "lucide-react";

const links = [
  { label: "Customer Stories", icon: MessageSquare },
  { label: "View Wishlist", icon: Heart },
  { label: "My Account", icon: User },
];

const UtilityBar = () => (
  <div className="w-full bg-brand-dark" style={{ height: 32 }}>
    <div className="pc-container h-full flex items-center justify-end gap-6">
      {links.map((l) => (
        <a
          key={l.label}
          href="#"
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
