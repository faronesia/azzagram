function mediascreen(css){
  var xdx = document.createElement('link');
    xdx.href = 'data:text/css;base64,'+css;
    xdx.rel = 'stylesheet';
  document.head = document.head || document.getElementsByTagName('head')[0];
  document.head.appendChild(xdx);
 }
mediascreen('LyogTkFWSEVBREVSICovDQouaGVhZGVyLW5hdmlnYXRpb257ZmxvYXQ6cmlnaHQ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTBweDt0b3A6MTBweDtwYWRkaW5nOjVweDtiYWNrZ3JvdW5kOiNmZjU3MzM7Ym9yZGVyLXJhZGl1czoxMHB4O30NCi5oZWFkZXItbmF2aWdhdGlvbiBzdmd7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDt2ZXJ0aWNhbC1hbGlnbjotNXB4O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdCFpbXBvcnRhbnQ7Y29udGVudDomIzM5OyYjMzk7fQ0KLmhlYWRlci1uYXZpZ2F0aW9uIHN2ZyBwYXRoe2ZpbGw6I2ZmZmZmZjt9DQouaGVhZGVyLW5hdmlnYXRpb24gLmNoZWNrOmNoZWNrZWR+Lk5hdk1lbnV7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTt0b3A6NDhweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ei1pbmRleDo5OTk7dHJhbnNpdGlvbjphbGwgLjVzIGVhc2U7fQ0KLmhlYWRlci1uYXZpZ2F0aW9uIC5pY29uIC5vcGVue2Rpc3BsYXk6YmxvY2s7fQ0KLmhlYWRlci1uYXZpZ2F0aW9uIC5pY29uIC5jbG9zZXtkaXNwbGF5Om5vbmU7fQ0KLmhlYWRlci1uYXZpZ2F0aW9uIC5jaGVjazpjaGVja2VkIH4gLmljb24gLm9wZW57ZGlzcGxheTpub25lO30NCi5oZWFkZXItbmF2aWdhdGlvbiAuY2hlY2s6Y2hlY2tlZCB+IC5pY29uIC5jbG9zZXtkaXNwbGF5OmJsb2NrO30NCi5oZWFkZXItbmF2aWdhdGlvbiAuTmF2TWVudXtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MDtoZWlnaHQ6YXV0bzt3aWR0aDozMDBweDtiYWNrZ3JvdW5kOiNmZmZmZmY7Ym9yZGVyLXJhZGl1czoxMHB4O2JveC1zaGFkb3c6MCAzcHggOHB4IDJweCByZ2JhKDAsMCwwLDAuMyk7fQ0KLmhlYWRlci1uYXZpZ2F0aW9uIC5OYXZNZW51IHVse21hcmdpbjowO3BhZGRpbmc6MDt9DQouaGVhZGVyLW5hdmlnYXRpb24gLk5hdk1lbnUgdWwgbGl7bGlzdC1zdHlsZS10eXBlOm5vbmU7bWFyZ2luOjIwcHg7fQ0KLmhlYWRlci1uYXZpZ2F0aW9uIC5OYXZNZW51IHVsIGxpIGF7Y29sb3I6IzMzMztmb250LXNpemU6MTVweDtmb250LXdlaWdodDo2MDA7dGV4dC1kZWNvcmF0aW9uOm5vbmU7fQ0KLmhlYWRlci1uYXZpZ2F0aW9uIC5OYXZNZW51IHVsIGxpIGEgc3BhbnttYXJnaW4tbGVmdDo1cHg7Y29sb3I6I2Y5NjkwZTtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEzcHg7Zm9udC1zdHlsZTppdGFsaWM7fQ0KLmhlYWRlci1uYXZpZ2F0aW9uIC5OYXZNZW51IHB7Zm9udC1zaXplOjE1cHg7bWFyZ2luOjEwcHg7Y29sb3I6IzY2NjY2Njt0ZXh0LWFsaWduOmNlbnRlcjt9DQouaGVhZGVyLW5hdmlnYXRpb24gLk5hdk1lbnUgYXtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo2MDA7Y29sb3I6IzVjNmFjNDt9DQouaGVhZGVyLW5hdmlnYXRpb24gLk5hdk1lbnUgYTpob3Zlcntmb250LXNpemU6MTVweDtmb250LXdlaWdodDo2MDA7Y29sb3I6IzMzMzMzMzt9DQouY2hlY2t7ZGlzcGxheTpub25lO30NCi5oZWFkZXItbmF2aWdhdGlvbiBsYWJlbHtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjt0cmFuc2l0aW9uOmFsbCAuNXMgbGluZWFyO30NCi8qIExBTkRJTkcgKi8NCi5oZWFkLXNlY3Rpb257Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtwYWRkaW5nOjEwcHg7fQ0KLmlubmVyLXdpZHRoe2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXgtd2lkdGg6MTAwMHB4O2JhY2tncm91bmQ6I2ZmZmZmZjtib3JkZXItcmFkaXVzOjEwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDttYXJnaW46MH0NCi5oZWFkLXNlY3Rpb24tcm93e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7fQ0KLmhlYWQtc2VjdGlvbi1jb2x7ZmxleDo1MCU7fQ0KLmhlYWQxe2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjIwcHg7fQ0KLmhlYWQxIGgye3BhZGRpbmc6MDttYXJnaW46MDttYXJnaW4tYm90dG9tOjEwcHg7bGluZS1oZWlnaHQ6MS4yO2NvbG9yOiM0NDQ7Zm9udC1zaXplOjMwcHg7Zm9udC13ZWlnaHQ6NTAwO30NCi5oZWFkMSBoMiBzcGFue2NvbG9yOiNmZjU3MzM7Zm9udC13ZWlnaHQ6ODAwO30NCi5oZWFkMSBoM3tjb2xvcjojNWM2YWM0O2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjUwMDt9DQouaGVhZDEgcHtwYWRkaW5nOjA7bWFyZ2luOjA7bWFyZ2luLWJvdHRvbToxMHB4O2NvbG9yOiMzMzMzMzM7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NTAwO30NCi5oZWFkMSBhe21hcmdpbjoxMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQ6I2ZmNTczMztwYWRkaW5nOjEwcHggMzBweDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjUwMDtib3JkZXItcmFkaXVzOjVweDtjdXJzb3I6cG9pbnRlcjt9DQouaGVhZDJ7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MjBweH0NCi5oZWFkMiBpbWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO30NCkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpey5oZWFkLXNlY3Rpb24tY29se2ZsZXg6MTAwJTttYXJnaW46MDt9LmhlYWQxLC5oZWFkMntwYWRkaW5nOjIwcHg7fS5oZWFkMSwuaGVhZDJ7dGV4dC1hbGlnbjpjZW50ZXI7fX0NCi8qIFNFUlZJQ0VTICovDQouc2VydmljZXN7YmFja2dyb3VuZDojZmZmZmZmO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjoxMHB4O2JvcmRlci1yYWRpdXM6MTBweDt9DQouc2VydmljZXMgaDF7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1ib3R0b206NHB4IHNvbGlkICNmZjU3MzM7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6ODAwO2NvbG9yOiMzMzMzMzM7cGFkZGluZy1ib3R0b206MTBweDttYXJnaW4tdG9wOjQwcHg7fQ0KLmNlbnttYXgtd2lkdGg6MTAwJTttYXJnaW46YXV0bztkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtmbGV4LXdyYXA6d3JhcDt9DQouc2VydmljZS1mbGV4e2ZsZXg6MjUlO3BhZGRpbmc6MTBweDttYXgtd2lkdGg6MTAwJTtib3gtc2l6aW5nOmJvcmRlci1ib3g7fQ0KLnNlcnZpY2V7Ym94LXNoYWRvdzowIDNweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4xKTtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzoxMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjt9DQouc2VydmljZSBpe2NvbG9yOiNmZjU3MzM7Zm9udC1zaXplOjM0cHg7bWFyZ2luLWJvdHRvbTozMHB4O30NCi5zZXJ2aWNlIGgye2ZvbnQtc2l6ZToxOHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXdlaWdodDo1MDA7bWFyZ2luOjA7fQ0KLnNlcnZpY2UgcHtjb2xvcjojNDQ0O2ZvbnQtc2l6ZToxNXB4fQ0KQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwMHB4KXsuc2VydmljZS1mbGV4e2ZsZXg6NTAlO319DQpAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzUwcHgpey5zZXJ2aWNlLWZsZXh7ZmxleDoxMDAlO319DQovKiBRVUFMSVRZICovDQouYm94LXF1YWxpdHl7Ym94LXNpemluZzpib3JkZXItYm94O3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtwYWRkaW5nOjEwcHg7fQ0KLnF1YWxpdHl7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQ6I2ZmZmZmZjtwYWRkaW5nOjEwcHg7Ym9yZGVyLXJhZGl1czoxMHB4O30NCi5xdWFsaXR5IGgxe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXItYm90dG9tOjRweCBzb2xpZCAjZmY1NzMzO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjojMzMzMzMzO3BhZGRpbmctYm90dG9tOjEwcHg7bWFyZ2luLXRvcDo0MHB4O30NCi5xdWFsaXR5IHB7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzowO21hcmdpbjowO2NvbG9yOiMzMzMzMzM7Zm9udC1zaXplOjE1cHg7fQ0KLyogS09ERS1QUk9NTyAqLw0KLmJveC1rb2RlLXByb21ve2JveC1zaXppbmc6Ym9yZGVyLWJveDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7cGFkZGluZzoxMHB4O30NCi5rb2RlLXByb21ve2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOiNmZmZmZmY7cGFkZGluZzoxMHB4O2JvcmRlci1yYWRpdXM6MTBweDt9DQoua29kZS1wcm9tbyBoMXtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Ym9yZGVyLWJvdHRvbTo0cHggc29saWQgI2ZmNTczMztmb250LXNpemU6MjBweDtmb250LXdlaWdodDo4MDA7Y29sb3I6IzMzMzMzMztwYWRkaW5nLWJvdHRvbToxMHB4O21hcmdpbi10b3A6NDBweDt9DQoua29kZS1wcm9tbyBwe3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MDttYXJnaW46MDtjb2xvcjojMzMzMzMzO2ZvbnQtc2l6ZToxNXB4O30NCi8qIENPTlRBQ1QgKi8NCi5ib3gtY29udGFjdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3BhZGRpbmc6MTBweDt9DQouY29udGFjdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZDojZmZmZmZmO3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjEwcHg7fQ0KLmNvbnRhY3QgaDF7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1ib3R0b206NHB4IHNvbGlkICNmZjU3MzM7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6ODAwO2NvbG9yOiMzMzMzMzM7cGFkZGluZy1ib3R0b206MTBweDttYXJnaW4tdG9wOjQwcHg7fQ0KLmNvbnRhY3QgcHt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjA7bWFyZ2luOjA7Y29sb3I6IzMzMzMzMztmb250LXNpemU6MTVweDt9DQouY29udGFjdCBwIHNwYW57Y29sb3I6I2ZmNTczMzt9DQovKiBPUkRFUiAqLw0KLm9yZGVyLXNlY3Rpb257Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtwYWRkaW5nOjEwcHg7fQ0KLmlubmVyLW9yZGVye2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXgtd2lkdGg6MTAwMHB4O2JhY2tncm91bmQ6I2ZmZmZmZjt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItcmFkaXVzOjEwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDttYXJnaW46MDt9DQouaW5uZXItb3JkZXIgaDF7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1ib3R0b206NHB4IHNvbGlkICNmZjU3MzM7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6ODAwO2NvbG9yOiMzMzMzMzM7cGFkZGluZy1ib3R0b206MTBweDttYXJnaW4tdG9wOjQwcHg7fQ0KLmlubmVyLW9yZGVyIHB7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzowO21hcmdpbjowO21hcmdpbi1ib3R0b206MTBweDtjb2xvcjojMzMzMzMzO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjUwMDt9DQovKiBGT0xMT1dFUiAqLw0KLmhhcmdhLWZvbGxvd2Vye2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7cGFkZGluZzoxMHB4O30NCi5pbm5lci1mb2xsb3dlcntib3gtc2l6aW5nOmJvcmRlci1ib3g7bWF4LXdpZHRoOjEwMDBweDtiYWNrZ3JvdW5kOiNmZmZmZmY7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXJhZGl1czoxMHB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7bWFyZ2luOjA7fQ0KLmlubmVyLWZvbGxvd2VyIGgxe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXItYm90dG9tOjRweCBzb2xpZCAjZmY1NzMzO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjojMzMzMzMzO3BhZGRpbmctYm90dG9tOjEwcHg7bWFyZ2luLXRvcDo0MHB4O30NCi5pbmRvLWZvbGxvd2Vye21heC13aWR0aDoxMDAlO21hcmdpbjphdXRvO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyO2ZsZXgtd3JhcDp3cmFwO30NCi5mb2xsb3dlci1mbGV4e2ZsZXg6MjUlO3BhZGRpbmc6MTBweDttYXgtd2lkdGg6MTAwJTtib3gtc2l6aW5nOmJvcmRlci1ib3g7fQ0KLnBvcnQtZm9sbG93ZXJ7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47Y29sb3I6IzIyMjtib3gtc2hhZG93OjAgM3B4IDVweCAycHggcmdiYSgwLDAsMCwwLjEpO30NCi5wb3J0LWZvbGxvd2VyIGgye3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXNpemU6MTZweDtjb2xvcjojMzMzO2ZvbnQtd2VpZ2h0OjgwMDtwYWRkaW5nOjA7bWFyZ2luOjA7fQ0KLnBvcnQtZm9sbG93ZXIgdWx7bWFyZ2luOjA7cGFkZGluZzowO30NCi5wb3J0LWZvbGxvd2VyIHVsIGxpe3RleHQtYWxpZ246bGVmdDtwYWRkaW5nOjA7Y29sb3I6IzQ0NDtmb250LXNpemU6MTVweDtsaXN0LXN0eWxlOm5vbmU7fQ0KLnBvcnQtZm9sbG93ZXIgdWwgbGkgc3BhbnttYXJnaW4tbGVmdDo1cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiNmZjU3MzM7fQ0KQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwMHB4KXsuZm9sbG93ZXItZmxleHtmbGV4OjUwJTt9fQ0KQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc1MHB4KXsuZm9sbG93ZXItZmxleHtmbGV4OjEwMCU7fX0NCi8qIEJVVFRPTiAqLw0KI2ZsaXBweXt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46MTBweCBhdXRvO3dpZHRoOjEwMCU7ZGlzcGxheTppbmxpbmU7fQ0KI2ZsaXBweSBidXR0b257YmFja2dyb3VuZDojZmY1NzMzO2NvbG9yOiNmZmY7cGFkZGluZzoxMHB4IDMwcHg7Zm9udC13ZWlnaHQ6NTAwO2ZvbnQtc2l6ZToxNXB4O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjoxMHB4IGF1dG87Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7fQ0KI2ZsaXBwYW5lbHtkaXNwbGF5Om5vbmU7cGFkZGluZzowO3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luOjA7fQ0KLyogRk9STVVMSVIgKi8NCmZvcm0ud2hhdHNhcHAtZm9ybXtib3JkZXItcmFkaXVzOi41cmVtO3BhZGRpbmc6MjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6IzQ0NDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjU7fQ0KLndoYXRzYXBwLWZvcm0gYS5zZW5kX2Zvcm17Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNmZjU3MzM7dGV4dC1kZWNvcmF0aW9uOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxMHB4IDI1cHg7Ym9yZGVyLXJhZGl1czouM3JlbTtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6LjVweDtmb250LXNpemU6MTVweDt9DQojdGV4dC1pbmZvIHNwYW57ZGlzcGxheTpibG9jaztwYWRkaW5nOjEwcHggMTVweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDo3MDA7bWFyZ2luOjE1cHggMDtib3JkZXItcmFkaXVzOi41cmVtO30NCiN0ZXh0LWluZm8gc3Bhbi55ZXN7YmFja2dyb3VuZDojYzZmZmM1O2NvbG9yOiMwZWE5MDQ7fQ0KI3RleHQtaW5mbyBzcGFuLm5ve2JhY2tncm91bmQ6I2ZmYzVjNTtjb2xvcjojY2UwNDA0O30NCi5kYXRhaW5wdXR7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjVweCAwIDIwcHg7fQ0KLmRhdGFpbnB1dCBwe2ZvbnQtc2l6ZToxMnB4O2JhY2tncm91bmQ6I2VlZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjVweCAxNXB4O2JvcmRlci1yYWRpdXM6LjVyZW07fQ0KLndoYXRzYXBwLWZvcm0gdGV4dGFyZWF7bWluLWhlaWdodDoxMjBweDt9DQouZGF0YWlucHV0IHNlbGVjdHtwYWRkaW5nOjE1cHggMDtmb250LXNpemU6MTVweDt3aWR0aDoxMDAlO2JvcmRlcjowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7b3V0bGluZTpub25lO2JhY2tncm91bmQ6I2ZmZjt9DQouZGF0YWlucHV0IGlucHV0LC5kYXRhaW5wdXQgdGV4dGFyZWF7Zm9udC1zaXplOjE1cHg7cGFkZGluZzoxNXB4IDA7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2JvcmRlcjpub25lO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7fQ0KLmRhdGFpbnB1dCBpbnB1dDpmb2N1cywuZGF0YWlucHV0IHRleHRhcmVhOmZvY3Vze291dGxpbmU6bm9uZTt9DQouZGF0YWlucHV0IGxhYmVse2NvbG9yOiM5OTk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwO3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7bGVmdDowO3RvcDoxOHB4O3RyYW5zaXRpb246LjJzIGVhc2UgYWxsO30NCi5kYXRhaW5wdXQgaW5wdXQ6Zm9jdXN+bGFiZWwsLmRhdGFpbnB1dCBpbnB1dDp2YWxpZH5sYWJlbCwuZGF0YWlucHV0IHRleHRhcmVhOmZvY3VzfmxhYmVsLC5kYXRhaW5wdXQgdGV4dGFyZWE6dmFsaWR+bGFiZWx7dG9wOi0xMHB4O2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiNmZjU3MzM7fQ0KI25vdGlmLWxpY2Vuc2Ugc3Bhbntmb250LXNpemU6NDBweDt9DQojbm90aWYtbGljZW5zZXtkaXNwbGF5Om5vbmU7cG9zaXRpb246Zml4ZWQ7fQ0KLmJhcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7fQ0KLmJhcjpiZWZvcmUsLmJhcjphZnRlcntjb250ZW50OicnO2hlaWdodDoycHg7d2lkdGg6MDtib3R0b206MXB4O3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6I2ZmNTczMzt0cmFuc2l0aW9uOi4ycyBlYXNlIGFsbDt9DQouYmFyOmJlZm9yZXtsZWZ0OjUwJTt9DQouYmFyOmFmdGVye3JpZ2h0OjUwJTt9DQouZGF0YWlucHV0IGlucHV0OmZvY3Vzfi5iYXI6YmVmb3JlLC5kYXRhaW5wdXQgaW5wdXQ6Zm9jdXN+LmJhcjphZnRlciwuZGF0YWlucHV0IHRleHRhcmVhOmZvY3Vzfi5iYXI6YmVmb3JlLC5kYXRhaW5wdXQgdGV4dGFyZWE6Zm9jdXN+LmJhcjphZnRlcnt3aWR0aDo1MCU7fQ0KLmluZGlnb3h7YmFja2dyb3VuZDojM2Y1MWI1O30NCi5vcmFuZ2V4e2JhY2tncm91bmQ6I2ZmOTgwMDt9DQoucGlua3h7YmFja2dyb3VuZDojZTkxZTYzO30NCi5ibHVleHtiYWNrZ3JvdW5kOiMyMTk2RjM7fQ0KLnB1cnBsZXh7YmFja2dyb3VuZDojOWMyN2IwO30NCi5yZWR4e2JhY2tncm91bmQ6I0Y0NDMzNjt9DQouZ3JlZW54e2JhY2tncm91bmQ6IzRDQUY1MDt9DQouaGlnaGxpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDo1MCU7d2lkdGg6MTAwcHg7dG9wOjI1JTtsZWZ0OjA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5Oi41O30NCi5kYXRhaW5wdXQgaW5wdXQ6Zm9jdXN+LmhpZ2hsaWdodCwuZGF0YWlucHV0IHRleHRhcmVhOmZvY3Vzfi5oaWdobGlnaHR7YW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgLjNzIGVhc2U7fQ0KLmRhdGFpbnB1dCBpbnB1dDpmb2N1c35sYWJlbCwuZGF0YWlucHV0IGlucHV0OnZhbGlkfmxhYmVsLC5kYXRhaW5wdXQgdGV4dGFyZWE6Zm9jdXN+bGFiZWwsLmRhdGFpbnB1dCB0ZXh0YXJlYTp2YWxpZH5sYWJlbHt0b3A6LTEwcHg7Zm9udC1zaXplOjEzcHg7Y29sb3I6I2ZmNTczMzt9')
