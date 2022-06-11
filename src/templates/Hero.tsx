import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  return (
    <Background color="bg-gray-100 max-w-screen-2xl">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/">
              <a>Explorar</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Iniciar Sesion</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
      <header>
        {/* Background image */}
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: '50%',
            backgroundImage: 'url("/assets/images/background3.png")',
            height: 500,
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.70)' }}
          >
            <Section yPadding="pt-20 pb-32 text-white">
              <HeroOneButton
                title={
                  <>
                    {'Busca, Compara y Compra en un solo lugar\n'}
                    <span className="text-primary-500">
                      Compra tu nueva Casa
                    </span>
                  </>
                }
                description="de forma facil, rapida y con la mayor seguridad."
                button={
                  <Link href="/">
                    <a>
                      <Button xl>Quiero mi casa nueva</Button>
                    </a>
                  </Link>
                }
              />
            </Section>
          </div>
        </div>
        {/* Background image */}
      </header>
    </Background>
  );
};

export { Hero };
