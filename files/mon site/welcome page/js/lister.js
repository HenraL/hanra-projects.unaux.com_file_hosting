fso = new ActiveXObject("Scripting.FileSystemObject" )
rep = fso.GetSpecialFolder(0) // 0 <=> répertoire windows
function lit_fic() { // liste les fichiers du rep
 var f, ff, res="";
 f = fso.GetFolder(rep);
 ff = new Enumerator(f.files);
 for (; !ff.atEnd(); ff.moveNext())
  res+=ff.item()+"<br>"
  return res
}
document.write(lit_fic())