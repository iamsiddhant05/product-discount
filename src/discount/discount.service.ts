import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Discount } from "./discount.entity";
import { DiscountRepository } from "./discount.repository";

@Injectable()
export class DiscountService {
  constructor(
    @InjectRepository(DiscountRepository)
    private discountRepository: DiscountRepository,
  ) { }

  async getMinOrderDiscount(): Promise<Discount[]> {
    return this.discountRepository.findAllMinOrder();
  }
}