import * as z from 'zod';

const domainValidNames: string[] = [
  'ar',
  'art',
  'bio',
  'blog',
  'bo',
  'br',
  'buzz',
  'cl',
  'cloud',
  'co',
  'com',
  'cr',
  'cu',
  'do',
  'ec',
  'es',
  'gt',
  'help',
  'hn',
  'homes',
  'ht',
  'inc',
  'mx',
  'net',
  'ni',
  'one',
  'org',
  'pa',
  'pe',
  'pr',
  'py',
  'shop',
  'sv',
  'tv',
  'us',
  'uy',
  've',
  'wiki',
  'xyz',
];

/**
 * Regunar email
 */
export const emailValidator = z
  .string()
  .nonempty({ message: 'Debe ser obligatorio.' })
  .min(8, { message: 'Mínimo 8 caracteres.' })
  .max(100, { message: 'Máximo 100 caracteres.' })
  .email({ message: 'Correo no es válido.' })
  .refine(
    (email) => {
      const domain = email.split('.').pop() ?? '';
      return domainValidNames.includes(domain);
    },
    { message: 'Correo no es válido.' }
  );
