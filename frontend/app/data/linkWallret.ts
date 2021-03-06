import { API_ENDPOINT } from './constants';
import { MintRequestInput } from './types';

export const linkWallet = async ({
  userId,
  itemId,
}: MintRequestInput): Promise<void> => {
  const url = new URL(`${API_ENDPOINT}/item/${itemId}/mint`);
  const res = await fetch(url.href, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ user_id: userId }),
  });

  if (res.status !== 200) {
    throw new Error('fetch error');
  }
};
