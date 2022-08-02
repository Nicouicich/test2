<h1 align="center">Free lunch day!</h1>


<h3> This project was carried out for an exam of the company Alegra. </h3>

The objective of the project is to manage a restaurant that receives food orders at the click of a button. The food dishes are randomly generated from recipes defined by the application developer.

The kitchen has 6 recipes
<ol>
    <li>Salad</li>
    <li>Rice with chicken</li>
    <li>Potatoes with meat</li>
    <li>Potatoes with chicken</li>
    <li>Rice with meat</li>
    <li>Full steak</li>
</ol>



<p> All of them have their ingredients and the quantity needed to prepare them. </p>

The available ingredients are:

 <ol>
    <li>Tomato</li>
    <li>Lemon</li>
    <li>Potato</li>
    <li>Rice</li>
    <li>Ketchup</li>
    <li>Lettuce</li>
    <li>Onion</li>
    <li>Cheese</li>
    <li>Meat</li>
    <li>Chicken</li>
</ol>

<p>In case of not having an ingredient to create a recipe, the application is in charge of requesting the food from a market located in an Alegra site, using the Axios library.
In the case that when trying to buy a food, it is not found in the market, the application has a delay of two seconds to reorder the food.

The back-end of the project was done with Node JS, while the front-end was done with React JS. 
All the information of the recipes, ingredients, purchases, and dishes, was handled with the non-relational database Mongo DB. </p
