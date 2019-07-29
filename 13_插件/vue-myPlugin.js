(function(window){
    //定义插件
    const MyPlugin = {}
    //插件逼须有install方法
    MyPlugin.install = function(Vue,options){
        console.log('install()',options)

        //添加全局方法或者属性
        Vue.myGlobalMethod = function(){
            console.log('Vue.myGlobalMethod()')
        }
        //添加一个全局资源
        Vue.directive('my-directive',(el,binding)=>{
            el.textContent = '====='+binding.value
        })
        //添加一个实例方法
        Vue.prototype.$myMethod = function(){
            console.log('vm.$myMethod()')
        }
    }
    window.MyPlugin = MyPlugin
})(window);