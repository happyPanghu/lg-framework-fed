const  htmlCode =`
  <div id="lg_tbar"> 
   <div class="inner"> 
    <div class="lg_tbar_l"> 
     <a href="https://www.lagou.com/" class="logo"></a> 
     <div class="suggestCity">
      <span>北京站</span>
      <em data-lg-tj-id="1m2f" data-lg-tj-no="idnull" id="changeCity_btn">[切换城市]</em>
     </div> 
    </div> 
    <ul class="lg_tbar_m"> 
     <li> <a href="https://www.lagou.com/" class="current" data-lg-tj-id="5i00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">首页</a> </li> 
     <li> <a href="https://www.lagou.com/gongsi/" data-lg-tj-id="5j00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" data-lg-tj-track-code="index_company">公司</a> </li> 
     <li> <a rel="nofollow" href="https://xiaoyuan.lagou.com/" data-lg-tj-id="19xc" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" target="_blank" data-lg-tj-track-code="index_campus">校园招聘<span class="tips-new">new</span></a> </li> 
     <li> <a rel="nofollow" href="https://yanzhi.lagou.com/" data-lg-tj-id="ic00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" data-lg-tj-track-code="index_yanzhi">言职</a> </li> 
     <li> <a rel="nofollow" href="https://kaiwu.lagou.com/" data-lg-tj-id="1mua" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" data-lg-tj-track-code="index_kaiwu">课程</a> </li> 
    </ul> 
    <div class="lg_tbar_r"> 
     <ul class="account-bar"> 
      <!-- if has unread message, add class unreaded --> 
      <li class="msg_dropdown" data-lg-tj-track-code="index_message"> <a class="msg_group" href="javascript: void 0;" data-lg-tj-id="5h00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow"> 消息 <em class="msg_amount" id="headMsgAmount" style="display: none;">1</em> </a> 
       <div class="lg_msg_popup"> 
        <div class="lg_msg_pu_body mCustomScrollbar _mCS_1" id="lgPopupMsgBody" style="overflow: hidden;">
         <div class="mCustomScrollBox mCS-dark-2" id="mCSB_1" style="position: relative; height: 100%; overflow: hidden; max-width: 100%; max-height: 250px;">
          <div class="mCSB_container mCS_no_scrollbar" style="position:relative; top:0;"> 
           <ul class="lg_top_msg_list"> 
            <!-- 系统消息，如果是纯文本消息，则无title，需要显示content --> 
            <li class="lg_msg_item"><em>&middot;</em>
             <div> 
              <a class="detail" target="_blank" href="https://jinshuju.net/f/sWj2qN" data-lg-tj-id="2gj0" data-lg-tj-no="idnull" data-lg-tj-cid="1182863460992684032">拉勾2019&middot;中国互联网TOP雇主评选企业报名邀请</a> 
             </div></li> 
           </ul> 
          </div>
          <div class="mCSB_scrollTools" style="position: absolute; display: none;">
           <div class="mCSB_draggerContainer">
            <div class="mCSB_dragger" style="position: absolute; top: 0px;" oncontextmenu="return false;">
             <div class="mCSB_dragger_bar" style="position:relative;"></div>
            </div>
            <div class="mCSB_draggerRail"></div>
           </div>
          </div>
         </div>
        </div> 
        <div class="lg_msg_pu_footer"> 
         <a href="https://www.lagou.com/message/settingsdetail.html" target="_blank" class="lg_msg_setting fl"><i class="lg_msg_avatar setting_i" data-lg-tj-id="18B0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></i>&nbsp;</a> 
         <a href="https://www.lagou.com/message/msgdetail.html" class="lg_msg_more fr" data-lg-tj-id="18A0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">查看更多</a> 
        </div> 
       </div> </li> 
      <li> <a href="https://www.lagou.com/resume/myresume.html" data-lg-tj-id="5700" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow" data-lg-tj-track-code="index_resume">简历</a> </li> 
      <li> <a href="https://www.lagou.com/mycenter/delivery.html" id="deliveryLink" data-lg-tj-id="5800" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow" data-lg-tj-track-code="index_deliver" data-lg-tj-track-type="1">投递箱</a> <em class="noticeDot dn" id="noticeDot_delivery"></em> </li> 
      <li> <a href="https://www.lagou.com/mycenter/collections.html" data-lg-tj-id="5900" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow" data-lg-tj-track-code="index_favorite" data-lg-tj-track-type="1">收藏夹</a> </li> 
      <li class="user_dropdown" data-lg-tj-track-code="index_user"> <span class="unick">jjhtest</span> <em class="noticeDot dn" id="noticeDot_name"></em> <i></i> 
       <ul> 
        <li> <a href="https://www.lagou.com/s/subscribe.html" data-lg-tj-id="5a00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">我的订阅</a> </li> 
        <li> <a href="https://www.lagou.com/mycenter/invitation.html" id="invitationLink" data-lg-tj-id="5b00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow" data-lg-gatj-msg="header_c,职位邀请,number">职位邀请</a> <em class="noticeDot dn" id="noticeDot_invitation"></em> </li> 
        <li> <a href="https://yanzhi.lagou.com/user/userIndex.html" data-lg-tj-id="1kcy" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">我的问答</a> </li> 
        <li> <a href="https://account.lagou.com/account/cuser/userInfo.html" data-lg-tj-id="5c00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">账号设置</a> </li> 
        <li> <a href="https://easy.lagou.com/dashboard/index.htm?from=c_index" data-lg-tj-id="5d00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">去企业版</a> </li> 
        <li> <a href="/frontLogout.do" data-lg-tj-id="5e00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">退出</a> </li> 
       </ul> </li> 
     </ul> 
     <a rel="nofollow" href="https://www.lagou.com/app/download.html" class="lg_app" data-lg-tj-id="5500" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" target="_blank">拉勾APP</a> 
     <a rel="nofollow" href="https://easy.lagou.com/dashboard/index.htm?from=c_index" class="lg_os" data-lg-tj-id="5600" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" data-lg-tj-track-code="index_qiyeban">进入企业版</a> 
    </div> 
   </div> 
  </div>
`;

export default htmlCode;