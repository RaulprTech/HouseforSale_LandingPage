import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        src={`${router.basePath}/assets/images/logo.png`}
        alt=""
        width={size}
        height={size}
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
