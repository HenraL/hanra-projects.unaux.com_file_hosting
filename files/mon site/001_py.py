<<<<<<< HEAD
import random,os
alphabet=[]
alphabet2=[]
extentions=[]
a="""A
a
B
b
C
c
D
d
E
e
F
f
G
g
H
h
I
i
J
j
K
k
L
l
M
m
N
n
O
o
P
p
Q
q
R
r
S
s
T
t
U
u
V
v
W
w
X
x
Y
y
Z
z
"""
b=""".asc
.doc
.c
.docx
.rtf
.msg
.css
.pdf
.txt
.wpd
.wps
.bmp
.eps
.gif
.jpg
.pict
.png
.psd
.tif
.aac
.au
.mid
.mp3
.ra
.snd
.wma
.js
.wav
.avi
.mp4
.mpg
.mov
.wmv
.bat
.com
.exe
.arc
.arj
.gz
.hqx
.rar
.sit
.tar
.z
.zip
.accdb
.html"""
c="""angle, armoire, banc, bureau, cabinet, carreau, chaise, classe, clé, coin, couloir, dossier, eau, école, écriture, entrée, escalier, étagère, étude, extérieur, fenêtre, intérieur, lavabo, lecture, lit, marche, matelas, maternelle, meuble, mousse, mur, peluche, placard, plafond, porte, portemanteau, poubelle, radiateur, rampe, récréation, rentrée, rideau, robinet, salle, savon, serrure, serviette, siège, sieste, silence, sol, sommeil, sonnette, sortie, table, tableau, tabouret, tapis, tiroir, toilette, vitre, w.-c., aller, amener, apporter, appuyer, s’asseoir, attendre, bâiller, bosser, se coucher, dormir, éclairer, écrire, emmener, emporter, s’endormir, s’ennuyer, entrer, étudier, fermer, frapper, s’installer, se lever, lire, ouvrir, se presser, se réchauffer, rentrer, se reposer, rester, se réveiller, sonner, sortir, tricher, venir, absent, assis, bas, couché, haut, présent, à côté, à droite, à gauche, au milieu, au-delà, au-dessous, au-dessus, debout, dedans, dehors, en bas, en face, en haut, loin, près, tard, tôt, à, après, au, avant, contre, dans, de, derrière, devant, du, sous, sur, crayon, stylo, feutre, taille-crayon, pointe, mine, gomme, dessin, coloriage, rayure, peinture, pinceau, couleur, craie, papier, feuille, cahier, carnet, carton, ciseaux, découpage, pliage, pli, colle, affaire, boîte, casier, caisse, trousse, cartable, jouet, jeu, pion, dé, domino, puzzle, cube, perle, chose, forme : carré, rond, pâte à modeler, tampon, livre, histoire, bibliothèque, image, album, titre, bande dessinée, conte, dictionnaire, magazine, catalogue, page, ligne, mot, enveloppe, étiquette, carte d’appel : affiche, alphabet, appareil, caméscope, cassette, cédé, cédérom, chaîne, chanson, chiffre, contraire, différence, doigt, écran, écriture, film, fois, idée, instrument, intrus, lettre, liste, magnétoscope, main, micro, modèle, musique, nom, nombre, orchestre, ordinateur, photo, point, poster, pouce, prénom, question, radio, sens, tambour, télécommande, téléphone, télévision, trait, trompette, voix, xylophone, zéro, chanter, chercher, choisir, chuchoter, coller, colorier, commencer, comparer, compter, construire, continuer, copier, couper, déchirer, décoller, décorer, découper, demander, démolir, se dépêcher, dessiner, dire, discuter, écouter, écrire, effacer, entendre, entourer, envoyer, faire, finir, fouiller, goûter, imiter, laisser, lire, mettre, montrer, ouvrir un livre, parler, peindre, plier, poser, prendre, préparer, ranger, réciter, recommencer, regarder, remettre, répéter, répondre, sentir, souligner, tailler, se taire, tenir, terminer, toucher, travailler, trier, ami, attention, camarade, colère, copain, coquin, dame, directeur, directrice, droit, effort, élève, enfant, fatigue, faute, fille, garçon, gardien, madame, maître, maîtresse, mensonge, ordre, personne, retard, sourire, travail, aider, défendre, désobéir, distribuer, échanger, s’excuser, expliquer, se fâcher, gronder, obéir, obliger, partager, prêter, priver, promettre, punir, se quitter, raconter, refuser, séparer, blond, brun, calme, curieux, différent, doux, énervé, gentil, grand, handicapé, inséparable, jaloux, moyen, muet, noir, nouveau, petit, poli, propre, roux, sage, sale, sérieux, sourd, tranquille, arrosoir, assiette, balle, bateau, boîte, bouchon, bouteille, bulles, canard, casserole, cuillère, cuvette, douche, entonnoir, gouttes, litre, moulin, pluie, poisson, pont, pot, roue, sac en plastique, saladier, seau, tablier, tasse, trous, verre, agiter, s’amuser, arroser, attraper, avancer, baigner, barboter, boucher, bouger, déborder, doucher, éclabousser, essuyer, envoyer, flotter, gonfler, inonder, jouer, laver, mélanger, mouiller, nager, patauger, pleuvoir, plonger, pousser, pouvoir, presser, recevoir, remplir, renverser, sécher, serrer, souffler, tirer, tourner, tremper, verser, vider, vouloir, amusant, chaud, froid, humide, intéressant, mouillé, sec, transparent, à moitié, autant, beaucoup, encore, moins, peu, plus, trop, à l’endroit, à l’envers, anorak, arc, bagage, baguette, barbe, bonnet, botte, bouton, bretelle, cagoule, casque, casquette, ceinture, chapeau, chaussette, chausson, chaussure, chemise, cigarette, col, collant, couronne, cravate, culotte, écharpe, épée, fée, flèche, fusil, gant, habit, jean, jupe, lacet, laine, linge, lunettes, magicien, magie, maillot, manche, manteau, mouchoir, moufle, nœud, paire, pantalon, pied, poche, prince, pull-over, pyjama, reine, robe, roi, ruban, semelle, soldat, sorcière, tache, taille, talon, tissu, tricot, uniforme, valise, veste, vêtement, se changer, se chausser, se couvrir, se déguiser, se déshabiller, enlever, s’habiller, lacer, porter, ressembler, clair, court, étroit, foncé, joli, large, long, multicolore, nu, usé, bien, mal, mieux, presque, aiguille, ampoule, avion, bois, bout, bricolage, bruit, cabane, carton, clou, colle, crochet, élastique, ficelle, fil, marionnette, marteau, métal, mètre, morceau, moteur, objet, outil, peinture, pinceau, planche, plâtre, scie, tournevis, vis, voiture, véhicule, arracher, attacher, casser, coudre, détruire, s’écorcher, enfiler, enfoncer, fabriquer, mesurer, percer, se pincer, réparer, réussir, servir, taper, trouer, adroit, difficile, dur, facile, lisse, maladroit, pointu, rugueux, tordu, accident, aéroport, auto, camion, engin, feu, frein, fusée, garage, gare, grue, hélicoptère, moto, panne, parking, pilote, pneu, quai, train, virage, vitesse, voyage, wagon, zigzag, s’arrêter, atterrir, bouder, charger, conduire, démarrer, disparaître, donner, écraser, s’envoler, garder, se garer, manquer, partir, se poser, reculer, rouler, tendre, transporter, voler, abîmé, ancien, blanc, bleu, cassé, cinq, dernier, deux, deuxième, dix, gris, gros, huit, jaune, même, neuf, pareil, premier, quatre, rouge, sept, seul, six, solide, trois, troisième, un, vert, à côté de, au milieu de, au-dessous de, au-dessus de, autour de, avec, en bas de, en haut de, loin de, près de, sur, vers, acrobate, arrêt, arrière, barre, barreau, bord, bras, cerceau, chaises, cheville, chute, cœur, corde, corps, côté, cou, coude, cuisse, danger, doigts, dos, échasses, échelle, épaule, équipe, escabeau, fesse, filet, fond, genou, gymnastique, hanche, jambes, jeu, mains, milieu, montagne, mur d’escalade, muscle, numéro, ongle, parcours, pas, passerelle, pente, peur, pieds, plongeoir, poignet, poing, pont de singe, poutre d’équilibre, prises, rivière des crocodiles, roulade, saut, serpent, sport, suivant, tête, toboggan, tour, trampoline, tunnel, ventre, s’accrocher, s’appuyer, arriver, se baisser, se balancer, bondir, bousculer, se cogner, courir, danser, dépasser, descendre, écarter, escalader, gagner, gêner, glisser, grimper, marcher à quatre pattes, marcher sur, se mettre debout, monter, se pencher, se percher, perdre, ramper, rater, remplacer, respirer, se retourner, revenir, sauter, soulever, suivre, tomber, transpirer, traverser, dangereux, épais, fort, gauche, groupé, immobile, rond, serré, souple, au delà, ensemble, ici, jamais, là, souvent, toujours, bagarre, balançoire, ballon, bande, bicyclette, bille, cadenas, cage à écureuil, cerf-volant, château, coup, cour, course, échasse, flaque, paix, pardon, partie, pédale, pelle, pompe, préau, raquette, rayon, récréation, sable, sifflet, signe, tas, tricycle, tuyau, vélo, filet, se bagarrer, se battre, se cacher, cracher, creuser, crier, se dégonfler, se disputer, empêcher, galoper, hurler, jongler, lancer, pédaler, se plaindre, pleurer, poursuivre, protéger, saigner, se salir, siffler, surveiller, traîner, trouver, caché, fou, méchant, allumette, anniversaire, appétit, beurre, coquille, crêpes, croûte, dessert, envie, faim, fève, four, galette, gâteau, goût, invitation, langue, lèvres, liquide, louche, mie, moitié, moule, odeur, œuf, part, pâte, pâtisserie, recette, rouleau, sel, soif, tarte, tranche, yaourt, aimer, allumer, avaler, battre, se brûler, chauffer, cuire, étaler, éteindre, falloir, inviter, jeter, lécher, oublier, se régaler, remercier, remuer, souhaiter, sucer, barbouillé, demi, égal, entier, gourmand, mauvais, meilleur, mince, glaçon, jus, kiwi, lame, mûre, noyau, paille, pamplemousse, râpe, croquer, éplucher, râper, bassine, cocotte, épluchure, légume, pomme de terre, rondelle, soupe, consommé, potage, bouillir, mixer, cru, cuit, vide, arête, frite, gobelet, jambon, os, poulet, purée, radis, restaurant, sole, déjeuner, animal, bébés, bouche, cage, câlin, caresse, cochon d’Inde, foin, graines, hamster, lapin, maison, nez, œil, oreille, patte, toit, yeux, accoucher, agacer, appeler, câliner, caresser, changer, déranger, s’échapper, élever, enfermer, enterrer, gratter, grignoter, installer, lâcher, mordre, mourir, naître, nourrir, s’occuper de, se promener, ronger, se sauver, soigner, téter, vivre, voir, abandonné, enceinte, maigre, mort, né, vivant, légume, abeille, agneau, aile, âne, arbre, bain, barque, bassin, bébé, bec, bête, bœuf, botte de foin, boue, bouquet, bourgeon, branche, caillou, campagne, car, champ, chariot, chat, cheminée, cheval, chèvre, chien, cochon, colline, coq, coquelicot, crapaud, cygne, départ, dindon, escargot, étang, ferme, fermier, feuille, flamme, fleur, fontaine, fumée, grain, graine, grenouille, griffe, guêpe, herbe, hérisson, insecte, jardin, mare, marguerite, miel, morceau de pain, mouche, mouton, oie, oiseau, pierre, pigeon, plante, plume, poney, poule, poussin, prairie, rat, rivière, route, tortue, tracteur, tulipe, vache, vétérinaire, accompagner, se baigner, courir après, couver, donner à manger, faire boire, fumer, griffer, habiter, piquer, ramasser, traire, bizarre, énorme, immense, malade, nain, utile, aigle, animaux, aquarium, bêtes, cerf, chouette, cigogne, crocodile, dauphin, éléphant, girafe, hibou, hippopotame, kangourou, lion, loup, ours, panda, panthère, perroquet, phoque, renard, requin, rhinocéros, singe, tigre, zèbre, zoo, La fête, épingle, bâton, bêtise, bonhomme, bottes, canne, cauchemar, cri, danse, déguisement, dinosaure, drapeau, en argent, en or, en rang, fête, figure, géant, gens, grand-mère, grand-père, joie, joue, journaux, maquillage, masque, monsieur, moustache, ogre, princesse, rue, trottoir, déguiser, défiler, éclater, essayer, marcher, se moquer, plaire, rencontrer, ressembler à, retourner, rêver, rire, taper sur, danser, sauter, chanter, content, drôle, effrayé, heureux, joyeux, prêt, riche, terrible, Noël, boule, cadeau, canne à pêche, chance, cube, guirlande, humeur, papillon, spectacle, surprise, trou, visage, faire peur, lever, maquiller, électrique, L’heure, le calendrier, âge, an, année, après-midi, calendrier, début, dimanche, été, étoile, fin, heure des mamans, heure, hiver, horloge, jeudi, jour, journée, lumière, lundi, lune, mardi, matin, mercredi, midi, minuit, minute, mois, moment, montre, nuit, ombre, pendule, retour, réveil, saison, samedi, semaine, soir, soleil, temps, univers, vacances, vendredi, avancer, briller, dîner, grandir, mettre du temps, suivre (chronologie), retarder, aîné, jeune, lent, patient, rapide, sombre, vieux, aujourd’hui, bientôt, d’abord, demain, hier, maintenant, puis, tout de suite, en avance (loc.), en retard (loc.), air, arc-en-ciel, brouillard, ciel, éclair, flocon, goutte, hirondelle, luge, neige, nuage, orage, ouragan, parapluie, parasol, ski, tempête, thermomètre, tonnerre, traîneau, vent, s’abriter, faire beau, geler, se mouiller, neiger, se tromper, pleuvoir, venter, déçu, triste, chaud, froid, pluvieux, nuageux, humide, gelé, instable, changeant, À_la_maison, La_cuisine, assiette, balai, biscuit, boisson, bol, bonbon, céréale, confiture, coquetier, couteau, couvercle, couvert, cuillère, cuisine, cuisinière, désordre, dînette, éponge, évier, four, fourchette, lait, lave-linge, lessive, machine, nappe, pain, pile, plat, plateau, poêle, réfrigérateur, repas, tartine, torchon, vaisselle, accrocher, balayer, boire, frotter, manger, nettoyer, se servir, cuisiner, bon, creux, délicieux, La_chambre, argent, aspirateur, bague, barrette, bijou, bracelet, brosse, cadre, canapé, chambre, cheveu, chiffon, cil, coffre, coffret, collier, couette, coussin, couverture, dent, dentifrice, drap, fauteuil, fer à repasser, frange, glace, lampe, lit, ménage, or, oreiller, parfum, peigne, pouf, poupée, poussette, poussière, shampoing, sourcil, trésor, tube, vase, s’allonger, se coiffer, hésiter, se laver, se maquiller, passer, préférer, repasser, se sécher, secouer, téléphoner, beau, belle, confortable, coquet, douillet, adulte, album, amour, baiser, bavoir, biberon, bisou, caprice, cimetière, cousin, cousine, crèche, fils, frère, grand-parent, homme, femme, jumeau, maman, mari, mariage, mère, papa, parent, père, petit-enfant, petit-fils, petite-fille, rasoir, sœur, s’agiter, s’appeler, baver, bercer, se blottir, consoler, déménager, se détester, s’embrasser, se marier, offrir, penser, se rappeler, se raser, ronfler, se serrer, tricoter, Un_accident, la maladie, ambulance, bosse, champignon, dentiste, docteur, fièvre, front, gorge, infirmier, infirmière, jambe, larme, médecin, menton, mine, ordonnance, pansement, peau, piqûre, poison, sang, santé, squelette, trousse, aller bien, attraper une maladie, se blesser, détester, devoir, éternuer, se gratter, guérir, se moucher, ne pas oublier, se protéger, recoudre, souffrir, tâter, tousser, trembler, guéri, pâle, araignée, brouette, chenille, coccinelle, fourmi, herbe, jonquille, lézard, pâquerette, rangée, râteau, rosé, souris, taupe, terrain, terre, terrier, tige, ver, cueillir, jardiner, se faner, s’ouvrir, planter, mûr, profond, assez, portière, sac, voyager, zoo, billet, caisse, farce, grimace, grotte, pays, regard, ticket, se doucher, tuer, cruel, bûche, buisson, camp, chasseur, châtaigne, chemin, chêne, corbeau, écorce, écureuil, forêt, gourde, lac, loupe, lutin, marron, mûre, moustique, muguet, nid, paysage, pin, rocher, sapin, sommet, tente, camper, chasser, s’éloigner , entendre, s’envoler, griller, grimper, guetter, s’imaginer, jeter, lancer, manger, marcher, montrer, se mouiller, patauger, se percher, se perdre, photographier, pique-niquer, pleuvoir, poser, poursuivre, ramasser, regarder, rencontrer, se reposer, respirer, revoir, rêver, sentir, siffler, transpirer, traverser, trouver, vivre, adresse, appartement, ascenseur, balcon, boucherie, boulanger, boulangerie, boutique, bus, caniveau, caravane, carrefour, cave, charcuterie, cinéma, cirque, clin d’œil, cloche, clocher, clown, coiffeur, colis-route, courrier, croix, église, embouteillage, endroit, enveloppe, essence, facteur, fleuriste, foire, hôpital, hôtel, immeuble, incendie, laisse, magasin, manège, médicament, moineau, monde, monument, ouvrier, palais, panneau, paquet, parc, passage, pharmacie, pharmacien, piscine, place, police, policier, pompier, poste, promenade, quartier, square, timbre, travaux, usine, village, ville, voisin, volet, barrer, clignoter, se croiser, garer, photographier, reconnaître, retrouver, revoir, saluer, savoir, se toucher, se trouver, visiter, important, impossible, prudent, chez, abricot, ail, aliment, ananas, banane, bifteck, café, carotte, cerise, chocolat, chou, citron, citrouille, clémentine, concombre, coquillage, corbeille, crabe, crevette, endive, farine, fraise, framboise, fromage, fruit, gâteau, haricot, huile, légume, marchand, melon, monnaie, navet, noisette, noix, nourriture, oignon, orange, panier, pâtes, pêche, persil, petit pois, poire, poireau, pomme, pomme de terre, prix, prune, queue, raisin, riz, salade, sucre, thé, tomate, viande, vin, acheter, ajouter, coûter, payer, peser, rendre, vendre, cher, léger, lourd, plein, baleine, bouée, île, jumelles, marin, mer, mouette, navire, pêcheur, plage, poisson, port, sardine, serviette, vague, voile, se noyer, ramer, nager"""
def treat(e):
    word=""
    c=[]
    for i in range(len(e)):
        if e[i]=="," and e[i+1]==" ":
            c.append(word)
            word=""
        elif e[i]==" " and e[i-1]!=",":
            word+="_"
        else:
            word+=str(e[i])
    return c
