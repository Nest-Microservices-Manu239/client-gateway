import { IsIn } from 'class-validator';
import { OrderStatusList, OrderStatus } from '../enum/order.enum';

export class StatusDto {
  @IsIn(OrderStatusList, {
    message: `Possible status values are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
