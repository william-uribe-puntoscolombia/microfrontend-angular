import { environment } from '@env';
import { rest } from 'msw';

export const handlers = [
  rest.get(`${environment.apiUrl}/user`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'abc-123',
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
];
