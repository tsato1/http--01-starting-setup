import React, { Component } from 'react';
// import axios from 'axios'
// import axios from '../../axios'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import Posts from './Posts/Posts'
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'
// import FullPost from './FullPost/FullPost'
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */}
                            <li><NavLink 
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=><p>Home!</p>}/>
                <Route path="/" render={()=><p>Home2</p>}/> */}
                <Switch>
                    {this.state.auth? <Route path="/new-post" exact component={AsyncNewPost}/>: null}
                    <Route path="/posts" component={Posts}/>
                    {/* <Route path="/" component={Posts}/> */}
                    <Redirect from="/" to="/posts" />
                    {/* <Route render={() => <h1>Page not found!!!</h1>}/> //404 catch cases, it wont' work with '/' */}
                </Switch>
            </div>
        );
    }
}

export default Blog;