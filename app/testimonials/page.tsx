import { Metadata } from 'next';
import { createPageMetadata } from '../metadata.config';
import TestimonialsView from '@/components/testimonials-view';

export const generateMetadata = (): Metadata => {
  return createPageMetadata({
    title: 'Patient Testimonials',
    description: 'Explore real stories of restoration and healing from the NYL community. Discover clinical success stories through our master-led acupuncture sessions.',
  });
};

export default function TestimonialsPage() {
  return <TestimonialsView />;
}
