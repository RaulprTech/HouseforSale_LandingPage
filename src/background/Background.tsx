import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => {
  return (
    <div>
      <article className={props.color}>{props.children}</article>
    </div>
  );
};

export { Background };
