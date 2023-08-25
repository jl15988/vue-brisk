<h2>快速上手</h2>



#### 引入

在main.js中添加如下内容

```js
import VueBrisk from 'vue-brisk';
import 'vue-brisk/lib/vue-brisk.css';
Vue.use(VueBrisk);
```



> [!Warning]
>
> 由于vue-brisk依赖EUI，使用vue-brisk必须引入EUI



最终完整引入应该如下

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueBrisk from 'vue-brisk';
import 'vue-brisk/lib/vue-brisk.css';

Vue.use(ElementUI);
Vue.use(VueBrisk);
```

