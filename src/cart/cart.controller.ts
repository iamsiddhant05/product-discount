import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.modify(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':userId')
  findAllForUser(@Param('userId') id: string) {
    return this.cartService.findAllForUser(id);
  }

  // @Get('checkout/:userId')
  // checkout(@Param('userId') id: string) {
  //   return this.cartService.checkout(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
  //   return this.cartService.update(id, updateCartDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<Cart> {
  //   return this.cartService.remove(id);
  // }
}
