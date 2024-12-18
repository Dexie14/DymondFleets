import React from "react";

const StatCard = ({
  title,
  count,
  image,
}: {
  title?: string;
  count?: string | number;
  image?: React.ReactNode;
}) => {
  return (
    <div>
      <main className="flex gap-2 mt-4 flex-col bg-white py-6 px-8 rounded-[12px] shadow-adminshadow min-w-[230px]">
        <div className="flex items-center gap-4">
          <div className="text-blueGray">{image}</div>
          <div>
            <p className="text-sm font-medium text-adminGrey">{title}</p>
            <p className="text-xl font-bold">{count}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StatCard;
