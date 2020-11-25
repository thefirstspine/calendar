import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class ArenaService {

  async sendLootToUser(
    user: number,
    loot: Array<{name: string, num: number}>,
  ) {
    return Promise.all(
      loot.map((l) => {
        return fetch(
          `${process.env.ARENA_URL}/wizard/${user}/reward`,
          {
            method: 'POST',
            body: JSON.stringify(l),
            headers: {
              'X-Client-Cert': Buffer.from(process.env.ARENA_PUBLIC_KEY.replace(/\\n/gm, '\n')).toString('base64'),
              'Content-type': 'application/json',
            },
          });
      })
    )
  }

}
