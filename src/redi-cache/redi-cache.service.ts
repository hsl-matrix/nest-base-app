import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RediCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCache(key: string): Promise<string> {
    const cacheData = await this.cacheManager.get<string>(key);

    return cacheData;
  }

  async setCache(key, value, ttl = 0) {
    await this.cacheManager.set<string>(key, value, {
      ttl,
    });
  }
}
