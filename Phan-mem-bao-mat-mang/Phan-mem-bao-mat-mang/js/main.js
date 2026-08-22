//	js/main.js	—điểm khởi động	duy	nhất cho cả	4 trang
import{initNav,initHeaderOnScroll,initToTop}from"./nav.js";
import{initTheme}from"./theme.js";
//	…
initNav();
export function	initNav()	{
    const root=document.getElementById("nav");
    if	(!root)	return;
}
initTheme();
export function	initTheme()	{
    const root=document.getElementById("theme");
    if	(!root)	return;
}
initFaq();
export function	initFaq()	{
    const root=document.getElementById("faq");
    if	(!root)	return;
}
initPricing();
export function	initPricing()	{
    const root=document.getElementById("pricing");
    if	(!root)	return;
}
initSlider();
export function	initSlider()	{
    const root=document.getElementById("slider");
    if	(!root)	return;
}
initReveal();
export function	initReveal()	{
    const root=document.getElementById("reveal");
    if	(!root)	return;
}