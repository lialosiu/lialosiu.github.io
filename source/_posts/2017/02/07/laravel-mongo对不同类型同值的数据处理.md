---
title: laravel-mongo对不同类型同值的数据处理
date: 2017-02-07 11:51:38
category:
 - 开发
tags:
 - laravel
 - mongo
---

开发的时候发现，laravel-mongo 在 ORM 的时候，如果用 save 更新一个值，类型不同但值相同，是不会写入 db 的...

举个栗子:

```php
$data = new Data();
$data->_id = 1;
$data->a = 123;
$data->save();
```

那么mongo里面就是  `a: int32 = 123`

这时候如果再

```php
$data = Data::find(1);
$data->a = '123';
$data->save();
```

问题就来了...

mongo 里面的值还特么的是  `a: int32 = 123`

并没有被更新成 `a: string = '123'`

但是如果是个不同类型不同值

```php
$data = Data::find(1);
$data->a = '321';
$data->save();
```

就会被更新成 `a: string = '321'`

这个问题略蛋疼啊...
