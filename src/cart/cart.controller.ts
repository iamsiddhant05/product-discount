import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.modify(createCartDto);
  }

  @Get(':userId')
  findAllForUser(@Param('userId') id: string) {
    return this.cartService.findAllForUser(id);
  }

  @Get('checkout/:userId')
  checkout(@Param('userId') id: string) {
    return this.cartService.checkout(id);
  }
}
