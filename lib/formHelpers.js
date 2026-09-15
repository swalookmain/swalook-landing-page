/**
 * Shared form validation helpers for Swalook landing pages.
 * Uses native React state — no external form library needed.
 */

export function validateField(field, value) {
  const trimmed = (value || '').trim();

  switch (field) {
    case 'name':
    case 'fullName':
    case 'businessName':
    case 'salonName': {
      if (!trimmed) return `${field === 'salonName' ? 'Salon/Business' : 'This'} name is required`;
      if (trimmed.length < 2) return 'Must be at least 2 characters';
      return '';
    }

    case 'email': {
      if (!trimmed) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Please enter a valid email';
      return '';
    }

    case 'phone':
    case 'mobile': {
      if (!trimmed) return 'Phone number is required';
      // Accept +91-prefixed, spaces, dashes; Indian mobile: 10 digits starting with 6-9
      const cleaned = trimmed.replace(/[\s\-+()]/g, '');
      if (/^(91)?[6-9]\d{9}$/.test(cleaned) || /^[6-9]\d{9}$/.test(cleaned)) return '';
      if (!/^\d+$/.test(cleaned)) return 'Invalid phone number format';
      return 'Please enter a valid 10-digit mobile number';
    }

    case 'message': {
      if (trimmed && trimmed.length > 2000) return 'Message is too long (max 2000 chars)';
      return '';
    }

    default:
      return '';
  }
}

export function validateForm(fields, data) {
  const errors = {};
  let isValid = true;

  for (const field of fields) {
    const error = validateField(field, data[field]);
    if (error) {
      errors[field] = error;
      isValid = false;
    }
  }

  return { errors, isValid };
}

export async function submitForm(endpoint, data) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error || 'Failed to submit form. Please try again.');
  }

  return result;
}
