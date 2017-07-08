<template>
  <div class="about">
    <div class="navBar">
        <ul class="navBarList">
            <li class="listItem">
                <a href="/">Home</a>
            </li>
            <li class="listItem">
                <a href="/#/about">Yelp API</a>
            </li>  
        </ul>
    </div>
    <h1>Yelp API</h1>
    <p>We can find businesses all over the world!</p>
    <div class="formBox">
        <div class="containerYelp">
            <form class="form" @submit.prevent="onSearch">
                <div class="container">
                    <div class="row">
                        <div class="col textCol">
                            <div class="text">Term</div>
                            <input v-model="query.term" class="inputs" type="text" placeholder="Term" />
                        </div>
                        <div class="col textCol col2">
                            <div class="text">Location</div>
                            <input v-model="query.location" class="inputs" type="text" placeholder="Location" />
                        </div>
                        <div class="col textCol col2">
                            <div class="text">Limit</div>
                            <input v-model="query.limit" class="inputs" type="text" placeholder="Limit" />
                        </div>
                        <div class="col textCol col2 lastCol">
                                <div class="priceCol">
                                    <div class="text">Price</div>
                                    <div class="select">
                                        <select v-model="query.price" class="custom-select">
                                            <option selected>Select...</option>
                                            <option value="1">$</option>
                                            <option value="2">$$</option>
                                            <option value="3">$$$</option>
                                            <option value="4">$$$$</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="buttonCol">
                                    <div class="buttonBox">
                                        <button class="button" type="submit">Search</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th>Business Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="business in businesses">
                <td>{{ business.name }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script lang="js" src="./about.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar {
    top: 0;
    position: fixed;
    width: 100%;
    background-color: #fff;
}

.navBarList {
    list-style-type: none;
    text-align: left;
    padding-top: 10px;
}

.listItem {
    display: inline;
    margin-right: 20px;
}

a:link {
    color: rgb(44, 62, 80);
    text-decoration: none;
}

a:visited {
    color: rgb(44, 62, 80);
    text-decoration: none;
}

a:hover {
    text-decoration: none;
    border-bottom: solid 1px rgb(44, 62, 80);
}

.formBox {
    width: 100%;
    padding-top: 20px;
}

.container {
    border: solid 3px rgb(236, 238, 239);
}

.col {
    text-align: left;
}

.textcol {
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.lastCol {
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.priceCol {
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap;
    justify-content: space-between; 
}

.buttonCol {
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap;
    justify-content: center;
}

.col2 {
    border-left: solid 2px rgb(236, 238, 239);
}

h1 {
    font-size: 38px;
    margin-bottom: 0px;
    margin-top: 0px;
}

p {
    margin-top: 0px;    
}

.table {
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    width: 30%;
}

.text {
    text-align: left;
    font-size: 18px;
    padding-top: 5px;
}

.inputs {
    font-size: 20px;
    border: solid 0px rgba(0,0,0,0);
    color: rgb(44, 62, 80);
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin-top: 10px;
    padding-bottom: 5px;
}

.select{
    text-align: left;
    padding-bottom: 5px;
}

.inputs:focus, .button:focus {
    outline: none;
}

.button {
    font-size: 15px; 
    padding: 10px;
    background-color: rgb(44, 62, 80);
    border: solid 1px rgb(44, 62, 80);
    color: white;
    border-radius: .25rem;
    transition: all .1s ease-in-out;
}

.button:hover {
    background-color: rgb(70, 90, 110);
    border: solid 1px rgb(70, 90, 110);
}

.table thead th {
    vertical-align: bottom;
    border-bottom: 0px solid rgba(0,0,0,0);
}

th {
    font-size: 18px;
    text-align: center;
    border-top: solid 0px rgba(0,0,0,0);
    padding-top: 36px;
}

td { 
    border-top: solid 0.5px rgb(236, 238, 239);
    padding-top: 10px;
}
</style>
