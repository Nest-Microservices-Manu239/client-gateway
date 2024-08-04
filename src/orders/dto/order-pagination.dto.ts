import { PaginatioDto } from 'src/common/dtos/pagination.dto';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';
import { IsIn, IsOptional } from 'class-validator';

export class OrderPaginationDto extends PaginatioDto {
  @IsIn(OrderStatusList, {
    message: `Possible status values are ${OrderStatusList}`,
  })
  @IsOptional()
  status: OrderStatus;
}
