<template>
  <el-container>
    <el-aside>
      <div class="box">新零售商户管理后台</div>

      <el-menu :collapse-transition="false"
               :collapse="isCollapse"
               background-color="rgb(96,132,144)"
               text-color="#fff"
               active-text-color="rgb(233,186,70)"
               unique-opened
               router>
        <el-submenu :index="index+''"
                    v-for="(item,index) in menuList"
                    :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span ref="onemenu"
                  :index="'/'+item.path">{{item.title}}</span>
          </template>
          <!-- 二级 -->
          <el-menu-item v-for="(subItem,index) in item.children"
                        :key="index"
                        :index="'/' + subItem.path">
            <template slot="title">
              <span>
                {{subItem.title}}
              </span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  props: {

  },
  components: {

  },
  data () {
    return {
      menuList: [
        { title: '店铺管理', icon: 'el-icon-s-home', children: [{ title: '店铺列表', path: 'shoplist' }, { title: '商品列表', path: 'goodslist' }, { title: '开店审核', path: 'shopchecked' }, { title: '店铺权益设置', path: 'shopequity' }, { title: '店铺行业管理', path: 'shopindusty' }, { title: '商品类别管理', path: 'goodscategory' }] },
        { title: '商圈管理', icon: 'el-icon-office-building', children: [{ title: '共享商圈管理', path: 'shabusiness' }, { title: '个人商圈管理', path: 'perbusiness' }] },
        { title: '订单管理', icon: 'el-icon-suitcase-1', children: [{ title: '订单列表', path: 'orderlist' }, { title: '订单统计', path: 'orderstatistics' }] },
        { title: '优惠券管理', icon: 'el-icon-s-ticket', children: [{ title: '通用优惠券', path: 'comcoupon' }, { title: '店铺优惠券', path: 'shopcoupon' }] },
        { title: '素材库管理', icon: 'el-icon-s-operation', children: [{ title: '官方素材库', path: 'govesource' }, { title: '素材审核', path: 'sourcecheck' }, { title: '用户素材管理', path: 'usersource' }] },
        { title: '财务管理', icon: 'el-icon-s-operation', children: [{ title: '提现管理', path: 'withdraw' }, { title: '平台收入明细', path: 'platincome' }, { title: '平台支出明细', path: 'platexpend' }] },
        { title: '系统设置', icon: 'el-icon-s-operation', children: [{ title: '账号管理', path: 'accountman' }, { title: '参数设置', path: 'parameter' }] }],
      editableTabsValue: '1',
      editableTabs: [{
        title: '主页',
        name: '1',
        content: 'welcome',
        close: false
      }],
      tabIndex: 1,
      isCollapse: false
    }
  },
  methods: {
    addTab (targetName, targetPath) {
      // 声明变量 让this.tabIndex自增作为tab标签的唯一标识
      const newTabName = ++this.tabIndex + ''
      if (this.editableTabs.length === 3) {
        this.editableTabs.splice(this.editableTabs.length - 1, 1, {
          title: targetName,
          name: newTabName,
          content: targetPath,
          close: true
        })
      } else {
        this.editableTabs.push({
          title: targetName,
          name: newTabName,
          content: targetPath,
          close: true
        })
      }
      this.editableTabsValue = newTabName
    },
    menuRouter (item, index) {
      if (index !== 0) {
        this.addTab(item.title, item.content)
      }
      if (index === 5) {
        this.$router.push('/prolist')
      } else if (index === 0) {
        this.$router.push('/welcome')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .box {
    width: 100%;
    height: 100px;
    background-color: #4c7dff;
    font-size: 18px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
}
.el-header {
  background: linear-gradient(to right, #44c88e, #557c67);
}

.el-aside {
  background: linear-gradient(to top, #7a9956, #98cc77);
  width: 200px !important;
  .el-menu {
    border-right: 0;
  }
}
</style>
