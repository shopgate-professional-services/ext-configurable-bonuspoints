# Shopgate Connect - configurable bonuspoints

This extension adds Bonuspoints infos to PDP and Cart page.
Rules for Bonuspoints can be configured in config.

## Configuration

### conversionRate (number)
Rate used to convert price into points. can be any float number.
`conversionRate` of `2` means you get 2 point for every 1$.
`conversionRate` of `0.5` means you get 1 point for every 2$.

### rounding
Rounding method that get applied to calculated points. Can be any available function of Math obj.
Examples: `"round"`, `"floor"`, `"ceil"`

### infoPage (string) - optional
URL to an info page that open if user clicks on bonus point line on pdp. Can by any internal or external page.

### styling (object) - optional
- pdp: Glamor css object to change the styling of text on pdp
- cart: Glamor css object to change the styling of the cart subtotal line

Example:
```json
"styling": {
    "pdp": {
      "color": "red"
    },
    "cart": {
      "margin": "5px"
    }
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.
