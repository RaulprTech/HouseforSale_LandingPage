import React, { ReactNode } from 'react';

type IElementFeatureTableProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function ElementFeatureTable(props: IElementFeatureTableProps) {
  // const router = useRouter();
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-14 w-14 rounded-md bg-green-500 text-white">
          {props.icon}
        </div>
      </div>
      <div className="ml-4">
        <dt className="text-lg leading-6 font-medium text-gray-900">
          {props.title}
        </dt>
        <dd className="mt-2 text-base text-gray-500">{props.description}</dd>
      </div>
    </div>
  );
}
