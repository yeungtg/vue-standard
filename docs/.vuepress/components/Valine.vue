<template>
  <section style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;">
    <!-- <div>
      id 将作为查询条件
      <span class="leancloud-visitors" data-flag-title="Your Article Title">
        <em class="post-meta-item-text">阅读量： </em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div> -->
    <h3>
      <a href="javascript:;"></a>
      评 论：
    </h3>
    <div id="vcomments"></div>
  </section>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      // document.getElementsByClassName('leancloud-visitors')[0].id = window.location.pathname
      this.window = window
      // window.AV = require('leancloud-storage')
    }

    let a = new Valine({
      el: '#vcomments',
      appId: 'Vx47nEIm8zyV4lRuyQQIwb4I-gzGzoHsz',// your appId
      appKey: 'epzMTrySBvw50QkveQROlx6a', // your appKey
      guest_info: ['nick'],
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true,
      avatar: 'robohash',
      placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!'
    });
  },
}
</script>
<style>
 #vcomments .info, #vcomments .vctrl  {display:none}
 #vcomments .vcontrol a {display: none}
 #vcomments .vhead .vsys {display:none}
</style>
