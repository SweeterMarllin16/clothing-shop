import { FORM_VALIDATION } from './constants.js';

export function validateContactForm(data) {
  if (!data.name || data.name.trim().length < FORM_VALIDATION.NAME_MIN) {
    throw new Error(`Name must be at least ${FORM_VALIDATION.NAME_MIN} characters`);
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error('Invalid email address');
  }
  if (!data.message || data.message.trim().length < FORM_VALIDATION.MESSAGE_MIN) {
    throw new Error(`Message must be at least ${FORM_VALIDATION.MESSAGE_MIN} characters`);
  }
  if (data.message.trim().length > FORM_VALIDATION.MESSAGE_MAX) {
    throw new Error(`Message must be under ${FORM_VALIDATION.MESSAGE_MAX} characters`);
  }
  return true;
}