def sort(v):
    c=[]
    word=""
    for i in v:
        if i=="\n":
            c.append(str(word))
            word=""
        else:
            word+=str(i)
    return c
def create_r():
    N=""
    for i in range(random.randint(1,200)):
        N+=str(alphabet[random.randint(0,len(alphabet)-1)])
    N+=str(extentions[random.randint(0,len(extentions)-1)])
    f=open(N,"a")
    for i in range(random.randint(1,200000)):
        f.write(str(alphabet2[random.randint(0,len(alphabet2)-1)]))
    f.close()
    return N
def create_w():
    N=""
    for i in range(random.randint(1,20)):
        N+=str(words[random.randint(0,len(words)-1)])
    N+=str(extentions[random.randint(0,len(extentions)-1)])
    f=open(N,"a")
    for i in range(random.randint(1,200000)):
        f.write(str(words[random.randint(0,len(words)-1)]))
    f.close()
    return N
def create_fold_r():
    N=""
    for i in range(random.randint(1,200)):
        N+=str(alphabet[random.randint(0,len(alphabet)-1)])
    try:
        os.mkdir(str(N))
        track(str(N))
        os.chdir(str(N))
    except:
        os.chdir(str(N))
    return N
def create_fold_w():
    N=""
    for i in range(random.randint(1,200)):
        N+=str(words[random.randint(0,len(words)-1)])
    try:
        os.mkdir(str(N))
        track(str(N))
        os.chdir(str(N))
    except:
        os.chdir(str(N))
    return N
