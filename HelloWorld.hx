class HelloWorld {
  @range(1, 8) var value:Int;
}
trace(haxe.rtti.Meta.getFields(HelloWorld).value.range); // [1,8]