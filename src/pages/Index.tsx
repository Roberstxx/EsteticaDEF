import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import Testimonials from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Camera,
  Wand2,
  Scissors,
  Palette,
  Timer,
  ShieldCheck,
  Users,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';

const Index = () => {
  const stats = [
    {
      label: 'Clientes felices',
      value: '850+',
      description: 'Reseñas de cinco estrellas en los últimos 12 meses',
      icon: Sparkles,
    },
    {
      label: 'Años de experiencia',
      value: '3+',
      description: 'Equipo certificado en las últimas tendencias de belleza',
      icon: ShieldCheck,
    },
    {
      label: 'Especialistas',
      value: '12',
      description: 'Estilistas, coloristas y maquillistas dedicados a ti',
      icon: Users,
    },
  ];

  const signatureTreatments = [
    {
      title: 'Glow Facial Deluxe',
      description: 'Limpieza profunda, hidratación intensiva y masaje relajante facial.',
      duration: '75 min',
      price: '$1,200',
      icon: Wand2,
    },
    {
      title: 'Color & Gloss Signature',
      description: 'Diagnóstico capilar, color personalizado y brillo sellador.',
      duration: '120 min',
      price: '$1,850',
      icon: Palette,
    },
    {
      title: 'Corte & Styling Editorial',
      description: 'Corte de precisión con styling adaptado a tu evento especial.',
      duration: '90 min',
      price: '$950',
      icon: Scissors,
    },
  ];

  const bookingSteps = [
    {
      title: 'Explora y elige',
      description: 'Descubre el servicio ideal desde nuestro catálogo en línea.',
      icon: CheckCircle,
    },
    {
      title: 'Reserva en minutos',
      description: 'Agenda por WhatsApp en tu horario preferido y resuelve dudas.',
      icon: Timer,
    },
    {
      title: 'Disfruta tu experiencia',
      description: 'Relájate mientras nuestro equipo transforma tu estilo.',
      icon: Sparkles,
    },
  ];

  const faqs = [
    {
      question: '¿Necesito hacer depósito para reservar?',
      answer:
        'No pedimos anticipos. Solo confirmamos la cita por WhatsApp y te recordamos 24 horas antes.',
    },
    {
      question: '¿Ofrecen paquetes para eventos?',
      answer:
        'Sí, contamos con paquetes personalizados para novias, XV años y sesiones fotográficas. Escríbenos y diseñamos uno contigo.',
    },
    {
      question: '¿Puedo reagendar mi cita?',
      answer:
        'Claro, solo avísanos con al menos 12 horas de anticipación y reagendamos sin costo.',
    },
  ];

  const handleWhatsApp = () => {
    const message = 'Hola, me gustaría agendar una cita.';
    window.open(`https://wa.me/5551234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Highlights Section */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experiencias que inspiran confianza
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada visita está pensada para cuidarte con detalle, tecnología y calidez humana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="beauty-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="font-serif text-4xl font-bold text-foreground my-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FeaturedServices />

      {/* Signature Treatments Section */}
      <section className="py-16 lg:py-24 beauty-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Wand2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tratamientos insignia</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diseñados para resaltar tu belleza única
            </h2>
            <p className="text-lg text-muted-foreground">
              Combina técnicas profesionales con productos premium y resultados visibles desde la primera sesión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signatureTreatments.map((treatment) => {
              const Icon = treatment.icon;
              return (
                <div key={treatment.title} className="beauty-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground text-xl mb-2">{treatment.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{treatment.description}</p>
                  <div className="flex items-center justify-between text-sm font-medium text-foreground">
                    <span>{treatment.duration}</span>
                    <span>{treatment.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Carousel Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transformaciones Increíbles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mira el antes y después de algunos de nuestros trabajos más destacados.
              Cada transformación cuenta una historia única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="beauty-card p-6 text-center">
              <div className="w-full h-48 bg-accent rounded-lg mb-4 flex items-center justify-center">
                <Camera className="h-12 w-12 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Maquillaje de Boda</h3>
              <p className="text-sm text-muted-foreground">Transformación natural y elegante</p>
            </div>
            <div className="beauty-card p-6 text-center">
              <div className="w-full h-48 bg-accent rounded-lg mb-4 flex items-center justify-center">
                <Camera className="h-12 w-12 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Nail Art Premium</h3>
              <p className="text-sm text-muted-foreground">De simple a espectacular</p>
            </div>
            <div className="beauty-card p-6 text-center">
              <div className="w-full h-48 bg-accent rounded-lg mb-4 flex items-center justify-center">
                <Camera className="h-12 w-12 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Peinado de Evento</h3>
              <p className="text-sm text-muted-foreground">Elegancia y sofisticación</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="py-16 lg:py-24 bg-background/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agenda tu cita sin complicaciones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestro proceso de reserva está diseñado para adaptarse a tu ritmo y disponibilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="beauty-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Paso {index + 1}
                  </p>
                  <h3 className="font-semibold text-foreground text-xl mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Mini About Section */}
      <section className="py-16 lg:py-24 beauty-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Conoce nuestra historia</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Más que un salón, tu refugio de belleza
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Con más de 3 años de experiencia y cientos de clientas satisfechas, 
              Estética Bella se ha convertido en el lugar de confianza donde cada 
              mujer encuentra su mejor versión.
            </p>
            
            <Button
              asChild
              variant="outline"
              className="border-2 hover:bg-white/20"
            >
              <a href="/about">
                Conoce más sobre nosotros
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mini Gallery */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestro Espacio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un ambiente cuidadosamente diseñado para tu relajación y bienestar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="beauty-card p-0 overflow-hidden">
                <div className="w-full h-32 md:h-48 bg-accent flex items-center justify-center">
                  <Camera className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Preguntas frecuentes</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Todo lo que necesitas saber antes de visitarnos
            </h2>
            <p className="text-lg text-muted-foreground">
              Si tienes otra duda, escríbenos por WhatsApp y te respondemos en menos de 10 minutos.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <details key={faq.question} className="beauty-card p-6 group">
                <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-foreground">
                  <span>{faq.question}</span>
                  <ArrowRight className="h-5 w-5 text-primary transition-transform duration-200 group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 beauty-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            ¿Lista para tu transformación?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda tu cita hoy mismo y vive la experiencia Estética Bella
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            variant="secondary"
            className="px-8 py-6 text-lg bg-white text-primary hover:bg-white/90"
          >
            Reservar ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
