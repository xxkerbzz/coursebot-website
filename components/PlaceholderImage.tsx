interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export default function PlaceholderImage({
  width = 800,
  height = 600,
  text = 'Image',
  className = '',
}: PlaceholderImageProps) {
  return (
    <div
      className={`bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center ${className}`}
      style={{ width: '100%', aspectRatio: `${width}/${height}` }}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">📷</div>
        <p className="text-sm text-gray-500 font-light">{text}</p>
        <p className="text-xs text-gray-400 mt-1">{width} × {height}</p>
      </div>
    </div>
  );
}
