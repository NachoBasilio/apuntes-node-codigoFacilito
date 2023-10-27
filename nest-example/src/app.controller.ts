import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/items')
  getItems(@Query() queries): any {
    const esPar = queries.esPar;
    const items = [1,2,3,4,5,6,7,8,9,10]

    if(esPar === 'true'){
      return items.filter(item => item % 2 === 0);
    }else{
      return items.filter(item => item % 2 !== 0);
    }
  }
}
