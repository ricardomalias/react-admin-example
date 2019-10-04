import React from 'react';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import {Admin, Resource} from "react-admin";
import {UserList} from "./feature/user/Users";
import {PostList} from "./feature/post/Posts";
import {PostEdit} from "./feature/post/PostEdit";
import {PostCreate} from "./feature/post/PostCreate";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./feature/Dashboard/Dashboard";
import AuthProvider from "./feature/Auth/AuthProvider";

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => {
  return (
    <Admin
      authProvider={AuthProvider}
      dashboard={Dashboard}
      dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
  );
};

export default App;
