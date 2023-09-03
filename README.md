# 2-sided-flip-animatin-card

## Setup Project:

First, clone the project into your machine.

### `npm install`
Runs this to install all dependencies and packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. 
</br>
</br>

## Component Name: FlipCard

### Overview:
The **`FlipCard`** component is a reusable React component that implements a 2-sided flip animation card. 
It allows users to interact with a card by hover on it to reveal content on both the front and back sides.

### [Live Demo](https://2-sided-flip-animatin-card.vercel.app/)

### How It Works:

The **`FlipCard`** detect when the user hover on the card and change view between the front and back sides.
The component provides a **`props`** where you can customize the content to be displayed on each side.
It uses CSS transitions and transformations to create a smooth flip animation effect.

### Structure Example:

![FlipCard example](https://github.com/farisnizam/2-sided-flip-animatin-card/assets/45636705/d50233a2-db6a-4a0f-ba21-4e1e2ebdfa65)


### Props:

**`frontTitle`** (optional): The content to be displayed on the front side of the card. It must a single string. </br>

**`frontContent`** (optional): The content to be displayed on the front side of the card. It must me an array of string. </br>

**`frontImage`** (optional): The content to be displayed on the front side of the card. It can be url string or path to image asset in project. </br>

**`backTitle`** (optional): The content to be displayed on the front side of the card. It must a single string. </br>

**`backContent`** (optional): The content to be displayed on the back side of the card. It must a single string. </br>

**`backImage`** (optional): The content to be displayed on the back side of the card. It can be url string or path to image asset in project. </br>


### Usage Example:

![FlipCard use case example ](https://github.com/farisnizam/2-sided-flip-animatin-card/assets/45636705/022d1f8c-db1a-4f9c-881b-b78766c6868a)

### Front View

![front view](https://github.com/farisnizam/2-sided-flip-animatin-card/assets/45636705/1c3342e7-b049-45a4-9f66-2b84af57a23b)


### Back View

![back view](https://github.com/farisnizam/2-sided-flip-animatin-card/assets/45636705/5452c0d9-7733-4820-ae67-f0f1bc199022)

