import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import {PostFilter} from "./PostFilter";

export const PostList = props => (
  <List filters={<PostFilter/>} {...props}>
    <Datagrid currentSort={{"field": "name", "order": "asc"}}>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      {/*<TextField source="body" />*/}
      <EditButton/>
    </Datagrid>
  </List>
);
