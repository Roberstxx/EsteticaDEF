import { Star } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="beauty-card p-6">
      {/* Rating Stars */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-muted-foreground mb-4 italic">
        "{testimonial.texto}"
      </blockquote>

      {/* Client Name */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm mr-3">
          {testimonial.nombreCliente.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-foreground">
            {testimonial.nombreCliente}
          </p>
          <p className="text-xs text-muted-foreground">
            Cliente verificado
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;