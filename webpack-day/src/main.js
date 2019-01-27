import $ from "jquery"
// import css from "index.css"
// import "./css/index.css"
import "./css/index.less"
// import "./css/index.scss"//node-sass下载不了无法实验
import "bootstrap/dist/css/bootstrap.css"
$(function(){
    $("li:odd").css("backgroundColor","skyblue")
    $("li:even").css("backgroundColor","darkblue")
})