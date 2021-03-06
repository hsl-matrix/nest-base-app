import { CacheModule, Module } from '@nestjs/common';
import { RediCacheController } from './redi-cache.controller';
import { RediCacheService } from './redi-cache.service';
import * as redisStore from 'cache-manager-ioredis';
@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [RediCacheController],
  providers: [RediCacheService],
  exports: [RediCacheService],
})
export class RediCacheModule {}
