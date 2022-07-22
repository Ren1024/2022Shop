# 最新接口
- 地址： http://gmall-h5-api.atguigu.cn

# 每日编码任务和面试题

## day01
### 任务列表
1. 创建项目并开发环境运行与生产环境打包运行(理解内部工作)
2. 使用git管理项目(必须有个人分支)
3. 修改eslint配置+引入1ess
4. 引入vue-router，搭建整体界面路由
5. 实现Footer组件(显示与隐藏控制)
6. 实现Header组件(解决路由跳转与传参数的各种问题)
7. 实现Home静态组件，并拆分出多个组件---自主完成入

### 面试题
1. 描述一下你的项目
2. 说说你对API/API文档/测接口的理解
3. 区别路由相关的2个对象:$route和 $router?-路由跳转/导航的2种方式?
4. 路由跳转时携带的参数的2种类型?-如何向路由组件传入props数据?-路由跳转时1ocation的2种类型?-如何实现params参数可传可不传?
5. 路由跳转的params配置与path配置能不能一起使用?
6. 编程式跳转到当前路由且参数数据不变，就会出警告错误，什么原因?如何解决?(重点&难点)


## day02
### 任务列表
1. Home组件及其子组件(静态)
2. axios二次封装与接口请求函数封装
3. 使用代理服务器解决ajax跨域问题
4. 使用vuex管理组件状态数据
5. TypeNav组件动态展现
6. TypeNav纯前台(与用户)交互效果(编程式导航&事件委托&标签自定义属性)

### 面试题
1. axios二次封装都封装哪些点,大概怎么实现的
2. axios(config)内部执行的流程(使用伪代码和文字说明)
3. promise的then()返回的promise的结果状态是怎么决定的(详细说明)
4. 说说动态显示分类列表的整体编码


## day03
### 任务列表
1. TypeNav的交互效果(函数节流 & 按需引入打包 & 解决节流bug & 显示隐藏控制 & 合并query与params参数)
2. 首页动态广告轮播(swiper + vue-awesome-swiper)
3. 模拟数据/接口(mockjs)
4. 根据mock的接口实现动态TodayRecommend与Floor组件
5. 自己mock一下Rank与Link组件的数据, 并动态显示

### 面试题
1. 区别一下函数节流与防抖, 并说说它们不同的应用场景
    - 都是用来解决事件频繁触发产生的问题，
    - 共性： 
        1. 避免界面频繁更新产生卡顿
        2. 如果事件回调中，有发送请求，避免频繁的发送请求，减轻服务器压力
    - 差别：
        - 例如5秒内点击100次
            - 节流：执行其中少量的几次
            - 防抖：执行最后一次操作 
    - 应用场景：
        - 函数节流应用场景比较多，比如：拖拽div，浏览器缩放，滑动滚轮
        - 输入框联想用函数防抖比较合适
2. 说说使用swiper遇到的问题及解决办法(2个) 
3. 说说你对json数据的理解和如何mock数据
4. 列出项目的详细文件目录结构

## day04
### 任务列表
1. 使用mockjs模拟今日推荐和楼层的接口并动态显示
2. mock一下 Rank 与 Like 组件的数据, 并动态显示(自己完成)
3. Search组件和SearchSelector组件动态显示
4. 根据分类/关键字条件进行搜索
5. 根据品牌进行搜索
6. 根据平台属性进行搜索

### 面试题
1. 使用mockjs模拟数据的基本流程
    1. 下载mockjs，引入mockjs
    2. 设计数据 
    3. 测试访问
2. 说说你项目中的三级分类列表功能
    1. 使用编程式导航代替声明式导航
        - router-link太多 ==> 创建很多组件对象 ==> 占用内存大, 效率低
    2. 优化事件处理效率
        - 利用事件委托: event.target
        - 理解事件委托与事件冒泡
    3. 如何携带点击的分类的数据?
        - event.target得到a标签
        - 利用自定义的data标签属性来保存分类信息
    4. 对mouseEnter高频事件进行节流处理
        - 使用lodash的throttle进行节流处理
        - 对lodash库实现按需引入
3. 说说事件总线及其应用
4. 说说你的搜索条件数据
    - 分类条件
    - 关键字条件
    - 属性的条件
    - 品牌的条件
    - 排序的方式
    - 页码和页数量