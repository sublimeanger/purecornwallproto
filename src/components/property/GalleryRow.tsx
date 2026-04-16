interface GalleryRowProps {
  images: string[];
}

const GalleryRow = ({ images }: GalleryRowProps) => (
  <div className="flex flex-col md:flex-row" style={{ gap: 4 }}>
    {images.map((src, i) => (
      <div key={i} className="flex-1" style={{ aspectRatio: "4/3" }}>
        <img
          src={src}
          alt={`Property detail ${i + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

export default GalleryRow;
