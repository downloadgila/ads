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
txt="Main game bisa menghasilkan bitcoin, game sederhana, mudah, sudah terbukti bisa menghasilkan pundi-pundi bitcoin, terbukti legit tanpa harus menghabiskan waktu yang banyak...";
url="https://play.google.com/store/apps/details?id=app.getloaded.bitcoinblast&hl=en";
title="Game keren penghasil Bitcoin";
judul="Game keren penghasil Bitcoin";
link="www.BitcoinBlast.com";
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
txt="Free download wallpaper windows xp, windows vista, windows 7, mac OS, nature wallpapers, celebrities wallpapers, etc.......";
url="http://wallpapers-area.blogspot.com";
title="Free Download Wallpapers";
judul="Free Download Wallpapers";
link="www.wallpapers-area.com";
}
if (pasang_iklan==8) {
txt="Kumpulan film-film pendek terbaik, keren, menginspirasi, karya sineas-sineas anak bangsa Indonesia...";
url="http://indonesiashortmovie.blogspot.com/";
title="Film Pendek Indonesia";
judul="Film Pendek Indonesia";
link="www.indonesiashortmovie.com";
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
