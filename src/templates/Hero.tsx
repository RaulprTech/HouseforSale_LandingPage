import Link from 'next/link';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const router = useRouter();
  return (
    <Background color="bg-gray-100">
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

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'Busca, Compara y Compra en un solo lugar\n'}
              <span className="text-primary-500">Compra tu nueva Casa</span>
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
        <article className="relative col-span-3 row-span-2">
          <img
            src={`${router.basePath}/assets/images/background.png`}
            className="absolute inset-0 w-full h-full object-cover bg-gray-100"
          />
        </article>
      </Section>
    </Background>
  );
};

export { Hero };
