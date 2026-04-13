import { Metadata } from 'next';
import { createPageMetadata } from '../metadata.config';
import ContactView from '@/components/contact-view';

export const generateMetadata = (): Metadata => {
  return createPageMetadata({
    title: 'Book Your Consultation',
    description: 'Connect with NYL Healing. Visit our clinics in Kochi and Perumbavoor, or enquire about our international concierge and distance healing services.',
  });
};

export default function ContactPage() {
  return <ContactView />;
}
