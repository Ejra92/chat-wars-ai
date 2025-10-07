import type { FC } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GridProps, ItemProps } from "../types";
import { processValueBy } from "../utils";

const Item: FC<ItemProps> = ({
  name,
  ...rest
}) => (
  <Card
    className="bg-[#1C1C1C] border-gray-800 hover:border-gray-600 transition-all w-full md:max-w-[340px] lg:max-w-[300px] min-h-[290px]"
  >
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>

    <CardContent className="space-y-1 text-md">
      {Object.entries(rest).map(([key, value]) => (
        <p key={`${name} ${key}`} className="capitalize">
          <strong className="capitalize">
            {key.split("_").join(" ")}:
          </strong> {processValueBy(key, value)}
        </p>
      ))}
    </CardContent>
  </Card>
);

export const Grid = ({ items }: GridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-10 lg:gap-y-10 w-full max-w-[420px] md:max-w-[768px] lg:max-w-[1024px] justify-items-center mb-5 md:mb-0">
      {items?.map((item) => (
        <Item
          key={item.name}
          {...item}
        />
      ))}
    </div>
  );
};
