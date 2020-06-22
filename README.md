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

### navDrawerIcon (string) - optional
Icon for the my points link in NavDrawer in gmd theme


Example:
```json
"navDrawerIcon": "<path d=\"M12,2A10,10,0,1,0,22,12,10.029,10.029,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.024,8.024,0,0,1,12,20Z\"/>\n<path d=\"M15.015,10.594l2.075-.14.93-1.1L14.2,9.614l-.741.886-2.244.156-.6.732,2.231-.148-.621.742-2.046.142-.605.732,2.034-.135-.653.781-3.536.229,3.257-3.9-4,.29L5.787,11.17l2.332-.154-2.4,2.863L4.844,14.9l9.035-.6.867-1.044-2,.13-.008-.013Z\"/>\n<path d=\"M19.121,11.5l-1.109.063.666-.826-.964.04-.691.843-.934.053-.6.731.946-.061-.647.789.989-.03.664-.824,1.087-.071Z\"/>\n"
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.
