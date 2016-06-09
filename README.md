# Meteor adoptation for [autoNumeric](https://github.com/BobKnothe/autoNumeric)

autoNumeric is a jQuery plugin that automatically formats currency and numbers as you type on form inputs. 

**Highlights:**
- Easy to use and configure
- Supports most International numeric formats and currency signs including those used in Europe, North and South America, Asia and India lakhs
- Any number of currency formats can reside on the same page and are configured by settings/options that can be placed as HTML5 data attribute or passed as an argument
- The settings can easily be changed at any time using the update method or via the callback feature
- autoNumeric supports most text elements, allowing you to place formatted numbers and currency on just about any part of the page.
- Seven built in methods gives you the flexibility needed to use autoNumeric to its maximum potential
- There are 16 settings/options which controls the behavior and format of the form input field

****

## Instalation

```sh
meteor add gibson:meteor-autonumeric
```
## Using
```
    {{> autoNumeric ...attributes...}}
```
### Configuration
``` autoNumeric ``` template its a simple input with std options (```class```, ```id```, ```name```, ```value```).
You can add this params resp. like a simple input.

And you can add [autoNumeric](https://github.com/BobKnothe/autoNumeric) params for configure plugin.

### Example
``` {{> autoNumeric class="form-control" id="test" value="5000" aSep=' ' altDec=',' wEmpty='zero' lZero='deny' aPad=false mDec=0}}```

This is equivalent
```javascript
$('#test').autoNumeric('init', {
                aSep: ' ',
                altDec: ',',
                wEmpty: 'zero',
                lZero: 'deny',
                aPad: false,
                mDec: '0'
            });
```
Full documentation for ```autoNumeric``` read 

#### Getting value
Now only as jquery method, like a
```javascript
Template.myTemplate.events({
    'click #submit' : function(e){
        var value = $(e.currentTarget).autoNumeric('get');
    }
});
```

Setting value is a reactive.

## Maintainers

- Ivan Shishkin ([gibson](https://github.com/gibson))
