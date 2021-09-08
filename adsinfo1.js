<!-- Begin
var jumlah_iklan = 8; / Jumlah Iklan /
var waktu_sekarang = new Date()
var detik = waktu_sekarang.getSeconds()
var pasang_iklan = detik % jumlah_iklan;
pasang_iklan +=1;
if (pasang_iklan==1) {
txt="Info seputar kontes foto, kontes design, kontes blogger, kontes SEO, kontes film/video, kontes menulis, kuis, giveaway, kompetisi social media, undian, sayembara, dll...";
url="https://informasikontes.blogspot.com/";
title="Informasi Kontes";
judul="Informasi Kontes";
link="www.infokontes.com";
}
if (pasang_iklan==2) {
txt="FaucetPay is a micro-wallet provider service that will be a means for you to accept micropayments from faucet sites and other cryptocurrency-generating sites at no additional cost.";
url="https://bit.ly/faucetpaybtc";
title="Earning Bitcoin, Dogecoin, Ethereum without fee";
judul="Earning Bitcoin, Dogecoin, Ethereum without fee";
link="www.faucetpay.io";
}
if (pasang_iklan==3) {
txt="Free Download Mp3 Top Chart, Top Hts, Pop, Rock, Folk, Ballads, Reggae, Punk, Metal, Dangdut, etc....";
url="http://downloaddgila.blogspot.com";
title="Free Download Mp3";
judul="Free Download Mp3";
link="www.downloaddgila.com";
}
if (pasang_iklan==4) {
txt="Free Download Mp3, Lyrics, Video here....";
url="http://lyricsexplorer.blogspot.com";
title="Download Lyrics Top Chart Mp3";
judul="Download Lyrics Top Chart Mp3";
link="www.lyricsexplorer.com";
}
if (pasang_iklan==5) {
txt="Sharing all about Blogging, Tutorial, Cryptocurrency, Wallet Coin, mining Bitcoin, Ethereum, Dogecoin, Litecoin, Auto Faucet, and online business....";
url="https://minerminds.blogspot.com/";
title="Minerminds";
judul="Blogging for share about Cryptocurrency";
link="www.minerminds.com";
}
if (pasang_iklan==6) {
txt="Win upto $200 in Bitcoins every hour, no strings attached! Multiply your bitcoins, free weekly lottery with big prizes, 50% referral commissions and much more!";
url="http://bit.ly/freebitcoinlegit";
title="Free Bitcoin Mining Sources";
judul="Free Bitcoin Mining Sources";
link="www.freebitco.in";
}
if (pasang_iklan==7) {
txt="Bestchange is a site that is engaged in virtual currency exchange including Paypal, Webmoney, Payza, Perfectmoney, and many others, but Bestchange has a slight difference with other currency exchange sites, namely through the Bestchange site we can earn 10- 1000 Satoshi every hour from Faucet Bestchange and earn 0.04 Dollars for every visitor who visits the bestchange site through your affiliate...";
url="https://bit.ly/bestchangebitcoin";
title="Earn Dollar & Bitcoin From Bestchange";
judul="Earn Dollar & Bitcoin From Bestchange";
link="www.bestchange.com";
}
if (pasang_iklan==8) {
txt="Adbtc is a PTC (Paid-To-Click) site originating from Russia that offers you to earn in several ways such as clicking ads, shortlinks, viewing videos, etc. On the adBTC site you will also be paid as a member with crypto currency in the form of Bitcoin (BTC) and Russian Ruble....";
url="http://bit.ly/adbtcminer";
title="Get Easy Bitcoin & Ruble";
judul="Get Easy Bitcoin & Ruble";
link="www.adbtc.top";
}
document.write('<div style="padding:0px 10px 0px 10px;">');
document.write('<a href=\"' + url + '\"_top\"');
document.write('title=\"' + title + '\" target="_blank">');
document.write('<span style="font-size:20px; font-weight:bold; color:#000;">' + judul + '</span></a><br>');
document.write('<normal>' + txt + '</normal><br>');
document.write('<a href=\"' + url + '\"_top\"');
document.write('title=\"' + title + '\" target="_blank">');
document.write('<span style="color:#333;"><small>' + link + '</small></span></a>');
document.write('</div>');
// End -->
