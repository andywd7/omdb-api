import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Results from './views/Results'
import MovieDetail from './views/MovieDetail'
import SeriesDetail from './views/SeriesDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/results/:title',
    name: 'results',
    component: Results,
    props: true
  },
  {
    path: '/movie/:movieID',
    name: 'movie-detail',
    component: MovieDetail,
    props: true
  },
  {
    path: '/series/:seriesID',
    name: 'series-detail',
    component: SeriesDetail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
