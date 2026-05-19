export default function University({ Uni, src, alt,className }) {
  return (
    <div className={className ? className : "flex flex-col items-center text-center"}>
      <img
        src={src}
        alt={alt}
        className="h-12 object-contain  hover:grayscale-0 transition-all duration-300"
      />
      <p className="mt-3 text-sm text-gray-500">{Uni}</p>
    </div>
  );
}
