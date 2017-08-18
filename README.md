# vue-responsive-keyboard
This vue2 component can be used for rendering a reponsive keyboard.  The keyboard will retain a fixed ratio and scale based on the parent containers width.

# How to Use

Install the component:

```
npm install vue-responsive-keyboard
```

An example using inside another component:

```
<template>
  <div id="app">
    <div class="wrapper">
      <vue-responsive-keyboard
        type="light"
        :colorMap="colorMap"
      />
    </div>
  </div>
</template>

<script>
import VueResponsiveKeyboard from 'vue-responsive-keyboard'

export default {
  name: 'app',
  data () {
    return {
      colorMap: {
        a: 'red',
        b: 'green',
        c: 'blue'
      }
    }
  },
  components: {
    VueResponsiveKeyboard
  }
}
</script>

<style scoped>
.wrapper {
  width: 80%;
  margin: 0 auto;
}
</style>
```

# Examples

### Default
```
<vue-responsive-keyboard/>
```

![Alt text](/docs/default.png?raw=true "Default Keyboard")

### light

```
<vue-responsive-keyboard type="light"/>
```
      
![Alt text](/docs/light.png?raw=true "Light Keyboard")

### colorMap

```
<vue-responsive-keyboard
  type="light"
  :colorMap="{
    a: 'rgba(0, 255, 0, 0.5)',
    u: 'blue',
    n: '#FF00FF'
  }"
/>
```

![Alt text](/docs/colomap.png?raw=true "Light Keyboard")
