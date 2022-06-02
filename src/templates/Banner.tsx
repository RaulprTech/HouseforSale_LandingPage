import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Mas de 200 nuevos desarrollos inmoviliarios cerca de ti."
      subtitle="Encuentra la casa de tus sueños aqui"
      button={
        <Link href="/">
          <a>
            <Button>Ver mas</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
