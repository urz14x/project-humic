type TCard = {
  title: string;
  total: number;
  icons: React.ReactNode;
};
export default function Card(props: TCard) {
  const { title, total, icons } = props;
  return (
    <div className="w-72 h-40 bg-colors_primary flex flex-row items-center p-5 justify-center space-x-5 rounded-md mt-10 shadow-md">
      <div className="flex flex-col">
        <h3 className="text-colors_smooth_white text-sofia text-base">
          {title}
        </h3>
        <h1 className="text-colors_smooth_white font-sofia text-6xl">
          {total}
        </h1>
      </div>
      <div>
        <span className="text-colors_primary">{icons}</span>
      </div>
    </div>
  );
}
