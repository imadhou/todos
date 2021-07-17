# TodoList

# `Arborescence`:
## components
Contient toute sorte de component
## `common`:
Contient les components utilisés pour construire d'autres components (réutilisation dans plusieurs places)
## `pages`:
Contient les components qui seront directement placés dans App 
## graphql
Ce dossier contient la définition du client appolo, ainsi que les queries et mutations.
## context
Contient les contextes utilisés dans l'application
# `Structure et responsabilités`

## `App`
Le client Appolo est le premier component qui est monté, cela assure que tout les autres components aient accès au données.
Il est provider du contexte pour les components de notre app. Ce contexte est utilisé par les deux components 'Form' et 'TodosComponent' pour transporter les données entre eux.
Il peut être utilisé également pour restaurer le state du formulaire lors de la navigation.

### `1 HomePage:` 
Homepage est formée par deux components: "Form" et "ToosComponent". 

#### `- Form`
A chaque interaction de l'utilisateur, le state de ce component est mis à jour et est passé au contexte. ensuite utilisé par `TodosComponent` pour faire un query et produire l'affichage.
<br>
Les hooks utilisées sont: <br> - useState: pour manipuler les state du formulaire, ainsi que de modifier les paramètres du query.<br>
-useEffect: pour construire les paramètres finaux et modifier le contexte.

#### `- TodosComponent`
Ce components est responsable de recevoir le contexte, faire un query en spécifiant les filtres reçus dans le contexte, ensuite produire un affichage de la manière suivante:<br>
L'affichage est produit en bouclant dans le résultat du query, chaque todo contenu dans le résultat est passé à `TodoComponent` comme un props qui sera traité à son niveau.

##### `- TodoComponent`
TodoComponent a trois majeurs responsabilités: <br>
D'abors il crée et retourne l'affichage d'un seul todo grâce à ses components, faire une mutation à chaque changement de son state (isDone: Done <-> Not yet) et enfin contenir le lien vers les détails de la todo.

### `2 DetailsPage:` 
Contient le component `Details` représentant les détails d'une todo
#### `- Details`
Ce component est responsable de faire le query pour trouver le todo correspondant à l'id contenu dans le paramètre de l'url, ensuite de retourner l’élément qui sera monté dans `DetailsPage`

## Remarque
J'ai pas pu implimenter la conservation de l’état du formulaire lors de la navigation entre les deux pages par manque de temps, je voulais soumettre mon travail aujourd’hui.
Mon idée c’est d’utilisé le contexte pour restaurer ce qui a été sauvegarder avant de quitter l’accueil (d’ailler j’ai déplacé le provider depuis HomeComponent à App pour pouvoir non seulement au formulaire et à la liste des todos de l’utiliser mais également au component Details) 
