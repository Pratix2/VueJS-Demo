<template>
    <div class="about">
        <div class="content">
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
                                <div class="col textCol col1">
                                    <div class="text">Term</div>
                                    <input v-model="query.term" class="inputs" type="text" placeholder="Term"/>
                                </div>
                                <div class="col textCol col1 col2">
                                    <div class="text">Location</div>
                                    <div class="inlineLocationText">
                                        <input v-model="query.location" class="inputs locationText" name="locationText" type="text" placeholder="Location" />
                                        <button type="button" id='warningPopover' class="btn btn-lg btn-danger" data-toggle="popover" title="Warning" data-content="You must provide a location" @click='onPopover'>!</button>
                                    </div>
                                </div>
                                <div class="col textCol col2">
                                    <div class="text">Limit</div>
                                    <input v-model="query.limit" class="inputs" type="text" placeholder="Limit"/>
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
            <transition name="fade">
                <div v-if="isLoading" class="loadingContainer">
                    <!--<div v-if="isLoading" class="isLoading">
                        Loading
                    </div>-->
                    <div class="loader"></div>
                </div>
            </transition>
            <transition name="fade">
                <table class="table" v-if="businesses.length > 0 && !isLoading">
                    <thead>
                        <tr>
                            <th class="tableTitle">Business Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="business in businesses">
                            <td>{{ business.name }}</td>
                        </tr>
                    </tbody>
                </table>
            </transition>
        </div>
        <footer class="footer">
            <ul class="footerList">
                <li>Created by Pratix Parikh</li>
                <li>Email: Pratix98@gmail.com</li>
            </ul>
        </footer>
    </div>
</template>

<script lang="js" src="./about.js"></script>
