
# is-empty-obj

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/is-empty-obj.svg)](https://www.npmjs.com/package/is-empty-obj) [![Downloads](https://img.shields.io/npm/dt/is-empty-obj.svg)](https://www.npmjs.com/package/is-empty-obj) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Check if an object is empty or not.

## :cloud: Installation

```sh
$ npm i --save is-empty-obj
```


## :clipboard: Example



```js
const isEmptyObj = require("is-empty-obj");

console.log(isEmptyObj({}));
// true

console.log(isEmptyObj([]));
// true

console.log(isEmptyObj([42]));
// false

console.log(isEmptyObj({ location: "mars" }));
// false
```

## :memo: Documentation


### `isEmptyObj(obj)`
Check if an object is empty or not. This will throw if you don't pass an object.

#### Params
- **Object|Array** `obj`: The input object.

#### Return
- **Boolean** `true` if the object doesn't have any keys. `false` otherwise.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`obj-key-count`](https://github.com/IonicaBizau/obj-key-count#readme)—A fast way to check if the object has a specific number of properties.
 - [`scrape-it`](https://github.com/IonicaBizau/scrape-it#readme)—A Node.js scraper for humans.
 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
