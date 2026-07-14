import { API_BASE } from './constants.js';

export async function submitContactForm(data) {
  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || error.message || `Server error: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Contact form error:', error);
    throw error;
  }
}