def track(N):
    f=open("001t.track","a")
    f.write("{}\n".format(N))
    f.close()
alphabet=sort(a)
extentions=sort(b)
words=treat(c)
for i in range(len(alphabet)):alphabet2.append(str(alphabet[i]))
alphabet2.append("\n")
alphabet2.append("\t")
alphabet2.append(" ")
for i in range(10):alphabet2.append(str(i))
cont=False
while cont==False:
    t=input("Times:")
    try:
        t=int(t)
        cont=True
    except:
        print("Please enter a number\nYou have entered: {}".format(t))

for i in range(t):
    print(i,end=",")
    d=random.randint(0,1)
    if d==1:
        for i in range(random.randint(1,len(alphabet2))):
            z=random.randint(0,1)
            if z==0:
                track(create_r())
            else:
                track(create_w())
    else:
        z=random.randint(0,1)
        if z==1:
            c=create_fold_r()
        else:
            c=create_fold_w()
        for i in range(random.randint(1,len(alphabet2))):
            z=random.randint(0,1)
            if z==0:
                e=create_r()
            else:
                e=create_w()
            os.chdir("..")
            track("{}/{}".format(c,e))
            os.chdir(c)
=======
import random,os
alphabet=[]
alphabet2=[]
extentions=[]
a="""A
a
B
b
C
c
D
d
E
e
F
f
G
g
H
h
I
i
J
j
K
k
L
l
M
m
N
n
O
o
P
p
Q
q
R
r
S
s
T
t
U
u
V
v
W
w
X
x
Y
y
Z
z
"""
b=""".asc
.doc
.c
.docx
.rtf
.msg
.css
.pdf
.txt
.wpd
.wps
.bmp
.eps
.gif
.jpg
.pict
.png
.psd
.tif
.aac
.au
.mid
.mp3
.ra
.snd
.wma
.js
.wav
.avi
.mp4
.mpg
.mov
.wmv
.bat
.com
.exe
.arc
.arj
.gz
.hqx
.rar
.sit
.tar
.z
.zip
.accdb
.html"""
c="""angle, armoire, banc, bureau, cabinet, carreau, chaise, classe, clé, coin, couloir, dossier, eau, école, écriture, entrée, escalier, étagère, étude, extérieur, fenêtre, intérieur, lavabo, lecture, lit, marche, matelas, maternelle, meuble, mousse, mur, peluche, placard, plafond, porte, portemanteau, poubelle, radiateur, rampe, récréation, rentrée, rideau, robinet, salle, savon, serrure, serviette, siège, sieste, silence, sol, sommeil, sonnette, sortie, table, tableau, tabouret, tapis, tiroir, toilette, vitre, w.-c., aller, amener, apporter, appuyer, s’asseoir, attendre, bâiller, bosser, se coucher, dormir, éclairer, écrire, emmener, emporter, s’endormir, s’ennuyer, entrer, étudier, fermer, frapper, s’installer, se lever, lire, ouvrir, se presser, se réchauffer, rentrer, se reposer, rester, se réveiller, sonner, sortir, tricher, venir, absent, assis, bas, couché, haut, présent, à côté, à droite, à gauche, au milieu, au-delà, au-dessous, au-dessus, debout, dedans, dehors, en bas, en face, en haut, loin, près, tard, tôt, à, après, au, avant, contre, dans, de, derrière, devant, du, sous, sur, crayon, stylo, feutre, taille-crayon, pointe, mine, gomme, dessin, coloriage, rayure, peinture, pinceau, couleur, craie, papier, feuille, cahier, carnet, carton, ciseaux, découpage, pliage, pli, colle, affaire, boîte, casier, caisse, trousse, cartable, jouet, jeu, pion, dé, domino, puzzle, cube, perle, chose, forme : carré, rond, pâte à modeler, tampon, livre, histoire, bibliothèque, image, album, titre, bande dessinée, conte, dictionnaire, magazine, catalogue, page, ligne, mot, enveloppe, étiquette, carte d’appel : affiche, alphabet, appareil, caméscope, cassette, cédé, cédérom, chaîne, chanson, chiffre, contraire, différence, doigt, écran, écriture, film, fois, idée, instrument, intrus, lettre, liste, magnétoscope, main, micro, modèle, musique, nom, nombre, orchestre, ordinateur, photo, point, poster, pouce, prénom, question, radio, sens, tambour, télécommande, téléphone, télévision, trait, trompette, voix, xylophone, zéro, chanter, chercher, choisir, chuchoter, coller, colorier, commencer, comparer, compter, construire, continuer, copier, couper, déchirer, décoller, décorer, découper, demander, démolir, se dépêcher, dessiner, dire, discuter, écouter, écrire, effacer, entendre, entourer, envoyer, faire, finir, fouiller, goûter, imiter, laisser, lire, mettre, montrer, ouvrir un livre, parler, peindre, plier, poser, prendre, préparer, ranger, réciter, recommencer, regarder, remettre, répéter, répondre, sentir, souligner, tailler, se taire, tenir, terminer, toucher, travailler, trier, ami, attention, camarade, colère, copain, coquin, dame, directeur, directrice, droit, effort, élève, enfant, fatigue, faute, fille, garçon, gardien, madame, maître, maîtresse, mensonge, ordre, personne, retard, sourire, travail, aider, défendre, désobéir, distribuer, échanger, s’excuser, expliquer, se fâcher, gronder, obéir, obliger, partager, prêter, priver, promettre, punir, se quitter, raconter, refuser, séparer, blond, brun, calme, curieux, différent, doux, énervé, gentil, grand, handicapé, inséparable, jaloux, moyen, muet, noir, nouveau, petit, poli, propre, roux, sage, sale, sérieux, sourd, tranquille, arrosoir, assiette, balle, bateau, boîte, bouchon, bouteille, bulles, canard, casserole, cuillère, cuvette, douche, entonnoir, gouttes, litre, moulin, pluie, poisson, pont, pot, roue, sac en plastique, saladier, seau, tablier, tasse, trous, verre, agiter, s’amuser, arroser, attraper, avancer, baigner, barboter, boucher, bouger, déborder, doucher, éclabousser, essuyer, envoyer, flotter, gonfler, inonder, jouer, laver, mélanger, mouiller, nager, patauger, pleuvoir, plonger, pousser, pouvoir, presser, recevoir, remplir, renverser, sécher, serrer, souffler, tirer, tourner, tremper, verser, vider, vouloir, amusant, chaud, froid, humide, intéressant, mouillé, sec, transparent, à moitié, autant, beaucoup, encore, moins, peu, plus, trop, à l’endroit, à l’envers, anorak, arc, bagage, baguette, barbe, bonnet, botte, bouton, bretelle, cagoule, casque, casquette, ceinture, chapeau, chaussette, chausson, chaussure, chemise, cigarette, col, collant, couronne, cravate, culotte, écharpe, épée, fée, flèche, fusil, gant, habit, jean, jupe, lacet, laine, linge, lunettes, magicien, magie, maillot, manche, manteau, mouchoir, moufle, nœud, paire, pantalon, pied, poche, prince, pull-over, pyjama, reine, robe, roi, ruban, semelle, soldat, sorcière, tache, taille, talon, tissu, tricot, uniforme, valise, veste, vêtement, se changer, se chausser, se couvrir, se déguiser, se déshabiller, enlever, s’habiller, lacer, porter, ressembler, clair, court, étroit, foncé, joli, large, long, multicolore, nu, usé, bien, mal, mieux, presque, aiguille, ampoule, avion, bois, bout, bricolage, bruit, cabane, carton, clou, colle, crochet, élastique, ficelle, fil, marionnette, marteau, métal, mètre, morceau, moteur, objet, outil, peinture, pinceau, planche, plâtre, scie, tournevis, vis, voiture, véhicule, arracher, attacher, casser, coudre, détruire, s’écorcher, enfiler, enfoncer, fabriquer, mesurer, percer, se pincer, réparer, réussir, servir, taper, trouer, adroit, difficile, dur, facile, lisse, maladroit, pointu, rugueux, tordu, accident, aéroport, auto, camion, engin, feu, frein, fusée, garage, gare, grue, hélicoptère, moto, panne, parking, pilote, pneu, quai, train, virage, vitesse, voyage, wagon, zigzag, s’arrêter, atterrir, bouder, charger, conduire, démarrer, disparaître, donner, écraser, s’envoler, garder, se garer, manquer, partir, se poser, reculer, rouler, tendre, transporter, voler, abîmé, ancien, blanc, bleu, cassé, cinq, dernier, deux, deuxième, dix, gris, gros, huit, jaune, même, neuf, pareil, premier, quatre, rouge, sept, seul, six, solide, trois, troisième, un, vert, à côté de, au milieu de, au-dessous de, au-dessus de, autour de, avec, en bas de, en haut de, loin de, près de, sur, vers, acrobate, arrêt, arrière, barre, barreau, bord, bras, cerceau, chaises, cheville, chute, cœur, corde, corps, côté, cou, coude, cuisse, danger, doigts, dos, échasses, échelle, épaule, équipe, escabeau, fesse, filet, fond, genou, gymnastique, hanche, jambes, jeu, mains, milieu, montagne, mur d’escalade, muscle, numéro, ongle, parcours, pas, passerelle, pente, peur, pieds, plongeoir, poignet, poing, pont de singe, poutre d’équilibre, prises, rivière des crocodiles, roulade, saut, serpent, sport, suivant, tête, toboggan, tour, trampoline, tunnel, ventre, s’accrocher, s’appuyer, arriver, se baisser, se balancer, bondir, bousculer, se cogner, courir, danser, dépasser, descendre, écarter, escalader, gagner, gêner, glisser, grimper, marcher à quatre pattes, marcher sur, se mettre debout, monter, se pencher, se percher, perdre, ramper, rater, remplacer, respirer, se retourner, revenir, sauter, soulever, suivre, tomber, transpirer, traverser, dangereux, épais, fort, gauche, groupé, immobile, rond, serré, souple, au delà, ensemble, ici, jamais, là, souvent, toujours, bagarre, balançoire, ballon, bande, bicyclette, bille, cadenas, cage à écureuil, cerf-volant, château, coup, cour, course, échasse, flaque, paix, pardon, partie, pédale, pelle, pompe, préau, raquette, rayon, récréation, sable, sifflet, signe, tas, tricycle, tuyau, vélo, filet, se bagarrer, se battre, se cacher, cracher, creuser, crier, se dégonfler, se disputer, empêcher, galoper, hurler, jongler, lancer, pédaler, se plaindre, pleurer, poursuivre, protéger, saigner, se salir, siffler, surveiller, traîner, trouver, caché, fou, méchant, allumette, anniversaire, appétit, beurre, coquille, crêpes, croûte, dessert, envie, faim, fève, four, galette, gâteau, goût, invitation, langue, lèvres, liquide, louche, mie, moitié, moule, odeur, œuf, part, pâte, pâtisserie, recette, rouleau, sel, soif, tarte, tranche, yaourt, aimer, allumer, avaler, battre, se brûler, chauffer, cuire, étaler, éteindre, falloir, inviter, jeter, lécher, oublier, se régaler, remercier, remuer, souhaiter, sucer, barbouillé, demi, égal, entier, gourmand, mauvais, meilleur, mince, glaçon, jus, kiwi, lame, mûre, noyau, paille, pamplemousse, râpe, croquer, éplucher, râper, bassine, cocotte, épluchure, légume, pomme de terre, rondelle, soupe, consommé, potage, bouillir, mixer, cru, cuit, vide, arête, frite, gobelet, jambon, os, poulet, purée, radis, restaurant, sole, déjeuner, animal, bébés, bouche, cage, câlin, caresse, cochon d’Inde, foin, graines, hamster, lapin, maison, nez, œil, oreille, patte, toit, yeux, accoucher, agacer, appeler, câliner, caresser, changer, déranger, s’échapper, élever, enfermer, enterrer, gratter, grignoter, installer, lâcher, mordre, mourir, naître, nourrir, s’occuper de, se promener, ronger, se sauver, soigner, téter, vivre, voir, abandonné, enceinte, maigre, mort, né, vivant, légume, abeille, agneau, aile, âne, arbre, bain, barque, bassin, bébé, bec, bête, bœuf, botte de foin, boue, bouquet, bourgeon, branche, caillou, campagne, car, champ, chariot, chat, cheminée, cheval, chèvre, chien, cochon, colline, coq, coquelicot, crapaud, cygne, départ, dindon, escargot, étang, ferme, fermier, feuille, flamme, fleur, fontaine, fumée, grain, graine, grenouille, griffe, guêpe, herbe, hérisson, insecte, jardin, mare, marguerite, miel, morceau de pain, mouche, mouton, oie, oiseau, pierre, pigeon, plante, plume, poney, poule, poussin, prairie, rat, rivière, route, tortue, tracteur, tulipe, vache, vétérinaire, accompagner, se baigner, courir après, couver, donner à manger, faire boire, fumer, griffer, habiter, piquer, ramasser, traire, bizarre, énorme, immense, malade, nain, utile, aigle, animaux, aquarium, bêtes, cerf, chouette, cigogne, crocodile, dauphin, éléphant, girafe, hibou, hippopotame, kangourou, lion, loup, ours, panda, panthère, perroquet, phoque, renard, requin, rhinocéros, singe, tigre, zèbre, zoo, La fête, épingle, bâton, bêtise, bonhomme, bottes, canne, cauchemar, cri, danse, déguisement, dinosaure, drapeau, en argent, en or, en rang, fête, figure, géant, gens, grand-mère, grand-père, joie, joue, journaux, maquillage, masque, monsieur, moustache, ogre, princesse, rue, trottoir, déguiser, défiler, éclater, essayer, marcher, se moquer, plaire, rencontrer, ressembler à, retourner, rêver, rire, taper sur, danser, sauter, chanter, content, drôle, effrayé, heureux, joyeux, prêt, riche, terrible, Noël, boule, cadeau, canne à pêche, chance, cube, guirlande, humeur, papillon, spectacle, surprise, trou, visage, faire peur, lever, maquiller, électrique, L’heure, le calendrier, âge, an, année, après-midi, calendrier, début, dimanche, été, étoile, fin, heure des mamans, heure, hiver, horloge, jeudi, jour, journée, lumière, lundi, lune, mardi, matin, mercredi, midi, minuit, minute, mois, moment, montre, nuit, ombre, pendule, retour, réveil, saison, samedi, semaine, soir, soleil, temps, univers, vacances, vendredi, avancer, briller, dîner, grandir, mettre du temps, suivre (chronologie), retarder, aîné, jeune, lent, patient, rapide, sombre, vieux, aujourd’hui, bientôt, d’abord, demain, hier, maintenant, puis, tout de suite, en avance (loc.), en retard (loc.), air, arc-en-ciel, brouillard, ciel, éclair, flocon, goutte, hirondelle, luge, neige, nuage, orage, ouragan, parapluie, parasol, ski, tempête, thermomètre, tonnerre, traîneau, vent, s’abriter, faire beau, geler, se mouiller, neiger, se tromper, pleuvoir, venter, déçu, triste, chaud, froid, pluvieux, nuageux, humide, gelé, instable, changeant, À_la_maison, La_cuisine, assiette, balai, biscuit, boisson, bol, bonbon, céréale, confiture, coquetier, couteau, couvercle, couvert, cuillère, cuisine, cuisinière, désordre, dînette, éponge, évier, four, fourchette, lait, lave-linge, lessive, machine, nappe, pain, pile, plat, plateau, poêle, réfrigérateur, repas, tartine, torchon, vaisselle, accrocher, balayer, boire, frotter, manger, nettoyer, se servir, cuisiner, bon, creux, délicieux, La_chambre, argent, aspirateur, bague, barrette, bijou, bracelet, brosse, cadre, canapé, chambre, cheveu, chiffon, cil, coffre, coffret, collier, couette, coussin, couverture, dent, dentifrice, drap, fauteuil, fer à repasser, frange, glace, lampe, lit, ménage, or, oreiller, parfum, peigne, pouf, poupée, poussette, poussière, shampoing, sourcil, trésor, tube, vase, s’allonger, se coiffer, hésiter, se laver, se maquiller, passer, préférer, repasser, se sécher, secouer, téléphoner, beau, belle, confortable, coquet, douillet, adulte, album, amour, baiser, bavoir, biberon, bisou, caprice, cimetière, cousin, cousine, crèche, fils, frère, grand-parent, homme, femme, jumeau, maman, mari, mariage, mère, papa, parent, père, petit-enfant, petit-fils, petite-fille, rasoir, sœur, s’agiter, s’appeler, baver, bercer, se blottir, consoler, déménager, se détester, s’embrasser, se marier, offrir, penser, se rappeler, se raser, ronfler, se serrer, tricoter, Un_accident, la maladie, ambulance, bosse, champignon, dentiste, docteur, fièvre, front, gorge, infirmier, infirmière, jambe, larme, médecin, menton, mine, ordonnance, pansement, peau, piqûre, poison, sang, santé, squelette, trousse, aller bien, attraper une maladie, se blesser, détester, devoir, éternuer, se gratter, guérir, se moucher, ne pas oublier, se protéger, recoudre, souffrir, tâter, tousser, trembler, guéri, pâle, araignée, brouette, chenille, coccinelle, fourmi, herbe, jonquille, lézard, pâquerette, rangée, râteau, rosé, souris, taupe, terrain, terre, terrier, tige, ver, cueillir, jardiner, se faner, s’ouvrir, planter, mûr, profond, assez, portière, sac, voyager, zoo, billet, caisse, farce, grimace, grotte, pays, regard, ticket, se doucher, tuer, cruel, bûche, buisson, camp, chasseur, châtaigne, chemin, chêne, corbeau, écorce, écureuil, forêt, gourde, lac, loupe, lutin, marron, mûre, moustique, muguet, nid, paysage, pin, rocher, sapin, sommet, tente, camper, chasser, s’éloigner , entendre, s’envoler, griller, grimper, guetter, s’imaginer, jeter, lancer, manger, marcher, montrer, se mouiller, patauger, se percher, se perdre, photographier, pique-niquer, pleuvoir, poser, poursuivre, ramasser, regarder, rencontrer, se reposer, respirer, revoir, rêver, sentir, siffler, transpirer, traverser, trouver, vivre, adresse, appartement, ascenseur, balcon, boucherie, boulanger, boulangerie, boutique, bus, caniveau, caravane, carrefour, cave, charcuterie, cinéma, cirque, clin d’œil, cloche, clocher, clown, coiffeur, colis-route, courrier, croix, église, embouteillage, endroit, enveloppe, essence, facteur, fleuriste, foire, hôpital, hôtel, immeuble, incendie, laisse, magasin, manège, médicament, moineau, monde, monument, ouvrier, palais, panneau, paquet, parc, passage, pharmacie, pharmacien, piscine, place, police, policier, pompier, poste, promenade, quartier, square, timbre, travaux, usine, village, ville, voisin, volet, barrer, clignoter, se croiser, garer, photographier, reconnaître, retrouver, revoir, saluer, savoir, se toucher, se trouver, visiter, important, impossible, prudent, chez, abricot, ail, aliment, ananas, banane, bifteck, café, carotte, cerise, chocolat, chou, citron, citrouille, clémentine, concombre, coquillage, corbeille, crabe, crevette, endive, farine, fraise, framboise, fromage, fruit, gâteau, haricot, huile, légume, marchand, melon, monnaie, navet, noisette, noix, nourriture, oignon, orange, panier, pâtes, pêche, persil, petit pois, poire, poireau, pomme, pomme de terre, prix, prune, queue, raisin, riz, salade, sucre, thé, tomate, viande, vin, acheter, ajouter, coûter, payer, peser, rendre, vendre, cher, léger, lourd, plein, baleine, bouée, île, jumelles, marin, mer, mouette, navire, pêcheur, plage, poisson, port, sardine, serviette, vague, voile, se noyer, ramer, nager"""
def treat(e):
    word=""
    c=[]
    for i in range(len(e)):
        if e[i]=="," and e[i+1]==" ":
            c.append(word)
            word=""
        elif e[i]==" " and e[i-1]!=",":
            word+="_"
        else:
            word+=str(e[i])
    return c
