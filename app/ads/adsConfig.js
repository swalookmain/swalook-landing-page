export const PHONE_DISPLAY = '+91 98701 03761';
export const PHONE_TEL = 'tel:+919870103761';
export const WHATSAPP_NUMBER = '919870103761';
export const CONTACT_EMAIL = 'info@swalook.in';
export const ATTR_KEYS = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
export const ATTR_STORAGE_KEY = 'swalook_ads_attribution';

export const BRANCH_OPTIONS = [
  { value: '', label: 'Select (optional)' },
  { value: '1 branch', label: '1 branch' },
  { value: '2 to 5 branches', label: '2 to 5 branches' },
  { value: '6 or more branches', label: '6 or more branches' },
];

export const PRIORITY_OPTIONS = [
  { value: '', label: 'Select (optional)' },
  { value: 'Bring customers back', label: 'Bring customers back' },
  { value: 'Appointments and billing', label: 'Appointments and billing' },
  { value: 'Inventory and stock', label: 'Inventory and stock' },
  { value: 'Staff and attendance', label: 'Staff and attendance' },
  { value: 'Multi-branch management', label: 'Multi-branch management' },
  { value: 'Get more customers', label: 'Get more customers' },
];

export function buildWhatsAppHref({ name, salonName, mobile } = {}) {
  let text = 'Hi Swalook, I would like to know more about your salon CRM.';
  if (name || salonName || mobile) {
    text =
      `Hi Swalook, I tried the ads form.${name ? ` Name: ${name}.` : ''}` +
      `${salonName ? ` Salon: ${salonName}.` : ''}` +
      `${mobile ? ` Phone: ${mobile}.` : ''} Please call me back.`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function readStoredAttribution() {
  try {
    const raw = sessionStorage.getItem(ATTR_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function mergeAttributionFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = {};
  for (const key of ATTR_KEYS) {
    const value = params.get(key);
    if (value) fromUrl[key] = value;
  }
  const stored = readStoredAttribution();
  const merged = { ...stored, ...fromUrl };
  try {
    if (Object.keys(merged).length > 0) {
      sessionStorage.setItem(ATTR_STORAGE_KEY, JSON.stringify(merged));
    }
  } catch {
    // ignore quota / private mode
  }
  return merged;
}

export const PROBLEMS = [
  {
    title: 'Customers come in, but not all of them return',
    body: 'You may remember your regular customers, but it is difficult to remember every visit, every service and who is due to come back. When follow-ups depend on memory, customers can disappear without anyone noticing.',
  },
  {
    title: 'You are busy, but you are not sure where the money is going',
    body: 'You can see the bills, but do you have a clear view of services sold, customer spending, expenses and stock movement? When records are spread across registers and spreadsheets, it takes extra effort to connect the dots.',
  },
  {
    title: 'Stock gets used, but tracking it is another job',
    body: 'Products are used throughout the day. If purchases, usage and remaining stock are not recorded properly, it becomes harder to spot waste, shortages or items that need reordering.',
  },
  {
    title: 'Missed appointments leave gaps in the day',
    body: 'A customer forgets, cancels late or does not turn up. The slot is left empty, and your team has to manage the change while serving everyone else.',
  },
  {
    title: 'Every branch has its own way of doing things',
    body: 'When you run more than one salon, checking billing, staff, customers and stock location by location can become tiring. You need a clearer picture of what is happening across your business.',
  },
];

export const CRM_GROUPS = [
  'Due for a visit',
  'At-risk customers',
  'Customers who have not visited recently',
  'First-time customers who may need a follow-up',
  'Regular and high-value customers',
];

export const MORE_FEATURES = [
  {
    title: 'WhatsApp Follow-Ups',
    body: 'Find customers who may need a reminder or rebooking message. Swalook prepares follow-ups using CRM information, and your team can review and confirm the message before it is sent.',
    image: '/images/crm-whatsapp.png',
    alt: 'Swalook WhatsApp inbox for salon customer follow-ups and replies.',
  },
  {
    title: 'Customer Loyalty',
    body: 'Encourage repeat visits with loyalty options, rewards and offers that fit your salon. When a customer asks for a discount, you can consider a benefit that gives them a reason to return rather than reducing the price without a plan.',
    image: '/images/crm-loyalty.png',
    alt: 'Swalook loyalty program with memberships, points and active customers.',
  },
  {
    title: 'Salon Memberships',
    body: 'Create membership plans that suit your services and customers. Keep membership information connected with customer profiles, visits and billing so your team can see the plan and its activity together.',
    image: '/images/membership-dashboard.png',
    alt: 'Swalook salon membership dashboard showing plans, visits and membership activity.',
  },
  {
    title: 'Inventory and Stock',
    body: 'Track products, purchases and stock information. Use the available inventory tools to see what needs attention and help your team avoid relying only on memory.',
    image: '/images/crm-inventory.png',
    alt: 'Swalook inventory screen showing stock levels, product list and status.',
  },
  {
    title: 'Staff and Attendance',
    body: 'Keep staff and attendance information organised alongside the other work happening in your salon.',
    image: '/images/crm-attendance.png',
    alt: 'Swalook staff attendance screen showing present, absent and team overview.',
  },
  {
    title: 'Expenses and Business Performance',
    body: 'Keep relevant expense, purchase, sales and service information organised so you can make decisions with a clearer picture of your salon. The quality of any report depends on the information entered.',
    image: '/images/crm-invoices.png',
    alt: 'Swalook invoices and revenue screen showing sales, collected payments and paid bills.',
  },
  {
    title: 'Multi-Branch Management',
    body: 'Manage supported customer, appointment, billing, staff and inventory workflows across locations. Compare branch activity without having to collect every update separately.',
    image: '/images/crm-customers.png',
    alt: 'Swalook customer CRM used to review activity across salon locations.',
  },
  {
    title: 'Google and Meta Customer Acquisition',
    body: 'Google and Meta help bring potential customers to your salon. Swalook connects customer information with acquisition efforts, so you can better understand where enquiries come from and what happens after a customer first contacts you.',
    image: '/images/crm-ads.png',
    alt: 'Swalook Meta Ads screen for Facebook and Instagram campaigns, spend, results and campaign list.',
  },
];

export const HOW_STEPS = [
  {
    num: '01',
    title: 'Book your demo',
    body: 'Tell us about your salon, how many branches you have and what you want to improve.',
  },
  {
    num: '02',
    title: 'See the workflows that matter to you',
    body: 'We will walk you through the relevant parts of Swalook, whether your priority is customer retention, billing, appointments, stock or branch management.',
  },
  {
    num: '03',
    title: 'Decide how you want to proceed',
    body: 'If Swalook suits your salon, the team will discuss the next steps and the setup required for your business.',
  },
];

export const AUDIENCE = [
  'Independent hair and beauty salons',
  'Unisex salons',
  'Beauty parlours',
  'Barbershops',
  'Salons offering multiple services',
  'Growing salon businesses',
  'Multi-branch salon groups',
];

export const PROOF_CARDS = [
  {
    title: 'Know your customers',
    body: 'See visits, services, spending and customer status in one profile.',
    image: '/images/crm-customers.png',
    alt: 'Swalook customer profiles showing visits, spending and customer status.',
  },
  {
    title: 'Know who needs a follow-up',
    body: 'Review due, at-risk and inactive customers, then take the next step.',
    image: '/images/crm-whatsapp.png',
    alt: 'Swalook follow-up workflow for due, at-risk and inactive salon customers.',
  },
  {
    title: 'Keep daily work together',
    body: 'Connect appointments, billing, inventory and staff workflows.',
    image: '/images/crm-appointments.png',
    alt: 'Swalook appointments calendar connected with daily salon work.',
  },
  {
    title: 'Get a view across branches',
    body: 'Use the supported multi-branch features to compare activity across locations.',
    image: '/images/crm-invoices.png',
    alt: 'Swalook billing and activity view used to compare salon business performance.',
  },
];

export const FAQS = [
  {
    q: 'What is salon management software?',
    a: 'Salon management software helps bring everyday salon work such as customer records, appointments, billing, inventory and staff activity into a more organised system. Swalook also connects these activities with a built-in CRM to help you understand customers and plan follow-ups.',
  },
  {
    q: 'What is the difference between salon billing software and salon CRM software?',
    a: 'Salon billing software focuses on bills, services and payments. Salon CRM software focuses on customer profiles, visit history, spending and follow-ups. Swalook connects customer information with billing and other salon activities.',
  },
  {
    q: 'How can Swalook help bring old customers back?',
    a: 'Swalook helps you identify customers who are due for a visit, at risk or inactive. You can review those customers and follow up through WhatsApp using the available workflow.',
  },
  {
    q: 'Can salon appointment software help reduce no-shows?',
    a: 'Salon appointment software can help you organise bookings and use reminders or confirmations to reduce avoidable missed appointments. It cannot guarantee that every customer will show up.',
  },
  {
    q: 'Can I manage more than one salon branch?',
    a: 'Yes. Swalook supports multi-branch workflows so you can manage relevant customer, appointment, billing, staff and inventory information across locations. Ask us to show the setup for your business.',
  },
  {
    q: 'Can Swalook help me understand where money is going?',
    a: 'Swalook brings relevant sales, services, customer spending and supported expense or inventory information together. The view you get depends on which records your salon enters and which reports are enabled.',
  },
  {
    q: 'Can I use WhatsApp to follow up with customers?',
    a: 'Yes. Swalook uses CRM information to help identify customers who need attention and prepares follow-up messages. Your team reviews and confirms the message before it is sent.',
  },
  {
    q: 'Is Swalook suitable for a small salon?',
    a: 'Swalook is designed for independent salons as well as growing and multi-branch salon businesses. Book a demo to see whether the workflows suit your team.',
  },
  {
    q: 'Can I see the product before deciding?',
    a: 'Yes. Book a free demo and we will show you the relevant features and discuss your salon’s needs.',
  },
  {
    q: 'How do I book a demo?',
    a: `Fill in the form on this page, call ${PHONE_DISPLAY} or contact ${CONTACT_EMAIL}. We will get in touch to arrange your demo.`,
  },
];
