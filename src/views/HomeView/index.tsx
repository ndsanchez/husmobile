import React from 'react';
import { View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { Link, Route, Switch, useRouteMatch } from 'react-router-native';

const list = [
    {
      title: 'Interconsultas pendientes',
      icon: 'solution1',
      type: 'antdesign',
    },
    {
      title: 'Egresos',
      icon: 'exit-run',
      type: 'material-community',
    },
];

export default () => {
    let { path, url } = useRouteMatch();
    return (
        <View>
            {
              list.map((item, i) => (
                <Link to={`/assistance`}>
                  <ListItem key={i} bottomDivider>
                    <Icon type={item.type} name={item.icon} />
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </Link>
              ))
            }
            <Switch>
                <Route exact path={`${path}/:topic`}/>
            </Switch>
        </View>
    );
};