def sort(v):
    c=[]
    word=""
    for i in v:
        if i=="\n":
            c.append(str(word))
            word=""
        else:
            word+=str(i)
    return c
def create_r():
    N=""
    for i in range(random.randint(1,200)):
        N+=str(alphabet[random.randint(0,len(alphabet)-1)])
    N+=str(extentions[random.randint(0,len(extentions)-1)])
    f=open(N,"a")
    for i in range(random.randint(1,200000)):
        f.write(str(alphabet2[random.randint(0,len(alphabet2)-1)]))
    f.close()
    return N
def create_w():
    N=""
    for i in range(random.randint(1,20)):
        N+=str(words[random.randint(0,len(words)-1)])
    N+=str(extentions[random.randint(0,len(extentions)-1)])
    f=open(N,"a")
    for i in range(random.randint(1,200000)):
        f.write(str(words[random.randint(0,len(words)-1)]))
    f.close()
    return N
def create_fold_r():
    N=""
    for i in range(random.randint(1,200)):
        N+=str(alphabet[random.randint(0,len(alphabet)-1)])
    try:
        os.mkdir(str(N))
        track(str(N))
        os.chdir(str(N))
    except:
        os.chdir(str(N))
    return N
def create_fold_w():
    N=""
    for i in range(random.randint(1,200)):
        N+=str(words[random.randint(0,len(words)-1)])
    try:
        os.mkdir(str(N))
        track(str(N))
        os.chdir(str(N))
    except:
        os.chdir(str(N))
    return N
