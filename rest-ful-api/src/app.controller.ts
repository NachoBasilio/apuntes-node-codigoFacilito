import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/item')
  getItems(@Query('item') item): any {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const itemIndex = parseInt(item);

    if (items[itemIndex] !== undefined) {
      return items[itemIndex];
    } else {
      throw new NotFoundException(`Item with index ${itemIndex} not found`);
    }
  }

  @Get('/api/items/:qty')
  getItemsParams(@Param() allParams): any {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const itemIndex = parseInt(allParams.qty);

    const ArrayCortado = items.slice(0, itemIndex);

    return ArrayCortado;
  }
}
