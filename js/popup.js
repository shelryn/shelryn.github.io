$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы
    HideContact()
    PopUpHide();
    PopUpHide2();
    PopUpHide3();
    PopUpHide4();
}
);
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}
//Функция отображения PopUp
function PopUpShow2(){
    $("#popup2").show();
}
//Функция скрытия PopUp
function PopUpHide2(){
  $("#popup2").hide();
}
//Функция отображения PopUp
function PopUpShow3(){
    $("#popup3").show();
}
//Функция скрытия PopUp
function PopUpHide3(){
  $("#popup3").hide();
}
//Функция отображения PopUp
function PopUpShow4(){
    $("#popup4").show();
}
//Функция скрытия PopUp
function PopUpHide4(){
  $("#popup4").hide();
}
//Функция отображения PopUp
function ShowContact(){
    $("#contact").show();
    setTimeout(HideContact, 10000);
}
//Функция скрытия PopUp
function HideContact(){
  $("#contact").hide();
}
// function toggle(.b-popup-content) {
//   el.style.display = (el.style.display == 'none') ? '' : 'none'
// }
