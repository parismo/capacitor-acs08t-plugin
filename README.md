# capacitor-plugin-rfid

Read wiegand rfid cards.

## Install

```bash
npm install capacitor-plugin-rfid
npx cap sync
```

## API

<docgen-index>

* [`greenLightOn()`](#greenlighton)
* [`greenLightOff()`](#greenlightoff)
* [`redLightOn()`](#redlighton)
* [`redLightOff()`](#redlightoff)
* [`whiteLightOn()`](#whitelighton)
* [`whiteLightOff()`](#whitelightoff)
* [`turnWiegandOn()`](#turnwiegandon)
* [`turnWiegandOff()`](#turnwiegandoff)
* [`addListener(...)`](#addlistener)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### greenLightOn()

```typescript
greenLightOn() => any
```

**Returns:** <code>any</code>

--------------------


### greenLightOff()

```typescript
greenLightOff() => any
```

**Returns:** <code>any</code>

--------------------


### redLightOn()

```typescript
redLightOn() => any
```

**Returns:** <code>any</code>

--------------------


### redLightOff()

```typescript
redLightOff() => any
```

**Returns:** <code>any</code>

--------------------


### whiteLightOn()

```typescript
whiteLightOn() => any
```

**Returns:** <code>any</code>

--------------------


### whiteLightOff()

```typescript
whiteLightOff() => any
```

**Returns:** <code>any</code>

--------------------


### turnWiegandOn()

```typescript
turnWiegandOn() => any
```

**Returns:** <code>any</code>

--------------------


### turnWiegandOff()

```typescript
turnWiegandOff() => any
```

**Returns:** <code>any</code>

--------------------


### addListener(...)

```typescript
addListener(eventName: 'onWiegandValue', listenerFunc: WiegandListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                 |
| ------------------ | ------------------------------------ |
| **`eventName`**    | <code>"onWiegandValue"</code>        |
| **`listenerFunc`** | <code>(event: any) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

</docgen-api>
