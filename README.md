# vue-responsive-keyboard

> a basic responsive keyboard that scales to the size of its parent's container

![Alt text](/docs/default.png?raw=true "Default Keyboard")

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

![Alt text](/docs/colormap.png?raw=true "Colo Map Keyboard")

