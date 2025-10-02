interface Props {
  bookCoverImageUrl: string;
  height?: string | number;
  width?: string | number;
}

const Book3D = ({
  bookCoverImageUrl,
  height = "300px",
  width = "200px",
}: Props) => {
  return (
    <div className="relative perspective-1000">
      <img
        src={bookCoverImageUrl}
        alt=""
        width={width}
        height={height}
        className={`w-${width} h-${height} transform rotate-y-[10deg] object-cover rounded-tl-md rounded-bl-md`}
      />

      <div className="absolute transform rotate-y-[10deg] top-0 w-2.5 h-full rounded-tl-[5px] bg-gray-800 shadow" />

      <div
        className={`absolute transform rotate-y-[10deg] left-0 w-full h-3 rounded-bl-[5px] bg-gray-400`}
      />
    </div>
  );
};

export default Book3D;
