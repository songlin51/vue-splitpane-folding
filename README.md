# Vue Split Pane

1. 本项目为pan神 https://github.com/PanJiaChen/vue-split-pane 修改版,增加了展开折叠小功能
2. 新增folding参数 true展开 false折叠
3. 好多bug哦,慎用,放到github是为了大家修改方便

Split-Pane component built with vue2.0, can be split vertically or horizontally.


## [Try the demo](https://songlin51.github.io/vue-splitpane-folding/demo/index.html)

### How to use?
```bash
npm install vue-splitpane-folding

#import
import splitPane from 'vue-splitpane-folding'

# use as global component
Vue.component('split-pane', splitPane);
```

### Example

```html
   <split-pane v-on:resize="resize" :min-percent='20' :default-percent='30' split="vertical">
      <template slot="paneL">
        A
      </template>
      <template slot="paneR">
        B
      </template>
    </split-pane>
```

```html
  //nested
   <split-pane v-on:resize="resize" :min-percent='20' :default-percent='30' split="vertical" :folding="true">
      <template slot="paneL">
        A
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
           B
          </template>
          <template slot="paneR">
            C
          </template>
        </split-pane>
      </template>
    </split-pane>
```

### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| split       | the split type |String [horizontal,vertical] |must choose one type |
| min-percent         | paneL max-min-percent  |Number | 10 |
| max-percent         | paneL max-percent  |Number | 10 |
| folding                 | 折叠展开按钮             | Boolean   | false

