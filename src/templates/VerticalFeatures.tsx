import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="La Mejor Forma de Comprar una Casa"
    description="Nuestra prioridad es brindarte la mejor experiencia de busqueda de tu nuevo hogar. Nos encargamos de todo el proceso de principio a fin para que tu no tengas que preocuparte de nada mas que de tu futuro."
  >
    <VerticalFeatureRow
      title="Busqueda confiable"
      description="Nos aseguramos de verificar que cada oferta sea real y este vigente para que tu proceso de busqueda sea lo mas agradable posible."
      image="/assets/images/house_searching.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Panorama completo"
      description="Te damos acceso a la informacion mas relevante de las propiedades para que puedas tomar la decision mas asertada."
      image="/assets/images/select_house.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Compra 100% digital"
      description="Todo el proceso es a traves de nuestra plataforma, desde la busqueda hasta la firma del contrato. Todo completamente seguro para que tu no tengas que preocuparte de nada mas que encontrar tu nuevo hogar."
      image="/assets/images/buy_house.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
