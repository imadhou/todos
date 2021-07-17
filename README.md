# TodoList

# `Arborescence`:
## components
Contient toute sorte de component
## `common`:
Contient les components utilisés pour construire d'autres components (réutilisation dans plusieurs places)
## `pages`:
Contient les components qui seront directement placés dans App 
## graphql
Ce dossier contient la définition du cient appolo, ainsi que les queries et mutations.
## context
Contient les contextes utilisés dans l'application
# `Structure et responsabilités`

## `App`
Le client Appolo est le premier component qui est monté, cela assure que tout les autres components aient accées au données.

### `1 HomePage:` 
Homepage est formée par deux components: "Form" et "ToosComponent". Il est le provider du contexte nécessaire pour la communication entre ces deux components, cela permet de passer les données du formulaire comme paramètres au query utilisé dans la liste des todos

#### `- Form`
A chaque interaction de l'utilisateur, le state de ce component est mis à jour et est passé au contexte. ensuite utilisé par `TodosComponent` pour faire un query et produire l'affichage.
<br>
Les hooks utilisées sont: <br> - useState: pour manipuler les state du formulaire, ainsi que de modifier les paramètres du query.<br>
-useEffect: pour construire les parametres finaux et modifier le contexte.

#### `- TodosComponent`
Ce components est responsable de recevoir le contexte, faire un query en spécifiant les filtres reçus dans le contexte, ensuite produire un affichage de la manière suivante:<br>
L'affichage est produit en bouclant dans le résultat du query, chaque todo contenu dans le résultat est passé à `TodoComponent` comme un props qui sera traité à son niveau.

##### `- TodoComponent`
TodoComponent a trois majeurs responsabilités: <br>
D'abors il crée et retourne l'affichage d'un seul todo grace à ses components, faire une mutation à chaque changement de son state (isDone: Done <-> Not yet) et  enfin contenir le lien vers les détails de la todo.


### `2 DetailsPage:` 
Contient le component `Details` représentant les détails d'une todo
#### `- Details`
Ce component est responsable de faire le query pour trouver le todo correspondant à l'id contenu dans le paramètre de l'url, ensuite de retourner l'element qui sera monté dans `DetailsPage`