<template>
  <div :class="{'responsive-keyboard': true, 'light': type === 'light'}">
    <div class="row">
      <div class="key" data-key="`">`</div>
      <div class="key" data-key="1">1</div>
      <div class="key" data-key="2">2</div>
      <div class="key" data-key="3">3</div>
      <div class="key" data-key="4">4</div>
      <div class="key" data-key="5">5</div>
      <div class="key" data-key="6">6</div>
      <div class="key" data-key="7">7</div>
      <div class="key" data-key="8">8</div>
      <div class="key" data-key="9">9</div>
      <div class="key" data-key="0">0</div>
      <div class="key" data-key="-">-</div>
      <div class="key" data-key="+">+</div>
      <div class="key delete" data-key="delete">delete</div>
    </div>

    <div class="row">
      <div class="key tab" data-key="tab">tab</div>
      <div class="key" data-key="q">Q</div>
      <div class="key" data-key="w">W</div>
      <div class="key" data-key="e">E</div>
      <div class="key" data-key="r">R</div>
      <div class="key" data-key="t">T</div>
      <div class="key" data-key="y">Y</div>
      <div class="key" data-key="u">U</div>
      <div class="key" data-key="i">I</div>
      <div class="key" data-key="o">O</div>
      <div class="key" data-key="p">P</div>
      <div class="key" data-key="[">[</div>
      <div class="key" data-key="]">]</div>
      <div class="key" data-key="\">\</div>
    </div>

    <div class="row">
      <div class="key caps" data-key="caps-lock">caps lock</div>
      <div class="key" data-key="a">A</div>
      <div class="key" data-key="s">S</div>
      <div class="key" data-key="d">D</div>
      <div class="key" data-key="f">F</div>
      <div class="key" data-key="g">G</div>
      <div class="key" data-key="h">H</div>
      <div class="key" data-key="j">J</div>
      <div class="key" data-key="k">K</div>
      <div class="key" data-key="l">L</div>
      <div class="key" data-key=";">;</div>
      <div class="key" data-key="'">'</div>
      <div class="key return" data-key="return">return</div>
    </div>

    <div class="row">
      <div class="key shift" data-key="shift">shift</div>
      <div class="key" data-key="z">Z</div>
      <div class="key" data-key="x">X</div>
      <div class="key" data-key="c">C</div>
      <div class="key" data-key="v">V</div>
      <div class="key" data-key="b">B</div>
      <div class="key" data-key="n">N</div>
      <div class="key" data-key="m">M</div>
      <div class="key" data-key=",">,</div>
      <div class="key" data-key=".">.</div>
      <div class="key" data-key="/">/</div>
      <div class="key shift" data-key="shift">shift</div>
    </div>

    <div class="row bottom">
      <div class="key" data-key="fn">fn</div>
      <div class="key" data-key="control">control</div>
      <div class="key" data-key="alt">alt</div>
      <div class="key command" data-key="command-left">command</div>
      <div class="key space" data-key="space">space</div>
      <div class="key command" data-key="command-right">command</div>
      <div class="key" data-key="alt">alt</div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'type',
    'colorMap'
  ],
  watch: {
    colorMap () {
      this.refresh();
    }
  },
  methods: {
    resize () {
      const parentWidth = this.$el.parentElement.clientWidth
      this.$el.style.width = parentWidth - 20 + 'px';
      this.$el.style.height = ((parentWidth - 20) / 2.54) + 'px';
      this.$el.style.fontSize = parentWidth / 50 + 'px';
    },
    getKey: function(key) {
      return this.$el.querySelector('.responsive-keyboard .key[data-key="' + key + '"]')
    },
    refresh () {
      if (!this.colorMap) return;
      for (let [key, value] of Object.entries(this.colorMap)) {
        let k = this.getKey(key);
        k.style.backgroundColor = value;
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.resize);
    this.refresh();
    this.resize();
  },
  unmounted () {
    window.removeEventListener('resize', this.resize);
  }
}
</script>

<style scoped>
.responsive-keyboard {
  border-radius: 10px;
  background-color: #cccfd5;
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-family: 'Helvetica'
}

.responsive-keyboard .row {
  flex: 1;
  display: flex;
  padding-bottom: 10px;
}

.responsive-keyboard .key {
  display: flex;
  width: 6.896551724137931%;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin-right: 5px;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.responsive-keyboard.light .key {
  color: black;
  background-color: white;
  border: 1px solid black;
}

.responsive-keyboard .key.delete {
  width: 13.793103448275862%;
}

.responsive-keyboard .key.tab {
  width: 14.793103448275862%;
}

.responsive-keyboard .key.caps {
  width: 16.493103448275862%;
}

.responsive-keyboard .key.return {
  width: 15.793103448275862%;
}

.responsive-keyboard .key.shift {
  width: 17.793103448275862%;
}

.responsive-keyboard .key.command {
  width: 7.793103448275862%;
}

.responsive-keyboard .key.space {
  width: 28%;
}

.responsive-keyboard .bottom .key {
  width: 6.5%;
}

.responsive-keyboard .bottom .key.command {
  width: 8%;
}

.responsive-keyboard .bottom .key.space {
  width: 33%;
}
</style>
