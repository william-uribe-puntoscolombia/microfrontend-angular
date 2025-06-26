import * as z from 'zod';

/**
 * Regular firstname or lastname
 */
export const nameValidator = z
  .string()
  .nonempty({ message: 'Debe ser obligatorio.' })
  .regex(/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/, { message: 'Debe ser un formato válido.' })
  .min(2, { message: 'Mínimo 2 caracteres.' })
  .max(50, { message: 'Máximo 50 caracteres.' });