def track(N):
    f=open("001t.track","a")
    f.write("{}\n".format(N))
    f.close()
alphabet=sort(a)
extentions=sort(b)
words=treat(c)
for i in range(len(alphabet)):alphabet2.append(str(alphabet[i]))
alphabet2.append("\n")
alphabet2.append("\t")
alphabet2.append(" ")
for i in range(10):alphabet2.append(str(i))
cont=False
while cont==False:
    t=input("Times:")
    try:
        t=int(t)
        cont=True
    except:
        print("Please enter a number\nYou have entered: {}".format(t))

for i in range(t):
    print(i,end=",")
    d=random.randint(0,1)
    if d==1:
        for i in range(random.randint(1,len(alphabet2))):
            z=random.randint(0,1)
            if z==0:
                track(create_r())
            else:
                track(create_w())
    else:
        z=random.randint(0,1)
        if z==1:
            c=create_fold_r()
        else:
            c=create_fold_w()
        for i in range(random.randint(1,len(alphabet2))):
            z=random.randint(0,1)
            if z==0:
                e=create_r()
            else:
                e=create_w()
            os.chdir("..")
            track("{}/{}".format(c,e))
            os.chdir(c)
>>>>>>> 4c476127afd0499a711ccd60eedffaa0d6d2f2dc
