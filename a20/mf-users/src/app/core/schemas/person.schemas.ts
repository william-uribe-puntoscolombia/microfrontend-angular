import * as z from 'zod';

import { emailValidator } from './fields/email.schema';
import { nameValidator } from './fields/name.schema';

export const personSchema = z.object({
  name: nameValidator,
  lastname: nameValidator,
  email: emailValidator,
});
