import { permanentRedirect } from 'next/navigation';

// The demo form lives on /contact (it posts to /api/contact).
export default function BookDemoRedirectPage() {
  permanentRedirect('/contact');
}
