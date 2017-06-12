*** Lisa Louison / 6.12.17 ***

# VarChar Proposal

## What is VarChar?

Word guessing games are always a load of fun to play. Charades, Taboo, PictoWord and Heads Up are some popular ones that come to mind when family and friends are all in a room together. But, what if you aren't all in the same room? What if you aren't even in the same zip code?! That's where VarChar comes in.

VarChar is an interactive mobile video chat word-guessing game application. On the app, users are able to: 
- Log in and connect with a partner
- Choose a category of words
- One player gives hints over video of the word displayed 
- The other player has one minute to guess as many words as they can
- At the end of each round, the players can see how many words they got correct, they can switch roles, and play for as many rounds as they like

## Technologies To Be Used
- React Native - to silmutaneously create a performant iOS and Android mobile application
- Node & Express - to create a database
- SQL/ PG-Promise - to interact with the database
- Socket.io - to include real-time bidirectional video/audio
- Isomorphic fetch - maybe to include a third party words API
- Heroku web hosting? Not sure how to launch the app

## Wireframes

#### Home Page

![VC1](./assets/VC1.png)

#### Category List

![VC2](assets/VC2.png)

#### Guesser View

![VC3](assets/VC3.png)

#### Giver View

![VC4](assets/VC4.png)

#### End of Round View

![VC5](assets/VC5.png)

## Initial thoughts on database structure

Category.

| id | category     |
|----| ------------:|
| 1  | 'Vacation'   |
| 2  | 'Animals'    |
| 3  | 'Game'       |

Word.

| id | word        | category_ref_id  |
|--- |:-----------:|-----------------:|
| 1  | 'Beach'     | 1                |
| 2  | 'Tiger'     | 2                |
| 3  | 'Pac-Man'   | 3                |


## Advanced Features
- How would the app keep track of the score?
- User auth/login?


## Links and Resources

- https://facebook.github.io/react-native/
- https://socket.io/docs/
- https://socket.io/blog/socket-io-p2p/
- https://github.com/socketio
- https://www.twinword.com/api/
- https://github.com/react-community/create-react-native-app